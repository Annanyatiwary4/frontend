import axios from "axios"
import { create } from "zustand";
import { templateList } from "@/lib/TemplateList";

const API_URL = "http://localhost:5000/api/project";

axios.defaults.withCredentials = true;

const templatesMap = Object.fromEntries(
  templateList.map((template) => [template.id, template])
);

export const useProjectStore = create((set) => ({
    projects:[],
    currentProject:null,
    loading:false,
    error:null,

 

    //create project and upload resume in one flow

     createProject : async (title, templateId ,resumefile) => {
        try{
         set({loading:true,error:null});

         //create the project

        

         const createRes = await axios.post(`${API_URL}/create-project`,{
            title,
            templateId,
            thumbnail: templatesMap[templateId]?.src || "",
         });
           
         const project = createRes.data.project;

         //upload resume to that project

         const formData = new FormData();
         formData.append("file",resumefile);
         formData.append("projectId",project._id);

         await axios.post(`${API_URL}/upload`,formData,{
            headers:{
                "Content-Type":"multipart/Form-Data",
            },
         });

         //update state
         set((state)=>({
            projects :[project, ...state.projects],
            currentProject: project,
            loading :false,
         }
        ));
        console.log("project id is",project._id);
        return project._id;
        

        }
        catch(err){
         console.error(" error in createproject",err);
         set({err:"failed to create project",loading:false});
         throw err;
        }
    },


    //Get all Projects for current user

    getUserProjects:async()=>{
        try {
            const res = await axios.get(`${API_URL}/my-project`);
            set({projects:res.data.projects});
        } catch (error) {
            console.error("failed to fetch projects",error);
        }
    },

  // 📦 Load single project
  fetchProjectById: async (id) => {
    try {
      const res = await axios.get(`${API_URL}/my-project/${id}`);
      set({ currentProject: res.data.project });
    } catch (err) {
      console.error("Failed to fetch project by ID:", err);
    }
  },

}));
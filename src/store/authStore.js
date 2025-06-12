import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Update with your backend URL

axios.defaults.withCredentials = true; // Enable cookies for cross-origin requests
export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    isCheckingAuth: true,
    message: null,


    register: async (email, password, name) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/register`, { email, password, name });
			set({ user: response.data.user, isAuthenticated: true, isLoading: false });
		} catch (error) {
			set({ error: null, isCheckingAuth: false, isAuthenticated: false });
		}
	},

   login: async (email, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/login`, { email, password });
			set({
				isAuthenticated: true,
				user: response.data.user,
				error: null,
				isLoading: false,
			});
		} catch (error) {
			set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
			throw error;
		}
	},

 

    verifyEmail: async (code) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/verify-email`, { code });
            set({ user: response.data.user, isAuthenticated: true, isLoading: false });
        } catch (error) {
            set({ error: error.response.data.message || "Error verifying email", isLoading: false });
            throw error;
        }
    },


    checkAuth : async () =>{
	  
      set({ isCheckingAuth: true, error: null });
      try {
        const response = await axios.get(`${API_URL}/check-auth`);
        set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
      } catch (error) {
        set({ error: error.response.data.message || "Error checking authentication", isCheckingAuth: false });
      }  
    },

    forgotPassword: async (email) => {
      
		set({ isLoading: true, error: null });
		try {
      
			const response = await axios.post(`${API_URL}/forgot-password`, { email });
      
			set({ message: response.data.message, isLoading: false });
      return response.data.message; // Return message for further use if needed
		} catch (error) {
      
			set({
				isLoading: false,
				error: error.response.data.message || "Error sending reset password email",
			});
			throw error;
		}
	},


  resetPassword: async (token, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/reset-password/${token}`, { newPassword: password });
			set({ message: response.data.message, isLoading: false });
		} catch (error) {
			set({
				isLoading: false,
				error: error.response.data.message || "Error resetting password",
			});
			throw error;
		}
	},

  }));


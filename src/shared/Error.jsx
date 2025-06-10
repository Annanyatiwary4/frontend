import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6 text-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center gap-4">
          <AlertCircle className="text-red-500 w-12 h-12" />
          <h1 className="text-2xl font-semibold text-gray-800">Something Went Wrong</h1>
          <p className="text-gray-600">
            An unexpected error occurred. Please try again later or contact support if the issue persists.
          </p>
          <Button
            className="mt-4"
            onClick={() => navigate("/")}
          >
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
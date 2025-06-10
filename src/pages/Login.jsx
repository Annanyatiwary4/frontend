import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {Loader} from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const navigate = useNavigate();
  const { login, isLoading, error } = useAuthStore();

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    await login(email, password);
    navigate("/dashboard"); // ✅ redirect after successful login
  } catch (err) {
    console.error("Login failed", err);
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <Card className="w-full max-w-md p-6 shadow-md border-gray-700 shadow-blue-700 bg-black border-2">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Sign In</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2 text-teal-50">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2 text-teal-50">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

               <div className="text-right">
                    <Link
                    to="/forgot-password"
                    className="text-sm text-blue-500 hover:underline"
                    >
                    Forgot Password?
                    </Link>
                </div>
            </div>
            {error && (
              <div className="text-red-500 text-sm mt-2">
                {error}
              </div>
            )}
            <Button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? <Loader className="w-6 h-6 animate-spin text-center mx-auto"/>: "Sign In"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">
              Create one
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;

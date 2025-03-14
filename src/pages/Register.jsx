import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const RegisterCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle registration logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
  <Card className="w-full max-w-md p-6 shadow-m  border-gray-700 shadow-blue-700 bg-black border-2">
    <CardHeader className="text-center">
      <CardTitle className="text-2xl text-white">Create an Account</CardTitle>
    </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2 text-teal-50">
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2 text-teal-50">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2 text-teal-50">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center space-x-2 text-amber-50">
              <Checkbox
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <Label htmlFor="agree" className="text-sm">
                I agree to the{" "}
                <Link to="/terms" className="text-blue-700 hover:underline dark:text-blue-500">
                  Terms & Conditions
                </Link>
              </Label>
            </div>

            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
              Register
            </Button>
          </form>
        </CardContent>

        <CardFooter className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterCard;

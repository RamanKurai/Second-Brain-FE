import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const signup = async () => {
        try {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;

            if (!username || !password) {
                alert("Please enter both username and password");
                return;
            }

            await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username,
                password
            });
            navigate("/signin")
            alert("You have signed up");
        } catch (error) {
            console.error("Signup error:", error);
            alert("Signup failed. Please try again.");
        }
    };

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input reference={usernameRef} placeholder="Username" />
                <Input reference={passwordRef} placeholder="Password"  />
                <div className="flex justify-center items-center pt-4 py-2">
                    <Button onClick={signup} variant="secondary" size="sm" text="Signup" fullWidth={true} />
                </div>
            </div>
        </div>
    );
};

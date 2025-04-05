import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Auth from "../assets/Auth.jpg";
import brain from "../assets/brain.png";

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
        password,
      });

      alert("You have signed up");
      navigate("/signin");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center px-4 py-8">
      <div className="flex flex-col items-center mb-6 mt-[-10px]">
        <div className="flex items-center gap-2">
          <img src={brain} alt="Logo" width="40px" height="40px" />
          <h2 className="text-2xl font-bold gradient-title pt-2 ">Brainly</h2>
        </div>
        <p className="text-sm text-gray-900 font-semibold mt-1">Save, Organize and Share</p>
      </div>
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="md:w-1/2 w-full">
          <img
            src={Auth}
            alt="Signup"
            className="object-cover w-full h-64 md:h-full"
          />
        </div>

        <div className="flex flex-col justify-center items-center px-8 py-10 md:w-1/2 w-full bg-purple-300">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Create Your Account
          </h1>

          <div className="w-full max-w-md space-y-4">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <div className="w-full">
              <Button
                variant="secondary"
                size="sm"
                text="Signup"
                onClick={signup}
                fullWidth={true}
              />
              <p className="pt-5 text-center text-black font-normal">
                Already Have An Account?
                <a className="text-purple-600 ml-1" href="/signin">
                  Signin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

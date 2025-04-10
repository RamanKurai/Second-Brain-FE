import React from "react";
import { useState } from "react";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import brain from "../../assets/brain.png";
import { Button } from "./Button";
import { MenuIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SideBarProps {
  selectedType: "all" | "youtube" | "twitter";
  onSelect: (value: "all" | "youtube" | "twitter") => void;
}

export const SideBar = ({ selectedType, onSelect }: SideBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");
    window.location.href = "/signin";
  };

  const options = [
    { key: "all", label: "All", icon: null },
    { key: "youtube", label: "YouTube", icon: <YoutubeIcon /> },
    { key: "twitter", label: "Twitter", icon: <TwitterIcon /> },
  ] as const;

  return (
    <>
      {/* visible only on mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/*  always visible on desktop, toggle on mobile */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out fixed top-0 left-0 h-screen w-60 bg-gray-100 border-r z-40`}
      >
        {/* Logo */}
        <div
        onClick={() => {
          navigate("/")
        }}
        className="flex text-xl pt-6 pl-6 items-center gradient-title font-semibold cursor-pointer">
          <div className="pr-2 text-purple-600">
            <img src={brain} width="40px" height="40px" />
          </div>
          Brainly
        </div>

        {/* Sidebar Items */}
        <div className="flex flex-col flex-1 pt-6 pl-6 pr-4 gap-2">
          {options.map((option) => (
            <div
              key={option.key}
              onClick={() => onSelect(option.key)}
              className={`cursor-pointer flex items-center gap-2 p-2 rounded ${
                selectedType === option.key
                  ? "bg-purple-500 text-white"
                  : "hover:bg-purple-300 text-purple-600"
              }`}
            >
              {option.icon}
              <span>{option.label}</span>
            </div>
          ))}

          {/* Logout Button */}
          <div className="mt-auto mb-2">
            <Button
              onClick={logout}
              variant="secondary"
              size="md"
              text="LogOut"
            />
          </div>
        </div>
      </div>
    </>
  );
};

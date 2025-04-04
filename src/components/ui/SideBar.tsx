import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import { SideBarItem } from "./SideBarItem"
import brain from "../../assets/brain.png"
import { Button } from "./Button"
export const SideBar = () => {
    const logout = () => {
        localStorage.removeItem("token"); 
        sessionStorage.removeItem("user");
 
         window.location.href = "/signin";
    }
    return <div className="flex flex-col pl-6 h-screen w-72 border-r bg-white fixed left-0 top-0">
    {/* Logo */}
    <div className="flex text-xl pt-6 items-center">
      <div className="pr-2 text-purple-600">
        <img src={brain} width="40px" height="40px" />
      </div>
      Brainly
    </div>
  
    {/* Sidebar content */}
    <div className="flex flex-col flex-1 pt-6 pl-4 pr-4">
      <SideBarItem text="Twitter" icon={<TwitterIcon />} />
      <SideBarItem text="YouTube" icon={<YoutubeIcon />} />
  
      {/* Logout button at bottom */}
      <div className="mt-auto mb-2">
        <Button
        onClick={logout}
        variant="secondary" size="md" text={"LogOut"} />
      </div>
    </div>
  </div>
  
}
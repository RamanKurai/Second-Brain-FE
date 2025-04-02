import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import { SideBarItem } from "./SideBarItem"
import brain from "../../assets/brain.png"
export const SideBar = () => {
    return <div className="pl-6 h-screen w-72 border-r bg-white fixed left-0 top-0">
        <div className="flex text-xl pt-6 items-center">
           <div className="pr-2 text-purple-600" > 
            <img src={brain} width={"40px"} height={"40px"}/>
            </div>
            Brainly
        </div>
       <div className="pt-6 pl-4">
        <SideBarItem text="Twitter" icon={<TwitterIcon/>}/>
        <SideBarItem text="YouTube" icon={<YoutubeIcon/>}/>
       </div>
    </div>
}
import { ReactElement } from "react";

export function SideBarItem({text , icon} : {
    text : string;
    icon : ReactElement;
}) {
    return <div className="flex text-gray-800 py-2 cursor-pointer hover:bg-gray-200  rounded max-w-48">
        <div className="pr-2">
        {icon}
        </div>
        <div>
        {text}
        </div>
    </div>
}
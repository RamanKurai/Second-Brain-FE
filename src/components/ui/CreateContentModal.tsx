import { useEffect, useRef } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";

export const CreateContentModal = ({ open, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [onClose]);


    return <div>
    {open && <div> 
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">    
        </div>
        <div
        className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            <div 
            ref={modalRef}
            className="flex flex-col justify-center items-center">
                <span className="bg-white opacity-100 p-4 rounded fixed">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon />
                        </div>
                    </div>
                    <div>
                        <Input placeholder={"Title"} />
                        <Input placeholder={"Link"} />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" text="Submit" />
                    </div>
                </span>
            </div>     
        </div>
    </div>}
</div>
}

function Input({ onChange , placeholder }) {
  return (
    <div className="mb-2">
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 border rounded w-full"
      />
    </div>
  );
}

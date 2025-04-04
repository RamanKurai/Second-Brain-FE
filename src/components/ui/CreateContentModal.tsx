import { useEffect, useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

export const CreateContentModal = ({
  open,
  onClose,
}: CreateContentModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  const contentOptions = [
    { label: "Youtube", value: ContentType.Youtube },
    { label: "Twitter", value: ContentType.Twitter },
  ];

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
        link,
        title,
        type
    }, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
    onClose();
}
  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center"></div>
          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            <div
              ref={modalRef}
              className="flex flex-col justify-center items-center"
            >
              <span className="bg-white opacity-100 p-6 rounded-xl shadow-lg min-w-[300px] max-w-[90vw]">
                <div className="flex justify-end">
                  <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon />
                  </div>
                </div>
                <div>
                  <Input reference={titleRef} placeholder={"Title"} />
                  <Input reference={linkRef} placeholder={"Link"} />
                </div>
                <div>
                  <h1 className="text-lg font-semibold mb-2">Type</h1>
                  <div className="flex gap-2 justify-center pb-2">
                    {contentOptions.map(({ label, value }) => (
                      <Button
                        key={value}
                        text={label}
                        size="md"
                        variant={type === value ? "secondary" : "primary"}
                        onClick={() => {
                            setType(value);
                        }}                          
                        />
                    ))}
                  </div>
                </div>{" "}
                <div className="flex justify-center">
                  <Button
                    onClick={addContent}
                    variant="secondary"
                    text="Submit"
                    size="md"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

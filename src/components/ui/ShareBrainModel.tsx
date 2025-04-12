import { JSX, useEffect, useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Button } from "./Button";

interface ShareBrainModelProps {
  open: boolean;
  onClose: () => void;
}

export const ShareBrainModel = ({ open, onClose }: ShareBrainModelProps): JSX.Element | null => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const [hashLink, setHashLink] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const generateHash = async () => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/brain/share`,
        { share: true },
        {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        }
      );

      const { hash } = res.data;
      const fullLink = `${window.location.origin}/brain/share/${hash}`;
      setHashLink(fullLink);
    } catch (error) {
      console.error("Error generating hash link:", error);
    }
  };

  const copyToClipboard = async () => {
    try {
      if (inputRef.current) {
        await navigator.clipboard.writeText(inputRef.current.value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); 
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  

  useEffect(() => {
    if (open) {
      generateHash();
    } else {
      setHashLink("");
    }
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 z-[9998]" />

      {/* Modal container */}
      <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-[9999]">
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

            <div className="flex flex-col space-y-4 py-2">
              <h1 className="text-lg font-semibold mb-2">Share Your Brain</h1>
              <Input
                ref={inputRef} 
                value={hashLink}
                readOnly
                placeholder="Your Link"
              />
            </div>

            <div className="flex justify-center">
            <Button
             onClick={copyToClipboard}
             variant={copied ? "primary" : "secondary"} // change style
             text={copied ? "Copied!" : "Copy Link"}    // change label
              size="md"
              />
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

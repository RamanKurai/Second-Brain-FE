declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement | null) => void;
      };
    };
  }
}

import { useEffect, useRef } from "react";
import axios from "axios";
import { TrashIcon } from "../../icons/Trash";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { BACKEND_URL } from "../../config";

interface CardProps {
  title?: string;
  link?: string;
  type?: "twitter" | "youtube";
  contentId?: string;
  showDelete?: boolean;
}

export const Card = ({ title, link, type, contentId , showDelete = true}: CardProps) => {
  const twitterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type === "twitter" && window?.twttr?.widgets) {
      window.twttr.widgets.load(twitterRef.current);
    }
  }, [link , type]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure to delete this post?")) {
      try {
        await axios.delete(`${BACKEND_URL}/api/v1/content`, {
          data: { contentId },
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        });
        console.log("Deleted!");
        window.location.reload();
      } catch (error) {
        console.error("Delete Error", error);
      }
    }
  };

  const RenderIcon = () => {
    switch (type) {
      case "youtube":
        return <YoutubeIcon />;
      case "twitter":
        return <TwitterIcon />;
      default:
        return null;
    }
  };

  function getYouTubeID(url: string | undefined) {
    const regExp =
      /(?:youtube\.com\/(?:.*v=|.*\/|.*videos\/|.*embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url?.match(regExp);
    return match ? match[1] : null;
  }

  return (
    <div className="w-full sm:w-[300px] md:w-[320px]">
      <div className="border p-4 bg-white rounded-md shadow-md border-gray-200 flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div className="flex items-center text-md break-words max-w-[200px]">
            <div className="text-gray-500 pr-2">{RenderIcon()}</div>
            {title}
          </div>
         {showDelete && (
          <div className="flex items-center gap-2 text-black">
          <div onClick={handleDelete} className="cursor-pointer">
            <TrashIcon />
          </div>
        </div>
         )
         }
        </div>
        {/* Content Section */}
        <div className="pt-4 ">
          {type === "youtube" && (
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded"
                src={`https://www.youtube.com/embed/${getYouTubeID(link)}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {type === "twitter" && (
            <div
              ref={twitterRef}
              className="w-full overflow-hidden"
              style={{ maxWidth: "100%" }}
            >
              <blockquote
                className="twitter-tweet"
                data-dnt="true"
                data-width="100%"
              >
                <a href={link?.replace("x.com", "twitter.com")}></a>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
  title?: string;
  link?: string;
  type?: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardProps) => {
  function getYouTubeID(url) {
    const regExp = /(?:youtube\.com\/(?:.*v=|.*\/|.*videos\/|.*embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}
  return (
    <div>
      <div className=" border  p-4 bg-white rounded-md shadow-md border-gray-200 max-w-72 min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex items-center text-md ">
            <div className="text-gray-500 pr-2">
              <ShareIcon />
            </div>
            {title}
          </div>
          <div className="flex">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank">
                <ShareIcon />
              </a>
            </div>
            <div className=" text-gray-500">
              <ShareIcon />
            </div>
          </div>
        </div>
        <div className="pt-2">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={`https://www.youtube.com/embed/${getYouTubeID(link)}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};

import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
   title : string;
   link : string;
   type : "twitter" | "youtube"
}


export const Card = ({title , link , type} : CardProps ) => {
  return (
    <div>
      <div className=" border  p-4 bg-white rounded-md shadow-md border-gray-200 max-w-72 ">
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
         {type === "youtube" && <iframe
         className="w-full"
         src={link.replace("watch" , "embed")}
         title="YouTube video player"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin"
         allowFullScreen
        ></iframe>}
        {type === "twitter" &&  <blockquote className="twitter-tweet">
            <a href={link}></a> 
         </blockquote>}
        </div>
      </div>
    </div>
  );
};

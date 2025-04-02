import { ReactElement } from "react"

type Variants = "primary" | "secondary"

interface ButtonProps {
    variant: Variants,
    size: "sm" | "md" | "lg",
    text : string,
    startIcon?: ReactElement,
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantStyles = {
  "primary" : "bg-purple-300 text-purple-600",
  "secondary" : " bg-purple-600 text-white"
}

const defaultStyles = "rounded-md flex items-center justify-center min-w-[161px]";

const sizeStyles = {
  "lg": "px-8 py-4 text-xl rounded-xl",
  "md": "px-6 py-3 text-md rounded-lg",
  "sm": "px-2 py-2 text-md rounded-sm",
}

export const Button = ({variant , size , text , startIcon, loading , onClick , fullWidth} :ButtonProps) => {
  return <button onClick={onClick}
  className={`${variantStyles[variant]} ${defaultStyles}  
  ${sizeStyles[size]} ${fullWidth ? "w-full" : ""}  ${loading ? "opacity-45" : ""}`}
  disabled={loading}>
     {startIcon ? <span className="pr-2">{startIcon}</span> : null} 
     <div>
     {text}
     </div> 
  </button>
}

import { ReactElement } from "react"

type Variants = "primary" | "secondary"

interface ButtonProps {
    variant: Variants,
    size: "sm" | "md" | "lg",
    text : string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
}

const variantStyles = {
  "primary" : "bg-purple-300 text-purple-600",
  "secondary" : " bg-purple-600 text-white"
}

const defaultStyles = "rounded-md flex items-center"

const sizeStyles = {
  "lg": "px-8 py-4 text-xl rounded-xl",
  "md": "px-4 py-2 text-md rounded-md",
  "sm": "px-2 py-2 text-sm rounded-sm",
}

export const Button = (props :ButtonProps) => {
  return <button className={`${variantStyles[props.variant]} ${defaultStyles}  
  ${sizeStyles[props.size]}`}  >
     {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text}
  </button>
}

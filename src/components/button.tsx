import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    type: string;
    bg: "transparent" | "black" | "primaryColor" | "secondaryColor";
    textColor: "white" | "primaryColor";
    fontFamily?: string;
    width?: string;
    height?: string;
    className?: string;
    disabled: boolean
}

function Button({ bg, textColor, children, fontFamily, width = 'auto', height = 'auto', className, disabled }: Props) {
  let bgClassName = ""
  switch (bg) {
    case "transparent":
      bgClassName = "bg-transparent"
    break
    case "black":
      bgClassName = "bg-black"
    break
    case "primaryColor":
      bgClassName = "bg-primaryColor"
    break
    case "secondaryColor":
      bgClassName = "bg-secondaryColor"
    break
  }
  let textColorClassName = ""
  switch (textColor) {
    case "white":
        textColorClassName = "text-white"
    break
    case "primaryColor":
        textColorClassName = "text-primaryColor"
    break
  }

  // Appliquez la police personnalisée
  const fontClassName = fontFamily ? `font-[${fontFamily}]` : '';

  return (
    <button className={` ${bgClassName} ${textColorClassName} ${fontClassName} ${className} `} style={{ width, height }} disabled={false}>
      {children}
    </button>
  );
}

export default Button;

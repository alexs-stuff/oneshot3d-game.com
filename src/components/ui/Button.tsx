import React from "react"
import { twMerge } from "tailwind-merge"

export enum ButtonStyle {
    Primary,
    Seconday
}
interface props {
    className?: string
    style: ButtonStyle,
    children?: React.ReactNode
}
export default function Button({className, style, children}: props) {
    let colorSelectors = ""

    switch (style) {
        case ButtonStyle.Primary:
            colorSelectors = "bg-secondary-bg"
            break;
        case ButtonStyle.Seconday:
            colorSelectors = "bg-primary-bg hover:bg-primary-bg-outline outline outline-primary-bg-outline"
            break;  
    }

    return (
        <button className={twMerge(`${colorSelectors} px-6 py-3 min-h-8 rounded-(--rounded-secondary) transition-(--transition-primary)`, className)}>
            {children}
        </button>
    )
}
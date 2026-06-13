import { useState } from "react";
import Input from "../Input";
import { Icon } from "@iconify/react";

interface props {
    placeholder?: string;
    className?: string;
}
export default function PasswordInput({placeholder, className}: props) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <Input type={passwordVisible ? "text" : "password"} decoration={
            <button type="button" className="group w-auto h-auto flex flex-col justify-center items-center cursor-pointer mr-3 rounded-(--rounded-secondary)" onClick={() => {
    setPasswordVisible(!passwordVisible)
}}>
                <Icon className="text-xl group-hover:scale-125 transition-(--transition-primary)" icon={passwordVisible ? "fa7-solid:eye-slash" : "fa7-solid:eye"}/>
            </button>
        } placeholder={placeholder} className={className}></Input>
    )
}
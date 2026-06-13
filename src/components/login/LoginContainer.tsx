import { Turnstile } from "next-turnstile";
import Button, { ButtonStyle } from "@/components/ui/Button";
import { useState } from "react";
import { useNotify } from "../providers/NotificationProvider";
import Input from "../ui/Input";
import PasswordInput from "../ui/input/PasswordInput";

export default function LoginContainer() {
  const [captchaKey, setCaptchaKey] = useState("");
  const notify = useNotify();
  return (
    <div className="bg-primary-bg xs:border-primary-bg-outline justify-center xs:justify-top flex w-full flex-1 xs:flex-0 xs:h-auto xs:w-[396px] flex-col items-center xs:rounded-(--rounded-primary) xs:border px-8 py-4 gap-4">
      <h1 className="text-heading w-full text-center">Login</h1>    
      <Input type="text" className="w-full h-[48px]" placeholder="Username"/>
      <PasswordInput className="w-full h-[48px]" placeholder="Password" />
      <Turnstile
        size="flexible"
        siteKey={process.env.NEXT_PUBLIC_OS3D_CAPTCHA_PUBLIC!}
        retry="auto"
        sandbox={process.env.NODE_ENV === "development"}
        refreshExpired="auto"
        onVerify={(key: string) => {
          setCaptchaKey(key);
        }}
      />

      <h1>{captchaKey != null}</h1>

      <Button
        onClick={() => {
          notify.notify({
            message: "ok",
            type: "info",
          });
        }}
        style={ButtonStyle.Secondary}
        className="flex h-[38px] flex-col items-center justify-center">
        <span>Login</span>
      </Button>
    </div>
  );
}

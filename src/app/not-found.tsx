"use client";
import BaseLayout from "@/components/layouts/BaseLayout"
import Button, { ButtonStyle } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <BaseLayout className="flex flex-col items-center justify-center p-0 max-w-full shrink-0 grow-1 h-full gap-6">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-6xl">404</h1>
        <p className="text-2xl">Page Not Found</p>
      </div>

      <div className="flex flex-row items-center gap-6 ">
        <Button style={ButtonStyle.Secondary} onClick={() => window.history.back()}>
          Go back
        </Button>
        <Button style={ButtonStyle.Secondary} onClick={() => {window.location.href = "/"}}>
          Go home
        </Button>
      </div>
    </BaseLayout>
  );
}

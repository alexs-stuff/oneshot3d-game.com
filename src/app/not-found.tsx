"use client";
import BaseLayout from "@/components/layouts/BaseLayout";
import Button, { ButtonStyle } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <BaseLayout className="flex h-full max-w-full shrink-0 grow-1 flex-col items-center justify-center gap-6 p-0">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-6xl">404</h1>
        <p className="text-2xl">Page Not Found</p>
      </div>

      <div className="flex flex-row items-center gap-6">
        <Button
          style={ButtonStyle.Secondary}
          onClick={() => window.history.back()}>
          Go back
        </Button>
        <Button
          style={ButtonStyle.Secondary}
          onClick={() => {
            window.location.href = "/";
          }}>
          Go home
        </Button>
      </div>
    </BaseLayout>
  );
}

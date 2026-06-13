"use client";
import BaseLayout from "@/components/layouts/BaseLayout";
import LoginContainer from "@/components/login/LoginContainer";

export default function Login() {
  return (
    <BaseLayout className="flex h-full max-w-full shrink-0 grow-1 flex-col items-center justify-center gap-6 p-0">
      <LoginContainer />
    </BaseLayout>
  );
}

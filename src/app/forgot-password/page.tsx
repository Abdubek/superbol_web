import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import {ForgotPasswordForm} from "@/features/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <main className="container flex flex-col justify-between items-center min-h-screen py-8">
      <PrimaryLogo width={48} height={48} />

      <ForgotPasswordForm />

      <div />
    </main>
  )
}
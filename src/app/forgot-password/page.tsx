import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import {ForgotPasswordForm} from "@/features/ForgotPasswordForm";
import {Routes} from "@/routes";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="container flex flex-col justify-between items-center min-h-screen py-8">
      <Link href={Routes.HOME}>
        <PrimaryLogo width={48} height={48} />
      </Link>

      <ForgotPasswordForm />

      <div />
    </main>
  )
}
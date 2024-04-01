import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import {ResetPasswordForm} from "@/features/ResetPasswordForm";

type Props = {
  searchParams?: { email?: string, token?: string }
}

export default function ResetPasswordPage({ searchParams }: Props) {

  return (
    <main className="container flex flex-col justify-between items-center min-h-screen py-8">
      <PrimaryLogo width={48} height={48} />

      <ResetPasswordForm email={searchParams?.email} token={searchParams?.token} />

      <div />
    </main>
  )
}
import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import {SetPasswordForm} from "@/features/SetPasswordForm";

type Props = {
  searchParams?: { email?: string, token?: string }
}

export default function SetPasswordPage({ searchParams }: Props) {

  return (
    <main className="container flex flex-col justify-between items-center min-h-screen py-8">
      <PrimaryLogo width={48} height={48} />

      <SetPasswordForm email={searchParams?.email} token={searchParams?.token} />

      <div />
    </main>
  )
}
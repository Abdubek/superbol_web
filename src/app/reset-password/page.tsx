import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import {ResetPasswordForm} from "@/features/ResetPasswordForm";
import {Routes} from "@/routes";
import Link from "next/link";

type Props = {
  searchParams?: { email?: string, token?: string }
}

export default function ResetPasswordPage({ searchParams }: Props) {

  return (
    <main className="container flex flex-col justify-between items-center min-h-screen py-8">
      <Link href={Routes.HOME}>
        <PrimaryLogo width={48} height={48} />
      </Link>

      <ResetPasswordForm email={searchParams?.email} token={searchParams?.token} />

      <div />
    </main>
  )
}
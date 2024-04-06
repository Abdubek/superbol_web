import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import CheckIcon from "@/shared/icons/check.svg";
import {Typography} from "@/shared/ui/Typography";
import {Button} from "@/shared/ui/Button";
import Link from "next/link";
import {Routes} from "@/routes";

export default function SetPasswordSuccessPage() {
  return (
    <main className="container flex flex-col justify-between items-center min-h-screen py-8">
      <PrimaryLogo width={48} height={48} />

      <div className="flex flex-col items-center">
        <CheckIcon />

        <Typography size="h3" variant="primary" className="mt-2 text-center">
          Аккаунт успешно<br/> зарегистрирован!
        </Typography>

        <Typography size="body2" variant="grey" className="mt-2 text-center">
          Войдите профиль, чтобы продолжить регистрацию<br/> на кастинг
        </Typography>

        <Button asChild variant="primary" className="w-full mt-5">
          <Link href={Routes.SIGN_IN}>Войти</Link>
        </Button>
      </div>

      <div />
    </main>
  )
}
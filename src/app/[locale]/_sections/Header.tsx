import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import ChevronDownIcon from "@/shared/icons/chevron-down.svg";
import Link from "next/link";
import {Typography} from "@/shared/ui/Typography";
import {Button} from "@/shared/ui/Button";
import {Routes} from "@/routes";

export const Header = () => {
  return (
    <header className='container py-2.5 flex items-center justify-between'>
      <PrimaryLogo width={48} height={48} />
      <Link href={"/#"}>
        <Typography size="caption2" className="hover:text-text-primary sm:block hidden">Главная</Typography>
      </Link>
      <Link href={"/sign-up"}>
        <Typography size="caption2" className="hover:text-text-primary sm:block hidden">Стать участником</Typography>
      </Link>
      <div className="flex gap-10">
        <Button size="sm" radius="md" weight="bold" variant="ghost">
          RU
          <ChevronDownIcon />
        </Button>
        <Button asChild size="sm" radius="md" weight="bold" variant="ghost">
          <Link href={Routes.SIGN_IN}>
            Войти
          </Link>
        </Button>
      </div>
    </header>
  )
}
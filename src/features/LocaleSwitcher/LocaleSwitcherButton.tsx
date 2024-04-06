"use client"

import {Button} from "@/shared/ui/Button";
import ChevronDownIcon from "@/shared/icons/chevron-down.svg";
import {usePathname, useRouter} from "next/navigation";
import {useLocale} from "next-intl";

export const LocaleSwitcherButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale()

  return (
    <Button size="sm" radius="md" weight="bold" variant="ghost"
            className="uppercase"
            onClick={() => router.replace(pathname + "?change-lang=true")}>
      {locale}
      <ChevronDownIcon />
    </Button>
  )
}
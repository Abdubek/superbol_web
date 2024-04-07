"use client";

import { PropsWithChildren } from "react";
import clsx from "clsx";
import { Button } from "@/shared/ui/Button";
import { usePathname, useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";

export const CHANGE_LANG_KEY = "change-lang";

export const LocaleSwitcher = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const changeLang = searchParams.get(CHANGE_LANG_KEY) === "true";

  return (
    <div className="relative">
      {changeLang && (
        <div className="absolute top-0 h-full w-full">
          <div className="sticky top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 w-[200px] mx-auto overflow-hidden">
            <Button
              variant="primary"
              onClick={() => router.replace(pathname, { locale: "kz" })}
            >
              ҚАЗАҚША 🇰🇿
            </Button>
            <Button
              variant="primary"
              onClick={() => router.replace(pathname, { locale: "ru" })}
            >
              РУССКИЙ 🇷🇺
            </Button>
            <Button
              variant="primary"
              onClick={() => router.replace(pathname, { locale: "en" })}
            >
              ENGLISH 🇺🇸
            </Button>
          </div>
        </div>
      )}
      <div className={clsx("relative", changeLang && "blur-sm")}>
        {children}
      </div>
    </div>
  );
};

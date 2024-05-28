import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import CheckIcon from "@/shared/icons/check.svg";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ConfirmEmailButton } from "@/features/ConfirmEmailButton";
import { redirect } from "next/navigation";
import { Routes } from "@/routes";

type Props = {
  searchParams?: { email?: string; token?: string };
};

export default function ConfirmPage({ searchParams }: Props) {
  const t = useTranslations("auth");

  if (!searchParams?.token) {
    return redirect(Routes.HOME);
  }

  return (
    <main className="container flex flex-col justify-between items-center min-h-screen py-8">
      <PrimaryLogo width={48} height={48} />

      <div className="flex flex-col items-center">
        <Typography size="h3" variant="primary" className="mb-5 text-center">
          {t.rich("confirm.title", {
            br: () => <br />,
          })}
        </Typography>

        {process.env.NEXT_PUBLIC_IS_ACTIVE === "true" && (
          <ConfirmEmailButton token={searchParams?.token} />
        )}
      </div>

      <div />
    </main>
  );
}

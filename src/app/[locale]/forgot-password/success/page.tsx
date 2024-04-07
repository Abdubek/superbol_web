import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import CheckIcon from "@/shared/icons/check.svg";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ForgotPasswordSuccessPage() {
  const t = useTranslations("auth");
  
  return (
    <main className="container flex flex-col justify-between items-center min-h-screen py-8">
      <PrimaryLogo width={48} height={48} />

      <div className="flex flex-col items-center">
        <CheckIcon />

        <Typography size="h3" variant="primary" className="mt-2 text-center">
          {t.rich("success.emailSent.title", {
            br: () => <br />,
          })}
        </Typography>

        <Typography size="body2" variant="grey" className="mt-2 text-center">
          {t.rich("success.emailSent.subtitle", {
            br: () => <br />,
          })}
        </Typography>

        <Button asChild variant="primary" className="w-full mt-5">
          <Link href="/">OK</Link>
        </Button>
      </div>

      <div />
    </main>
  );
}

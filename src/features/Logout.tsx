"use client";

import { Button } from "@/shared/ui/Button";
import { actions } from "@/actions";
import { useTranslations } from "next-intl";

export const LogoutButton = () => {
  const t = useTranslations("auth");
  return (
    <Button
      onClick={() => actions.logout()}
      size="sm"
      radius="md"
      weight="bold"
      variant="foreground"
    >
      {t("buttons.logout")}
    </Button>
  );
};

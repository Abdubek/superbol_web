"use client";

import { actions } from "@/actions";
import { Button } from "@/shared/ui/Button";
import WarningIcon from "@/shared/icons/warning.svg";
import { Typography } from "@/shared/ui/Typography";
import { useState } from "react";
import { useTranslations } from "next-intl";

type Props = {
  email: string;
};

export const ChangePasswordButton = ({ email }: Props) => {
  const [isSuccessful, setSuccessfulResult] = useState(false);

  const handleChangePassword = async () => {
    const res = await actions.changePassword(email);
    setSuccessfulResult(res);
  };
  const t = useTranslations("auth");
  return (
    <>
      <Button variant="primary" onClick={handleChangePassword} className="mb-4">
        {t("buttons.changePassword")}
      </Button>
      {isSuccessful ? (
        <div className="bg-bg-lightblue/25 p-4 rounded-lg flex items-center gap-6">
          <WarningIcon />
          <div>
            <Typography size="h5" className="mb-3">
              {t("success.changePassword.title")}
            </Typography>
            <Typography size="body2">
              {t("success.changePassword.subtitle")}
            </Typography>
          </div>
        </div>
      ) : null}
    </>
  );
};

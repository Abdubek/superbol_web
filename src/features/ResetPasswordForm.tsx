"use client";

import { actions } from "@/actions";
import { Typography } from "@/shared/ui/Typography";
import { FormInput } from "@/shared/ui/FormInput";
import { useState } from "react";
import CheckSmallIcon from "@/shared/icons/check-small.svg";
import CrossIcon from "@/shared/icons/cross.svg";
import { useTranslations } from "next-intl";
import {SubmitButton} from "@/features/SubmitButton";

const passwordSymbolsRegex = /^(?=.*(\d|[^\w\s])).+$/;

type Props = {
  email?: string;
  token?: string;
};

export const ResetPasswordForm = ({ email, token }: Props) => {
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [isMinimumSymbolValid, setMinimumSymbolValid] = useState(
    password.length >= 8
  );
  const [isPasswordSymbolsValid, setPasswordSymbolsValid] = useState(false);
  const [isPasswordEqual, setPasswordEqual] = useState(
    password === repeatedPassword && password.length > 0
  );

  const onPasswordChange = (value: string) => {
    setPassword(value);
    setMinimumSymbolValid(value.length >= 8);
    setPasswordSymbolsValid(passwordSymbolsRegex.test(value));
  };

  const onRepeatedPasswordChange = (value: string) => {
    setRepeatedPassword(value);
    setPasswordEqual(value === password);
  };

  const isFormValid =
    isMinimumSymbolValid && isPasswordSymbolsValid && isPasswordEqual;
  const t = useTranslations("auth");
  return (
    <form
      className="flex flex-col items-start text-left gap-5 max-w-[350px]"
      action={actions.resetPassword}
    >
      <Typography size="h3" variant="primary">
        {t("resetPassword.title")}
      </Typography>

      <Typography size="body2" variant="grey">
        {t("resetPassword.subtitle")}{" "}
        <Typography asChild variant="primary">
          <span>{email}</span>
        </Typography>
      </Typography>

      <FormInput value={token} name="token" type="hidden" />

      <FormInput
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        name="password"
        type="password"
        placeholder={t("inputs.newPassword.placeholder")}
      />

      <FormInput
        value={repeatedPassword}
        onChange={(e) => onRepeatedPasswordChange(e.target.value)}
        name="repeatedPassword"
        type="password"
        placeholder={t("inputs.repeatedPassword.placeholder")}
      />

      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          {isMinimumSymbolValid ? <CheckSmallIcon/> : <div className="text-text-red"><CrossIcon width={16}/></div>}
          <Typography size="body3">{t("resetPassword.required.1")}</Typography>
        </div>

        <div className="flex gap-2">
          {isPasswordEqual ? <CheckSmallIcon/> : <div className="text-text-red"><CrossIcon width={16}/></div>}
          <Typography size="body3">{t("resetPassword.required.3")}</Typography>
        </div>
      </div>

      <SubmitButton
        type="submit"
        variant="primary"
        className="w-full"
        disabled={!isFormValid}
      >
        {t("buttons.savePassword")}
      </SubmitButton>
    </form>
  );
};

"use client";

import { useFormState } from "react-dom";
import { actions } from "@/actions";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import { FormInput } from "@/shared/ui/FormInput";
import { useTranslations } from "next-intl";
import {SubmitButton} from "@/features/SubmitButton";

const initialState = {
  email: "",
};

export const ForgotPasswordForm = () => {
  const [state, formAction] = useFormState(
    actions.forgotPassword,
    initialState
  );
  const t = useTranslations("auth");
  return (
    <form
      className="flex flex-col items-start text-left gap-5 max-w-[350px]"
      action={formAction}
    >
      <Typography size="h3" variant="primary">
        {t("forgotPassword.title")}
      </Typography>

      <Typography size="body2" variant="grey">
        {t("forgotPassword.subtitle")}
      </Typography>

      <FormInput
        name="email"
        type="email"
        placeholder={t("inputs.email.placeholder")}
        error={state?.email}
      />

      <SubmitButton type="submit" variant="primary" className="w-full">
        {t("buttons.next")}
      </SubmitButton>
    </form>
  );
};

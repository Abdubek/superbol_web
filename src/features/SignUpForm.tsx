"use client";

import { useFormState } from "react-dom";
import { actions } from "@/actions";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";
import { Routes } from "@/routes";
import { FormInput } from "@/shared/ui/FormInput";
import { useTranslations } from "next-intl";

const initialState = {
  email: "",
};

export const SignUpForm = () => {
  const [state, formAction] = useFormState(actions.signUp, initialState);
  const t = useTranslations("auth");
  return (
    <form
      className="flex flex-col items-center text-center gap-5 max-w-[350px] w-full"
      action={formAction}
    >
      <Typography size="h3" variant="primary">
        {t("signUp.title")}
      </Typography>

      <FormInput
        label={t("inputs.email.label")}
        name="email"
        type="email"
        placeholder={t("inputs.email.placeholder")}
        error={state?.email}
      />

      <Button type="submit" variant="primary" className="w-full">
        {t("buttons.next")}
      </Button>
    </form>
  );
};

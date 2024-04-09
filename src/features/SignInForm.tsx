"use client";

import { useFormState } from "react-dom";
import { actions } from "@/actions";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";
import { Routes } from "@/routes";
import { FormInput } from "@/shared/ui/FormInput";
import { useFormatter, useTranslations } from "next-intl";

const initialState = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [state, formAction] = useFormState(actions.signIn, initialState);
  const t = useTranslations("auth");

  return (
    <form
      className="flex flex-col items-center text-center gap-5 md:max-w-[350px] max-w-full w-full"
      action={formAction}
    >
      <Typography size="h3" variant="primary">
        {t.rich("signIn.title", {
          br: () => <br />,
        })}
      </Typography>

      <FormInput
        label={t("inputs.email.label")}
        name="email"
        type="email"
        placeholder={t("inputs.email.placeholder")}
        error={state?.email}
      />

      <FormInput
        label={t("inputs.password.label")}
        name="password"
        type="password"
        placeholder={t("inputs.password.placeholder")}
        error={state?.password}
      />

      <Button type="submit" variant="primary" className="w-full">
        {t("buttons.signIn")}
      </Button>

      <div className="flex flex-col gap-2">
        {/*<Typography size="body3">*/}
        {/*  {t("signIn.routes.register.title")}{" "}*/}
        {/*  <Typography asChild variant="primary">*/}
        {/*    <Link href={Routes.SIGN_UP}>{t("signIn.routes.register.cta")}</Link>*/}
        {/*  </Typography>*/}
        {/*</Typography>*/}
        <Typography size="body3">
          {t("signIn.routes.forgotPassword.title")}{" "}
          <Typography asChild variant="primary">
            <Link href={Routes.FORGOT_PASSWORD}>
              {t("signIn.routes.forgotPassword.cta")}
            </Link>
          </Typography>
        </Typography>
      </div>
    </form>
  );
};

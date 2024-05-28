"use client";

import { useFormState } from "react-dom";
import { actions } from "@/actions";
import { Typography } from "@/shared/ui/Typography";
import Link from "next/link";
import { Routes } from "@/routes";
import { FormInput } from "@/shared/ui/FormInput";
import { useTranslations } from "next-intl";
import { SubmitButton } from "@/features/SubmitButton";
import CheckSmallIcon from "@/shared/icons/check-small.svg";
import { ContactToWhatsapp } from "@/features/ContactToWhatsapp";

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

      <div className="flex flex-col items-start gap-2 w-full">
        <FormInput
          label={t("inputs.password.label")}
          name="password"
          type="password"
          placeholder={t("inputs.password.placeholder")}
          error={state?.password}
        />

        <div className="flex items-center gap-2">
          <CheckSmallIcon />
          <Typography size="body3">{t("setPassword.required.1")}</Typography>
        </div>
      </div>

      <SubmitButton type="submit" variant="primary" className="w-full">
        {t("buttons.signIn")}
      </SubmitButton>

      <div className="flex flex-col gap-2">
        {/*<Typography size="body3">*/}
        {/*  {t("signIn.routes.register.title")}{" "}*/}
        {/*  <Typography asChild variant="primary">*/}
        {/*    <Link href={Routes.SIGN_UP}>{t("signIn.routes.register.cta")}</Link>*/}
        {/*  </Typography>*/}
        {/*</Typography>*/}
        {process.env.NEXT_PUBLIC_IS_ACTIVE === "true" && (
          <Typography size="body3">
            {t("signIn.routes.forgotPassword.title")}{" "}
            <Typography asChild variant="primary">
              <Link href={Routes.FORGOT_PASSWORD}>
                {t("signIn.routes.forgotPassword.cta")}
              </Link>
            </Typography>
          </Typography>
        )}
      </div>
      {process.env.NEXT_PUBLIC_IS_ACTIVE === "true" && <ContactToWhatsapp />}
    </form>
  );
};

"use client"

import {useForm} from "react-hook-form";
import {FormPhoneInput} from "@/shared/ui/FormPhoneInput";
import {formErrorText} from "@/shared/utils/common";
import * as React from "react";
import {FirstStepForm} from "@/features/ParticipantApplicationForm/FirstStep";
import {useTranslations} from "next-intl";
import {Button} from "@/shared/ui/Button";
import {actions} from "@/actions";
import {Routes} from "@/routes";
import {useRouter} from "next/navigation";
import {SubmitButton} from "@/features/SubmitButton";
import {useState} from "react";

export const EnterPhoneForm = () => {
  const t = useTranslations("application");
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<{
    phone_number: string
  }>()

  const onSubmit = async (data: FirstStepForm) => {
    window?.scrollTo(0, 0);
    if (data.phone_number) {
      setLoading(true)
      const res = await actions.setPhone(data.phone_number)
      setLoading(false)
      if (res) {
        router.push(Routes.PROFILE)
        router.refresh();
      }
    }
  };

  return (
    <form
      className="flex flex-col gap-6 items-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormPhoneInput
        name="phone_number"
        label={t("inputs.phone.label")}
        placeholder={t("inputs.phone.placeholder")}
        error={formErrorText(errors.phone_number)}
        control={control}
      />
      <Button isLoading={loading} type="submit" variant="secondary" size="lg">
        {t("buttons.save")}
      </Button>
    </form>
  )
}
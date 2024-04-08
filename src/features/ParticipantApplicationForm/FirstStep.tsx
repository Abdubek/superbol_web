import { Controller, useForm } from "react-hook-form";
import { FormInput } from "@/shared/ui/FormInput";
import { formErrorText } from "@/shared/utils/common";
import { FormSelect } from "@/shared/ui/FormSelect";
import {
  gamingPositionOptions,
  mainLegOptions,
  specifiedSkillOptions,
} from "@/entities/participant/options";
import { Button } from "@/shared/ui/Button";
import { useFormStore } from "./index";
import { SecondStepForm } from "@/features/ParticipantApplicationForm/SecondStep";
import { City } from "@/shared/api/cities";
import { Typography } from "@/shared/ui/Typography";
import * as React from "react";
import { useTranslations } from "next-intl";

export type FirstStepForm = {
  full_name?: string;
  birth_date?: string;
  height?: number;
  weight?: number;
  origin_city?: string;
  main_leg?: string;
  gaming_positions_1?: string;
  gaming_positions_2?: string;
  gaming_positions_3?: string;
  experience_years?: number;
  specified_skills_1?: string;
  specified_skills_2?: string;
  specified_skills_3?: string;
};

type Props = {
  cities: City[];
};

export const FirstStep = ({ cities }: Props) => {
  const data = useFormStore((state) => state.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FirstStepForm & SecondStepForm>({
    values: {
      full_name: data?.full_name,
      birth_date: data?.birth_date,
      height: data?.height,
      weight: data?.weight,
      origin_city: data?.origin_city,
      main_leg: data?.main_leg,
      experience_years: data?.experience_years,
      specified_skills_1: data?.specified_skills_1,
      specified_skills_2: data?.specified_skills_2,
      specified_skills_3: data?.specified_skills_3,
      gaming_positions_1: data.gaming_positions_1,
      gaming_positions_2: data.gaming_positions_2,
      gaming_positions_3: data.gaming_positions_3,
      casting_city: data?.casting_city,
    },
  });
  const submitFirstStep = useFormStore((state) => state.submitFirstStep);
  const applicationStatus = useFormStore((state) => state.applicationStatus);

  const onSubmit = (data: FirstStepForm) => {
    window?.scrollTo(0, 0);
    submitFirstStep(data);
  };

  const t = useTranslations("application");

  return (
    <form
      className="flex flex-col gap-6 items-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        type="text"
        label={t("inputs.full_name.label")}
        placeholder={t("inputs.full_name.placeholder")}
        error={formErrorText(errors.full_name)}
        {...register("full_name", { required: true })}
      />
      <FormInput
        type="date"
        label={t("inputs.birth_date.label")}
        placeholder={t("inputs.birth_date.placeholder")}
        error={formErrorText(errors.birth_date)}
        {...register("birth_date", { required: true })}
      />
      <FormInput
        type="number"
        label={t("inputs.height.label")}
        placeholder={t("inputs.height.placeholder")}
        error={formErrorText(errors.height)}
        {...register("height", { required: true })}
      />
      <FormInput
        type="number"
        label={t("inputs.weight.label")}
        placeholder={t("inputs.weight.placeholder")}
        error={formErrorText(errors.weight)}
        {...register("weight", { required: true })}
      />
      <FormInput
        type="text"
        label={t("inputs.residence.label")}
        placeholder={t("inputs.residence.placeholder")}
        error={formErrorText(errors.origin_city)}
        {...register("origin_city", { required: true })}
      />
      <FormSelect<FirstStepForm>
        label={t("inputs.preferred_foot.label")}
        placeholder={t("inputs.preferred_foot.placeholder")}
        control={control}
        name="main_leg"
        required
        options={mainLegOptions}
        error={formErrorText(errors.main_leg)}
      />
      <FormSelect<FirstStepForm>
        label={t("inputs.playing_position.1.label")}
        placeholder={t("inputs.playing_position.1.placeholder")}
        control={control}
        name="gaming_positions_1"
        required
        options={gamingPositionOptions}
        error={formErrorText(errors.gaming_positions_1)}
      />
      <FormSelect<FirstStepForm>
        label={t("inputs.playing_position.2.label")}
        placeholder={t("inputs.playing_position.2.placeholder")}
        control={control}
        name="gaming_positions_2"
        required
        options={gamingPositionOptions}
        error={formErrorText(errors.gaming_positions_2)}
      />
      <FormSelect<FirstStepForm>
        label={t("inputs.playing_position.3.label")}
        placeholder={t("inputs.playing_position.3.placeholder")}
        control={control}
        name="gaming_positions_3"
        required
        options={gamingPositionOptions}
        error={formErrorText(errors.gaming_positions_3)}
      />
      <FormInput
        type="number"
        label={t("inputs.game_experience.label")}
        placeholder={t("inputs.game_experience.placeholder")}
        error={formErrorText(errors.experience_years)}
        {...register("experience_years", { required: true })}
      />
      <FormSelect<FirstStepForm>
        label={t("inputs.strengths.1.label")}
        placeholder={t("inputs.strengths.1.placeholder")}
        control={control}
        name="specified_skills_1"
        required
        options={specifiedSkillOptions}
        error={formErrorText(errors.specified_skills_1)}
      />
      <FormSelect<FirstStepForm>
        label={t("inputs.strengths.2.label")}
        placeholder={t("inputs.strengths.2.placeholder")}
        control={control}
        name="specified_skills_2"
        required
        options={specifiedSkillOptions}
        error={formErrorText(errors.specified_skills_2)}
      />
      <FormSelect<FirstStepForm>
        label={t("inputs.strengths.3.label")}
        placeholder={t("inputs.strengths.3.placeholder")}
        control={control}
        name="specified_skills_3"
        required
        options={specifiedSkillOptions}
        error={formErrorText(errors.specified_skills_3)}
      />
      {/*<div className="w-full">*/}
      {/*  <Typography asChild size="caption2" className="mb-2 block">*/}
      {/*    <label>Ваши сильные качества</label>*/}
      {/*  </Typography>*/}
      {/*  <Controller*/}
      {/*    rules={{ required: true }}*/}
      {/*    render={({ field }) => (*/}
      {/*      <Select*/}
      {/*        isMulti*/}
      {/*        value={specifiedSkillOptions.find(i => field?.value?.includes(i.value))}*/}
      {/*        options={specifiedSkillOptions}*/}
      {/*        placeholder="Необходимо выбрать 3 варианта:"*/}
      {/*        className="w-full"*/}
      {/*        classNamePrefix="select"*/}
      {/*        onChange={(value) => {*/}
      {/*          console.log("multi onchange", value)*/}
      {/*          field.onChange(value.map(i => i.value))*/}
      {/*        }}*/}
      {/*      />)}*/}
      {/*    control={control}*/}
      {/*    name="specified_skills"*/}
      {/*  />*/}
      {/*  {formErrorText(errors.specified_skills) &&*/}
      {/*    <Typography size="body3" variant="red">{formErrorText(errors.specified_skills)}</Typography>*/}
      {/*  }*/}
      {/*</div>*/}
      {applicationStatus === "application_verified" && (
        <FormSelect<SecondStepForm>
          label={t("inputs.casting_city.label")}
          placeholder={t("inputs.casting_city.placeholder")}
          control={control}
          name="casting_city"
          required
          options={cities.map((city) => ({
            label: city.name,
            value: city.name,
          }))}
          error={formErrorText(errors.casting_city)}
        />
      )}
      {applicationStatus === "activated" && (
        <Button type="submit" variant="secondary" size="lg">
          {t("buttons.next")}
        </Button>
      )}
    </form>
  );
};

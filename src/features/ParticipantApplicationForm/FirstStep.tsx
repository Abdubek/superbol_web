import {Controller, useForm} from "react-hook-form";
import {FormInput} from "@/shared/ui/FormInput";
import {formErrorText} from "@/shared/utils/common";
import {FormSelect} from "@/shared/ui/FormSelect";
import {
  gamingPositionOptions,
  mainLegOptions,
  specifiedSkillOptions
} from "@/entities/participant/options";
import {Button} from "@/shared/ui/Button";
import Select from 'react-select';
import {useFormStore} from "./index";
import {SecondStepForm} from "@/features/ParticipantApplicationForm/SecondStep";
import {City} from "@/shared/api/cities";
import {Typography} from "@/shared/ui/Typography";
import * as React from "react";

export type FirstStepForm = {
  full_name?: string
  birth_date?: string
  height?: number
  weight?: number
  origin_city?: string
  main_leg?: string
  gaming_positions_1?: string
  gaming_positions_2?: string
  gaming_positions_3?: string
  experience_years?: number
  specified_skills_1?: string
  specified_skills_2?: string
  specified_skills_3?: string
}

type Props = {
  cities: City[]
}

export const FirstStep = ({ cities }: Props) => {
  const data = useFormStore((state) => state.data)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
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
      casting_city: data?.casting_city
    }
  })
  const submitFirstStep = useFormStore((state) => state.submitFirstStep)
  const applicationStatus = useFormStore((state) => state.applicationStatus)

  const onSubmit = (data: FirstStepForm) => {
    window?.scrollTo(0, 0)
    submitFirstStep(data)
  }

  return (
    <form className="flex flex-col gap-6 items-start" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        type="text"
        label="Имя Фамилия"
        placeholder="Введите имя и фамилию"
        error={formErrorText(errors.full_name)}
        {...register("full_name", { required: true  })}
      />
      <FormInput
        type="date"
        label="Дата рождения"
        placeholder="дд.мм.гггг"
        error={formErrorText(errors.birth_date)}
        {...register("birth_date", { required: true })}
      />
      <FormInput
        type="number"
        label="Рост"
        placeholder="Введите ваш рост в см"
        error={formErrorText(errors.height)}
        {...register("height", { required: true })}
      />
      <FormInput
        type="number"
        label="Вес"
        placeholder="Введите ваш вес в кг"
        error={formErrorText(errors.weight)}
        {...register("weight", { required: true })}
      />
      <FormInput
        type="text"
        label="Город проживания"
        placeholder="Введите город"
        error={formErrorText(errors.origin_city)}
        {...register("origin_city", { required: true })}
      />
      <FormSelect<FirstStepForm>
        label="Игровая нога"
        placeholder="Выберите из списка"
        control={control}
        name="main_leg"
        required
        options={mainLegOptions}
        error={formErrorText(errors.main_leg)}
      />
      <FormSelect<FirstStepForm>
        label="Игровая позиция 1"
        placeholder="Выберите основную игровую позицию"
        control={control}
        name="gaming_positions_1"
        required
        options={gamingPositionOptions}
        error={formErrorText(errors.gaming_positions_1)}
      />
      <FormSelect<FirstStepForm>
        label="Игровая позиция 2"
        placeholder="Выберите второстепенную игровую позицию"
        control={control}
        name="gaming_positions_2"
        required
        options={gamingPositionOptions}
        error={formErrorText(errors.gaming_positions_2)}
      />
      <FormSelect<FirstStepForm>
        label="Игровая позиция 3"
        placeholder="Выберите дополнительную игровую позицию"
        control={control}
        name="gaming_positions_3"
        required
        options={gamingPositionOptions}
        error={formErrorText(errors.gaming_positions_3)}
      />
      <FormInput
        type="number"
        label="Игровой опыт"
        placeholder="Выберите количество лет опыта"
        error={formErrorText(errors.experience_years)}
        {...register("experience_years", { required: true })}
      />
      <FormSelect<FirstStepForm>
        label="Ваши сильные качества 1"
        placeholder="Выберите основную сильную качество"
        control={control}
        name="specified_skills_1"
        required
        options={specifiedSkillOptions}
        error={formErrorText(errors.specified_skills_1)}
      />
      <FormSelect<FirstStepForm>
        label="Ваши сильные качества 2"
        placeholder="Выберите второстепенную сильную качество"
        control={control}
        name="gaming_positions_2"
        required
        options={specifiedSkillOptions}
        error={formErrorText(errors.specified_skills_2)}
      />
      <FormSelect<FirstStepForm>
        label="Ваши сильные качества 3"
        placeholder="Выберите дополнительную сильную качество"
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
      {applicationStatus === "application_verified" &&
        <FormSelect<SecondStepForm>
          label="Город кастинга"
          placeholder="Выберите из списка"
          control={control}
          name="casting_city"
          required
          options={cities.map(city => ({
            label: city.name,
            value: city.name
          }))}
          error={formErrorText(errors.casting_city)}
        />
      }
      {applicationStatus === "activated" && <Button type="submit" variant="secondary" size="lg">Далее</Button>}
    </form>
  )
}
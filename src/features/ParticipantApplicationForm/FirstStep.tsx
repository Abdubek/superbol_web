import {useForm} from "react-hook-form";
import {FormInput} from "@/shared/ui/FormInput";
import {formErrorText} from "@/shared/utils/common";
import {FormSelect} from "@/shared/ui/FormSelect";
import {
  gamingPositionOptions,
  mainLegOptions,
  specifiedSkillOptions
} from "../../entities/participant/options";
import {Button} from "@/shared/ui/Button";
import {useFormStore} from "./index";
import {Participant} from "@/shared/api/participant";
import {SecondStepForm} from "@/features/ParticipantApplicationForm/SecondStep";
import {City} from "@/shared/api/cities";

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
  specified_skills?: string
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
      specified_skills: data?.specified_skills,
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
        label="Ваши сильные качества"
        placeholder="Выберите сильные качества"
        control={control}
        name="specified_skills"
        required
        options={specifiedSkillOptions}
        error={formErrorText(errors.specified_skills)}
      />
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
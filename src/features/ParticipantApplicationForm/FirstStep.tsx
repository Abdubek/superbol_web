import {useForm} from "react-hook-form";
import {FormInput} from "@/shared/ui/FormInput";
import {formErrorText} from "@/shared/utils/common";
import {FormSelect} from "@/shared/ui/FormSelect";
import {
  gamingPositionOptions,
  mainLegOptions,
  specifiedSkillOptions
} from "./options";
import {Button} from "@/shared/ui/Button";
import {useFormStore} from "./index";
import {Participant} from "@/shared/api/participant";

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
  initialData?: Participant
}

export const FirstStep = ({ initialData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<FirstStepForm>({
    defaultValues: {
      full_name: initialData?.full_name,
      birth_date: initialData?.birth_date ? initialData?.birth_date.substring(0, 10) : undefined,
      height: initialData?.height,
      weight: initialData?.weight,
      origin_city: initialData?.origin_city,
      main_leg: initialData?.main_leg,
      experience_years: initialData?.experience_years,
      specified_skills: (initialData?.specified_skills && initialData?.specified_skills?.length >= 1)
        ? initialData?.specified_skills[0] : undefined,
      gaming_positions_1: (initialData?.gaming_positions && initialData?.gaming_positions?.length >= 1)
        ? initialData?.gaming_positions[0] : undefined,
      gaming_positions_2: (initialData?.gaming_positions && initialData?.gaming_positions?.length >= 2)
        ? initialData?.gaming_positions[1] : undefined,
      gaming_positions_3: (initialData?.gaming_positions && initialData?.gaming_positions?.length >= 3)
        ? initialData?.gaming_positions[2] : undefined
    }
  })
  const submitFirstStep = useFormStore((state) => state.submitFirstStep)

  const onSubmit = (data: FirstStepForm) => {
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
      {initialData?.status === "activated" && <Button type="submit" variant="secondary" size="lg">Далее</Button>}
    </form>
  )
}
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

export const FirstStep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<FirstStepForm>()
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
        type="text"
        label="Рост"
        placeholder="Введите ваш рост в см"
        error={formErrorText(errors.height)}
        {...register("height", { required: true })}
      />
      <FormInput
        type="text"
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
        placeholder="Необходимо выбрать 3 варианта:"
        control={control}
        name="specified_skills"
        required
        options={specifiedSkillOptions}
        error={formErrorText(errors.specified_skills)}
      />
      <Button type="submit" variant="secondary" size="lg">Далее</Button>
    </form>
  )
}
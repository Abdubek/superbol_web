import {useForm} from "react-hook-form";
import {FormInput} from "@/shared/ui/FormInput";
import {formErrorText} from "@/shared/utils/common";
import {FormSelect} from "@/shared/ui/FormSelect";
import {
  castingCityOptions,
} from "./options";
import {Button} from "@/shared/ui/Button";
import {useFormStore} from "./index";

export type SecondStepForm = {
  casting_city?: string
}

export const SecondStep = () => {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<SecondStepForm>()
  const submitSecondStep = useFormStore((state) => state.submitSecondStep)

  const onSubmit = (data: SecondStepForm) => {
    submitSecondStep(data)
  }

  return (
    <form className="flex flex-col gap-6 items-start" onSubmit={handleSubmit(onSubmit)}>
      <FormSelect<SecondStepForm>
        label="Город кастинга"
        placeholder="Выберите из списка"
        control={control}
        name="casting_city"
        required
        options={castingCityOptions}
        error={formErrorText(errors.casting_city)}
      />
      <Button type="submit" variant="secondary" size="lg">Далее</Button>
    </form>
  )
}
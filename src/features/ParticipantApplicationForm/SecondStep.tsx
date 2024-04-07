import {useForm} from "react-hook-form";
import {FormInput} from "@/shared/ui/FormInput";
import {formErrorText} from "@/shared/utils/common";
import {FormSelect} from "@/shared/ui/FormSelect";
import {
  castingCityOptions,
} from "../../entities/participant/options";
import {Button} from "@/shared/ui/Button";
import {useFormStore} from "./index";
import {City} from "@/shared/api/cities";

export type SecondStepForm = {
  casting_city?: string
}

type Props = {
  cities: City[]
}

export const SecondStep = ({ cities }: Props) => {
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
        options={cities.map(city => ({
          label: city.name,
          value: city.name
        }))}
        error={formErrorText(errors.casting_city)}
      />
      <Button type="submit" variant="secondary" size="lg">Далее</Button>
    </form>
  )
}
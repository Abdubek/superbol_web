'use client'

import { create } from 'zustand'
import {FirstStep, FirstStepForm} from "./FirstStep";
import {StepsView} from "@/features/ParticipantApplicationForm/StepsView";
import {SecondStep, SecondStepForm} from "@/features/ParticipantApplicationForm/SecondStep";
import {ThirdStep} from "@/features/ParticipantApplicationForm/ThirdStep";
import {City} from "@/shared/api/cities";
import {Participant} from "@/shared/api/participant";

type FormType = {
  data: FirstStepForm & SecondStepForm
  step: 1 | 2 | 3,
  submitFirstStep: (data: FirstStepForm) => void
  submitSecondStep: (data: SecondStepForm) => void
  setStep: (step: 1 | 2 | 3) => void
}

export const useFormStore = create<FormType>((set, getState) => ({
  data: {},
  step: 1,
  submitFirstStep: (data) => {
    set({
      data: {
        ...getState().data,
        ...data
      },
      step: 2
    })
  },
  submitSecondStep: (data) => {
    set({
      data: {
        ...getState().data,
        ...data
      },
      step: 3
    })
  },
  setStep: (step) => {
    set({
      step
    })
  }
}))

type Props = {
  cities: City[]
  initialData?: Participant
}

export const ParticipantApplicationForm = ({ cities, initialData }: Props) => {
  const step = useFormStore((state) => state.step)

  return (
    <div className="flex flex-col gap-10">
      {initialData?.status === "activated" && <StepsView step={step} />}
      <div className="max-w-[400px]">
        {step === 1 && <FirstStep cities={cities} initialData={initialData} />}
        {step === 2 && <SecondStep cities={cities} />}
      </div>
      {step === 3 && <ThirdStep />}
    </div>
  )
}

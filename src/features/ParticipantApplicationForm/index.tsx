'use client'

import { create } from 'zustand'
import {FirstStep, FirstStepForm} from "./FirstStep";
import {StepsView} from "@/features/ParticipantApplicationForm/StepsView";
import {SecondStep, SecondStepForm} from "@/features/ParticipantApplicationForm/SecondStep";
import {ThirdStep} from "@/features/ParticipantApplicationForm/ThirdStep";

type FormType = {
  data: FirstStepForm & SecondStepForm
  step: 1 | 2 | 3,
  submitFirstStep: (data: FirstStepForm) => void
  submitSecondStep: (data: SecondStepForm) => void
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
  }
}))

export const ParticipantApplicationForm = () => {
  const step = useFormStore((state) => state.step)

  return (
    <div className="flex flex-col gap-10">
      <StepsView step={step} />
      <div className="max-w-[400px]">
        {step === 1 && <FirstStep />}
        {step === 2 && <SecondStep />}
      </div>
      {step === 3 && <ThirdStep />}
    </div>
  )
}

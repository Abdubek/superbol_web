'use client'

import { create } from 'zustand'
import {FirstStep, FirstStepForm} from "./FirstStep";
import {StepsView} from "@/features/ParticipantApplicationForm/StepsView";
import {SecondStep, SecondStepForm} from "@/features/ParticipantApplicationForm/SecondStep";
import {ThirdStep} from "@/features/ParticipantApplicationForm/ThirdStep";
import {City} from "@/shared/api/cities";
import {ApplicationStatus, Participant} from "@/shared/api/participant";
import {useEffect} from "react";

type FormType = {
  data: FirstStepForm & SecondStepForm
  step: 1 | 2 | 3,
  applicationStatus: ApplicationStatus
  setStatus: (status: ApplicationStatus | undefined) => void
  setData: (data: FirstStepForm & SecondStepForm, status: ApplicationStatus | undefined) => void
  submitFirstStep: (data: FirstStepForm) => void
  submitSecondStep: (data: SecondStepForm) => void
  setStep: (step: 1 | 2 | 3) => void
}

export const useFormStore = create<FormType>((set, getState) => ({
  data: {},
  step: 3,
  applicationStatus: "created",
  setStatus: (status: ApplicationStatus | undefined) => {
    set({
      applicationStatus: status
    })
  },
  setData: (data: FirstStepForm & SecondStepForm, status) => {
    set({
      data: {
        ...getState().data,
        ...data
      },
      applicationStatus: status
    })
  },
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
  const setData = useFormStore((state) => state.setData)

  useEffect(() => {
    setData({
      full_name: initialData?.full_name,
      birth_date: initialData?.birth_date ? initialData?.birth_date.substring(0, 10) : undefined,
      height: initialData?.height,
      weight: initialData?.weight,
      origin_city: initialData?.origin_city,
      main_leg: initialData?.main_leg,
      experience_years: initialData?.experience_years,
      specified_skills_1: (initialData?.specified_skills && initialData?.specified_skills?.length >= 1)
        ? initialData?.specified_skills[0] : undefined,
      specified_skills_2: (initialData?.specified_skills && initialData?.specified_skills?.length >= 2)
        ? initialData?.specified_skills[1] : undefined,
      specified_skills_3: (initialData?.specified_skills && initialData?.specified_skills?.length >= 3)
        ? initialData?.specified_skills[2] : undefined,

      gaming_positions_1: (initialData?.gaming_positions && initialData?.gaming_positions?.length >= 1)
        ? initialData?.gaming_positions[0] : undefined,
      gaming_positions_2: (initialData?.gaming_positions && initialData?.gaming_positions?.length >= 2)
        ? initialData?.gaming_positions[1] : undefined,
      gaming_positions_3: (initialData?.gaming_positions && initialData?.gaming_positions?.length >= 3)
        ? initialData?.gaming_positions[2] : undefined,
      casting_city: initialData?.casting_city
    }, initialData?.status)
  }, [initialData])

  return (
    <div className="flex flex-col gap-10">
      {initialData?.status === "activated" && <StepsView step={step} />}
      <div className="max-w-[400px]">
        {step === 1 && <FirstStep cities={cities} />}
        {step === 2 && <SecondStep cities={cities} />}
      </div>
      {step === 3 && <ThirdStep />}
    </div>
  )
}

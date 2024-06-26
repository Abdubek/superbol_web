import {FieldError} from "react-hook-form";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function isEmpty(obj: Object) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

export function formErrorText(errorField?: FieldError) {
  if (errorField?.type === "required") {
    return "Заполните поле"
  }
  return errorField?.message
}
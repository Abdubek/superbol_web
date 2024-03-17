'use server'

type SignInErrors = {
  email?: string
}

export async function signUp(prevState: any, formData: FormData) {
  const errors: SignInErrors = {}

  const rawFormData = {
    email: formData.get("email") as string,
  };

  if (!rawFormData.email) {
    errors.email = 'Введите почту'
  }

  return errors
}
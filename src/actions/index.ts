import {signIn} from "@/actions/sign-in";
import {forgotPassword} from "@/actions/forgot-password";
import {resetPassword} from "@/actions/reset-password";
import {signUp} from "@/actions/sign-up";
import {setPassword} from "@/actions/set-password";

export const actions = {
  signIn,
  signUp,
  forgotPassword,
  resetPassword,
  setPassword
}
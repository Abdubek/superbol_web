import {signIn} from "@/actions/sign-in";
import {forgotPassword} from "@/actions/forgot-password";
import {resetPassword} from "@/actions/reset-password";
import {signUp} from "@/actions/sign-up";
import {setPassword} from "@/actions/set-password";
import {changePassword} from "@/actions/change-password";

export const actions = {
  signIn,
  signUp,
  forgotPassword,
  resetPassword,
  setPassword,
  changePassword
}
import {signIn} from "@/actions/sign-in";
import {forgotPassword} from "@/actions/forgot-password";
import {resetPassword} from "@/actions/reset-password";
import {signUp} from "@/actions/sign-up";
import {setPassword} from "@/actions/set-password";
import {changePassword} from "@/actions/change-password";
import {application} from "@/actions/application";
import {logout} from "@/actions/log-out";

export const actions = {
  signIn,
  signUp,
  logout,
  forgotPassword,
  resetPassword,
  setPassword,
  changePassword,
  application,
}
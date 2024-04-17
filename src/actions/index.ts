import {signIn} from "@/actions/sign-in";
import {forgotPassword} from "@/actions/forgot-password";
import {resetPassword} from "@/actions/reset-password";
import {signUp} from "@/actions/sign-up";
import {setPassword} from "@/actions/set-password";
import {changePassword} from "@/actions/change-password";
import {application} from "@/actions/application";
import {logout} from "@/actions/log-out";
import {addFavorite, deleteFavorite} from "@/actions/favorites";
import {addRating} from "@/actions/rating";
import {uploadAvatar} from "@/actions/upload-avatar";
import {sendConfirmEmail} from "@/actions/send-confirm-email";
import {confirmEmail} from "@/actions/confirm-email";
import {deleteParticipant} from "@/actions/delete-participant";

export const actions = {
  signIn,
  signUp,
  logout,
  forgotPassword,
  resetPassword,
  setPassword,
  changePassword,
  application,
  addFavorite,
  deleteFavorite,
  addRating,
  uploadAvatar,
  sendConfirmEmail,
  confirmEmail,
  deleteParticipant
}
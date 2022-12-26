import {createAction} from "../../lib/reducer/reducer.js";
import USER_ACTION_TYPES from "./user.types.js";

export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
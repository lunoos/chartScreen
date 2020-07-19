import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId"
import typing from "./typing";
import { combineReducers } from "redux";
import messages from "./messages";


export default combineReducers({
  user,
  contacts,
  activeUserId,
  messages,
  typing
});
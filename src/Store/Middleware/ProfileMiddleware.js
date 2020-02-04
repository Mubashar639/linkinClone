import { getOneProfileByUsername } from "../../Services/api";
import ProfileActions from "../Actions/ProfileActions";

class ProfileMiddleware {
  static getOneProfile = data => {
    return dispatch => {
      console.log("Get one profile");
      dispatch(ProfileActions.getOneProfile(data));
      getOneProfileByUsername(data).then(data => {
        console.log("DATA >>", data);
        dispatch(ProfileActions.getOneProfileSuccess(data));
      }).catch(err => {
        console.log("ERROR >>", err)
      });
    };
  };
}

export default ProfileMiddleware;

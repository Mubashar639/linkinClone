import ProfileActions from "../Actions/ProfileActions";

function ProfileReducer(
  state = {
    profiles: {}
  },
  action
) {
  console.log("data in action", action.data);
  console.log(action.type);

  switch (action.type) {
    case ProfileActions.GET_ONE_PROFILE:
      return {
        ...state
      };
    case ProfileActions.GET_ONE_PROFILE_SUCCESS:
      return {
        ...state,
        profiles: action.data
      };
    default:
      return state;
  }
}

export default ProfileReducer;

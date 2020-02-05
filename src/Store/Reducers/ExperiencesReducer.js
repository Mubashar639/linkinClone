import { ExperiencesActions } from "../Actions";

function ExperiencesReducer(
  state = {
    experiences: {}
  },
  action
) {
  console.log("ExperiencesActions", action.data);
  console.log("ExperiencesActions type", action.type);

  switch (action.type) {
    case ExperiencesActions.GET_EXPERIENCES:
      return {
        ...state
      };
    case ExperiencesActions.GET_EXPERIENCES_SUCCESS:
      return {
        ...state,
        experiences: action.data
      };
    default:
      return state;
  }
}

export default ExperiencesReducer;

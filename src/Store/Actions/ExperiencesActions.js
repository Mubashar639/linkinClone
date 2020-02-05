class ExperiencesActions {
  static GET_EXPERIENCES = "GET_EXPERIENCES";
  static GET_EXPERIENCES_SUCCESS = " GET_EXPERIENCES_SUCCESS";

  static getAllExperiences = data => {
    return {
      type: this.GET_EXPERIENCES,
      data: data
    };
  };

  static getAllExperiencesSuccess = data => {
    return {
      type: this.GET_EXPERIENCES_SUCCESS,
      data: data,
      success: true
    };
  };
}

export default ExperiencesActions;

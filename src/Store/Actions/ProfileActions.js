class ProfileActions {
  static GET_ONE_PROFILE = "GET_ONE_PROFILE";
  static GET_ONE_PROFILE_SUCCESS = "GET_ONE_PROFILE_SUCCESS";

  static getOneProfile = data => {
    return {
      type: this.GET_ONE_PROFILE,
      data: data
    };
  };

  static getOneProfileSuccess = data => {
    return {
      type: this.GET_ONE_PROFILE_SUCCESS,
      data: data,
      success: true
    };
  };
}

export default ProfileActions;

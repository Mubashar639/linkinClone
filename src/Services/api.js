import { API_URL, PROFILES, EXPERIENCES } from "./constAPI";
import PropTypes from "prop-types";

const createAPIQuery = urlGenerator => async (...params) => {
  try {
    const url = urlGenerator(...params);
    const response = await fetch(url, { method: "GET" });
    const json = await response.json();
    return {
      success: true,
      ...json
    };
  } catch {
    return {
      success: false,
      result: [],
      message:
        "There is an issue to get data from server. Please try again later."
    };
  }
};

// Profiles
export const getProfiles = createAPIQuery(
  () => `${API_URL}${PROFILES}`
);

export const getOneProfileByUsername = createAPIQuery(
  username => `${API_URL}${PROFILES}/user/${username}`
);

// Experiences
export const getExperiencesProfile = createAPIQuery(
  username => `${API_URL}${EXPERIENCES}/${username}`
);

createAPIQuery.propTypes = {
  url: PropTypes.string,
  response: PropTypes.object
};

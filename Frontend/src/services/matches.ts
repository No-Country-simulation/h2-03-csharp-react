import wakiBack from "../apis/waki-back";
import { serverError } from "../utils/serverError";

const getLeagues = async () => {
  try {
    const response = await wakiBack.get("/Prediction/GetAllLeagues");
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    serverError(error);
  }
};

const getMatchesForPredictions = async (SearchString?: string) => {
  try {
    const response = await wakiBack.get(
      SearchString
        ? `/Prediction/GetAllMatchesFromLeagueForPredictionsPaginated?PageSize=2000$&SearchString=${SearchString}`
        : "/Prediction/GetAllMatchesFromLeagueForPredictionsPaginated?PageSize=2000"
    );
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    serverError(error);
  }
};

const getMatchesResults = async (SearchString: string) => {
  try {
    const response = await wakiBack.get(
      `/Match/GetAllMatchesResults?PageSize=2000&SearchString=${SearchString}`
    );
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    serverError(error);
  }
};

export default {
  getLeagues,
  getMatchesForPredictions,
  getMatchesResults,
};

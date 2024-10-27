import axios from "axios";
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

const getGames = async () => {
  try {
    const response = await wakiBack.get(
      "/Prediction/GetAllMatchesFromLeagueForPredictionsPaginated?PageSize=2000"
    );
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: error.response?.status || 500,
        message:
          error.response?.data?.message || "Error inesperado en el servidor.",
      };
    }
    return {
      status: 500,
      message: "Error en el servidor.",
    };
  }
};

export default {
  getLeagues,
  getGames,
};

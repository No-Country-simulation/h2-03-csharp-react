import wakiBack from "../apis/waki-back";
import { serverError } from "../utils/serverError";

interface matchBet {
  matchPublicKey: string;
  winnerPrediction: string;
}

export interface createBet {
  listMatch: matchBet[];
}

const createBet = async (data: createBet) => {
  try {
    const response = await wakiBack.post("/Prediction/CreateBet", data);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    serverError(error);
  }
};

export default {
  createBet,
};

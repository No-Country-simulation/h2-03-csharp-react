import wakiBack from "../apis/waki-back";
import { CreateBetList } from "../types/PredictionsTypes";
import { serverError } from "../utils/serverError";

const createBet = async (data: CreateBetList) => {
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

const getAllMyPredictionsOfDay = async () => {
  try {
    const response = await wakiBack.get("/Prediction/GetAllMyPredictionsOfDay");
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
  getAllMyPredictionsOfDay,
};

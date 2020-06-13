import Axios from "axios";
import { apiUrl } from "../config.json";

export function getGenres() {
  return Axios.get(apiUrl + "/genres");
}

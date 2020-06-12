import Axios from "axios";

export function getGenres() {
  return Axios.get("http://localhost:3900/api/genres");
}

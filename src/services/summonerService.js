import http from "./httpService";

export function getSummoner(summonerName) {
  return http.get(
    `http://sheltered-coast-61354.herokuapp.com/api/summoner/by-name/${summonerName}`
  );
}

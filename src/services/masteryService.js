import http from "./httpService";

export function getChampionMastery(summonerName) {
  return http.get(
    `http://sheltered-coast-61354.herokuapp.com/api/champion-mastery/champion-masteries/by-summoner-name/${summonerName}`
  );
}

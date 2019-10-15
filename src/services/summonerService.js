import http from "./httpService";

export async function getSummoner(summonerName) {
  const {
    data: summoner
  } = await http.get(
    `https://sheltered-coast-61354.herokuapp.com/api/summoner/by-name/${summonerName}`
  );
  return summoner;
}
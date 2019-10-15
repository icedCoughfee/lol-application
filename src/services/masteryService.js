import http from "./httpService";

export async function getChampionMastery(summonerName) {
  const {
    data: mastery
  } = await http.get(
    `https://sheltered-coast-61354.herokuapp.com/api/champion-mastery/champion-masteries/by-summoner-name/${summonerName}`
  );
  return mastery;
}
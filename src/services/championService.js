import http from "./httpService";

export function getChampions(version) {
  return http.get(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
  );
}
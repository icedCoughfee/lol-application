import http from "./httpService";

export function getChampions() {
  return http.get(
    "https://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json"
  );
}

import http from "./httpService";

export function getChampions(version) {
  return http.get(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
  );
}

export function getChampion(version, championName) {
  return http.get(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championName}.json`
  );
}

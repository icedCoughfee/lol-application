import { translateInconsistency } from "./constants/inconsistencies";
import _ from "lodash";

const tags = ["Assassin", "Fighter", "Tank", "Mage", "Marksman", "Support"];

export function getChampionTags() {
  return tags;
}

export function getChampionByName(champions, name) {
  return _.find(champions, champion => champion.name == name);
}

export function getChampionStatNames(champions) {
  return champions.length ? _.keys(champions[0].stats) : [];
}

export function getChampionById(champions, id) {
  return _.find(champions, champion => champion.key == id);
}

export function getChampionSplash(champion) {
  const cleanChampId = translateInconsistency(champion.id);
  return `${process.env.REACT_APP_CHAMPION_SPLASH_URL}/${cleanChampId}_0.jpg`;
}

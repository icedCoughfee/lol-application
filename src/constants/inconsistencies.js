const inconsistencies = {
  Fiddlesticks: "FiddleSticks"
};

export function translateInconsistency(s) {
  return s in inconsistencies ? inconsistencies[s] : s;
}

import React, { useState, useEffect } from "react";
import Fade from "react-bootstrap/Fade";
import MasteryGrid from "./masteryGrid";
import Banner from "./common/banner";
import { getMostPlayedChampion } from "../fakeSummoners";
import MatchHistory from "./matchHistory";
import { getChampionMastery } from "../services/masteryService";
import { getSummoner } from "../services/summonerService";
import { getChampionSplash } from "../champions";

const SummonerProfile = props => {
  const [masteries, setMasteries] = useState([]);
  const [summoner, setSummoner] = useState([]);
  const [mostPlayedChampion, setMostPlayedChampion] = useState({});
  const masteryVisbile = useToggleButtonContent(false);
  const matchHistoryVisible = useToggleButtonContent(false);
  const { champions } = props;

  // initialize the depencies
  useEffect(() => {
    const fetchData = async () => {
      const summonerName = props.match.params.name;
      await getChampionMastery(summonerName).then(masteries => {
        setMasteries(masteries);
        const champion = getMostPlayedChampion(masteries, champions);
        setMostPlayedChampion({
          champion: champion,
          img: getChampionSplash(champion)
        });
      });
      const summoner = await getSummoner(summonerName);
      setSummoner(summoner);
    };
    fetchData();
  }, [champions, props.match.params.name]);

  return (
    <React.Fragment>
      <Banner
        title={summoner.name}
        subtitle={""}
        imgSrc={mostPlayedChampion.img}
        classes={"basic-banner"}
      />
      <button
        className="btn btn-primary m-2"
        {...masteryVisbile}
        aria-controls="masteryGrid"
        aria-expanded={masteryVisbile}
      >
        Champion Mastery
      </button>
      <button
        className="btn btn-primary m-2"
        {...matchHistoryVisible}
        aria-controls="matchHistory"
        aria-expanded={matchHistoryVisible}
      >
        Match History
      </button>
      <Fade in={masteryVisbile.value}>
        <div className="fade" id="masteryGrid">
          <MasteryGrid champions={champions} masteries={masteries} />
        </div>
      </Fade>
      <Fade in={matchHistoryVisible.value}>
        <div className="fade" id="matchHistory">
          <MatchHistory />
        </div>
      </Fade>
    </React.Fragment>
  );
};

const useToggleButtonContent = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleClick = () => {
    setValue(!value);
  };

  return {
    value,
    onClick: handleClick
  };
};

export default SummonerProfile;

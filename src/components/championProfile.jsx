import React, { useState, useEffect } from "react";
import Banner from "./common/banner";
import { getChampion } from "../services/championService";
import { getChampionSplash } from "../champions";
import _ from "lodash";

const ChampionProfile = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [champion, setChampion] = useState({});

  useEffect(() => {
    const fetchChampion = async () => {
      setIsLoading(true);
      const { match, version } = props;
      const championName = match.params.name;
      await getChampion(version, championName).then(({ data: response }) => {
        setChampion(response.data[championName]);
        setIsLoading(false);
      });
    };

    fetchChampion();
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <React.Fragment>
          <Banner
            title={champion.name}
            subtitle={champion.title}
            imgSrc={getChampionSplash(champion)}
            classes={"basic-banner"}
          />
          <p>{champion.blurb}</p>
          <p>base stats</p>
          <ul>
            {Object.entries(champion.stats).map(statKV => {
              const statName = statKV[0];
              const statValue = statKV[1];
              return (
                <li key={statName}>
                  {statName}:
                  {statName.includes("perlevel")
                    ? `${statValue} (${statValue * 16} at level 16)`
                    : statValue}
                </li>
              );
            })}
          </ul>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ChampionProfile;

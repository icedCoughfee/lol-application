import React from "react";
import CollapseAccordion from "./common/collapseAccordion";
import { getMatches } from "../matches";

const MatchHistory = props => {
  const matches = getMatches();
  const MHContent = props => {
    const { item: match } = props;
    return <p>{match.about}</p>;
  };
  return (
    <CollapseAccordion
      items={matches}
      id={"exampleAccordion"}
      labelProperty={"first"}
      ContentType={MHContent}
    />
  );
};

export default MatchHistory;

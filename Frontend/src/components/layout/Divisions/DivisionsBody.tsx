import React from "react";
import Rankings from "./Rankings";
// import Rewards from "./Rewards";
// import Quests from "./Quests";

interface DivisionProps {
  view: string;
}

const DivisionsBody: React.FC<DivisionProps> = ({ view }) => {
  let bodyComponent;
  if (view === "rankings") {
    bodyComponent = <Rankings />;
  } // else if (view === "rewards") {
  //   bodyComponent = <Rewards/>;
  // } else if (view === "quests") {
  //   bodyComponent = <Quests />;
  // }
  return <div>{bodyComponent}</div>;
};

export default DivisionsBody;

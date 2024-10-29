import { leagues } from "./leagues";

const setLeagueIcon = (league: string | undefined) => {
  let leagueIcon = "";
  leagues.forEach((element) => {
    if (league == element.name) {
      leagueIcon = element.src as string;
    }
  });
  return leagueIcon;
};

export default setLeagueIcon;

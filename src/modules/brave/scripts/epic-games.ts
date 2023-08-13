import runBrowserEpicGames from "../../../components/scripts/browser/epic-games";
import SoftwareNameConstants from "../../../core/constants/software-names";

export default async function runBraveEpicGames() {
  await runBrowserEpicGames(SoftwareNameConstants.BRAVE);
}

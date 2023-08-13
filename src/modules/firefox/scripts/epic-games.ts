import runBrowserEpicGames from "../../../components/scripts/browser/epic-games";
import SoftwareNameConstants from "../../../core/constants/software-names";

export default async function runFirefoxEpicGames() {
  await runBrowserEpicGames(SoftwareNameConstants.FIREFOX);
}

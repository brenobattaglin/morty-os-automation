import runBrowserPrimeGaming from "../../../components/scripts/browser/prime-gaming";
import SoftwareNameConstants from "../../../core/constants/software-names";
export default async function runFirefoxPrimeGaming() {
  await runBrowserPrimeGaming(SoftwareNameConstants.FIREFOX);
}

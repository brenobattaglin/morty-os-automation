import { Key, keyboard, sleep } from "@nut-tree/nut-js";
import MacosUtils from "../../../common/utils/macos";
import SoftwareNameConstants from "../../../common/constants/software-names";
import KeyboardUtils from "../../../common/utils/keyboard-utils";
import BrowserUtils from "../../../common/utils/browser-utils";
import UrlConstants from "../../../common/constants/url";

export default async function runFirefoxPrimeGaming() {
  await MacosUtils.openApplication(SoftwareNameConstants.FIREFOX);

  const superKey = await KeyboardUtils.getSuperKey();
  await BrowserUtils.openNewTab(superKey, UrlConstants.PRIME_GAMING);

  await sleep(10000);
  await keyboard.pressKey(superKey, Key.F);
  await keyboard.releaseKey(superKey, Key.F);
  await keyboard.type("New game each week, free with Prime");
}

import { Key, keyboard, sleep } from "@nut-tree/nut-js";
import SoftwareNameConstants from "../constants/software-names.js";
import UrlConstants from "../constants/url.js";
import BrowserUtils from "../utils/browser-utils.js";
import KeyboardUtils from "../utils/keyboard-utils.js";
import MacosUtils from "../utils/macos.js";

export default async function runFirefoxEpicGames() {
  await MacosUtils.openApplication(SoftwareNameConstants.FIREFOX);

  const superKey = await KeyboardUtils.getSuperKey();
  await BrowserUtils.openNewTab(superKey, UrlConstants.EPIC_GAMES);

  await sleep(10000);
  await keyboard.pressKey(superKey, Key.F);
  await keyboard.releaseKey(superKey, Key.F);
  await keyboard.type("Free now");
}

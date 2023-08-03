import { Key, keyboard, sleep } from "@nut-tree/nut-js";
import MacosUtils from "../../../core/utils/macos";
import SoftwareNameConstants from "../../../core/constants/software-names";
import UrlConstants from "../../../core/constants/url";
import KeyboardUtils from "../../../core/utils/keyboard-utils";
import BrowserUtils from "../../../core/utils/browser-utils";

export default async function runFirefoxEpicGames() {
  await MacosUtils.openApplication(SoftwareNameConstants.FIREFOX);

  const superKey = await KeyboardUtils.getSuperKey();
  await BrowserUtils.openNewTab(superKey, UrlConstants.EPIC_GAMES);

  await sleep(10000);
  await keyboard.pressKey(superKey, Key.F);
  await keyboard.releaseKey(superKey, Key.F);
  await keyboard.type("Free now");
}

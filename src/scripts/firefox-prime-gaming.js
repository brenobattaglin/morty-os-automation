import { keyboard, Key, sleep, mouse, screen } from "@nut-tree/nut-js";
import KeyboardUtils from "../utils/keyboard-utils.js";
import BrowserUtils from "../utils/browser-utils.js";
import MacosHelper from "../helpers/macos.js";
import SoftwareNameConstants from "../constants/software.js";
import UrlConstants from "../constants/url.js";

export default async function runFirefoxPrimeGaming() {
  MacosHelper.openSpotlight();
  await keyboard.type(SoftwareNameConstants.FIREFOX);
  await KeyboardUtils.pressEnter();

  const superKey = await KeyboardUtils.getSuperKey();

  await BrowserUtils.openNewTab(superKey);
  await keyboard.type(UrlConstants.PRIME_GAMING);
  await keyboard.type(Key.Enter);

  await sleep(5000);
  await keyboard.pressKey(superKey, Key.F);
  await keyboard.releaseKey(superKey, Key.F);
  await keyboard.type("New game each week, free with Prime");
}

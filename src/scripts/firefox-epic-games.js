import { keyboard, Key, sleep, mouse, screen } from "@nut-tree/nut-js";
import KeyboardUtils from "../utils/keyboard-utils.js";
import BrowserUtils from "../utils/browser-utils.js";
import MacosHelper from "../helpers/macos.js";

export default async function runFirefoxEpicGames() {
  MacosHelper.openSpotlight();
  await keyboard.type("firefox");
  await keyboard.type(Key.Enter);

  await KeyboardUtils.pressEnter();

  await BrowserUtils.openNewTab(superKey);
  await keyboard.type("https://store.epicgames.com/en-US/");
  await keyboard.type(Key.Enter);

  await sleep(5000);
  await keyboard.pressKey(superKey, Key.F);
  await keyboard.releaseKey(superKey, Key.F);
  await keyboard.type("Free now");
}

import { keyboard, Key, sleep, mouse, screen } from "@nut-tree/nut-js";
import KeyboardUtils from "../utils/keyboard-utils.js";

export default async function runFirefoxEpicGames() {
  const superKey =
    process.platform === "darwin" ? Key.LeftSuper : Key.LeftControl;

  await keyboard.type(superKey, Key.Space);
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

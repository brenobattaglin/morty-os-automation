import { keyboard, Key } from "@nut-tree/nut-js";
import KeyboardUtils from "./keyboard-utils.js";

export default class MacosUtils {
  static async openSpotlight() {
    await keyboard.type(Key.LeftSuper, Key.Space);
  }

  static async openApplication(appName) {
    this.openSpotlight();
    await keyboard.type(appName);
    await KeyboardUtils.pressEnter();
  }
}

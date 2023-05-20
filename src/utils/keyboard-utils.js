import { keyboard, Key } from "@nut-tree/nut-js";

export default class KeyboardUtils {
  static async pressEnter() {
    await keyboard.pressKey(Key.Enter);
    await keyboard.releaseKey(Key.Enter);
  }
}

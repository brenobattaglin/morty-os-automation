import { keyboard, Key } from "@nut-tree/nut-js";
export default class BrowserUtils {
  static async openNewTab(superKey, url) {
    keyboard.type(superKey, Key.T);
    await keyboard.type(url);
    await keyboard.type(Key.Enter);
  }
}

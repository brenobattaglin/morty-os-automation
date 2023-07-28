import { keyboard, Key } from "@nut-tree/nut-js";
export default class BrowserUtils {
  static async openNewTab(superKey: Key, url: string) {
    keyboard.type(superKey, Key.T);
    await keyboard.type(url);
    await keyboard.type(Key.Enter);
  }
}

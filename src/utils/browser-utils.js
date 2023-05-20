import { keyboard, Key } from "@nut-tree/nut-js";
export default class BrowserUtils {
  static async openNewTab(superKey) {
    keyboard.type(superKey, Key.T);
  }
}

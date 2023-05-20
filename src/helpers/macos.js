import { keyboard, Key } from "@nut-tree/nut-js";

export default class MacosHelper {
  static async openSpotlight() {
    await keyboard.type(Key.LeftSuper, Key.Space);
  }
}

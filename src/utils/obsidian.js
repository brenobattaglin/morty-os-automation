import { keyboard, Key } from "@nut-tree/nut-js";

export default class ObsidianUtils {
  static async openCommandPalette(superKey) {
    await keyboard.type(superKey, Key.P);
  }

  static async runCommand(superKey, command) {
    await this.openCommandPalette(superKey);
    await keyboard.type(command);
    await keyboard.type(Key.Enter);
  }
}

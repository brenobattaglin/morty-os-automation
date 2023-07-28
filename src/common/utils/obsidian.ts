import { keyboard, Key } from "@nut-tree/nut-js";

export default class ObsidianUtils {
  static async openCommandPalette(superKey: Key) {
    await keyboard.type(superKey, Key.P);
  }

  static async runCommand(superKey: Key, command: string) {
    await this.openCommandPalette(superKey);
    await keyboard.type(command);
    await keyboard.type(Key.Enter);
  }
}

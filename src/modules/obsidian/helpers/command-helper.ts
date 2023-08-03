import { Key, keyboard } from "@nut-tree/nut-js";
export class ObsidianCommands {
  static DAILY_NOTE = "Periodic Notes: Open daily note";
  static WEEKLY_NOTE = "Periodic Notes: Open weekly note";
  static QUICK_ADD = "QuickAdd: Run QuickAdd";
}

export class ObsidianCustomCommands {
  static QUICK_ADD_ADD_MOVIE = "Add Movie";
  static QUICK_ADD_ADD_TV_SHOW = "Add Show";
}

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

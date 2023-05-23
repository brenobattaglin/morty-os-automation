import { sleep } from "@nut-tree/nut-js";
import ObsidianCommandsConstants from "../constants/obsidian-commands.js";
import SoftwareNameConstants from "../constants/software-names.js";
import KeyboardUtils from "../utils/keyboard-utils.js";
import MacosUtils from "../utils/macos.js";
import ObsidianUtils from "../utils/obsidian.js";

export default async function runObsidianDailyNote() {
  await MacosUtils.openApplication(SoftwareNameConstants.OBSIDIAN);
  const superKey = await KeyboardUtils.getSuperKey();

  await sleep(7000);
  await ObsidianUtils.runCommand(
    superKey,
    ObsidianCommandsConstants.DAILY_NOTE
  );
}

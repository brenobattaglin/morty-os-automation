import { sleep } from "@nut-tree/nut-js";
import { ObsidianCommands } from "../constants/commands";
import MacosUtils from "../../../core/utils/macos-utils";
import KeyboardUtils from "../../../core/utils/keyboard-utils";
import ObsidianUtils from "../../../core/utils/obsidian-utils";
import SoftwareNameConstants from "../../../core/constants/software-names";

export default async function runObsidianDailyNote() {
  await MacosUtils.openApplication(SoftwareNameConstants.OBSIDIAN);
  const superKey = await KeyboardUtils.getSuperKey();

  await sleep(7000);
  await ObsidianUtils.runCommand(superKey, ObsidianCommands.DAILY_NOTE);
}

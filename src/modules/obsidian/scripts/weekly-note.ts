import { sleep } from "@nut-tree/nut-js";
import SoftwareNameConstants from "../../../core/constants/software-names";
import KeyboardUtils from "../../../core/utils/keyboard-utils";
import MacosUtils from "../../../core/utils/macos-utils";
import ObsidianUtils, { ObsidianCommands } from "../helpers/command-helper";

export default async function runObsidianWeeklyNote() {
  await MacosUtils.openApplication(SoftwareNameConstants.OBSIDIAN);
  const superKey = await KeyboardUtils.getSuperKey();

  await sleep(7000);
  await ObsidianUtils.runCommand(superKey, ObsidianCommands.WEEKLY_NOTE);
}

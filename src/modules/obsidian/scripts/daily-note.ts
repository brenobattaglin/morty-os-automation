import { sleep } from "@nut-tree/nut-js";
import MacosUtils from "../../../common/utils/macos";
import SoftwareNameConstants from "../../../common/constants/software-names";
import KeyboardUtils from "../../../common/utils/keyboard-utils";
import ObsidianUtils from "../../../common/utils/obsidian";
import { ObsidianCommands } from "../constants/commands";

export default async function runObsidianDailyNote() {
  await MacosUtils.openApplication(SoftwareNameConstants.OBSIDIAN);
  const superKey = await KeyboardUtils.getSuperKey();

  await sleep(7000);
  await ObsidianUtils.runCommand(superKey, ObsidianCommands.DAILY_NOTE);
}

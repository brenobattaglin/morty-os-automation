import { sleep } from "@nut-tree/nut-js";
import MacosUtils from "../../../components/utils/macos-utils";
import KeyboardUtils from "../../../components/utils/keyboard-utils";
import ObsidianCommandHelper, {
  ObsidianCommands,
} from "../helpers/command-helper";
import SoftwareNameConstants from "../../../core/constants/software-names";

export default async function runObsidianDailyNote() {
  await MacosUtils.openApplication(SoftwareNameConstants.OBSIDIAN);
  const superKey = await KeyboardUtils.getSuperKey();

  await sleep(7000);
  await ObsidianCommandHelper.runCommand(superKey, ObsidianCommands.DAILY_NOTE);
}

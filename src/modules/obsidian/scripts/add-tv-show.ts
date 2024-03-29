import { keyboard, sleep } from "@nut-tree/nut-js";
import { input } from "@inquirer/prompts";
import KeyboardUtils from "../../../components/utils/keyboard-utils";
import ObsidianUtils, {
  ObsidianCommands,
  ObsidianCustomCommands,
} from "../helpers/command-helper";
import MacosUtils from "../../../components/utils/macos-utils";
import SoftwareNameConstants from "../../../core/constants/software-names";

export default async function runObsidianAddTvShow() {
  const tvShow = await input({ message: "What's the name of the TV show?" });

  await MacosUtils.openApplication(SoftwareNameConstants.OBSIDIAN);
  const superKey = await KeyboardUtils.getSuperKey();
  await sleep(7000);

  await ObsidianUtils.runCommand(superKey, ObsidianCommands.QUICK_ADD);

  await sleep(2000);
  await keyboard.type(ObsidianCustomCommands.QUICK_ADD_ADD_TV_SHOW);
  await KeyboardUtils.pressEnter();

  await sleep(2000);
  await keyboard.type(tvShow);
  await KeyboardUtils.pressEnter();
}

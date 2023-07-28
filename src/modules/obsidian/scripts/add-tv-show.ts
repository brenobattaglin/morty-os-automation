import { keyboard, sleep } from "@nut-tree/nut-js";
import { input } from "@inquirer/prompts";
import MacosUtils from "../../../common/utils/macos";
import SoftwareNameConstants from "../../../common/constants/software-names";
import KeyboardUtils from "../../../common/utils/keyboard-utils";
import ObsidianUtils from "../../../common/utils/obsidian";
import {
  ObsidianCommands,
  ObsidianCustomCommands,
} from "../constants/commands";

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

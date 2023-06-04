import { keyboard, sleep } from "@nut-tree/nut-js";
import SoftwareNameConstants from "../constants/software-names";
import KeyboardUtils from "../utils/keyboard-utils";
import MacosUtils from "../utils/macos";
import ObsidianUtils from "../utils/obsidian";
import { input } from "@inquirer/prompts";
import {
  ObsidianCommands,
  ObsidianCustomCommands,
} from "../constants/obsidian";

export default async function runObsidianAddMovie() {
  const movie = await input({ message: "What's the name of the movie?" });

  await MacosUtils.openApplication(SoftwareNameConstants.OBSIDIAN);
  const superKey = await KeyboardUtils.getSuperKey();
  await sleep(7000);

  await ObsidianUtils.runCommand(superKey, ObsidianCommands.QUICK_ADD);

  await sleep(2000);
  await keyboard.type(ObsidianCustomCommands.QUICK_ADD_ADD_MOVIE);
  await KeyboardUtils.pressEnter();

  await sleep(2000);
  await keyboard.type(movie);
  await KeyboardUtils.pressEnter();
}

import { input } from "@inquirer/prompts";
import { keyboard, sleep } from "@nut-tree/nut-js";
import SoftwareNameConstants from "../../../core/constants/software-names";
import KeyboardUtils from "../../../components/utils/keyboard-utils";
import MacosUtils from "../../../components/utils/macos-utils";
import ObsidianUtils, {
  ObsidianCommands,
  ObsidianCustomCommands,
} from "../helpers/command-helper";

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

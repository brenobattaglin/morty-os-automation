import { Separator, select } from "@inquirer/prompts";
import ConsoleGroupHelper, { ConsoleScriptHelper } from "./helpers/console.js";
import runFirefoxEpicGames from "./scripts/firefox-epic-games.js";
import runFirefoxPrimeGaming from "./scripts/firefox-prime-gaming.js";
import runObsidianDailyNote from "./scripts/obsidian-daily-note.js";
import runObsidianWeeklyNote from "./scripts/obsidian-weekly-note.js";
import {
  ScriptDescriptions,
  ScriptGroups,
  ScriptKeys,
  ScriptNames,
} from "./constants/scripts.js";

class ConsoleApplication {
  async run() {
    await this.printTitle();
    await this.printAscii();

    const answer = await this.showScriptGroups();
    await this.runScriptsAccordingToAnswer(answer);
  }

  private async printTitle() {
    const title = "------MORTY OS AUTOMATION------\n";
    console.log(title);
  }

  private async printAscii() {
    const mortyAscii =
      "⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀\n" +
      "⠀⠀⠀⠀⠀⢀⡠⠐⠁⠀⠀⠀⠀⠀⠀⠑⠠⡀⠀⠀⠀⠀⠀\n" +
      "⠀⠀⠀⡠⠊⠁⠀⠀⠀⠀⠀⣀⡀⠀⣀⣀⡀⠈⢢⠀⠀⠀⠀\n" +
      "⠀⠀⠜⠀⠀⠀⠀⡀⠔⠊⠁⠀⠀⠀⠀⠀⠀⢁⡺⡀⠀⠀⠀\n" +
      "⠀⡌⠀⠀⠀⢀⠊⠀⠀⠀⠠⡐⠈⢀⠀⠀⠀⠠⠂⠈⠁⠀⠀\n" +
      "⢠⠀⠀⠀⢠⠁⠀⠀⠀⡀⠀⠀⠀⠀⠀⠄⠀⠁⠀⠀⠀⠂⠐\n" +
      "⢸⠀⠀⠀⡄⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⢸⠀⢂⠀⠀⠀⠀⣰\n" +
      "⠀⠀⠀⠀⡇⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠂⠀⠀⠪⠀⠀⠈⢸\n" +
      "⠀⢄⠀⠀⡇⠀⠀⠀⠀⠀⠈⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⢸\n" +
      "⠀⠀⠠⠀⢠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠆\n" +
      "⠀⠀⠀⠁⠚⠢⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠈⠁⠀⢀⠊⠀\n" +
      "⠀⠀⠀⠀⠀⠀⠈⠢⢀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠔⠁⠀⠀\n" +
      "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠒⠒⠒⠂⠀⠉⠀⠀⠀⠀⠀⠀";
    console.log(mortyAscii);
  }

  private async showScriptGroups() {
    return select({
      message: "Select the action",
      choices: [
        ConsoleGroupHelper.getGroup(ScriptGroups.FIREFOX),
        ConsoleScriptHelper.getEntry(
          ScriptNames.FIREFOX_FREE_GAMES,
          ScriptKeys.FIREFOX_FREE_GAMES,
          ScriptDescriptions.FIREFOX_FREE_GAMES
        ),
        new Separator(),
        ConsoleGroupHelper.getGroup(ScriptGroups.OBSIDIAN),
        ConsoleScriptHelper.getEntry(
          ScriptNames.OBSIDIAN_DAILY_NOTE,
          ScriptKeys.OBSIDIAN_DAILY_NOTE,
          ScriptDescriptions.OBSIDIAN_DAILY_NOTE
        ),
        ConsoleScriptHelper.getEntry(
          ScriptNames.OBSIDIAN_WEEKLY_NOTE,
          ScriptKeys.OBSIDIAN_WEEKLY_NOTE,
          ScriptDescriptions.OBSIDIAN_WEEKLY_NOTE
        ),
      ],
    });
  }

  private async runScriptsAccordingToAnswer(answer: string) {
    switch (answer) {
      case ScriptKeys.FIREFOX_FREE_GAMES:
        await runFirefoxEpicGames();
        await runFirefoxPrimeGaming();
        break;
      case ScriptKeys.OBSIDIAN_DAILY_NOTE:
        await runObsidianDailyNote();
        break;
      case ScriptKeys.OBSIDIAN_WEEKLY_NOTE:
        await runObsidianWeeklyNote();
        break;
      default:
        break;
    }
  }
}

const app = new ConsoleApplication();
app.run();

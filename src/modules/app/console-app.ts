import { configDotenv } from "dotenv";
import {
  ScriptDescriptions,
  ScriptGroupNames,
  ScriptKeys,
  ScriptNames,
} from "./presentation/scripts-names-manager";
import runObsidianAddGame from "../obsidian/scripts/add-game";
import runFirefoxPrimeGaming from "../firefox/scripts/prime-gaming";
import runFirefoxEpicGames from "../firefox/scripts/epic-games";
import runObsidianAddMovie from "../obsidian/scripts/add-movie";
import runObsidianAddTvShow from "../obsidian/scripts/add-tv-show";
import runObsidianDailyNote from "../obsidian/scripts/daily-note";
import runObsidianWeeklyNote from "../obsidian/scripts/weekly-note";
import {} from "./presentation/scripts-names-manager";
import { Separator, select } from "@inquirer/prompts";
import { printAsciiArt } from "./presentation/ascii-manager";
import {
  FirefoxScriptGroup,
  ObsidianScriptGroup,
} from "./presentation/script-groups-manager";

export class ConsoleApplication {
  async run() {
    await configDotenv();

    await this.printTitle();
    await printAsciiArt();

    const answer = await this.showScriptGroups();
    await this.runScript(answer);
  }

  private async printTitle() {
    return "------MORTY OS AUTOMATION------\n";
  }

  private async showScriptGroups() {
    const firefox = new FirefoxScriptGroup();
    const obsidian = new ObsidianScriptGroup();
    return select({
      message: "Select the action",
      pageSize: 10,
      choices: [
        firefox.name,
        ...firefox.options,
        new Separator(),
        obsidian.name,
        ...obsidian.options,
      ],
    });
  }

  private async runScript(answer: string) {
    switch (answer) {
      case ScriptKeys.FIREFOX_FREE_GAMES:
        await runFirefoxEpicGames();
        await runFirefoxPrimeGaming();
        break;
      case ScriptKeys.OBSIDIAN_ADD_GAME:
        await runObsidianAddGame();
        break;
      case ScriptKeys.OBSIDIAN_ADD_MOVIE:
        await runObsidianAddMovie();
        break;
      case ScriptKeys.OBSIDIAN_ADD_TV_SHOW:
        await runObsidianAddTvShow();
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

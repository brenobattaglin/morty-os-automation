import { configDotenv } from "dotenv";
import {
  ScriptDescriptions,
  ScriptGroupNames,
  ScriptKeys,
  ScriptNames,
} from "./core/presentation/scripts-names-manager";
import runObsidianAddGame from "./modules/obsidian/scripts/add-game";
import runFirefoxPrimeGaming from "./modules/firefox/scripts/prime-gaming";
import runFirefoxEpicGames from "./modules/firefox/scripts/epic-games";
import runObsidianAddMovie from "./modules/obsidian/scripts/add-movie";
import runObsidianAddTvShow from "./modules/obsidian/scripts/add-tv-show";
import runObsidianDailyNote from "./modules/obsidian/scripts/daily-note";
import runObsidianWeeklyNote from "./modules/obsidian/scripts/weekly-note";
import {} from "./core/presentation/scripts-names-manager";
import { Separator, select } from "@inquirer/prompts";
import { printAsciiArt } from "./core/presentation/ascii-manager";
import {
  FirefoxScriptGroup,
  ObsidianScriptGroup,
} from "./core/presentation/script-groups-manager";

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

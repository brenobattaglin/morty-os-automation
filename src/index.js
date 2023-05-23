import select, { Separator } from "@inquirer/select";
import ScriptGroupHelper from "./helpers/script-group.js";
import runFirefoxEpicGames from "./scripts/firefox-epic-games.js";
import runFirefoxPrimeGaming from "./scripts/firefox-prime-gaming.js";
import runObsidianDailyNote from "./scripts/obsidian-daily-note.js";
import runObsidianWeeklyNote from "./scripts/obsidian-weekly-note.js";
class ScriptGroups {
  static FIREFOX = "Firefox";
  static OBSIDIAN = "Obsidian";
}

class ScriptNames {
  static FIREFOX_FREE_GAMES = "Get free games";
  static OBSIDIAN_DAILY_NOTE = "Open daily note";
  static OBSIDIAN_WEEKLY_NOTE = "Open weekly note";
}

class ScriptKeys {
  static FIREFOX_FREE_GAMES = "firefox-free-games";
  static OBSIDIAN_DAILY_NOTE = "obsidian-daily-note";
  static OBSIDIAN_WEEKLY_NOTE = "obsidian-weekly-notes";
}

const title = "------MORTY OS AUTOMATION------\n";
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
console.log(title);
console.log(mortyAscii);

const answer = await select({
  message: "Select the action",
  choices: [
    ScriptGroupHelper.createGroup(ScriptGroups.FIREFOX),
    {
      name: ScriptNames.FIREFOX_FREE_GAMES,
      value: ScriptKeys.FIREFOX_FREE_GAMES,
      description: "Open Epic Games' and Amazon Prime's free games sections",
    },
    new Separator(),
    ScriptGroupHelper.createGroup(ScriptGroups.OBSIDIAN),
    {
      name: ScriptNames.OBSIDIAN_DAILY_NOTE,
      value: ScriptKeys.OBSIDIAN_DAILY_NOTE,
      description: "Open daily note",
    },
    {
      name: ScriptNames.OBSIDIAN_WEEKLY_NOTE,
      value: ScriptKeys.OBSIDIAN_WEEKLY_NOTE,
      description: "Open weekly note",
    },
  ],
});

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

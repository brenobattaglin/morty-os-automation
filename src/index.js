import select, { Separator } from "@inquirer/select";
import runFirefoxEpicGames from "./scripts/firefox-epic-games.js";
import runFirefoxPrimeGaming from "./scripts/firefox-prime-gaming.js";
import ScriptGroupHelper from "./helpers/script-group.js";

class ScriptGroups {
  static FIREFOX = "Firefox";
  static OBSIDIAN = "Obsidian";
}

class ScriptNames {
  static FIREFOX_FREE_GAMES = "Get free games";
  static OBSIDIAN_DAILY_NOTES = "Create daily notes";
  static OBSIDIAN_WEEKLY_NOTES = "Create weekly notes";
}

const ScriptKeys = Object.freeze({
  FIREFOX_FREE_GAMES: "firefox-free-games",
});

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
  ],
});

switch (answer) {
  case ScriptKeys.FIREFOX_FREE_GAMES:
    await runFirefoxEpicGames();
    await runFirefoxPrimeGaming();
    break;
  default:
    break;
}

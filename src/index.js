import select, { Separator } from "@inquirer/select";
import runFirefoxEpicGames from "./scripts/firefox-epic-games.js";

const ScriptGroups = Object.freeze({
  FIREFOX: "Firefox",
  EPIC_GAMES: "Epic Games",
});

const ScriptKeys = Object.freeze({
  FIREFOX_EPIC_GAMES: "firefox-epic-games",
});

const answer = await select({
  message: "Select a package manager",
  choices: [
    {
      name: ScriptGroups.FIREFOX,
      value: "",
      disabled: "-",
    },
    {
      name: ScriptGroups.EPIC_GAMES,
      value: ScriptKeys.FIREFOX_EPIC_GAMES,
      description: "Open Epic Games' free games section",
    },
    new Separator(),
  ],
});

switch (answer) {
  case ScriptKeys.FIREFOX_EPIC_GAMES:
    await runFirefoxEpicGames();
    break;
  default:
    ScriptRunnerUtils.runScript("scripts/firefox-epic-games");
    break;
}

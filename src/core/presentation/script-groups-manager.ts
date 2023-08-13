import {
  ScriptDescriptions,
  ScriptGroupNames,
  ScriptKeys,
  ScriptNames,
} from "./scripts-names-manager";

interface ScriptOption {
  name: string;
  value: string;
  description: string;
}

class ScriptGroups {
  getName(name: string) {
    return {
      name: name,
      value: "",
      disabled: "-",
    };
  }

  getOptions(options: { name: string; value: string; description: string }[]) {
    return options;
  }
}
export class BraveScriptGroup extends ScriptGroups {
  get name() {
    return this.getName(ScriptGroupNames.BRAVE);
  }

  get options() {
    return this.getOptions([
      {
        name: ScriptNames.BRAVE_FREE_GAMES,
        value: ScriptKeys.BRAVE_FREE_GAMES,
        description: ScriptDescriptions.BRAVE_FREE_GAMES,
      },
    ]);
  }
}

export class FirefoxScriptGroup extends ScriptGroups {
  get name() {
    return this.getName(ScriptGroupNames.FIREFOX);
  }

  get options() {
    return this.getOptions([
      {
        name: ScriptNames.FIREFOX_FREE_GAMES,
        value: ScriptKeys.FIREFOX_FREE_GAMES,
        description: ScriptDescriptions.FIREFOX_FREE_GAMES,
      },
    ]);
  }
}

export class ObsidianScriptGroup extends ScriptGroups {
  get name() {
    return this.getName(ScriptGroupNames.OBSIDIAN);
  }

  get options() {
    return this.getOptions([
      {
        name: ScriptNames.OBSIDIAN_ADD_GAME,
        value: ScriptKeys.OBSIDIAN_ADD_GAME,
        description: ScriptDescriptions.OBSIDIAN_ADD_GAME,
      },
      {
        name: ScriptNames.OBSIDIAN_ADD_MOVIE,
        value: ScriptKeys.OBSIDIAN_ADD_MOVIE,
        description: ScriptDescriptions.OBSIDIAN_ADD_MOVIE,
      },
      {
        name: ScriptNames.OBSIDIAN_ADD_TV_SHOW,
        value: ScriptKeys.OBSIDIAN_ADD_TV_SHOW,
        description: ScriptDescriptions.OBSIDIAN_ADD_TV_SHOW,
      },
      {
        name: ScriptNames.OBSIDIAN_DAILY_NOTE,
        value: ScriptKeys.OBSIDIAN_DAILY_NOTE,
        description: ScriptDescriptions.OBSIDIAN_DAILY_NOTE,
      },
      {
        name: ScriptNames.OBSIDIAN_WEEKLY_NOTE,
        value: ScriptKeys.OBSIDIAN_WEEKLY_NOTE,
        description: ScriptDescriptions.OBSIDIAN_WEEKLY_NOTE,
      },
    ]);
  }
}

export default class ConsoleGroupHelper {
  static getGroup(name: string) {
    return {
      name: name,
      value: "",
      disabled: "-",
    };
  }
}

export class ConsoleScriptHelper {
  static getEntry(name: string, value: string, description: string) {
    return {
      name: name,
      value: value,
      description: description,
    };
  }
}

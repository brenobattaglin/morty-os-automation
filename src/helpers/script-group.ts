export default class ScriptGroupHelper {
  static createGroup(name: string) {
    return {
      name: name,
      value: "",
      disabled: "-",
    };
  }
}

import fetch from "node-fetch";

export class HtmlUtils {
  static async fetchHTML(url: string): Promise<string> {
    const response = await fetch(url);

    return response.text();
  }
}

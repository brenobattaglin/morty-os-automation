import cheerio from "cheerio";
import { HtmlUtils } from "../utils/html-utils";
import MacosUtils from "../utils/macos";
import KeyboardUtils from "../utils/keyboard-utils";
import BrowserUtils from "../utils/browser-utils";
import UrlConstants from "../constants/url";
import SoftwareNameConstants from "../constants/software-names";
import { input } from "@inquirer/prompts";
import { sleep } from "@nut-tree/nut-js";
import fs from "fs-extra";

export default async function runObsidianAddGame() {
  const search = await input({ message: "Enter the name of the game" });
  await openTheGamesDbWebsite(search);

  const gameUrl = await input({
    message: "Paste the game URL (the one that contains the game ID.) ",
  });

  const markdown = await getMarkdownContent(gameUrl);
  await createMarkdownFile(markdown);
  console.log("Done");
}

async function getMarkdownContent(gameUrl: string) {
  const html = await HtmlUtils.fetchHTML(gameUrl);
  const $ = cheerio.load(html);

  const title = $("div.card-header").text().trim().replace(":", " -");
  const about = $("p.game-overview").text().trim();

  const genres = $('p:contains("Genre(s): ")')
    .text()
    .replace("Genre(s): ", "\n - ")
    .replace(/\|/g, "\n -");

  const year = $('p:contains("ReleaseDate:")')
    .text()
    .replace("ReleaseDate: ", "");

  const cover = $("img.card-img-top").prop("src");

  const developer = $('p:contains("Developer(s):")')
    .text()
    .replace("Developer(s): ", "")
    .trim();

  const publisher = $('p:contains("Publishers(s):")')
    .text()
    .replace("Publishers(s): ", "")
    .trim();

  const platform = $('p:contains("Platform:")')
    .text()
    .replace("Platform: ", "")
    .trim();

  return {
    title: title,
    content:
      "---" +
      "\ntags: games" +
      "\ndateBeaten: " +
      "\ntitle: " +
      title +
      "\ncategory: " +
      genres +
      "\nyear: " +
      year +
      "\ncover: " +
      cover +
      "\ndeveloper: " +
      developer +
      "\npublisher: " +
      publisher +
      "\nplatform: " +
      platform +
      "\nfavorite: " +
      "\n---" +
      "\n## About" +
      "\n" +
      about,
  };
}

async function openTheGamesDbWebsite(search: string) {
  console.log(
    "After you find the game on the website, come back and enter the Game's page URL that you've found."
  );

  await sleep(5000);

  await MacosUtils.openApplication(SoftwareNameConstants.FIREFOX);

  const superKey = await KeyboardUtils.getSuperKey();

  const gamesDbUrl =
    UrlConstants.THE_GAMES_DB_SEARCH + encodeURIComponent(search);

  await BrowserUtils.openNewTab(superKey, gamesDbUrl);
}

async function createMarkdownFile(markdown: {
  title: string;
  content: string;
}) {
  const filePath =
    process.env.OBSIDIAN_GAMES_DB_PATH + "/" + markdown.title + ".md";
  if (filePath) {
    await fs.outputFile(filePath, markdown.content, (err) => {
      if (err) {
        console.error(
          "An error occurred while creating the Markdown file:",
          err
        );
        return;
      }

      console.log("Markdown file created successfully.");
    });
  } else {
    console.error("ERROR: Error creating the markdown file");
  }
}

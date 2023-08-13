# morty-os-automation

<div align="center">
    <img alt="Morty's face, bored" src="https://raw.githubusercontent.com/brenobattaglin/morty-os-automation/main/assets/morty.png">
</div>

Morty's here to help me on my daily routine by doing repetitive tasks I do everyday. Thanks Morty.

## macOS

On macOS, Xcode command line tools are required.
You can install them by running:

            xcode-select --install

Also, add the application you're running the script from.

            Settings -> Security & Privacy -> Privacy tab -> Accessibility -> Add...

For example, if you want to execute your node script in e.g. iTerm2, you'd have to add iTerm.app to the list.

## Requisites
This project is really personal. But if you want to run everything properly, here it goes:

1. Install node.js version >= 14
2. Make sure you're logged in and has accesses to [these urls](https://github.com/brenobattaglin/morty-os-automation/blob/main/src/core/constants/url.ts) so the scripts can work properly.
3. Make sure you have [these softwares](https://github.com/brenobattaglin/morty-os-automation/blob/eb352128a306abed4097822993d7b6a7e90e50a7/src/core/constants/software-names.ts) installed.
4. Install [these plugins and commands](https://github.com/brenobattaglin/morty-os-automation/blob/main/src/modules/obsidian/helpers/command-helper.ts) available on Obsidian and make sure they are working via the command pallete.

## Setup

1. If you want to use the game tracker feature on Obsidian, create a .env file, with the following content:

       OBSIDIAN_GAMES_DB_PATH="<here goes the absolute path to your game tracker folder>"
1. Run **npm i**.

## How to use

Run _npm run start_ on the terminal and select the option that best suits you.

<img width="390" alt="image" src="https://github.com/brenobattaglin/morty-os-automation/assets/8771994/a90179bc-dc0b-40e8-8db9-8933224591ab">


## Credits

<a target="_blank" href="https://emojicombos.com/morty">Morty Smith</a> ASCII by <a target="_blank" href="https://emojicombos.com/">Emoji Combos</a>

<a target="_blank" href="https://icons8.com/icon/hAPVXSp7TpSM/morty-smith">Morty Smith</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

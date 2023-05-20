const { keyboard, Key, sleep, mouse, screen } = require("@nut-tree/nut-js");

const superKey =
  process.platform === "darwin" ? Key.LeftSuper : Key.LeftControl;

(async () => {
  await keyboard.type(superKey, Key.Space);
  await keyboard.type("firefox");
  await keyboard.type(Key.Enter);

  await pressEnter();

  await keyboard.type(superKey, Key.T);
  await keyboard.type("https://store.epicgames.com/en-US/");
  await keyboard.type(Key.Enter);

  await sleep(5000);
  await keyboard.pressKey(superKey, Key.F);
  await keyboard.releaseKey(superKey, Key.F);
  await keyboard.type("Free now");

  await pressEnter();
})();

async function pressEnter() {
  await keyboard.pressKey(Key.Enter);
  await keyboard.releaseKey(Key.Enter);
}

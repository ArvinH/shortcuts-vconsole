// Only used to create the .shortcut file
const fs = require('fs');

const { actionOutput, buildShortcut } = require("@joshfarrant/shortcuts-js");
const {
  comment,
  runJavaScriptOnWebPage,
} = require("@joshfarrant/shortcuts-js/actions");

const injectScript = require("./injectScript");
const output = actionOutput();
const actions = [
  comment({
    text:
      "Inject vConsole to any page" +
      "\n\n" +
      "Designed by @arvinh"
  }),
  comment({
    text: `To inject vConsole to any page`
  }),
  runJavaScriptOnWebPage(
    {
      text: `
        const injectScript = ${injectScript.toString()};
        const result = injectScript();
        completion(result);`
    },
    output
  ),
];

// Generate the Shortcut data
const shortcut = buildShortcut(actions);

// Write the Shortcut to a file in the current directory
fs.writeFile('vConsole.shortcut', shortcut, (err) => {
  if (err) {
    console.error('Something went wrong :(', err);
    return;
  }
  console.log('Shortcut created!');
});

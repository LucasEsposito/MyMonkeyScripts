# Personal "Monkey" User Scripts
## About
This repo hosts personal user scripts for userscript manager browser addons, such as [FireMonkey](https://addons.mozilla.org/en-US/firefox/addon/firemonkey/), [ViolentMonkey](https://violentmonkey.github.io/), [TamperMonkey](https://www.tampermonkey.net/) and [GreaseMonkey](https://github.com/greasemonkey/greasemonkey).

Scripts do not depend on specific features of any addon and they don't depend on third-party libraries either.

I develop, test and use them in Firefox with [FireMonkey](https://addons.mozilla.org/en-US/firefox/addon/firemonkey/).

## Install scripts
Follow the instructions of any userscript manager browser addon and import the scripts you want.
To get the proper URL of a given script:
1. Go to the `scripts` folder
2. Click on the file of the script you want to import
3. Get the link to the raw file. You can either click on the `raw` button or look for the `downloadURL` property within the first lines of the file.
The raw link will look like [https://raw.githubusercontent.com/LucasEsposito/MyMonkeyScripts/main/scripts/portrait-whatsapp-web.user.js](https://raw.githubusercontent.com/LucasEsposito/MyMonkeyScripts/main/scripts/portrait-whatsapp-web.user.js)

## Update scripts
Scripts follow typical UserScripts standards and they therefore are configured to support automatic updates. However, double-check that the userscript manager addon you're using is configured to look for updates automatically.

## Scripts
### Portrait WhatsApp Web
Adapts WhatsApp Web to look better on portrait screens by removing the left sidebar as well as reducing the size of the left column (where contacts are displayed), giving more room to the chats column.

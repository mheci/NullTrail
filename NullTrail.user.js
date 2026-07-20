// ==UserScript==
// @name         NullTrail — Universal Tracking & Redirect Scrubber
// @namespace    https://github.com/nulltrail
// @version      1.0.0
// @description  Fix the web.
// @license      Unlicense
// @author       NullTrail
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzE0YjhhNiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNTUiIHN0b3AtY29sb3I9IiM1YjZlZjAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN2MzYWVkIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB4PSI2IiB5PSI2IiB3aWR0aD0iMTE2IiBoZWlnaHQ9IjExNiIgcng9IjI4IiByeT0iMjgiIGZpbGw9InVybCgjYmcpIi8+CiAgPHBhdGggZD0iTTY0IDIyIEw5OCAzNSBWNjIgQzk4IDg0IDgzIDEwMCA2NCAxMDYgQzQ1IDEwMCAzMCA4NCAzMCA2MiBWMzUgWiIKICAgICAgICBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNS41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIwLjk3Ii8+CiAgPHBhdGggZD0iTTUwIDYyIGExMSAxMSAwIDAgMSAxMSAtMTEgaDciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1LjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik03OCA2NiBhMTEgMTEgMCAwIDEgLTExIDExIGgtNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjUuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPHBhdGggZD0iTTU4IDU0IEw3MCA3NCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjUuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iMi42IiBmaWxsPSIjZmZmZmZmIi8+Cjwvc3ZnPgo=
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @connect      rules1.clearurls.xyz
// @connect      rules2.clearurls.xyz
// @match        *://*.bing.com/*
// @match        *://bing.com/*
// @match        *://*.duckduckgo.com/*
// @match        *://duckduckgo.com/*
// @match        *://*.yahoo.com/*
// @match        *://yahoo.com/*
// @match        *://*.yandex.com/*
// @match        *://yandex.com/*
// @match        *://*.yandex.ru/*
// @match        *://yandex.ru/*
// @match        *://*.baidu.com/*
// @match        *://baidu.com/*
// @match        *://*.sogou.com/*
// @match        *://sogou.com/*
// @match        *://*.so.com/*
// @match        *://so.com/*
// @match        *://*.ecosia.org/*
// @match        *://ecosia.org/*
// @match        *://*.startpage.com/*
// @match        *://startpage.com/*
// @match        *://*.startpage.eu/*
// @match        *://startpage.eu/*
// @match        *://*.search.brave.com/*
// @match        *://search.brave.com/*
// @match        *://*.qwant.com/*
// @match        *://qwant.com/*
// @match        *://*.search.naver.com/*
// @match        *://search.naver.com/*
// @match        *://*.search.daum.net/*
// @match        *://search.daum.net/*
// @match        *://*.seznam.cz/*
// @match        *://seznam.cz/*
// @match        *://*.search.aol.com/*
// @match        *://search.aol.com/*
// @match        *://*.ask.com/*
// @match        *://ask.com/*
// @match        *://*.dogpile.com/*
// @match        *://dogpile.com/*
// @match        *://*.webcrawler.com/*
// @match        *://webcrawler.com/*
// @match        *://*.excite.com/*
// @match        *://excite.com/*
// @match        *://*.search.lycos.com/*
// @match        *://search.lycos.com/*
// @match        *://*.info.com/*
// @match        *://info.com/*
// @match        *://*.mojeek.com/*
// @match        *://mojeek.com/*
// @match        *://*.swisscows.com/*
// @match        *://swisscows.com/*
// @match        *://*.presearch.com/*
// @match        *://presearch.com/*
// @match        *://*.gibiru.com/*
// @match        *://gibiru.com/*
// @match        *://*.search.marginalia.nu/*
// @match        *://search.marginalia.nu/*
// @match        *://*.kagi.com/*
// @match        *://kagi.com/*
// @match        *://*.metager.de/*
// @match        *://metager.de/*
// @match        *://*.you.com/*
// @match        *://you.com/*
// @match        *://*.perplexity.ai/*
// @match        *://perplexity.ai/*
// @match        *://*.phind.com/*
// @match        *://phind.com/*
// @match        *://*.ekoru.org/*
// @match        *://ekoru.org/*
// @match        *://*.coccoc.com/*
// @match        *://coccoc.com/*
// @match        *://*.najdi.si/*
// @match        *://najdi.si/*
// @match        *://*.search.yam.com/*
// @match        *://search.yam.com/*
// @match        *://*.search.goo.ne.jp/*
// @match        *://search.goo.ne.jp/*
// @match        *://*.nova.rambler.ru/*
// @match        *://nova.rambler.ru/*
// @match        *://*.go.mail.ru/*
// @match        *://go.mail.ru/*
// @match        *://*.search.walla.co.il/*
// @match        *://search.walla.co.il/*
// @match        *://*.searx.be/*
// @match        *://searx.be/*
// @match        *://*.searx.ngo/*
// @match        *://searx.ngo/*
// @match        *://*.whoogle.org/*
// @match        *://whoogle.org/*
// @match        *://*.bbc.com/*
// @match        *://bbc.com/*
// @match        *://*.bbc.co.uk/*
// @match        *://bbc.co.uk/*
// @match        *://*.nytimes.com/*
// @match        *://nytimes.com/*
// @match        *://*.theguardian.com/*
// @match        *://theguardian.com/*
// @match        *://*.reuters.com/*
// @match        *://reuters.com/*
// @match        *://*.apnews.com/*
// @match        *://apnews.com/*
// @match        *://*.washingtonpost.com/*
// @match        *://washingtonpost.com/*
// @match        *://*.cnn.com/*
// @match        *://cnn.com/*
// @match        *://*.foxnews.com/*
// @match        *://foxnews.com/*
// @match        *://*.nbcnews.com/*
// @match        *://nbcnews.com/*
// @match        *://*.cbsnews.com/*
// @match        *://cbsnews.com/*
// @match        *://*.abcnews.go.com/*
// @match        *://abcnews.go.com/*
// @match        *://*.aljazeera.com/*
// @match        *://aljazeera.com/*
// @match        *://*.bloomberg.com/*
// @match        *://bloomberg.com/*
// @match        *://*.economist.com/*
// @match        *://economist.com/*
// @match        *://*.time.com/*
// @match        *://time.com/*
// @match        *://*.newsweek.com/*
// @match        *://newsweek.com/*
// @match        *://*.usatoday.com/*
// @match        *://usatoday.com/*
// @match        *://*.nypost.com/*
// @match        *://nypost.com/*
// @match        *://*.thehill.com/*
// @match        *://thehill.com/*
// @match        *://*.politico.com/*
// @match        *://politico.com/*
// @match        *://*.axios.com/*
// @match        *://axios.com/*
// @match        *://*.npr.org/*
// @match        *://npr.org/*
// @match        *://*.pbs.org/*
// @match        *://pbs.org/*
// @match        *://*.independent.co.uk/*
// @match        *://independent.co.uk/*
// @match        *://*.telegraph.co.uk/*
// @match        *://telegraph.co.uk/*
// @match        *://*.dailymail.co.uk/*
// @match        *://dailymail.co.uk/*
// @match        *://*.thesun.co.uk/*
// @match        *://thesun.co.uk/*
// @match        *://*.express.co.uk/*
// @match        *://express.co.uk/*
// @match        *://*.mirror.co.uk/*
// @match        *://mirror.co.uk/*
// @match        *://*.ft.com/*
// @match        *://ft.com/*
// @match        *://*.wsj.com/*
// @match        *://wsj.com/*
// @match        *://*.huffpost.com/*
// @match        *://huffpost.com/*
// @match        *://*.vox.com/*
// @match        *://vox.com/*
// @match        *://*.buzzfeed.com/*
// @match        *://buzzfeed.com/*
// @match        *://*.businessinsider.com/*
// @match        *://businessinsider.com/*
// @match        *://*.forbes.com/*
// @match        *://forbes.com/*
// @match        *://*.cnbc.com/*
// @match        *://cnbc.com/*
// @match        *://*.marketwatch.com/*
// @match        *://marketwatch.com/*
// @match        *://*.techcrunch.com/*
// @match        *://techcrunch.com/*
// @match        *://*.theverge.com/*
// @match        *://theverge.com/*
// @match        *://*.engadget.com/*
// @match        *://engadget.com/*
// @match        *://*.wired.com/*
// @match        *://wired.com/*
// @match        *://*.arstechnica.com/*
// @match        *://arstechnica.com/*
// @match        *://*.gizmodo.com/*
// @match        *://gizmodo.com/*
// @match        *://*.mashable.com/*
// @match        *://mashable.com/*
// @match        *://*.cnet.com/*
// @match        *://cnet.com/*
// @match        *://*.zdnet.com/*
// @match        *://zdnet.com/*
// @match        *://*.tomshardware.com/*
// @match        *://tomshardware.com/*
// @match        *://*.spiegel.de/*
// @match        *://spiegel.de/*
// @match        *://*.bild.de/*
// @match        *://bild.de/*
// @match        *://*.welt.de/*
// @match        *://welt.de/*
// @match        *://*.sueddeutsche.de/*
// @match        *://sueddeutsche.de/*
// @match        *://*.faz.net/*
// @match        *://faz.net/*
// @match        *://*.lemonde.fr/*
// @match        *://lemonde.fr/*
// @match        *://*.lefigaro.fr/*
// @match        *://lefigaro.fr/*
// @match        *://*.elpais.com/*
// @match        *://elpais.com/*
// @match        *://*.elmundo.es/*
// @match        *://elmundo.es/*
// @match        *://*.corriere.it/*
// @match        *://corriere.it/*
// @match        *://*.repubblica.it/*
// @match        *://repubblica.it/*
// @match        *://*.smh.com.au/*
// @match        *://smh.com.au/*
// @match        *://*.news.com.au/*
// @match        *://news.com.au/*
// @match        *://*.abc.net.au/*
// @match        *://abc.net.au/*
// @match        *://*.japantimes.co.jp/*
// @match        *://japantimes.co.jp/*
// @match        *://*.asahi.com/*
// @match        *://asahi.com/*
// @match        *://*.yna.co.kr/*
// @match        *://yna.co.kr/*
// @match        *://*.chosun.com/*
// @match        *://chosun.com/*
// @match        *://*.ria.ru/*
// @match        *://ria.ru/*
// @match        *://*.tass.ru/*
// @match        *://tass.ru/*
// @match        *://*.timesofindia.indiatimes.com/*
// @match        *://timesofindia.indiatimes.com/*
// @match        *://*.thehindu.com/*
// @match        *://thehindu.com/*
// @match        *://*.hindustantimes.com/*
// @match        *://hindustantimes.com/*
// @match        *://*.ndtv.com/*
// @match        *://ndtv.com/*
// @match        *://*.scmp.com/*
// @match        *://scmp.com/*
// @match        *://*.straitstimes.com/*
// @match        *://straitstimes.com/*
// @match        *://*.jpost.com/*
// @match        *://jpost.com/*
// @match        *://*.alarabiya.net/*
// @match        *://alarabiya.net/*
// @match        *://*.novinky.cz/*
// @match        *://novinky.cz/*
// @match        *://*.idnes.cz/*
// @match        *://idnes.cz/*
// @match        *://*.aktualne.cz/*
// @match        *://aktualne.cz/*
// @match        *://*.seznamzpravy.cz/*
// @match        *://seznamzpravy.cz/*
// @match        *://*.denik.cz/*
// @match        *://denik.cz/*
// @match        *://*.respekt.cz/*
// @match        *://respekt.cz/*
// @match        *://*.youtube.com/*
// @match        *://youtube.com/*
// @match        *://*.youtu.be/*
// @match        *://youtu.be/*
// @match        *://*.vimeo.com/*
// @match        *://vimeo.com/*
// @match        *://*.dailymotion.com/*
// @match        *://dailymotion.com/*
// @match        *://*.twitch.tv/*
// @match        *://twitch.tv/*
// @match        *://*.netflix.com/*
// @match        *://netflix.com/*
// @match        *://*.disneyplus.com/*
// @match        *://disneyplus.com/*
// @match        *://*.hbomax.com/*
// @match        *://hbomax.com/*
// @match        *://*.primevideo.com/*
// @match        *://primevideo.com/*
// @match        *://*.hulu.com/*
// @match        *://hulu.com/*
// @match        *://*.peacocktv.com/*
// @match        *://peacocktv.com/*
// @match        *://*.paramountplus.com/*
// @match        *://paramountplus.com/*
// @match        *://*.spotify.com/*
// @match        *://spotify.com/*
// @match        *://*.soundcloud.com/*
// @match        *://soundcloud.com/*
// @match        *://*.deezer.com/*
// @match        *://deezer.com/*
// @match        *://*.tidal.com/*
// @match        *://tidal.com/*
// @match        *://*.bandcamp.com/*
// @match        *://bandcamp.com/*
// @match        *://*.pandora.com/*
// @match        *://pandora.com/*
// @match        *://*.audiomack.com/*
// @match        *://audiomack.com/*
// @match        *://*.mixcloud.com/*
// @match        *://mixcloud.com/*
// @match        *://*.imgur.com/*
// @match        *://imgur.com/*
// @match        *://*.gfycat.com/*
// @match        *://gfycat.com/*
// @match        *://*.streamable.com/*
// @match        *://streamable.com/*
// @match        *://*.tubitv.com/*
// @match        *://tubitv.com/*
// @match        *://*.crunchyroll.com/*
// @match        *://crunchyroll.com/*
// @match        *://*.funimation.com/*
// @match        *://funimation.com/*
// @match        *://*.viki.com/*
// @match        *://viki.com/*
// @match        *://*.hotstar.com/*
// @match        *://hotstar.com/*
// @match        *://*.sonyliv.com/*
// @match        *://sonyliv.com/*
// @match        *://*.zee5.com/*
// @match        *://zee5.com/*
// @match        *://*.mxplayer.in/*
// @match        *://mxplayer.in/*
// @match        *://*.jiosaavn.com/*
// @match        *://jiosaavn.com/*
// @match        *://*.gaana.com/*
// @match        *://gaana.com/*
// @match        *://*.patreon.com/*
// @match        *://patreon.com/*
// @match        *://*.substack.com/*
// @match        *://substack.com/*
// @match        *://*.medium.com/*
// @match        *://medium.com/*
// @match        *://*.tumblr.com/*
// @match        *://tumblr.com/*
// @match        *://*.livejournal.com/*
// @match        *://livejournal.com/*
// @match        *://*.pinterest.com/*
// @match        *://pinterest.com/*
// @match        *://*.flickr.com/*
// @match        *://flickr.com/*
// @match        *://*.500px.com/*
// @match        *://500px.com/*
// @match        *://*.deviantart.com/*
// @match        *://deviantart.com/*
// @match        *://*.artstation.com/*
// @match        *://artstation.com/*
// @match        *://*.behance.net/*
// @match        *://behance.net/*
// @match        *://*.dribbble.com/*
// @match        *://dribbble.com/*
// @match        *://*.9gag.com/*
// @match        *://9gag.com/*
// @match        *://*.reddit.com/*
// @match        *://reddit.com/*
// @match        *://*.quora.com/*
// @match        *://quora.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://stackoverflow.com/*
// @match        *://*.news.ycombinator.com/*
// @match        *://news.ycombinator.com/*
// @match        *://*.slashdot.org/*
// @match        *://slashdot.org/*
// @match        *://*.discord.com/*
// @match        *://discord.com/*
// @match        *://*.t.me/*
// @match        *://t.me/*
// @match        *://*.whatsapp.com/*
// @match        *://whatsapp.com/*
// @match        *://*.messenger.com/*
// @match        *://messenger.com/*
// @match        *://*.snapchat.com/*
// @match        *://snapchat.com/*
// @match        *://*.instagram.com/*
// @match        *://instagram.com/*
// @match        *://*.tiktok.com/*
// @match        *://tiktok.com/*
// @match        *://*.facebook.com/*
// @match        *://facebook.com/*
// @match        *://*.twitter.com/*
// @match        *://twitter.com/*
// @match        *://*.x.com/*
// @match        *://x.com/*
// @match        *://*.threads.net/*
// @match        *://threads.net/*
// @match        *://*.mastodon.social/*
// @match        *://mastodon.social/*
// @match        *://*.weibo.com/*
// @match        *://weibo.com/*
// @match        *://*.vk.com/*
// @match        *://vk.com/*
// @match        *://*.store.steampowered.com/*
// @match        *://store.steampowered.com/*
// @match        *://*.steamcommunity.com/*
// @match        *://steamcommunity.com/*
// @match        *://*.epicgames.com/*
// @match        *://epicgames.com/*
// @match        *://*.gog.com/*
// @match        *://gog.com/*
// @match        *://*.ea.com/*
// @match        *://ea.com/*
// @match        *://*.ubisoft.com/*
// @match        *://ubisoft.com/*
// @match        *://*.battle.net/*
// @match        *://battle.net/*
// @match        *://*.playstation.com/*
// @match        *://playstation.com/*
// @match        *://*.xbox.com/*
// @match        *://xbox.com/*
// @match        *://*.nintendo.com/*
// @match        *://nintendo.com/*
// @match        *://*.itch.io/*
// @match        *://itch.io/*
// @match        *://*.humblebundle.com/*
// @match        *://humblebundle.com/*
// @match        *://*.greenmangaming.com/*
// @match        *://greenmangaming.com/*
// @match        *://*.fanatical.com/*
// @match        *://fanatical.com/*
// @match        *://*.g2a.com/*
// @match        *://g2a.com/*
// @match        *://*.kinguin.net/*
// @match        *://kinguin.net/*
// @match        *://*.cdkeys.com/*
// @match        *://cdkeys.com/*
// @match        *://*.eneba.com/*
// @match        *://eneba.com/*
// @match        *://*.ign.com/*
// @match        *://ign.com/*
// @match        *://*.gamespot.com/*
// @match        *://gamespot.com/*
// @match        *://*.polygon.com/*
// @match        *://polygon.com/*
// @match        *://*.kotaku.com/*
// @match        *://kotaku.com/*
// @match        *://*.eurogamer.net/*
// @match        *://eurogamer.net/*
// @match        *://*.rockpapershotgun.com/*
// @match        *://rockpapershotgun.com/*
// @match        *://*.pcgamer.com/*
// @match        *://pcgamer.com/*
// @match        *://*.gameinformer.com/*
// @match        *://gameinformer.com/*
// @match        *://*.destructoid.com/*
// @match        *://destructoid.com/*
// @match        *://*.vg247.com/*
// @match        *://vg247.com/*
// @match        *://*.pushsquare.com/*
// @match        *://pushsquare.com/*
// @match        *://*.nintendolife.com/*
// @match        *://nintendolife.com/*
// @match        *://*.purexbox.com/*
// @match        *://purexbox.com/*
// @match        *://*.dualshockers.com/*
// @match        *://dualshockers.com/*
// @match        *://*.screenrant.com/*
// @match        *://screenrant.com/*
// @match        *://*.thegamer.com/*
// @match        *://thegamer.com/*
// @match        *://*.dexerto.com/*
// @match        *://dexerto.com/*
// @match        *://*.dotesports.com/*
// @match        *://dotesports.com/*
// @match        *://*.espn.com/*
// @match        *://espn.com/*
// @match        *://*.liquipedia.net/*
// @match        *://liquipedia.net/*
// @match        *://*.hltv.org/*
// @match        *://hltv.org/*
// @match        *://*.vlr.gg/*
// @match        *://vlr.gg/*
// @match        *://*.op.gg/*
// @match        *://op.gg/*
// @match        *://*.mobafire.com/*
// @match        *://mobafire.com/*
// @match        *://*.u.gg/*
// @match        *://u.gg/*
// @match        *://*.lolalytics.com/*
// @match        *://lolalytics.com/*
// @match        *://*.tracker.gg/*
// @match        *://tracker.gg/*
// @match        *://*.curseforge.com/*
// @match        *://curseforge.com/*
// @match        *://*.modrinth.com/*
// @match        *://modrinth.com/*
// @match        *://*.planetminecraft.com/*
// @match        *://planetminecraft.com/*
// @match        *://*.minecraft.net/*
// @match        *://minecraft.net/*
// @match        *://*.hypixel.net/*
// @match        *://hypixel.net/*
// @match        *://*.namemc.com/*
// @match        *://namemc.com/*
// @match        *://*.roblox.com/*
// @match        *://roblox.com/*
// @match        *://*.steamdb.info/*
// @match        *://steamdb.info/*
// @match        *://*.protondb.com/*
// @match        *://protondb.com/*
// @match        *://*.psnprofiles.com/*
// @match        *://psnprofiles.com/*
// @match        *://*.trueachievements.com/*
// @match        *://trueachievements.com/*
// @match        *://*.steamrep.com/*
// @match        *://steamrep.com/*
// @match        *://*.backpack.tf/*
// @match        *://backpack.tf/*
// @match        *://*.amazon.com/*
// @match        *://amazon.com/*
// @match        *://*.amazon.co.uk/*
// @match        *://amazon.co.uk/*
// @match        *://*.amazon.de/*
// @match        *://amazon.de/*
// @match        *://*.amazon.fr/*
// @match        *://amazon.fr/*
// @match        *://*.amazon.it/*
// @match        *://amazon.it/*
// @match        *://*.amazon.es/*
// @match        *://amazon.es/*
// @match        *://*.amazon.ca/*
// @match        *://amazon.ca/*
// @match        *://*.amazon.com.au/*
// @match        *://amazon.com.au/*
// @match        *://*.amazon.co.jp/*
// @match        *://amazon.co.jp/*
// @match        *://*.amazon.in/*
// @match        *://amazon.in/*
// @match        *://*.amazon.com.br/*
// @match        *://amazon.com.br/*
// @match        *://*.amazon.com.mx/*
// @match        *://amazon.com.mx/*
// @match        *://*.amazon.nl/*
// @match        *://amazon.nl/*
// @match        *://*.amazon.se/*
// @match        *://amazon.se/*
// @match        *://*.amazon.pl/*
// @match        *://amazon.pl/*
// @match        *://*.amazon.ae/*
// @match        *://amazon.ae/*
// @match        *://*.amazon.sa/*
// @match        *://amazon.sa/*
// @match        *://*.amazon.eg/*
// @match        *://amazon.eg/*
// @match        *://*.amazon.com.tr/*
// @match        *://amazon.com.tr/*
// @match        *://*.ebay.com/*
// @match        *://ebay.com/*
// @match        *://*.ebay.co.uk/*
// @match        *://ebay.co.uk/*
// @match        *://*.ebay.de/*
// @match        *://ebay.de/*
// @match        *://*.ebay.fr/*
// @match        *://ebay.fr/*
// @match        *://*.ebay.it/*
// @match        *://ebay.it/*
// @match        *://*.ebay.es/*
// @match        *://ebay.es/*
// @match        *://*.ebay.ca/*
// @match        *://ebay.ca/*
// @match        *://*.ebay.com.au/*
// @match        *://ebay.com.au/*
// @match        *://*.ebay.at/*
// @match        *://ebay.at/*
// @match        *://*.ebay.be/*
// @match        *://ebay.be/*
// @match        *://*.ebay.ch/*
// @match        *://ebay.ch/*
// @match        *://*.ebay.ie/*
// @match        *://ebay.ie/*
// @match        *://*.ebay.nl/*
// @match        *://ebay.nl/*
// @match        *://*.ebay.pl/*
// @match        *://ebay.pl/*
// @match        *://*.aliexpress.com/*
// @match        *://aliexpress.com/*
// @match        *://*.alibaba.com/*
// @match        *://alibaba.com/*
// @match        *://*.temu.com/*
// @match        *://temu.com/*
// @match        *://*.shein.com/*
// @match        *://shein.com/*
// @match        *://*.wish.com/*
// @match        *://wish.com/*
// @match        *://*.banggood.com/*
// @match        *://banggood.com/*
// @match        *://*.gearbest.com/*
// @match        *://gearbest.com/*
// @match        *://*.geekbuying.com/*
// @match        *://geekbuying.com/*
// @match        *://*.dhgate.com/*
// @match        *://dhgate.com/*
// @match        *://*.jd.com/*
// @match        *://jd.com/*
// @match        *://*.taobao.com/*
// @match        *://taobao.com/*
// @match        *://*.tmall.com/*
// @match        *://tmall.com/*
// @match        *://*.pinduoduo.com/*
// @match        *://pinduoduo.com/*
// @match        *://*.suning.com/*
// @match        *://suning.com/*
// @match        *://*.rakuten.com/*
// @match        *://rakuten.com/*
// @match        *://*.rakuten.co.jp/*
// @match        *://rakuten.co.jp/*
// @match        *://*.mercari.com/*
// @match        *://mercari.com/*
// @match        *://*.mercari.jp/*
// @match        *://mercari.jp/*
// @match        *://*.qoo10.jp/*
// @match        *://qoo10.jp/*
// @match        *://*.qoo10.com/*
// @match        *://qoo10.com/*
// @match        *://*.shopee.com/*
// @match        *://shopee.com/*
// @match        *://*.shopee.co.th/*
// @match        *://shopee.co.th/*
// @match        *://*.shopee.tw/*
// @match        *://shopee.tw/*
// @match        *://*.lazada.com/*
// @match        *://lazada.com/*
// @match        *://*.lazada.co.th/*
// @match        *://lazada.co.th/*
// @match        *://*.lazada.co.id/*
// @match        *://lazada.co.id/*
// @match        *://*.lazada.com.my/*
// @match        *://lazada.com.my/*
// @match        *://*.lazada.com.ph/*
// @match        *://lazada.com.ph/*
// @match        *://*.lazada.sg/*
// @match        *://lazada.sg/*
// @match        *://*.lazada.vn/*
// @match        *://lazada.vn/*
// @match        *://*.tokopedia.com/*
// @match        *://tokopedia.com/*
// @match        *://*.bukalapak.com/*
// @match        *://bukalapak.com/*
// @match        *://*.mercadolivre.com.br/*
// @match        *://mercadolivre.com.br/*
// @match        *://*.mercadolibre.com.ar/*
// @match        *://mercadolibre.com.ar/*
// @match        *://*.mercadolibre.com.mx/*
// @match        *://mercadolibre.com.mx/*
// @match        *://*.mercadolibre.cl/*
// @match        *://mercadolibre.cl/*
// @match        *://*.mercadolibre.com.co/*
// @match        *://mercadolibre.com.co/*
// @match        *://*.mercadolibre.com/*
// @match        *://mercadolibre.com/*
// @match        *://*.etsy.com/*
// @match        *://etsy.com/*
// @match        *://*.walmart.com/*
// @match        *://walmart.com/*
// @match        *://*.target.com/*
// @match        *://target.com/*
// @match        *://*.bestbuy.com/*
// @match        *://bestbuy.com/*
// @match        *://*.costco.com/*
// @match        *://costco.com/*
// @match        *://*.homedepot.com/*
// @match        *://homedepot.com/*
// @match        *://*.lowes.com/*
// @match        *://lowes.com/*
// @match        *://*.macys.com/*
// @match        *://macys.com/*
// @match        *://*.nordstrom.com/*
// @match        *://nordstrom.com/*
// @match        *://*.kohls.com/*
// @match        *://kohls.com/*
// @match        *://*.wayfair.com/*
// @match        *://wayfair.com/*
// @match        *://*.newegg.com/*
// @match        *://newegg.com/*
// @match        *://*.bhphotovideo.com/*
// @match        *://bhphotovideo.com/*
// @match        *://*.adorama.com/*
// @match        *://adorama.com/*
// @match        *://*.ikea.com/*
// @match        *://ikea.com/*
// @match        *://*.argos.co.uk/*
// @match        *://argos.co.uk/*
// @match        *://*.currys.co.uk/*
// @match        *://currys.co.uk/*
// @match        *://*.johnlewis.com/*
// @match        *://johnlewis.com/*
// @match        *://*.marksandspencer.com/*
// @match        *://marksandspencer.com/*
// @match        *://*.asda.com/*
// @match        *://asda.com/*
// @match        *://*.tesco.com/*
// @match        *://tesco.com/*
// @match        *://*.sainsburys.co.uk/*
// @match        *://sainsburys.co.uk/*
// @match        *://*.otto.de/*
// @match        *://otto.de/*
// @match        *://*.allegro.pl/*
// @match        *://allegro.pl/*
// @match        *://*.cdiscount.com/*
// @match        *://cdiscount.com/*
// @match        *://*.fnac.com/*
// @match        *://fnac.com/*
// @match        *://*.darty.com/*
// @match        *://darty.com/*
// @match        *://*.mediamarkt.de/*
// @match        *://mediamarkt.de/*
// @match        *://*.saturn.de/*
// @match        *://saturn.de/*
// @match        *://*.notebooksbilliger.de/*
// @match        *://notebooksbilliger.de/*
// @match        *://*.elcorteingles.es/*
// @match        *://elcorteingles.es/*
// @match        *://*.zalando.com/*
// @match        *://zalando.com/*
// @match        *://*.zalando.co.uk/*
// @match        *://zalando.co.uk/*
// @match        *://*.asos.com/*
// @match        *://asos.com/*
// @match        *://*.boohoo.com/*
// @match        *://boohoo.com/*
// @match        *://*.pornhub.com/*
// @match        *://pornhub.com/*
// @match        *://*.xvideos.com/*
// @match        *://xvideos.com/*
// @match        *://*.xnxx.com/*
// @match        *://xnxx.com/*
// @match        *://*.xhamster.com/*
// @match        *://xhamster.com/*
// @match        *://*.redtube.com/*
// @match        *://redtube.com/*
// @match        *://*.youporn.com/*
// @match        *://youporn.com/*
// @match        *://*.tube8.com/*
// @match        *://tube8.com/*
// @match        *://*.spankbang.com/*
// @match        *://spankbang.com/*
// @match        *://*.tnaflix.com/*
// @match        *://tnaflix.com/*
// @match        *://*.keezmovies.com/*
// @match        *://keezmovies.com/*
// @match        *://*.spankwire.com/*
// @match        *://spankwire.com/*
// @match        *://*.pornmd.com/*
// @match        *://pornmd.com/*
// @match        *://*.thumbzilla.com/*
// @match        *://thumbzilla.com/*
// @match        *://*.men.com/*
// @match        *://men.com/*
// @match        *://*.realitykings.com/*
// @match        *://realitykings.com/*
// @match        *://*.brazzers.com/*
// @match        *://brazzers.com/*
// @match        *://*.naughtyamerica.com/*
// @match        *://naughtyamerica.com/*
// @match        *://*.bangbros.com/*
// @match        *://bangbros.com/*
// @match        *://*.mofos.com/*
// @match        *://mofos.com/*
// @match        *://*.playboy.com/*
// @match        *://playboy.com/*
// @match        *://*.onlyfans.com/*
// @match        *://onlyfans.com/*
// @match        *://*.fansly.com/*
// @match        *://fansly.com/*
// @match        *://*.porntrex.com/*
// @match        *://porntrex.com/*
// @match        *://*.eporner.com/*
// @match        *://eporner.com/*
// @match        *://*.txxx.com/*
// @match        *://txxx.com/*
// @match        *://*.hclips.com/*
// @match        *://hclips.com/*
// @match        *://*.upornia.com/*
// @match        *://upornia.com/*
// @match        *://*.porn300.com/*
// @match        *://porn300.com/*
// @match        *://*.hentaihaven.xxx/*
// @match        *://hentaihaven.xxx/*
// @match        *://*.hanime.tv/*
// @match        *://hanime.tv/*
// @match        *://*.nhentai.net/*
// @match        *://nhentai.net/*
// @match        *://*.tsumino.com/*
// @match        *://tsumino.com/*
// @match        *://*.e-hentai.org/*
// @match        *://e-hentai.org/*
// @match        *://*.exhentai.org/*
// @match        *://exhentai.org/*
// @match        *://*.fakku.net/*
// @match        *://fakku.net/*
// @match        *://*.rule34.xxx/*
// @match        *://rule34.xxx/*
// @match        *://*.rule34.paheal.net/*
// @match        *://rule34.paheal.net/*
// @match        *://*.gelbooru.com/*
// @match        *://gelbooru.com/*
// @match        *://*.danbooru.donmai.us/*
// @match        *://danbooru.donmai.us/*
// @match        *://*.konachan.com/*
// @match        *://konachan.com/*
// @match        *://*.yande.re/*
// @match        *://yande.re/*
// @match        *://*.linkedin.com/*
// @match        *://linkedin.com/*
// @match        *://*.qq.com/*
// @match        *://qq.com/*
// @match        *://*.douyin.com/*
// @match        *://douyin.com/*
// @match        *://*.kuaishou.com/*
// @match        *://kuaishou.com/*
// @match        *://*.bilibili.com/*
// @match        *://bilibili.com/*
// @match        *://*.xiaohongshu.com/*
// @match        *://xiaohongshu.com/*
// @match        *://*.zhihu.com/*
// @match        *://zhihu.com/*
// @match        *://*.douban.com/*
// @match        *://douban.com/*
// @match        *://*.tieba.baidu.com/*
// @match        *://tieba.baidu.com/*
// @match        *://*.signal.org/*
// @match        *://signal.org/*
// @match        *://*.github.com/*
// @match        *://github.com/*
// @match        *://*.gitlab.com/*
// @match        *://gitlab.com/*
// @match        *://*.bitbucket.org/*
// @match        *://bitbucket.org/*
// @match        *://*.codeberg.org/*
// @match        *://codeberg.org/*
// @match        *://*.sourceforge.net/*
// @match        *://sourceforge.net/*
// @match        *://*.serverfault.com/*
// @match        *://serverfault.com/*
// @match        *://*.superuser.com/*
// @match        *://superuser.com/*
// @match        *://*.stackexchange.com/*
// @match        *://stackexchange.com/*
// @match        *://*.askubuntu.com/*
// @match        *://askubuntu.com/*
// @match        *://*.dev.to/*
// @match        *://dev.to/*
// @match        *://*.hashnode.com/*
// @match        *://hashnode.com/*
// @match        *://*.codepen.io/*
// @match        *://codepen.io/*
// @match        *://*.codesandbox.io/*
// @match        *://codesandbox.io/*
// @match        *://*.stackblitz.com/*
// @match        *://stackblitz.com/*
// @match        *://*.replit.com/*
// @match        *://replit.com/*
// @match        *://*.glitch.com/*
// @match        *://glitch.com/*
// @match        *://*.jsfiddle.net/*
// @match        *://jsfiddle.net/*
// @match        *://*.observablehq.com/*
// @match        *://observablehq.com/*
// @match        *://*.kaggle.com/*
// @match        *://kaggle.com/*
// @match        *://*.huggingface.co/*
// @match        *://huggingface.co/*
// @match        *://*.paperswithcode.com/*
// @match        *://paperswithcode.com/*
// @match        *://*.arxiv.org/*
// @match        *://arxiv.org/*
// @match        *://*.semanticscholar.org/*
// @match        *://semanticscholar.org/*
// @match        *://*.scholar.google.com/*
// @match        *://scholar.google.com/*
// @match        *://*.researchgate.net/*
// @match        *://researchgate.net/*
// @match        *://*.academia.edu/*
// @match        *://academia.edu/*
// @match        *://*.sciencedirect.com/*
// @match        *://sciencedirect.com/*
// @match        *://*.nature.com/*
// @match        *://nature.com/*
// @match        *://*.ieee.org/*
// @match        *://ieee.org/*
// @match        *://*.ieeexplore.ieee.org/*
// @match        *://ieeexplore.ieee.org/*
// @match        *://*.dl.acm.org/*
// @match        *://dl.acm.org/*
// @match        *://*.ncbi.nlm.nih.gov/*
// @match        *://ncbi.nlm.nih.gov/*
// @match        *://*.openai.com/*
// @match        *://openai.com/*
// @match        *://*.anthropic.com/*
// @match        *://anthropic.com/*
// @match        *://*.replicate.com/*
// @match        *://replicate.com/*
// @match        *://*.midjourney.com/*
// @match        *://midjourney.com/*
// @match        *://*.stability.ai/*
// @match        *://stability.ai/*
// @match        *://*.claude.ai/*
// @match        *://claude.ai/*
// @match        *://*.chat.openai.com/*
// @match        *://chat.openai.com/*
// @match        *://*.gemini.google.com/*
// @match        *://gemini.google.com/*
// @match        *://*.google.com/*
// @match        *://*.google.co.uk/*
// @match        *://*.google.de/*
// @match        *://*.google.fr/*
// @match        *://*.google.jp/*
// @match        *://*.google.br/*
// @match        *://*.google.in/*
// @match        *://*.google.ca/*
// @match        *://*.google.au/*
// @match        *://*.google.ru/*
// @match        *://*.google.it/*
// @match        *://*.google.es/*
// @match        *://*.google.mx/*
// @match        *://*.google.co.kr/*
// @match        *://*.google.nl/*
// @match        *://*.google.pl/*
// @match        *://*.google.se/*
// @match        *://*.google.co.in/*
// @match        *://*.google.com.au/*
// @match        *://*.google.com.br/*
// @match        *://*.google.com.mx/*
// @match        *://*.google.com.tr/*
// @match        *://*.google.com.ar/*
// @match        *://*.google.com.sg/*
// @match        *://*.google.com.hk/*
// @match        *://*.google.co.jp/*
// @match        *://*.google.com.tw/*
// @match        *://*.google.za/*
// @match        *://*.google.ae/*
// @match        *://*.google.sa/*
// @match        *://*.google.eg/*
// @match        *://*.google.ch/*
// @match        *://*.google.at/*
// @match        *://*.google.be/*
// @match        *://*.google.no/*
// @match        *://*.google.dk/*
// @match        *://*.google.fi/*
// @match        *://*.google.gr/*
// @match        *://*.google.pt/*
// @match        *://*.google.cz/*
// @match        *://*.google.ro/*
// @match        *://*.google.hu/*
// @match        *://*.google.sk/*
// @match        *://*.google.bg/*
// @match        *://*.google.rs/*
// @match        *://*.google.hr/*
// @match        *://*.google.si/*
// @match        *://*.google.ee/*
// @match        *://*.google.lv/*
// @match        *://*.google.lt/*
// @match        *://*.google.ie/*
// @match        *://*.google.lu/*
// @match        *://*.google.is/*
// @match        *://*.google.mt/*
// @match        *://*.google.cy/*
// @match        *://*.google.com.ua/*
// @match        *://*.google.by/*
// @match        *://*.google.kz/*
// @match        *://*.google.uz/*
// @match        *://*.google.ge/*
// @match        *://*.google.am/*
// @match        *://*.google.az/*
// @match        *://*.google.cat/*
// @match        *://*.google.com.co/*
// @match        *://*.google.co.cr/*
// @match        *://*.google.com.pe/*
// @match        *://*.google.com.ve/*
// @match        *://*.google.com.ec/*
// @match        *://*.google.com.do/*
// @match        *://*.google.com.gt/*
// @match        *://*.google.com.py/*
// @match        *://*.google.com.uy/*
// @match        *://*.google.com.bo/*
// @match        *://*.google.com.ni/*
// @match        *://*.google.com.sv/*
// @match        *://*.google.co.th/*
// @match        *://*.google.com.vn/*
// @match        *://*.google.com.my/*
// @match        *://*.google.com.ph/*
// @match        *://*.google.com.pk/*
// @match        *://*.google.com.bd/*
// @match        *://*.google.com.ng/*
// @match        *://*.google.com.gh/*
// @match        *://*.google.com/*
// @match        *://*.googlesyndication.com/*
// @match        *://*.doubleclick.net/*
// @match        *://*.googleadservices.com/*
// @exclude      *://*/robots.txt*
// @exclude      *://*.clearurls.xyz/*
// @updateURL    https://raw.githubusercontent.com/mheci/NullTrail/main/NullTrail.user.js
// @downloadURL  https://raw.githubusercontent.com/mheci/NullTrail/main/NullTrail.user.js
// ==/UserScript==

"use strict";

(function() {
    const NS = "nt_";

    // Safe local storage helper
    function GV(key, def) {
        try {
            if (typeof GM_getValue === "function") return GM_getValue(key, def);
            const raw = localStorage.getItem(NS + key);
            if (raw == null) return def;
            try {
                return JSON.parse(raw);
            } catch (e) {
                return raw;
            }
        } catch (e) {
            return def;
        }
    }

    function SV(key, val) {
        try {
            if (typeof GM_setValue === "function") return GM_setValue(key, val);
            // Optimization & Security: Do not leak/waste space with huge rules on page localStorage
            if (key === "rulesData") return; 
            localStorage.setItem(NS + key, typeof val === "string" ? val : JSON.stringify(val));
        } catch (e) {}
    }

    function DV(key) {
        try {
            if (typeof GM_deleteValue === "function") return GM_deleteValue(key);
            localStorage.removeItem(NS + key);
        } catch (e) {}
    }

    const CFG = {
        globalStatus: GV("globalStatus", true),
        referralMarketing: GV("referralMarketing", true),
        forceRedirection: GV("forceRedirection", true),
        domainBlocking: GV("domainBlocking", false),
        localHostsSkipping: GV("localHostsSkipping", true),
        forceNoReferrer: GV("forceNoReferrer", true),
        relNoReferrer: GV("relNoReferrer", true),
        referrerPolicy: GV("referrerPolicy", "origin"),
        noping: GV("noping", true),
        stripSERPParams: GV("stripSERPParams", true),
        blockGA: GV("blockGA", true),
        blockPrivacySandbox: GV("blockPrivacySandbox", true),
        blockKeepalive: GV("blockKeepalive", true),
        blockBounceRedirect: GV("blockBounceRedirect", true),
        blockIPLoggers: GV("blockIPLoggers", true),
        enforcePrivacyPresets: GV("enforcePrivacyPresets", true),
        purgeGACookies: GV("purgeGACookies", true),
        purgeStorage: GV("purgeStorage", true),
        showHUD: GV("showHUD", false),
        autoUpdateRules: GV("autoUpdateRules", true),
        statistics: GV("statistics", true),
        logging: GV("logging", false),
        debug: GV("debug", false)
    };

    let WHITELIST = GV("whitelist", "");

    // User-requested feature: Per-site settings maps for Context Menu & Selection restrictions unblocking
    let unblockContextMenuSites = GV("unblockContextMenuSites", {});
    let unblockTextSelectionSites = GV("unblockTextSelectionSites", {});

    function isWhitelisted(host) {
        if (!host || !WHITELIST) return false;
        const lines = String(WHITELIST).split(/[\n,]+/);
        for (let i = 0; i < lines.length; i++) {
            const d = lines[i].trim().toLowerCase();
            if (!d) continue;
            if (host === d || (host.length > d.length + 1 && host.lastIndexOf("." + d) === host.length - d.length - 1)) return true;
        }
        return false;
    }

    function isSiteContextMenuUnblocked() {
        return !!unblockContextMenuSites[location.hostname.toLowerCase()];
    }

    function isSiteTextSelectionUnblocked() {
        return !!unblockTextSelectionSites[location.hostname.toLowerCase()];
    }

    function isActive() {
        return CFG.globalStatus && !isWhitelisted(location.hostname);
    }

    function addWhitelist(host) {
        host = String(host || "").trim().toLowerCase();
        if (!host) return;
        if (!isWhitelisted(host)) {
            WHITELIST = WHITELIST ? WHITELIST + "\n" + host : host;
            SV("whitelist", WHITELIST);
        }
    }

    function removeWhitelist(host) {
        host = String(host || "").trim().toLowerCase();
        const lines = String(WHITELIST).split(/[\n,]+/).map(x => x.trim()).filter(x => x && x !== host);
        WHITELIST = lines.join("\n");
        SV("whitelist", WHITELIST);
    }

    // LRU Cache for URL Sanitization
    const LRU_MAX = 384;
    const _lruKeys = [];
    const _lruMap = {};

    function lruGet(key) {
        if (Object.prototype.hasOwnProperty.call(_lruMap, key)) {
            // Move key to end to maintain LRU order
            const i = _lruKeys.indexOf(key);
            if (i > -1) {
                _lruKeys.splice(i, 1);
                _lruKeys.push(key);
            }
            return { hit: true, val: _lruMap[key] };
        }
        return { hit: false, val: undefined };
    }

    function lruSet(key, val) {
        if (Object.prototype.hasOwnProperty.call(_lruMap, key)) {
            _lruMap[key] = val;
            const i = _lruKeys.indexOf(key);
            if (i > -1) _lruKeys.splice(i, 1);
            _lruKeys.push(key);
            return;
        }
        _lruMap[key] = val;
        _lruKeys.push(key);
        while (_lruKeys.length > LRU_MAX) {
            const k = _lruKeys.shift();
            delete _lruMap[k];
        }
    }

    const STATS = {
        cleaned: GV("statCleaned", 0) | 0,
        fields: GV("statFields", 0) | 0,
        blocked: GV("statBlocked", 0) | 0
    };

    let _statFlush = null;
    function bumpStats(fieldsRemoved, blocked) {
        if (!CFG.statistics) return;
        STATS.cleaned++;
        STATS.fields += fieldsRemoved || 0;
        STATS.blocked += blocked ? 1 : 0;
        if (_statFlush) return;
        _statFlush = setTimeout(function() {
            _statFlush = null;
            SV("statCleaned", STATS.cleaned);
            SV("statFields", STATS.fields);
            SV("statBlocked", STATS.blocked);
        }, 4000);
    }

    function log(...args) {
        if (!CFG.debug && !CFG.logging) return;
        try {
            console.debug("[NullTrail]", ...args);
        } catch (e) {}
    }

    const EMBEDDED_RULES = {
        providers: {
            globalRules: {
                urlPattern: ".*",
                rules: [ "(?:%3F)?utm(?:_[a-z_]*)?", "(?:%3F)?mtm(?:_[a-z_]*)?", "(?:%3F)?ga_[a-z_]+", "(?:%3F)?yclid", "(?:%3F)?_openstat", "(?:%3F)?fb_action_(?:types|ids)", "(?:%3F)?fb_(?:source|ref)", "(?:%3F)?fbclid", "(?:%3F)?action_(?:object|type|ref)_map", "(?:%3F)?gs_l", "(?:%3F)?mkt_tok", "(?:%3F)?hmb_(?:campaign|medium|source)", "(?:%3F)?gclid", "(?:%3F)?srsltid", "(?:%3F)?otm_[a-z_]*", "(?:%3F)?cmpid", "(?:%3F)?os_ehash", "(?:%3F)?_ga", "(?:%3F)?_gl", "(?:%3F)?__twitter_impression", "(?:%3F)?wt_?z?mc", "(?:%3F)?wtrid", "(?:%3F)?[a-z]?mc", "(?:%3F)?dclid", "Echobox", "(?:%3F)?spm", "(?:%3F)?vn(?:_[a-z]*)+", "(?:%3F)?tracking_source", "(?:%3F)?ceneo_spo", "(?:%3F)?itm_(?:campaign|medium|source)", "(?:%3F)?__hsfp", "(?:%3F)?__hssc", "(?:%3F)?__hstc", "(?:%3F)?_hsenc", "(?:%3F)?__s", "(?:%3F)?hsCtaTracking", "(?:%3F)?mc_(?:eid|cid|tc)", "(?:%3F)?ml_subscriber", "(?:%3F)?ml_subscriber_hash", "(?:%3F)?msclkid", "(?:%3F)?oly_anon_id", "(?:%3F)?oly_enc_id", "(?:%3F)?rb_clickid", "(?:%3F)?s_cid", "(?:%3F)?vero_conv", "(?:%3F)?vero_id", "(?:%3F)?wickedid", "(?:%3F)?twclid", "(?:%3F)?igshid", "(?:%3F)?igsh", "(?:%3F)?hsa_(?:cam|grp|mt|src|ad|acc|net|ver|la|ol|kw|tgt)", "(?:%3F)?wbraid", "(?:%3F)?gbraid", "(?:%3F)?gclsrc", "(?:%3F)?_branch_match_id", "(?:%3F)?campaign_?id", "(?:%3F)?ref_src", "(?:%3F)?share_?", "(?:%3F)?trk", "(?:%3F)?mc_?cid", "(?:%3F)?mc_?eid" ],
                referralMarketing: [ "(?:%3F)?ref_?", "(?:%3F)?referrer" ],
                exceptions: [ "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?matrix\\.org\\/_matrix\\/", "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?(?:cloudflare\\.com|prismic\\.io|tangerine\\.ca|gitlab\\.com)", "^https?:\\/\\/myaccount\\.google(?:\\.[a-z]{2,}){1,}", "^https?:\\/\\/accounts\\.google(?:\\.[a-z]{2,}){1,}", "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?github\\.com", "^wss?:\\/\\/(?:[a-z0-9-]+\\.)*?zoom\\.us" ]
            },
            google: {
                forceRedirection: true,
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}",
                rules: [ "ved", "bi[a-z]*", "gfe_[a-z]*", "ei", "source", "gs_[a-z]*", "site", "oq", "esrc", "uact", "cd", "cad", "gws_[a-z]*", "atyp", "vet", "_u", "je", "dcr", "ie", "sei", "sa", "dpr", "btn[a-z]*", "usg", "aqs", "sourceid", "sxsrf", "rlz", "pcampaignid", "sca_(?:esv|upv)", "iflsig", "fbs", "ictx", "cshid", "noj", "pws", "nfpr", "prmd" ],
                referralMarketing: [ "referrer" ],
                exceptions: [ "^https?:\\/\\/mail\\.google\\.com\\/mail\\/u\\/", "^https?:\\/\\/accounts\\.google\\.com\\/(?:o\\/oauth2\\/|signin\\/oauth\\/)", "^https?:\\/\\/(?:docs|accounts)\\.google(?:\\.[a-z]{2,}){1,}", "^https?:\\/\\/news\\.google\\.com.*\\?hl=.", "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/(?:complete\\/search|setprefs|searchbyimage)", "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/safe[-]?browsing\\/([^&]+)" ],
                redirections: [ "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/url\\?.*?(?:url|q)=(https?[^&]+)", "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/.*?adurl=([^&]+)", "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/amp\\/s\\/([^&]+)", "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/.*?(?:continue|dest)=((?:https?)[^&]+)" ]
            },
            googleadservices: {
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?googleadservices\\.com",
                redirections: [ "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?googleadservices\\.com\\/.*?adurl=([^&]*)" ]
            },
            googlesyndication: {
                completeProvider: true,
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?googlesyndication\\.com"
            },
            doubleclick: {
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?doubleclick(?:\\.[a-z]{2,}){1,}",
                redirections: [ "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?doubleclick(?:\\.[a-z]{2,}){1,}\\/.*?tag_for_child_directed_treatment=;%3F([^&]*)" ]
            },
            amazon: {
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon(?:\\.[a-z]{2,}){1,}",
                rules: [ "p[fd]_rd_[a-z]*", "qid", "srs?", "__mk_[a-z]{1,3}_[a-z]{1,3}", "spIA", "ms3_c", "[a-z%0-9]*ie", "refRID", "colii?d", "[^a-z%0-9]adId", "qualifier", "_encoding", "smid", "field-lbr_brands_browse-bin", "ref_?", "th", "sprefix", "crid", "cv_ct_[a-z]+", "linkCode", "creativeASIN", "ascsubtag", "aaxitk", "hsa_cr_id", "sb-ci-[a-z]+", "rnid", "dchild", "camp", "creative", "content-id", "dib", "dib_tag", "social_share", "starsLeft", "skipTwisterOG" ],
                rawRules: [ "\\/ref=[^/?]*" ],
                referralMarketing: [ "tag", "ascsubtag" ]
            },
            facebook: {
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com",
                rules: [ "fb_(?:action_(?:types|ids)|source|ref)", "fbclid", "__twitter_impression" ],
                redirections: [ "^https?:\\/\\/l\\.facebook\\.com\\/l\\.php\\?.*?(?:u|url)=([^&]+)" ]
            },
            instagram: {
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?instagram\\.com",
                rules: [ "igshid", "igsh" ],
                redirections: [ ".*u=([^&]+)" ]
            },
            linkedin: {
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?linkedin\\.com",
                rules: [ "refId", "trk", "li[a-z]{2}", "trackingId" ]
            },
            "twitter/x": {
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?(?:twitter|x)\\.com",
                rules: [ "s", "ref_src", "ref_url", "cn", "t" ]
            },
            reddit: {
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?reddit\\.com",
                rules: [ "ref", "ref_source", "ref_campaign" ]
            },
            youtube: {
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?youtu(?:be\\.com|\\.be)",
                rules: [ "feature", "gclid", "kw", "utm_[a-z_]*" ]
            },
            spotify: {
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?spotify\\.com",
                rules: [ "si", "utm_[a-z_]*" ]
            },
            medium: {
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?medium\\.com",
                rules: [ "source" ]
            },
            ebay: {
                urlPattern: "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?ebay(?:\\.[a-z]{2,}){1,}",
                rules: [ "_trksid", "_from", "_nkw", "_sacat", "hash" ],
                redirections: [ "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?rover\\.ebay\\.com\\/rover.*mpre=([^&]+)" ]
            }
        }
    };

    let PROVIDERS = [];

    function compileProvider(name, def) {
        return {
            name: name,
            completeProvider: !!def.completeProvider,
            forceRedirection: !!def.forceRedirection,
            urlPattern: def.urlPattern ? new RegExp(def.urlPattern, "i") : null,
            exceptions: (def.exceptions || []).map(r => new RegExp(r, "i")),
            rawRules: (def.rawRules || []).map(r => new RegExp(r, "gi")),
            redirections: (def.redirections || []).map(r => new RegExp(r, "i")),
            ruleRes: (def.rules || []).concat(def.completeProvider ? [ ".*" ] : []).map(r => new RegExp("^" + r + "$", "i")),
            referralRes: (def.referralMarketing || []).map(r => new RegExp("^" + r + "$", "i"))
        };
    }

    function setRules(data) {
        try {
            const provs = (data && data.providers) || {};
            const arr = [];
            Object.keys(provs).forEach(k => {
                try {
                    arr.push(compileProvider(k, provs[k]));
                } catch (e) {
                    log("bad provider", k, e);
                }
            });
            arr.sort((a, b) => {
                return a.urlPattern && a.urlPattern.source === ".*" ? 1 : -1;
            });
            PROVIDERS = arr;
            log("rules loaded:", arr.length, "providers");
        } catch (e) {
            log("setRules error", e);
        }
    }

    function isLocalURL(url) {
        try {
            const h = new URL(url, location.href).hostname;
            // Bug Fix: Correctly check 172.16.0.0/12 private range in isLocalURL
            return h === "localhost" || h === "127.0.0.1" || h === "::1" || 
                   /^(10\.|192\.168\.|169\.254\.|0\.)/.test(h) || 
                   /^172\.(?:1[6-9]|2[0-9]|3[01])\./.test(h) || 
                   (h.indexOf(".local") === h.length - 6);
        } catch (e) {
            return false;
        }
    }

    function matchException(p, url) {
        if (url === "javascript:void(0)") return true;
        for (let i = 0; i < p.exceptions.length; i++) {
            if (p.exceptions[i].test(url)) return true;
        }
        return false;
    }

    function getRedirection(p, url) {
        for (let i = 0; i < p.redirections.length; i++) {
            const m = p.redirections[i].exec(url);
            if (m && m.length > 1 && typeof m[1] === "string" && m[1]) return m[1];
        }
        return null;
    }

    function decodeURL(u) {
        try {
            return decodeURIComponent(u);
        } catch (e) {
            return u;
        }
    }

    const SAFE_PROTOCOLS = [ "http:", "https:", "mailto:", "irc:", "telnet:", "tel:", "svn:" ];
    const PRIV_IP_RE = /^(?:127\.|10\.|192\.168\.|169\.254\.|0\.)/;
    const PRIV_172_RE = /^172\.(?:1[6-9]|2[0-9]|3[01])\./;

    function isGoodLink(link) {
        if (typeof link !== "string" || !link) return false;
        try {
            // Bug Fix: Avoid calling unsafe decodeURI on raw URL strings as it can corrupt delimiters
            // and crash on malformed percent encodings. Use URL parsing directly.
            const u = new URL(link.trim(), location.href);
            const h = u.hostname.toLowerCase();
            if (h === "localhost" || h === "[::1]" || h === "::1") return false;
            if (PRIV_IP_RE.test(h) || PRIV_172_RE.test(h)) return false;
            if (/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.test(h)) return false;
            if (SAFE_PROTOCOLS.indexOf(u.protocol) === -1) return false;
            return true;
        } catch (e) {
            return false;
        }
    }

    function decodeURIEncodedMod(s) {
        try {
            return decodeURIComponent(s.replace(/%2D/g, "-").replace(/%5F/g, "_").replace(/%2E/g, ".").replace(/%21/g, "!").replace(/%7E/g, "~").replace(/%2A/g, "*").replace(/%27/g, "'").replace(/%28/g, "(").replace(/%29/g, ")"));
        } catch (e) {
            return s;
        }
    }

    const IP_LOGGERS = /(?:^|\.)(?:grabify\.link|leancoding\.co|stopify\.co|freegiftcards\.co|joinmy\.site|curiouscat\.club|catsnthings\.(fun|com)|xn--yutube-iqc\.com|gyazo\.(in|nl)|yip\.su|iplogger\.(com|co|org|ru|info|net|de|cn|pl|se|uk|biz|tk|ml|ga|cf)|ipgraber\.ru|ipgrabber\.ru|2no\.co|02ip\.ru|iplis\.ru|iplo\.ru|ezstat\.ru|whatstheirip\.com|partpicker\.shop|sportshub\.bar|locations\.quest|lovebird\.guru|trulove\.guru|dateing\.club|shrekis\.life|headshot\.monster|gaming-at-my\.best|progaming\.monster|yourmy\.monster|imageshare\.best|screenshot\.best|gamingfun\.me|catsnthing\.com|fortnitechat\.site|fortnight\.space|hondachat\.com|bvog\.com|youramonkey\.com|pronosparadise\.com|freebooter\.pro|blasze\.(com|tk)|ipgrab\.org|gyazos\.com|viral\.over-blog\.com|ps3cfw\.com|urlz\.fr|webpanel\.space|steamcommumity\.com|imgur\.com\.de|fuglekos\.com|discord\.kim|prntcrs\.com|iptrace\.(com|net|org)|iptrack\.(com|net)|iplog\.(com|net|info|ru|cn)|ip-sniffer\.(com|net)|ipfinder\.(com|net|info|cc)|findmyip\.(com|net|org|info)|locateip\.(com|net|info|org)|trackip\.(com|net|org|info)|traceip\.(com|net|org|info)|extreme-ownage\.(com|net|org|tk|ml|ga|cf)|ipgun\.(com|net|org|info|tk)|ipshot\.(com|net|info|org)|ipcatcher\.(com|net|info|org)|visitor\.(com|net|info|org|biz|cc|tk|ml|ga|cf)|ip\.gd|ip\.sh|ip\.io|ip\.fyi|ip\.info)$/;

    function isIPLogger(href) {
        try {
            const h = new URL(href, location.href).hostname.toLowerCase();
            return IP_LOGGERS.test(h);
        } catch (e) {
            return false;
        }
    }

    const FF_REDIRECT_PATTERNS = [ {
        name: "query_base64",
        re: /[?&](?:url|go|r|k|cr|a)=([A-Za-z0-9+/=_-]{16,})/,
        decode: function(m) {
            let c = m.replace(/-/g, "+").replace(/_/g, "/");
            while (c.length % 4) c += "=";
            const d = safeAtob(c);
            return d && /^https?:\/\//i.test(d) ? d : null;
        }
    }, {
        name: "param_url_encoded",
        re: /[?&](?:url|u|dest|target|go|redir|redirect|to|link|href|next|continue|return|callback|forward)=(https?[^&]+)/i,
        decode: function(m) {
            return safeDecode(m);
        }
    } ];

    function extractFFRedirect(urlObj) {
        if (!urlObj || (urlObj.protocol !== "https:" && urlObj.protocol !== "http:")) return null;
        const s = urlObj.search;
        if (!s || s.length < 10) return null;
        for (let i = 0; i < FF_REDIRECT_PATTERNS.length; i++) {
            const pat = FF_REDIRECT_PATTERNS[i];
            const m = pat.re.exec(s);
            if (m && m[1]) {
                const dec = pat.decode(m[1]);
                if (dec && /^https?:\/\//i.test(dec) && isGoodLink(dec)) return dec;
            }
        }
        return null;
    }

    function parseHashFragments(urlObj) {
        let hash = urlObj.hash || "";
        if (hash.charAt(0) === "#") hash = hash.slice(1);
        let pairs = [];
        if (hash) {
            const parts = hash.split("&");
            for (let i = 0; i < parts.length; i++) {
                const seg = parts[i];
                if (seg === "") continue;
                const eq = seg.indexOf("=");
                pairs.push(eq === -1 ? [ seg, null ] : [ seg.slice(0, eq), seg.slice(eq + 1) ]);
            }
        }
        return {
            keys: function() {
                return pairs.map(x => x[0]);
            },
            delete: function(name) {
                pairs = pairs.filter(x => x[0] !== name);
            },
            toString: function() {
                return pairs.map(x => x[1] === null ? x[0] : x[0] + "=" + x[1]).join("&");
            }
        };
    }

    function activeRuleRes(p) {
        return CFG.referralMarketing ? p.ruleRes : p.ruleRes.concat(p.referralRes);
    }

    function removeFields(p, url) {
        let urlObj;
        try {
            urlObj = new URL(url);
        } catch (e) {
            return url;
        }
        const fields = urlObj.searchParams;
        const fragments = parseHashFragments(urlObj);
        if (fields.toString() === "" && fragments.toString() === "") return url;
        const res = activeRuleRes(p);
        let removed = 0;
        for (let i = 0; i < res.length; i++) {
            const re = res[i];
            const fkeys = Array.from(fields.keys());
            for (let k = 0; k < fkeys.length; k++) {
                if (re.test(fkeys[k])) {
                    fields.delete(fkeys[k]);
                    removed++;
                }
            }
            const hkeys = fragments.keys();
            for (let h = 0; h < hkeys.length; h++) {
                if (re.test(hkeys[h])) {
                    fragments.delete(hkeys[h]);
                    removed++;
                }
            }
        }
        if (removed === 0) return url;
        let out = urlObj.origin + urlObj.pathname;
        const fs = fields.toString(), hs = fragments.toString();
        if (fs) out += "?" + fs;
        if (hs) out += "#" + hs;
        out = out.replace(/\?&/, "?").replace(/#&/, "#").replace(/\?$/, "").replace(/#$/, "");
        bumpStats(removed, 0);
        return out;
    }

    function cleanURL(input, opts) {
        opts = opts || {};
        if (!CFG.globalStatus) return input;
        let url = String(input);
        if (!/^https?:\/\//i.test(url) && !/^\//.test(url)) return url;
        if (CFG.localHostsSkipping && isLocalURL(url)) return url;
        let before, iter = 0;
        do {
            before = url;
            url = cleanPass(url, opts);
            if (++iter > 6) break;
        } while (url !== before);
        return url;
    }

    function cleanPass(url, opts) {
        for (let i = 0; i < PROVIDERS.length; i++) {
            const p = PROVIDERS[i];
            if (!p.urlPattern || !p.urlPattern.test(url)) continue;
            if (matchException(p, url)) continue;
            const red = getRedirection(p, url);
            if (red !== null) {
                const target = decodeURL(red);
                if ((/^https?:\/\//i.test(target) || /^\/\//.test(target)) && isGoodLink(target)) {
                    if (CFG.forceRedirection || opts.followRedirects !== false) return target;
                }
            }
            if (p.completeProvider) {
                if (CFG.domainBlocking && opts.noFollow) {
                    bumpStats(0, 1);
                    continue;
                }
            }
            if (p.rawRules.length) {
                for (let r = 0; r < p.rawRules.length; r++) {
                    const b = url;
                    url = url.replace(p.rawRules[r], "");
                    if (b !== url) bumpStats(1, 0);
                }
            }
            url = removeFields(p, url);
        }
        return url;
    }

    // Bug Fix: Add official GitLab raw fallbacks to ensure extreme reliability even if clearurls.xyz is down
    const RULE_URLS = [ 
        "https://rules1.clearurls.xyz/data.minify.json", 
        "https://rules2.clearurls.xyz/data.minify.json",
        "https://gitlab.com/ClearURLs/rules/-/raw/master/data.minify.json"
    ];
    const HASH_URLS = [ 
        "https://rules1.clearurls.xyz/rules.minify.hash", 
        "https://rules2.clearurls.xyz/rules.minify.hash",
        "https://gitlab.com/ClearURLs/rules/-/raw/master/rules.minify.hash"
    ];

    const UPDATE_INTERVAL = 6 * 24 * 3600 * 1000;

    function gmFetch(url) {
        return new Promise(function(resolve, reject) {
            if (typeof GM_xmlhttpRequest === "function") {
                GM_xmlhttpRequest({
                    method: "GET",
                    url: url,
                    timeout: 20000,
                    onload: r => resolve({ status: r.status, text: r.responseText }),
                    onerror: () => reject(new Error("network")),
                    ontimeout: () => reject(new Error("timeout"))
                });
            } else if (typeof fetch === "function") {
                fetch(url).then(r => {
                    return r.text().then(t => ({ status: r.status, text: t }));
                }).then(resolve, reject);
            } else {
                reject(new Error("no transport"));
            }
        });
    }

    function firstOK(urls) {
        return urls.reduce((p, u) => {
            return p.catch(() => {
                return gmFetch(u).then(r => {
                    if (r.status === 200 && r.text) return r;
                    throw new Error("status");
                });
            });
        }, Promise.reject(new Error("init")));
    }

    function sha256Hex(text) {
        try {
            return crypto.subtle.digest("SHA-256", (new TextEncoder()).encode(text)).then(buf => {
                return Array.prototype.map.call(new Uint8Array(buf), b => ("0" + b.toString(16)).slice(-2)).join("");
            });
        } catch (e) {
            return Promise.reject(e);
        }
    }

    function updateRules(force) {
        if (!CFG.autoUpdateRules && !force) return Promise.resolve();
        if (!force) {
            const last = GV("rulesUpdated", 0) | 0;
            if (last && Date.now() - last < UPDATE_INTERVAL) return Promise.resolve();
        }
        return firstOK(HASH_URLS).then(hr => {
            const remoteHash = (hr.text || "").trim().toLowerCase();
            return firstOK(RULE_URLS).then(dr => {
                const dataText = (dr.text || "").trim();
                return sha256Hex(dataText).then(digest => {
                    if (remoteHash && digest !== remoteHash) {
                        log("rule hash mismatch");
                        return;
                    }
                    const data = JSON.parse(dataText);
                    SV("rulesData", data);
                    SV("rulesHash", digest);
                    SV("rulesUpdated", Date.now());
                    setRules(data);
                    log("rules updated from feed");
                });
            });
        }).catch(e => {
            log("rule update failed:", e && e.message);
        });
    }

    function safeAtob(str) {
        try {
            return atob(str);
        } catch (e) {
            return null;
        }
    }

    function safeDecode(s) {
        try {
            return decodeURIComponent(s);
        } catch (e) {
            return s;
        }
    }

    function unwrapBing(u) {
        if (!u || !/bing\.com$/i.test(u.hostname)) return null;
        if (u.pathname !== "/ck/a" && u.pathname !== "/ck/d") return null;
        const m = /[?&]u=([A-Za-z0-9_+/=\-]*)/.exec(u.search);
        if (!m) return null;
        const core = m[1].replace(/^[a-z][0-9]/i, "").replace(/-/g, "+").replace(/_/g, "/");
        while (core.length % 4) core += "=";
        const dec = safeAtob(core);
        if (dec && /^https?:\/\//i.test(dec)) return dec;
        return null;
    }

    function unwrapYahoo(u) {
        if (!u || !/\.?search\.yahoo\./i.test(u.hostname)) return null;
        const combined = (u.pathname || "") + (u.search || "");
        const m = /\/RU=(.+?)(?=\/[A-Za-z]{1,2}=|$)/i.exec(combined);
        if (!m) return null;
        const dec = safeDecode(m[1]);
        if (dec && /^https?:\/\//i.test(dec)) return dec.replace(/\/{3,}$/, "/");
        return null;
    }

    function unwrapDDG(u) {
        if (!u || !/duckduckgo\.com$/i.test(u.hostname)) return null;
        if (u.pathname !== "/l/") return null;
        const m = /[?&]uddg=([^&]+)/.exec(u.search);
        if (m) {
            const dec = safeDecode(m[1]);
            if (dec && /^https?:\/\//i.test(dec)) return dec;
        }
        return null;
    }

    function unwrapYandex(u) {
        if (!u || !/\.?yandex\.[a-z]{2,}$/i.test(u.hostname)) return null;
        if (u.pathname.indexOf("/clck/") !== 0) return null;
        const m = /[?&](?:url|u)=([^&]+)/.exec(u.search);
        if (m) {
            const dec = safeDecode(m[1]);
            if (dec && /^https?:\/\//i.test(dec)) return dec;
        }
        return null;
    }

    function unwrapSearx(u) {
        if (!u || u.pathname.indexOf("/imageproxy") !== 0) return null;
        const m = /[?&]url=([^&]+)/.exec(u.search);
        if (m) {
            const dec = safeDecode(m[1]);
            if (dec && /^https?:\/\//i.test(dec)) return dec;
        }
        return null;
    }

    const ENGINES = [ {
        n: "google",
        h: /\.google\.(?:[a-z]{2,3})(?:\.[a-z]{2})?$|^(?:www\.)?google\.(com|cat)$/i,
        s: [ "ei", "ved", "sca_esv", "iflsig", "gs_lp", "oq", "gs_lcrp", "uact", "source", "sourceid", "aqs", "sugexp", "npsic", "zx", "no_sw_cr", "sei", "bih", "biw", "noj", "pws", "nfpr", "prmd", "prmdo", "rlz", "sxsrf", "cs", "gfe_rd", "tbo", "sa", "usg", "sig2", "rct", "cd", "sqi", "dpr", "cad", "btnG", "gbv", "gs_gbr", "bs", "ijn" ]
    }, {
        n: "bing",
        h: /(^|\.)bing\.com$/i,
        u: unwrapBing,
        s: [ "form", "qs", "sc", "sk", "cvid", "sp", "pq", "scenario", "tst", "mm", "SIM", "BCPT", "SID", "REDIR", "SRCHD", "SRCHHPGUSR", "ACNT", "UGC", "asec", "sl", "HSAG", "PI", "CPS", "TSCELL", "oid", "nsDSK", "nsTYP", "ns_section", "pd", "np", "pn", "toWww", "redir", "FORM", "ADLT", "IG", "FLP" ]
    }, {
        n: "yahoo",
        h: /(^|\.)search\.yahoo\./i,
        u: unwrapYahoo,
        s: [ "fr", "fp", "ei", "fr2", "pstrt", "xargs", "pstart", "toggle", "cop", "nojs", "save", "_trkparms", "_trkalgid", "_trkstat" ]
    }, {
        n: "duckduckgo",
        h: /(^|\.)duckduckgo\.com$/i,
        u: unwrapDDG,
        s: [ "kp", "kl", "k1", "kaf", "khq", "kns", "kac", "km", "kam", "rut", "df", "ia", "iar", "iai", "iaf" ]
    }, {
        n: "yandex",
        h: /(^|\.)yandex\.[a-z]{2,}$/i,
        u: unwrapYandex,
        s: [ "lr", "redircnt", "from", "etext", "clid", "win", "src", "uuid", "mc", "cts", "showall", "msprt", "cmtm", "flags", "sku" ]
    }, {
        n: "baidu",
        h: /(^|\.)baidu\.com$/i,
        s: [ "tn", "ie", "oq", "rsp", "f", "usm", "fenlei", "rq", "issp", "f8s", "rEST", "noUC", "rspIndex", "cid", "wd_eq", "rsv_dl", "rsv_bp", "rsv_spt", "rsv_idx", "rsv_iqid", "rsv_t", "rsv_pq", "rsv_igh", "rsv_enter", "rsv_bdr", "rsv_bq", "rsv_sid", "rsv_sug", "oq_ext", "prefixsug", "_ka", "_kb", "_kc", "sa", "isWidth", "cvrt", "uafrom", "po" ]
    }, {
        n: "sogou",
        h: /(^|\.)sogou\.com$/i,
        s: [ "ie", "from", "pid", "sugs", "suti", "rcs", "sourceid", "uaids", "p", "ri" ]
    }, {
        n: "so360",
        h: /(^|\.)(so\.com|haosou\.com)$/i,
        s: [ "src", "pq", "fr", "ls", "lb", "psid", "shushihao", "smart_result", "sec", "_pp" ]
    }, {
        n: "ecosia",
        h: /(^|\.)ecosia\.org$/i,
        u: unwrapBing,
        s: [ "tt", "ref", "ucid", "tsua", "regio", "mkt", "test", "spawn" ]
    }, {
        n: "startpage",
        h: /(^|\.)startpage\.(com|eu)$/i,
        s: [ "abp", "t", "lui", "sc", "cat", "prfe", "segment", "language", "df", "si", "ksu", "psj" ]
    }, {
        n: "brave",
        h: /(^|\.)search\.brave\.com$/i,
        s: [ "source", "tf", "summary", "spellcheck", "offset" ]
    }, {
        n: "qwant",
        h: /(^|\.)qwant\.com$/i,
        s: [ "t", "r", "device", "s", "b", "gtm", "rfr", "spr", "qtc" ]
    }, {
        n: "naver",
        h: /(^|\.)search\.naver\.com$/i,
        s: [ "sm", "where", "org", "st", "oauth", "mra", "nso", "nvi", "nso_open" ]
    }, {
        n: "daum",
        h: /(^|\.)search\.daum\.net$/i,
        s: [ "nil_profile", "nil_ch", "SUCCEEDED", "w", "t" ]
    }, {
        n: "seznam",
        h: /(^|\.)(search\.)?seznam\.cz$/i,
        s: [ "qid", "section", "id", "source", "atm", "ppt", "ppn" ]
    }, {
        n: "aol",
        h: /(^|\.)search\.aol\.(com|co\.uk)$/i,
        s: [ "s_chn", "pst", "aolpsd", "ab", "abc", "fr2", "fr", "qct", "qsv" ]
    }, {
        n: "ask",
        h: /(^|\.)ask\.com$/i,
        s: [ "o", "qsrc", "l", "sb", "search", "qid", "qid1", "sr", "gc" ]
    }, {
        n: "dogpile",
        h: /(^|\.)dogpile\.com$/i,
        s: [ "spot", "spver", "of", "tbsto", "tbst" ]
    }, {
        n: "webcrawler",
        h: /(^|\.)webcrawler\.com$/i,
        s: [ "spot", "spver", "of", "tbsto", "tbst", "displayImageUrl" ]
    }, {
        n: "excite",
        h: /(^|\.)excite\.(com|de)$/i,
        s: [ "track", "adslot", "c" ]
    }, {
        n: "lycos",
        h: /(^|\.)search\.lycos\.com$/i,
        s: [ "as", "sa", "gi", "afc", "tab", "area", "h" ]
    }, {
        n: "info",
        h: /(^|\.)info\.com$/i,
        s: [ "cb", "qwp", "adse", "qwpabs" ]
    }, {
        n: "mojeek",
        h: /(^|\.)mojeek\.com$/i,
        s: [ "rt", "lr", "tref", "fn" ]
    }, {
        n: "swisscows",
        h: /(^|\.)swisscows\.com$/i,
        s: [ "region", "mm", "facet", "querycount" ]
    }, {
        n: "presearch",
        h: /(^|\.)presearch\.com$/i,
        s: [ "ref", "rid", "spm" ]
    }, {
        n: "gibiru",
        h: /(^|\.)gibiru\.com$/i,
        s: [ "girk", "gsterm", "sx" ]
    }, {
        n: "marginalia",
        h: /(^|\.)search\.marginalia\.nu$/i,
        s: [ "view", "profile", "js" ]
    }, {
        n: "kagi",
        h: /(^|\.)kagi\.com$/i,
        s: [ "token", "t", "em", "cdn" ]
    }, {
        n: "metager",
        h: /(^|\.)metager\.de$/i,
        s: [ "lang", "mlang", "subng", "focus" ]
    }, {
        n: "youcom",
        h: /(^|\.)you\.com$/i,
        s: [ "tb", "fromSearch", "ae", "sref" ]
    }, {
        n: "perplexity",
        h: /(^|\.)perplexity\.ai$/i,
        s: [ "copilot", "q", "s", "rq" ]
    }, {
        n: "phind",
        h: /(^|\.)phind\.com$/i,
        s: [ "search", "source", "c" ]
    }, {
        n: "ekoru",
        h: /(^|\.)ekoru\.org$/i,
        s: [ "r", "c", "src" ]
    }, {
        n: "coccoc",
        h: /(^|\.)coccoc\.com$/i,
        s: [ "suggestion", "utm_source", "nts" ]
    }, {
        n: "najdi",
        h: /(^|\.)najdi\.si$/i,
        s: [ "t", "ref", "ln" ]
    }, {
        n: "yam",
        h: /(^|\.)search\.yam\.com$/i,
        s: [ "m", "k", "n", "qft" ]
    }, {
        n: "goo",
        h: /(^|\.)search\.goo\.ne\.jp$/i,
        s: [ "dc", "tp", "pt", "mt" ]
    }, {
        n: "rambler",
        h: /(^|\.)nova\.rambler\.ru$/i,
        s: [ "abc", "mid", "mid2", "r_seo" ]
    }, {
        n: "go.mail.ru",
        h: /(^|\.)go\.mail\.ru$/i,
        s: [ "rch", "pool", "sf", "sb", "d", "gp" ]
    }, {
        n: "walla",
        h: /(^|\.)search\.walla\.co\.il$/i,
        s: [ "e", "q", "l" ]
    } ]

    const _engineCache = {};
    function getEngine(host) {
        if (!host) return null;
        if (Object.prototype.hasOwnProperty.call(_engineCache, host)) return _engineCache[host];
        let found = null;
        for (let i = 0; i < ENGINES.length; i++) {
            if (ENGINES[i].h.test(host)) {
                found = ENGINES[i];
                break;
            }
        }
        _engineCache[host] = found;
        return found;
    }

    function isEngineHost(h) {
        return !!getEngine(h);
    }

    const GOOGLE_RE = /\.google\.(?:[a-z]{2,3})(?:\.[a-z]{2})?$/;
    function isGoogleHost(h) {
        if (!h) return false;
        return h === location.hostname || h === "www.google.com" || h === "google.com" || GOOGLE_RE.test(h);
    }

    function safeURL(href) {
        try {
            return new URL(href, location.href);
        } catch (e) {
            const a = document.createElement("a");
            a.href = String(href);
            return a;
        }
    }

    function extractGoogleRedirect(urlObj) {
        if (!urlObj || (urlObj.protocol !== "https:" && urlObj.protocol !== "http:")) return null;
        const h = urlObj.hostname, p = urlObj.pathname, s = urlObj.search, hash = urlObj.hash;
        let m;
        if (isGoogleHost(h) && (p === "/url" || p === "/local_url" || p === "/searchurl/rr.html" || p === "/linkredirect" || p === "/interstitial")) {
            if (m = /[?&](?:q|url|dest|imgurl|continue)=((?:https?|ftp)[%:][^&]+)/.exec(s)) return decodeURIComponent(m[1]);
            if (m = /[?&](?:q|url|dest|continue)=((?:%2[Ff]|\/)[^&]+)/.exec(s)) return urlObj.origin + decodeURIComponent(m[1]);
            if (m = /[#&]url=(https?[:%][^&]+)/.exec(hash)) return decodeURIComponent(m[1]);
        }
        if (isGoogleHost(h) && p === "/sorry/index" && (m = /[?&]continue=((?:https?)[%:][^&]+)/.exec(s))) return decodeURIComponent(m[1]);
        if (h === "cdn.ampproject.org" || h.indexOf(".cdn.ampproject.org") > -1 || h === "www.bing-amp.com" || h.indexOf(".bing-amp.com") > -1) {
            const amp = (p || "").replace(/^\/c\/s\/|^\/v\/[^/]+\/|^\/+/, "").replace(/^\/+/, "");
            if (amp && amp.indexOf("/") > -1) {
                const ampd = "https://" + amp + (s || "");
                if (isGoodLink(ampd)) return ampd;
            }
        }
        if (isGoogleHost(h) && p === "/maps/preview/place" && (m = /[?&](?:q|url)=((?:https?)[%:][^&]+)/.exec(s))) return decodeURIComponent(m[1]);
        if (h === "googleweblight.com" && (p === "/fp" || p === "/i" || p === "/lite") && (m = /[?&]u=((?:https?|ftp)[%:][^&]+)/.exec(s))) return decodeURIComponent(m[1]);
        if (h.indexOf("googleadservices") > -1 && p === "/pagead/aclk" && (m = /[?&](?:adurl|dest)=((?:https?)[%:][^&]+)/.exec(s))) return decodeURIComponent(m[1]);
        if (h.indexOf("consent.google") === 0 && (m = /[?&]continue=((?:https?)[%:][^&]+)/.exec(s))) return decodeURIComponent(m[1]);
        if ((h === "news.google.com" || h === "discover.google.com") && (m = /[?&](?:url|dest)=((?:https?)[%:][^&]+)/.exec(s))) return decodeURIComponent(m[1]);
        if (/^\/amp\/s\//.test(p)) {
            const c = p.substring(7) + s + hash;
            if (c && c !== "/") return "https://" + c;
        }
        if (h.indexOf("translate.google") === 0 && p === "/translate" && (m = /[?&]u=((?:https?)[%:][^&]+)/.exec(s))) return decodeURIComponent(m[1]);
        if (h.indexOf("scholar.google") === 0 && p === "/scholar_url" && (m = /[?&]url=((?:https?|ftp)[%:][^&]+)/.exec(s))) return decodeURIComponent(m[1]);
        if (h.indexOf("books.google") === 0 && (m = /[?&](?:url|redirect)=((?:https?)[%:][^&]+)/.exec(s))) return decodeURIComponent(m[1]);
        if (h === "play.google.com" && p === "/url" && (m = /[?&]url=((?:https?)[%:][^&]+)/.exec(s))) return decodeURIComponent(m[1]);
        if (h.indexOf(".googlesyndication.com") > -1 && (m = /[?&](?:adurl|dest_url|redirect)=((?:https?)[%:][^&]+)/.exec(s))) return decodeURIComponent(m[1]);
        return null;
    }

    const DOMAIN_REDIRECTS = [ {
        h: /(^|\.)syosetu\.org$/i,
        f: function(u) {
            if (/[?&]mode=url_jump/.test(u.search) === false) return null;
            const m = /[?&]url=([^&]+)/.exec(u.search);
            if (m) {
                const d = safeDecode(m[1]);
                if (/^https?:\/\//i.test(d)) return d;
            }
            return null;
        }
    }, {
        h: /(^|\.)retrospring\.net$/i,
        f: function(u) {
            if (u.pathname.indexOf("/linkfilter") !== 0) return null;
            const m = /[?&]url=([^&]+)/.exec(u.search);
            if (m) {
                const d = safeDecode(m[1]);
                if (/^https?:\/\//i.test(d)) return d;
            }
            return null;
        }
    }, {
        h: /(^|\.)mydramalist\.com$/i,
        f: function(u) {
            if (u.pathname.indexOf("/redirect") !== 0) return null;
            const m = /[?&]q=([^&]+)/.exec(u.search);
            if (m) {
                const d = safeDecode(m[1]);
                if (/^https?:\/\//i.test(d)) return d;
            }
            return null;
        }
    }, {
        h: /^pirateproxy\.wtf$/i,
        f: function(u) {
            const q = u.search.replace(/^\?/, "").trim();
            if (q && /^[a-z0-9.-]+\.(com|net|org|io|co|me|xyz|info|tv|cc)/i.test(q)) return "https://" + q;
            return null;
        }
    }, {
        h: /(^|\.)acortame\.xyz$/i,
        f: function(u) {
            if (!u.hash || u.hash.length < 4) return null;
            const d = safeAtob(u.hash.slice(1));
            if (d && /^https?:\/\//i.test(d)) return d;
            return null;
        }
    }, {
        h: /^downloadr\.in$/i,
        f: function(u) {
            const q = u.search.replace(/^\?/, "");
            const dec = safeDecode(q);
            if (dec && /^https?:\/\//i.test(dec)) return dec;
            return null;
        }
    }, {
        h: /(^|\.)linksunlocked\.com$/i,
        f: function(u) {
            const m = /[?&]token=([^&]+)/.exec(u.search);
            if (m) return "https://uploadhaven.com/download/" + m[1];
            return null;
        }
    }, {
        h: /(^|\.)daominhha\.com$/i,
        f: function(u) {
            if (u.pathname.indexOf("/download") !== 0) return null;
            const m = /[?&]url=([^&]+)/.exec(u.search);
            if (!m) return null;
            const str = safeDecode(m[1]).split("").reverse().join("").replace(/-/g, "+").replace(/\./g, "/").replace(/,/g, "=");
            const d = safeAtob(str);
            if (d && /^https?:\/\//i.test(d)) return d;
            return null;
        }
    }, {
        h: /(^|\.)brpaper\.com$/i,
        f: function(u) {
            if (u.pathname.indexOf("downloads") === -1) return null;
            return u.origin + u.pathname.replace("downloads", "downloader") + u.search;
        }
    }, {
        h: /(^|\.)anonym\.ninja$/i,
        f: function(u) {
            const seg = u.pathname.split("/").filter(Boolean).pop();
            if (seg) return "https://anonym.ninja/download/file/request/" + seg;
            return null;
        }
    }, {
        h: /(^|\.)zt-protect\.com$/i,
        f: function(u) {
            if (u.pathname.indexOf("/to/") === 0) return u.origin + "/link/" + u.pathname.slice(4);
            if (u.pathname.indexOf("/voirlien/") === 0) return u.origin + "/telecharger/" + u.pathname.slice(10);
            return null;
        }
    }, {
        h: /(^|\.)xlink\.cc$/i,
        f: function(u) {
            // Bug Fix: Access bootstrapData through unsafeWindow or direct window securely across boundary
            const win = (typeof unsafeWindow !== "undefined") ? unsafeWindow : window;
            if (!win.bootstrapData) return null;
            try {
                const d = JSON.parse(safeAtob(win.bootstrapData));
                if (d && d.linkResponse && d.linkResponse.link && d.linkResponse.link.long_url) return d.linkResponse.link.long_url;
            } catch (e) {}
            return null;
        }
    }, {
        h: /(^|\.)1shortlink\.com$/i,
        f: function() { return null; }
    }, {
        h: /(^|\.)boost\.ink$/i,
        f: function() { return null; }
    }, {
        h: /(^|\.)l\.ndoqp\.com$|(^|\.)elnurtech\.com$|(^|\.)jo2win\.com$/i,
        f: function() { return null; }
    } ];

    function extractDomainRedirect(urlObj) {
        if (!urlObj || (urlObj.protocol !== "https:" && urlObj.protocol !== "http:")) return null;
        const h = urlObj.hostname.toLowerCase();
        for (let i = 0; i < DOMAIN_REDIRECTS.length; i++) {
            const dr = DOMAIN_REDIRECTS[i];
            if (dr.h.test(h)) {
                try {
                    const d = dr.f(urlObj);
                    if (d && typeof d === "string" && isGoodLink(d)) return d;
                } catch (e) {}
            }
        }
        return null;
    }

    function extractRedirect(urlObj) {
        if (!urlObj) return null;
        const g = extractGoogleRedirect(urlObj);
        if (g) return g;
        const eng = getEngine(urlObj.hostname);
        if (eng && eng.u) {
            const r = eng.u(urlObj);
            if (r) return r;
        }
        const dr = extractDomainRedirect(urlObj);
        if (dr) return dr;
        const sx = unwrapSearx(urlObj);
        if (sx) return sx;
        const ff = extractFFRedirect(urlObj);
        if (ff) return ff;
        return null;
    }

    function resolveIntent(href) {
        if (!href || href.indexOf("intent:") !== 0) return null;
        const mk = ";S.browser_fallback_url=";
        const si = href.indexOf(mk);
        if (si === -1) return null;
        let vs = si + mk.length;
        let ve = href.indexOf(";", vs);
        if (ve === -1) ve = href.length;
        let raw;
        try {
            raw = decodeURIComponent(href.substring(vs, ve));
        } catch (e) {
            return null;
        }
        const dest = extractRedirect(safeURL(raw)) || raw;
        return href.substring(0, vs) + encodeURIComponent(dest) + href.substring(ve);
    }

    const STRIP_PARAMS_RE = /^(?:utm_|hsa_|mc_|__|_hs|oly_|vero_|wicked|hsfp|hssc|hstc|fbclid|gclid|gclsrc|dclid|wbraid|gbraid|msclkid|twclid|igsh|yclid|_openstat|srsltid|mkt_tok|cmpid|spm$|scm|spm_id|trk$|li[A-Z]|ref_|share_|tracking_)/i;

    function stripQuickUTM(href) {
        try {
            const u = new URL(href, location.href);
            let changed = false;
            u.searchParams.forEach((v, k) => {
                if (STRIP_PARAMS_RE.test(k) || /utm_/i.test(k)) {
                    u.searchParams.delete(k);
                    changed = true;
                }
            });
            return changed ? u.toString() : href;
        } catch (e) {
            return href;
        }
    }

    function sanitizeHrefRaw(href) {
        if (!href) return href;
        let s = String(href);
        if (!/^https?:\/\//i.test(s) && s.indexOf("intent:") !== 0 && s.charAt(0) !== "/") return s;
        const d = extractRedirect(safeURL(s));
        if (d && isGoodLink(d)) s = d;
        if (s.indexOf("intent:") === 0) {
            const iv = resolveIntent(s);
            if (iv) s = iv;
        }
        s = cleanURL(s);
        const q = stripQuickUTM(s);
        if (q !== s) s = q;
        return s;
    }

    function sanitizeHref(href) {
        if (!href) return href;
        const key = String(href);
        if (key.length > 2048) return sanitizeHrefRaw(href);
        const c = lruGet(key);
        if (c.hit) return c.val;
        const res = sanitizeHrefRaw(href);
        lruSet(key, res);
        return res;
    }

    let _serpBusy = false;
    function stripSERPBar() {
        if (!CFG.stripSERPParams || _serpBusy || !isActive()) return;
        const eng = getEngine(location.hostname);
        if (!eng || !eng.s) return;
        try {
            const u = new URL(location.href);
            let changed = false;
            const params = eng.s;
            const allKeys = Array.from(u.searchParams.keys());
            allKeys.forEach(k => {
                if (k.indexOf("rsv_") === 0) {
                    u.searchParams.delete(k);
                    changed = true;
                    return;
                }
                for (let i = 0; i < params.length; i++) {
                    if (k === params[i]) {
                        u.searchParams.delete(k);
                        changed = true;
                        break;
                    }
                }
            });
            if (changed) {
                _serpBusy = true;
                history.replaceState(history.state, "", u.toString());
                _serpBusy = false;
            }
        } catch (e) {
            _serpBusy = false;
        }
    }

    const GA_COOKIE_RE = /^(_ga|_gid|_gat|_gcl_|_gac_|__utm[a-z]|_gali)/;

    function purgeGACookies() {
        if (!CFG.purgeGACookies) return;
        try {
            const cookies = document.cookie.split(";");
            const paths = [ "/", "" ], hosts = [ location.hostname, "." + location.hostname, "" ];
            for (let i = 0; i < cookies.length; i++) {
                const name = (cookies[i].split("=")[0] || "").trim();
                if (name && GA_COOKIE_RE.test(name)) {
                    for (let pi = 0; pi < paths.length; pi++) {
                        for (let hi = 0; hi < hosts.length; hi++) {
                            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=" + paths[pi] + (hosts[hi] ? ";domain=" + hosts[hi] : "") + ";SameSite=Lax";
                        }
                    }
                }
            }
        } catch (e) {}
    }

    const RWT_CALL_RE = /\ba?rwt\(/;
    const TRACK_ATTR_RE = /\b(?:a?rwt|(?:un)?track|ping|click_?log|ctu|mousedown_?url)\b/i;
    const TRACK_EVENTS = [ "onmousedown", "ontouchstart", "onclick", "onfocus", "oncontextmenu", "onpointerdown", "ondragstart", "onpointerup" ];
    const TRACK_DATA_ATTRS = [ "data-jsarwt", "data-ved", "data-ei", "data-ctorig", "data-clk", "data-clk-atid", "data-cthref" ];

    let _pageCount = 0;
    function bumpPageCount() {
        _pageCount++;
        if (CFG.showHUD) updateHUD();
    }

    function desiredPolicy() {
        if (!CFG.forceNoReferrer) return "";
        return CFG.referrerPolicy === "no-referrer" ? "no-referrer" : "origin";
    }

    function applyRP(el) {
        const p = desiredPolicy();
        if (!p) return;
        try {
            if (el.referrerPolicy !== "no-referrer") el.referrerPolicy = p;
        } catch (e) {}
    }

    function removeTrackAttrs(el) {
        for (let i = 0; i < TRACK_EVENTS.length; i++) {
            const v = el.getAttribute(TRACK_EVENTS[i]);
            if (v && TRACK_ATTR_RE.test(v)) el.removeAttribute(TRACK_EVENTS[i]);
        }
        for (let j = 0; j < TRACK_DATA_ATTRS.length; j++) el.removeAttribute(TRACK_DATA_ATTRS[j]);
    }

    const TRACKER_STORAGE_RE = /^(?:_ga|_gid|_gat|_gcl|_gac|__utm|_hj|hubspotutk|hs_messages|intercom-id|intercom-session|mp_|mixpanel|amplitude|ajs_anonymous_id|ajs_user_id|__stripe_mid|__stripe_sid|_sift_session|_sift_uniq|s_fid|s_cc|FP_ID|FP_CODE|fp_|tt_sessionId|tt_visitorId|_br_uid|_p_id|panoramaId|panoramaId_expiry|_cb|_chartbeat|MTM|_pk_|umto|yandex_)/i;

    function purgeTrackerStorage() {
        if (!CFG.purgeStorage) return;
        try {
            const ks = [];
            try {
                for (let i = 0; i < localStorage.length; i++) ks.push(localStorage.key(i));
            } catch (e) {}
            for (let j = 0; j < ks.length; j++) {
                const k = ks[j];
                if (k && TRACKER_STORAGE_RE.test(k)) {
                    try {
                        localStorage.removeItem(k);
                    } catch (e) {}
                }
            }
        } catch (e) {}
    }

    let _hudEl = null;
    function updateHUD() {
        try {
            if (!CFG.showHUD) {
                if (_hudEl) {
                    _hudEl.remove();
                    _hudEl = null;
                }
                return;
            }
            if (!_hudEl || !_hudEl.isConnected) {
                _hudEl = document.createElement("div");
                _hudEl.id = "nt-hud";
                _hudEl.style.cssText = "position:fixed;bottom:12px;left:12px;z-index:2147483647;background:rgba(20,184,166,.92);color:#fff;font:600 12px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:5px 10px;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,.35);pointer-events:none;letter-spacing:.2px;backdrop-filter:blur(4px)";
                _hudEl.title = "NullTrail";
                const root = document.body || document.documentElement;
                if (root) root.appendChild(_hudEl);
            }
            _hudEl.textContent = "NT " + _pageCount + " cleaned";
        } catch (e) {}
    }

    const BOUNCE_TRACKERS = /(?:^|\.)(?:out\.reddit\.com|t\.co|l\.facebook\.com|href\.li|smarturl\.it|bit\.ly|t\.umblr\.com|click\.linksynergy\.com|go\.skimresources\.com|redirect\.viglink\.com|ow\.ly|buff\.ly|rb\.gy|rebrand\.ly|shorturl\.at)$/i;
    let _lastNavHost = "";
    let _lastNavTime = 0;

    function monitorBounce() {
        if (!CFG.blockBounceRedirect) return;
        try {
            const ps = history.pushState, rs = history.replaceState;
            function wrap(orig) {
                return function(st, ti, url) {
                    try {
                        if (url) {
                            const nu = new URL(String(url), location.href);
                            const now = Date.now();
                            const h = nu.hostname.toLowerCase();
                            if (BOUNCE_TRACKERS.test(h) && _lastNavHost && !_lastNavHost.endsWith(h.replace(/^[^.]+\./, "")) && now - _lastNavTime < 4000) {
                                const m = /[?&](?:url|u|dest|to)=(https?[^&]+)/i.exec(nu.search);
                                if (m) {
                                    const dec = safeDecode(m[1]);
                                    if (dec && isGoodLink(dec)) {
                                        arguments[2] = dec;
                                    }
                                }
                            }
                            _lastNavHost = h;
                            _lastNavTime = now;
                        }
                    } catch (e) {}
                    return orig.apply(history, arguments);
                };
            }
            history.pushState = wrap(ps);
            history.replaceState = wrap(rs);
        } catch (e) {}
    }

    function setCookie(name, val, days) {
        try {
            let exp = "";
            if (days) {
                const d = new Date();
                d.setTime(d.getTime() + days * 86400000);
                exp = ";expires=" + d.toUTCString();
            }
            const parts = [ name + "=" + val + exp, "path=/", "SameSite=Lax" ];
            document.cookie = parts.join(";");
            const h = location.hostname;
            document.cookie = name + "=" + val + exp + ";path=/;domain=." + h + ";SameSite=Lax";
            document.cookie = name + "=" + val + exp + ";path=/;domain=" + h + ";SameSite=Lax";
        } catch (e) {}
    }

    const CONSENT_SELECTORS = [ "[id*=consent] button[id*=reject i], [id*=consent] button[id*=decline i], [id*=consent] button[id*=refuse i]", "[id*=consent] button[class*=reject i], [id*=consent] button[class*=decline i]", "[class*=consent] button[class*=reject i], [class*=consent] button[class*=decline i]", "[class*=cookie] button[class*=reject i], [class*=cookie] button[class*=decline i]", "button#onetrust-reject-all-handler", "button[data-cy=reject-cookies], button[aria-label*=reject i]", "a[href*=reject i], button[class*=opt-out i]", ".sp_choice_type_REJECT_ALL, .sp_choice_type_REJECT", "[data-testid=reject-cookies], [data-testid=cookie-policy-decline]", "button.fc-button[aria-label*=consent i]:not(.fc-cta-consent)", ".cmp-reject, .cookie-reject, #cookie-notice-reject", ".osano-cm-denyAll, .cm-btn-accept-all + button" ];
    
    // Bug Fix: Use WeakSet to allow auto-reject to run dynamically on re-rendered or multi-step banners
    let _clickedConsents = new WeakSet();
    function autoRejectConsent() {
        try {
            for (let i = 0; i < CONSENT_SELECTORS.length; i++) {
                const els = document.querySelectorAll(CONSENT_SELECTORS[i]);
                for (let j = 0; j < els.length; j++) {
                    const el = els[j];
                    if (!_clickedConsents.has(el) && (el.offsetParent !== null || el.getClientRects().length > 0)) {
                        _clickedConsents.add(el);
                        try {
                            el.click();
                            log("auto-rejected consent banner element:", el);
                        } catch (e) {}
                    }
                }
            }
        } catch (e) {}
    }

    function applyPrivacyPresets() {
        if (!CFG.enforcePrivacyPresets || !isActive()) return;
        const h = location.hostname.toLowerCase();
        try {
            if (/\.google\.(?:com|co\.[a-z]{2}|com\.[a-z]{2}|[a-z]{2})$/.test(h) || h === "www.google.com") {
                setCookie("CONSENT", "YES+", 365);
                setCookie("SOCK", "gzh000", 365);
                setCookie("ANID", "AHWqTQ", 365);
            }
            if (/(^|\.)(youtube|youtu)\./.test(h)) {
                const pref = "f6=40030000&f5=30000";
                setCookie("PREF", pref, 365);
            }
            if (/(^|\.)reddit\.com$/.test(h)) {
                setCookie("eu_cookie", "{%22opted%22:true}", 365);
            }
            if (/(^|\\.)(twitter|x)\\.com$/.test(h)) {
                setCookie("personalization_id", "", -1);
            }
            if (/(^|\.)facebook\.com$/.test(h)) {
                setCookie("dpr", "1", 365);
                setCookie("wd", "1280x720", 365);
            }
            if (/(^|\\.)tiktok\\.com$/.test(h)) {
                setCookie("tt_cs_1", "", -1);
            }
            if (/(^|\.)amazon\.[a-z.]+$/.test(h)) {
                setCookie("ad-id", "", -1);
            }
            if (/(^|\\.)(spotify)\\.com$/.test(h)) {
                setCookie("sp_t", "", -1);
            }
            if (/(^|\\.)(linkedin)\\.com$/.test(h)) {
                setCookie("li_gc", "LTsT1NG12RrXkhWvAWW18g==", 365);
            }
            if (/(^|\.)(nytimes|washingtonpost)\.com$/.test(h)) {
                setCookie("NYT-T", "out", 365);
                setCookie("wap-profile", "", 365);
            }
            if (/(^|\.)(bbc)\.(com|co\.uk)$/.test(h)) {
                setCookie("ckns_policy", "111", 365);
            }
        } catch (e) {}
        autoRejectConsent();
    }

    function blockIPLoggerNav() {
        if (!CFG.blockIPLoggers) return;
        document.addEventListener("click", function(e) {
            let el = e.target;
            while (el && !el.href) el = el.parentElement;
            if (el && el.href && isIPLogger(el.href)) {
                e.preventDefault();
                e.stopPropagation();
                el.setAttribute("data-nt-blocked-iplogger", "true");
                bumpStats(0, 1);
                log("blocked IP-logger navigation:", el.href);
            }
        }, true);
        document.addEventListener("auxclick", function(e) {
            let el = e.target;
            while (el && !el.href) el = el.parentElement;
            if (el && el.href && isIPLogger(el.href)) {
                e.preventDefault();
                e.stopPropagation();
                el.setAttribute("data-nt-blocked-iplogger", "true");
                bumpStats(0, 1);
            }
        }, true);
    }

    function enforceMetaReferrer() {
        if (!CFG.forceNoReferrer) return;
        const pol = desiredPolicy();
        if (!pol) return;
        let meta = document.querySelector('meta[name="referrer"]');
        if (meta) {
            const c = meta.getAttribute("content");
            if (c !== "no-referrer" && c !== "origin") meta.setAttribute("content", pol);
        } else {
            meta = document.createElement("meta");
            meta.name = "referrer";
            meta.content = pol;
            const root = document.head || document.documentElement;
            if (root) root.insertBefore(meta, root.firstChild);
        }
    }

    function ntMainWorldBoot() {
        "use strict";
        let cfg = {
            forceNoReferrer: true,
            referrerPolicy: "origin",
            noping: true,
            google: false,
            blockGA: true,
            blockPrivacySandbox: true,
            blockKeepalive: true,
            blockIPLoggers: true,
            unblockContextMenu: false,
            unblockTextSelection: false
        };
        let _rawCfg = null;

        function loadCfg() {
            try {
                const m = document.getElementById("nt-config");
                if (m) {
                    const raw = m.getAttribute("content");
                    if (raw && raw !== _rawCfg) {
                        _rawCfg = raw;
                        const j = JSON.parse(decodeURIComponent(escape(atob(raw))));
                        if (j) cfg = j;
                    }
                }
            } catch (e) {}
        }
        loadCfg();

        document.addEventListener("nt:cfg", function() {
            _rawCfg = null;
            loadCfg();
        }, true);

        const GRE = /\.google\.(?:[a-z]{2,3})(?:\.[a-z]{2})?$/;
        function isG(h) {
            return h === "www.google.com" || h === "google.com" || GRE.test(h);
        }

        function policy() {
            loadCfg();
            return cfg.forceNoReferrer ? (cfg.referrerPolicy === "no-referrer" ? "no-referrer" : "origin") : "";
        }

        function safeAtob(s) {
            try { return atob(s); } catch (e) { return null; }
        }

        function safeDec(s) {
            try { return decodeURIComponent(s); } catch (e) { return s; }
        }

        function realGoogle(a) {
            if (a.protocol !== "https:" && a.protocol !== "http:") return null;
            let url;
            if ((isG(a.hostname) || a.hostname === location.hostname) && (a.pathname === "/url" || a.pathname === "/local_url" || a.pathname === "/searchurl/rr.html" || a.pathname === "/linkredirect" || a.pathname === "/interstitial")) {
                if (url = /[?&](?:q|url|dest|imgurl|continue)=((?:https?|ftp)[%:][^&]+)/.exec(a.search)) return decodeURIComponent(url[1]);
                if (url = /[?&](?:q|url|dest|continue)=((?:%2[Ff]|\/)[^&]+)/.exec(a.search)) return a.origin + decodeURIComponent(url[1]);
                if (url = /[#&]url=(https?[:%][^&]+)/.exec(a.hash)) return decodeURIComponent(url[1]);
            }
            if (a.hostname === "googleweblight.com" && (a.pathname === "/fp" || a.pathname === "/i" || a.pathname === "/lite")) {
                if (url = /[?&]u=((?:https?|ftp)[%:][^&]+)/.exec(a.search)) return decodeURIComponent(url[1]);
            }
            if (a.hostname.indexOf("googleadservices") > -1 && a.pathname === "/pagead/aclk") {
                if (url = /[?&](?:adurl|dest)=((?:https?)[%:][^&]+)/.exec(a.search)) return decodeURIComponent(url[1]);
            }
            return null;
        }

        function realBing(a) {
            if (!/bing\.com$/i.test(a.hostname)) return null;
            if (a.pathname !== "/ck/a" && a.pathname !== "/ck/d") return null;
            const m = /[?&]u=([A-Za-z0-9_+/=\-]*)/.exec(a.search);
            if (!m) return null;
            const core = m[1].replace(/^[a-z][0-9]/i, "").replace(/-/g, "+").replace(/_/g, "/");
            while (core.length % 4) core += "=";
            const d = safeAtob(core);
            return d && /^https?:\/\//i.test(d) ? d : null;
        }

        function realYahoo(a) {
            if (!/\.?search\.yahoo\./i.test(a.hostname)) return null;
            const comb = (a.pathname || "") + (a.search || "");
            const m = /\/RU=(.+?)(?=\/[A-Za-z]{1,2}=|$)/i.exec(comb);
            if (!m) return null;
            const d = safeDec(m[1]);
            return d && /^https?:\/\//i.test(d) ? d.replace(/\/{3,}$/, "/") : null;
        }

        function realDDG(a) {
            if (!/duckduckgo\.com$/i.test(a.hostname) || a.pathname !== "/l/") return null;
            const m = /[?&]uddg=([^&]+)/.exec(a.search);
            if (!m) return null;
            const d = safeDec(m[1]);
            return d && /^https?:\/\//i.test(d) ? d : null;
        }

        function realSearx(a) {
            if (a.pathname.indexOf("/imageproxy") !== 0) return null;
            const m = /[?&]url=([^&]+)/.exec(a.search);
            if (!m) return null;
            const d = safeDec(m[1]);
            return d && /^https?:\/\//i.test(d) ? d : null;
        }

        function isGoodLinkMW(link) {
            if (typeof link !== "string" || !link) return false;
            try {
                const u = new URL(link.trim(), location.href);
                const h = u.hostname.toLowerCase();
                if (h === "localhost" || h === "[::1]" || h === "::1") return false;
                if (/^(?:127\.|10\.|192\.168\.|169\.254\.|0\.)/.test(h)) return false;
                if (/^172\.(?:1[6-9]|2[0-9]|3[01])\./.test(h)) return false;
                if ([ "http:", "https:", "mailto:", "irc:", "telnet:", "tel:", "svn:" ].indexOf(u.protocol) === -1) return false;
                return true;
            } catch (e) {
                return false;
            }
        }

        function realLink(a) {
            const r = realGoogle(a) || realBing(a) || realYahoo(a) || realDDG(a) || realSearx(a);
            if (r && !isGoodLinkMW(r)) return null;
            return r;
        }

        function updateRP(a) {
            try {
                const rp = policy();
                if (rp && a.referrerPolicy !== "no-referrer") a.referrerPolicy = rp;
            } catch (e) {}
        }

        // Anchor overrides
        try {
            const proto = HTMLAnchorElement.prototype;
            const hp = Object.getOwnPropertyDescriptor(proto, "href");
            if (hp && hp.get && hp.set) {
                const hget = Function.prototype.call.bind(hp.get);
                const hset = Function.prototype.call.bind(hp.set);
                Object.defineProperty(proto, "href", {
                    configurable: true,
                    enumerable: true,
                    get: function() { return hget(this); },
                    set: function(v) {
                        hset(this, v);
                        try {
                            const r = realLink(this);
                            if (r) hset(this, r);
                        } catch (e) {}
                        updateRP(this);
                    }
                });
            }
            const setAttr = Function.prototype.call.bind(proto.setAttribute);
            Object.defineProperty(proto, "setAttribute", {
                configurable: true,
                enumerable: false,
                writable: true,
                value: function(name, val) {
                    if (String(name).toLowerCase() === "href") this.href = val; 
                    else setAttr(this, name, val);
                }
            });
        } catch (e) {}

        const noop = () => true;
        function killRwt(o) {
            if (!o) return;
            [ "rwt", "arwt" ].forEach(fn => {
                try {
                    Object.defineProperty(o, fn, {
                        configurable: true,
                        get: () => noop,
                        set: () => {}
                    });
                } catch (e) {
                    try { o[fn] = noop; } catch (e2) {}
                }
            });
        }

        killRwt(window);
        if (window.google) killRwt(window.google);
        let gi = 0;
        const gt = setInterval(function() {
            if (window.google) killRwt(window.google);
            if (++gi > 30) clearInterval(gt);
        }, 250);

        let _navigatedMW = false;
        function navigateMW(target) {
            if (_navigatedMW || !isGoodLinkMW(target)) return false;
            try { window.onbeforeunload = null; } catch (e) {}
            _navigatedMW = true;
            try { location.assign(target); } catch (e) {}
            return true;
        }

        function decodeAdflyYsmm(r) {
            let a, m, I = "", X = "";
            for (m = 0; m < r.length; m++) {
                if (m % 2 === 0) I += r.charAt(m); else X = r.charAt(m) + X;
            }
            r = I + X;
            a = r.split("");
            for (m = 0; m < a.length; m++) {
                if (!isNaN(a[m])) {
                    for (let R = m + 1; R < a.length; R++) {
                        if (!isNaN(a[R])) {
                            const S = a[m] ^ a[R];
                            if (S < 10) a[m] = S;
                            m = R;
                            R = a.length;
                        }
                    }
                }
            }
            r = a.join("");
            try { r = atob(r); } catch (e) { return null; }
            r = r.substring(r.length - (r.length - 16));
            r = r.substring(0, r.length - 16);
            return r;
        }

        let _ysmmSeen = false;
        try {
            Object.defineProperty(window, "ysmm", {
                configurable: true,
                set: function(r) {
                    if (typeof r !== "string" || _ysmmSeen) return;
                    _ysmmSeen = true;
                    const dest = decodeAdflyYsmm(r);
                    if (dest && /^https?:\/\//i.test(dest)) navigateMW(dest);
                },
                get: () => "undefined"
            });
        } catch (e) {}

        try {
            const _safelinkForced = { counter: 0, adblock: false, click2x: false };
            Object.defineProperty(window, "safelink", {
                configurable: true,
                set: v => {
                    if (v && typeof v === "object") {
                        for (const k in _safelinkForced) {
                            if (v[k] === undefined) v[k] = _safelinkForced[k];
                        }
                    }
                },
                get: () => _safelinkForced
            });
        } catch (e) {}

        try {
            Object.defineProperty(window, "soralink", {
                configurable: true,
                get: () => ({})
            });
        } catch (e) {}

        try {
            Object.defineProperty(window, "adtival_base64_encode", {
                configurable: true,
                get: () => undefined
            });
        } catch (e) {}

        try {
            const _downloadBtnNav = a => {
                if (a && a.href && isGoodLinkMW(a.href)) navigateMW(a.href);
            };
            Object.defineProperty(window, "downloadButton", {
                configurable: true,
                set: a => { _downloadBtnNav(a); },
                get: () => null
            });
        } catch (e) {}

        try {
            if (location.href.indexOf("?r=") !== -1) {
                const m = /[?&]r=([^&]+)/.exec(location.search);
                if (m) {
                    const r = safeDec(m[1]);
                    const d = safeAtob(r);
                    if (d && /^https?:\/\//i.test(d) && isGoodLinkMW(d)) navigateMW(d);
                }
            }
            if (location.href.indexOf("?dest=") !== -1 || location.href.indexOf("&dest=") !== -1) {
                const md = /[?&]dest=([^&]+)/.exec(location.search);
                if (md) {
                    const dd = safeDec(md[1]);
                    if (dd && /^https?:\/\//i.test(dd) && isGoodLinkMW(dd)) navigateMW(dd);
                }
            }
        } catch (e) {}

        // Global Block Matchers (Consolidated!)
        const GA = /^(?:https?:\/\/(?:(?:www|ssl|analytics|region[0-9]+)\.google-analytics\.com|(?:www\.)?googletagmanager\.com|stats\.g\.doubleclick\.net|cm\.g\.doubleclick\.net|googleads\.g\.doubleclick\.net|static\.doubleclick\.net|adservice\.google\.[a-z]{2,6}(?:\.[a-z]{2})?))|(?:(?:https?:\/\/[^\/]+)?\/)?(?:gen_204|client_204|generate_204|csi|pagead\/gen_204|pagead\/viewthroughconversion|pagead\/1p-conversion|pagead\/id|ccm\/cs|log\?format=json|instream\/ad_status\.js)(?:[?#]|$)/;
        const IP_LOG_MW_RE = /(?:^|\.)(?:grabify\.link|leancoding\.co|stopify\.co|freegiftcards\.co|joinmy\.site|curiouscat\.club|catsnthings\.(fun|com)|xn--yutube-iqc\.com|gyazo\.(in|nl)|yip\.su|iplogger\.(com|co|org|ru|info|net|de|cn|pl|se|uk|biz|tk|ml|ga|cf)|ipgraber\.ru|ipgrabber\.ru|2no\.co|02ip\.ru|iplis\.ru|iplo\.ru|ezstat\.ru|whatstheirip\.com|partpicker\.shop|sportshub\.bar|locations\.quest|lovebird\.guru|trulove\.guru|dateing\.club|shrekis\.life|headshot\.monster|gaming-at-my\.best|progaming\.monster|yourmy\.monster|imageshare\.best|screenshot\.best|gamingfun\.me|catsnthing\.com|fortnitechat\.site|fortnight\.space|hondachat\.com|bvog\.com|youramonkey\.com|pronosparadise\.com|freebooter\.pro|blasze\.(com|tk)|ipgrab\.org|gyazos\.com|viral\.over-blog\.com|ps3cfw\.com|urlz\.fr|webpanel\.space|steamcommumity\.com|imgur\.com\.de|fuglekos\.com|discord\.kim|prntcrs\.com|iptrace\.(com|net|org)|iptrack\.(com|net)|iplog\.(com|net|info|ru|cn)|ip-sniffer\.(com|net)|ipfinder\.(com|net|info|cc)|findmyip\.(com|net|org|info)|locateip\.(com|net|info|org)|trackip\.(com|net|org|info)|traceip\.(com|net|org|info)|extreme-ownage\.(com|net|org|tk|ml|ga|cf)|ipgun\.(com|net|org|info|tk)|ipshot\.(com|net|info|org)|ipcatcher\.(com|net|info|org)|visitor\.(com|net|info|org|biz|cc|tk|ml|ga|cf)|ip\.gd|ip\.sh|ip\.io|ip\.fyi|ip\.info)$/;
        const BLANK_GIF = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

        function shouldBlock(url) {
            if (!url) return false;
            const s = String(url);
            // GA/GTM Check
            if (cfg.google && cfg.blockGA && GA.test(s)) return "ga";
            // IP Logger Check
            if (cfg.blockIPLoggers) {
                try {
                    const h = new URL(s, location.origin).hostname.toLowerCase();
                    if (IP_LOG_MW_RE.test(h)) return "iplogger";
                } catch (e) {}
            }
            return false;
        }

        // Consolidated Hook 1: Navigator.prototype.sendBeacon (Unified!)
        try {
            const sb = Navigator.prototype.sendBeacon;
            if (sb) {
                const sba = Function.prototype.apply.bind(sb);
                const isTrack = RegExp.prototype.test.bind(/^(?:(?:https?:\/\/[^\/]+)?\/)?gen_204(?:[?#]|$)/);
                Navigator.prototype.sendBeacon = function(u) {
                    try {
                        loadCfg();
                        if (isTrack(u) && cfg.noping) return true;
                        if (shouldBlock(u)) return true;
                    } catch (e) {}
                    return sba(this, arguments);
                };
            }
        } catch (e) {}

        // Consolidated Hook 2: window.fetch (Unified!)
        try {
            const f = window.fetch;
            if (f) {
                const fa = Function.prototype.apply.bind(f);
                window.fetch = function(input, opts) {
                    try {
                        loadCfg();
                        const u = typeof input === "string" ? input : (input && input.url ? input.url : "");
                        if (shouldBlock(u)) {
                            return Promise.resolve(new Response("", { status: 204 }));
                        }
                        if (cfg.blockKeepalive && opts && opts.keepalive) {
                            try { opts.keepalive = false; } catch (e) {}
                        }
                        if (cfg.blockKeepalive && input && typeof input === "object" && input.keepalive) {
                            try { input.keepalive = false; } catch (e) {}
                        }
                    } catch (e) {}
                    return fa(this, arguments);
                };
            }
        } catch (e) {}

        // Consolidated Hook 3: XMLHttpRequest (Unified & Clean Async state machine mocking!)
        try {
            const xo = XMLHttpRequest.prototype.open;
            const xs = XMLHttpRequest.prototype.send;
            const blockMap = new WeakMap();

            XMLHttpRequest.prototype.open = function(m, u) {
                try {
                    loadCfg();
                    blockMap.set(this, !!shouldBlock(u));
                } catch (e) {}
                return xo.apply(this, arguments);
            };

            XMLHttpRequest.prototype.send = function() {
                if (blockMap.get(this) === true) {
                    const self = this;
                    // Bug Fix: Asynchronous state completion mock to support Axios, jQuery etc.
                    setTimeout(() => {
                        try {
                            Object.defineProperties(self, {
                                readyState: { configurable: true, get: () => 4 },
                                status: { configurable: true, get: () => 204 },
                                responseText: { configurable: true, get: () => "" },
                                response: { configurable: true, get: () => "" }
                            });
                            if (typeof self.onreadystatechange === "function") self.onreadystatechange();
                            self.dispatchEvent(new Event("readystatechange"));
                            self.dispatchEvent(new Event("load"));
                            if (typeof self.onload === "function") self.onload();
                        } catch (e) {}
                    }, 0);
                    return;
                }
                return xs.apply(this, arguments);
            };
        } catch (e) {}

        // Consolidated Hook 4: HTMLImageElement.prototype.src (Unified!)
        try {
            const ip = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src");
            if (ip && ip.set) {
                const ig = Function.prototype.call.bind(ip.get);
                const is = Function.prototype.call.bind(ip.set);
                Object.defineProperty(HTMLImageElement.prototype, "src", {
                    configurable: true,
                    enumerable: true,
                    get: function() { return ig(this); },
                    set: function(v) {
                        try {
                            loadCfg();
                            const block = shouldBlock(v);
                            if (block === "ga") {
                                is(this, BLANK_GIF);
                                return;
                            } else if (block === "iplogger") {
                                is(this, "data:,");
                                return;
                            }
                        } catch (e) {}
                        is(this, v);
                    }
                });
            }
        } catch (e) {}

        // Consolidated Hook 5: EventSource proxy
        try {
            const OES = window.EventSource;
            if (OES) {
                window.EventSource = new Proxy(OES, {
                    construct: function(T, args) {
                        loadCfg();
                        if (args[0] && shouldBlock(args[0])) {
                            const d = Object.create(T.prototype);
                            Object.defineProperty(d, "readyState", { get: () => 2 });
                            Object.defineProperty(d, "url", { get: () => String(args[0]) });
                            d.close = () => {};
                            return d;
                        }
                        // Bug Fix: Use Reflect.construct for modern, highly optimized instantiation
                        return Reflect.construct(T, args);
                    }
                });
            }
        } catch (e) {}

        // Consolidated Hook 6: window.open and metarefresh
        try {
            const ow = window.open;
            window.open = function(url, name, features) {
                const blank = !url || url === "about:blank";
                try {
                    if (!blank) {
                        const a = document.createElement("a");
                        a.href = url;
                        const r = realLink(a);
                        if (r) a.href = r;
                        url = a.href;
                        if (policy() && a.origin !== location.origin && !isG(a.hostname) && !/\b(?:opener|noreferrer)\b/.test(features || "")) {
                            features = (features ? features + "," : "") + "noreferrer";
                        }
                    }
                } catch (e) {}
                const win = ow.call(this, url, name, features);
                try {
                    if (blank && win) {
                        const dw = win.Function.prototype.call.bind(win.document.write);
                        win.document.write = function(html) {
                            try { html = fixMeta(html); } catch (e) {}
                            return dw(this, html);
                        };
                    }
                } catch (e) {}
                return win;
            };

            function fixMeta(html) {
                html = String(html || "");
                return html.replace(/<meta[^>]*http-equiv=(["']?)refresh\1[^>]*>/i, function(m) {
                    const doc = (new DOMParser()).parseFromString(m, "text/html");
                    const meta = doc.querySelector("meta[http-equiv=refresh]");
                    if (!meta) return m;
                    const parts = /^(\d*\s*;\s*url=)(.+)$/i.exec(meta.content);
                    if (!parts) return m;
                    const a = document.createElement("a");
                    a.href = parts[2];
                    const r = realLink(a);
                    if (r) a.href = r;
                    meta.content = parts[1] + a.href;
                    return meta.outerHTML;
                });
            }
        } catch (e) {}

        // Consolidated Hook 7: WebSocket IP logger proxy
        try {
            const _ipWS = window.WebSocket;
            if (_ipWS) {
                window.WebSocket = new Proxy(_ipWS, {
                    construct: function(T, args) {
                        loadCfg();
                        if (args[0] && shouldBlock(args[0]) === "iplogger") return {};
                        return Reflect.construct(T, args);
                    }
                });
            }
        } catch (e) {}

        // Consolidated Hook 8: Privacy Sandbox API mocking
        if (cfg.blockPrivacySandbox) {
            try {
                const privFn = () => Promise.resolve([]);
                if (document.browsingTopics) {
                    try { Object.defineProperty(document, "browsingTopics", { configurable: true, writable: true, value: privFn }); } catch (e) {}
                }
                if (document.interestCohort) {
                    try { Object.defineProperty(document, "interestCohort", { configurable: true, writable: true, value: privFn }); } catch (e) {}
                }
                const joinAd = () => Promise.resolve();
                [ "joinAdInterestGroup", "leaveAdInterestGroup", "runAdAuction", "updateAdInterestGroups", "createAuctionNonce" ].forEach(fn => {
                    try {
                        if (navigator[fn]) {
                            Object.defineProperty(navigator, fn, { configurable: true, writable: true, value: joinAd });
                        }
                    } catch (e) {}
                });
                try {
                    const wm = Object.getOwnPropertyDescriptor(window, "sharedStorage");
                    if (wm) {
                        Object.defineProperty(window, "sharedStorage", {
                            configurable: true,
                            get: () => undefined,
                            set: () => {}
                        });
                    }
                } catch (e) {}
            } catch (e) {}
        }
    }

    let _ttp = null;
    function getTTP() {
        if (_ttp !== null) return _ttp;
        try {
            if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
                _ttp = trustedTypes.createPolicy("nulltrail", {
                    createScript: s => s,
                    createHTML: s => s,
                    createScriptURL: s => s
                });
            } else {
                _ttp = false;
            }
        } catch (e) {
            _ttp = false;
        }
        return _ttp;
    }

    let _nonce = "";
    function getNonce() {
        if (_nonce) return _nonce;
        try {
            const scripts = document.querySelectorAll("script[nonce]");
            for (let i = 0; i < scripts.length; i++) {
                if (scripts[i].nonce) {
                    _nonce = scripts[i].nonce;
                    break;
                }
            }
        } catch (e) {}
        return _nonce;
    }

    let _mwInjected = false;
    function injectMainWorld() {
        if (_mwInjected) return;
        try {
            const src = "(" + ntMainWorldBoot.toString() + ")();";
            const pol = getTTP();
            const s = document.createElement("script");
            if (_nonce) s.setAttribute("nonce", _nonce);
            const rp = desiredPolicy();
            if (rp) {
                try { s.referrerPolicy = rp; } catch (e) {}
            }
            s.textContent = pol ? pol.createScript(src) : src;
            (document.head || document.documentElement).appendChild(s);
            s.remove();
            _mwInjected = true;
        } catch (e) {
            log("main-world inject failed", e);
        }
    }

    function pushConfigToPage() {
        try {
            let m = document.getElementById("nt-config");
            if (!m) {
                m = document.createElement("meta");
                m.id = "nt-config";
                m.name = "nt-config";
                (document.head || document.documentElement).appendChild(m);
            }
            const payload = {
                forceNoReferrer: CFG.forceNoReferrer,
                referrerPolicy: CFG.referrerPolicy,
                noping: CFG.noping,
                google: isGoogleHost(location.hostname),
                blockGA: CFG.blockGA,
                blockPrivacySandbox: CFG.blockPrivacySandbox,
                blockKeepalive: CFG.blockKeepalive,
                blockIPLoggers: CFG.blockIPLoggers,
                unblockContextMenu: isSiteContextMenuUnblocked(),
                unblockTextSelection: isSiteTextSelectionUnblocked()
            };
            m.setAttribute("content", btoa(unescape(encodeURIComponent(JSON.stringify(payload)))));
            window.dispatchEvent(new CustomEvent("nt:cfg"));
        } catch (e) {}
    }

    const PROCESSED = new WeakMap();
    const QUEUED = new WeakSet();
    const LOCK = new WeakSet();

    function findAnchor(t) {
        let el = t;
        while (el && !el.href) el = el.parentElement;
        return el || null;
    }

    function cleanAnchor(el) {
        if (!el || !el.href || LOCK.has(el)) return;
        if (!isActive()) return;
        LOCK.add(el);
        try {
            if (isIPLogger(el.href)) {
                el.setAttribute("data-nt-iplogger", "true");
                el.removeAttribute("ping");
                el.removeAttribute("onmousedown");
                applyRP(el);
                return;
            }
            if (CFG.noping && el.hasAttribute && el.hasAttribute("ping")) el.removeAttribute("ping");
            const md = el.getAttribute && el.getAttribute("onmousedown");
            if (md && RWT_CALL_RE.test(md)) {
                el.removeAttribute("onmousedown");
                el.removeAttribute("ping");
            }
            const orig = el.href;
            const cleaned = sanitizeHref(orig);
            const didChange = cleaned && cleaned !== orig;
            if (didChange) {
                try { el.href = cleaned; } catch (e) {}
            }
            applyRP(el);
            if (CFG.relNoReferrer && el.target === "_blank") {
                try {
                    const cur = el.getAttribute("rel") || "";
                    if (!/\bnoopener\b/.test(cur)) el.setAttribute("rel", (cur ? cur + " " : "") + "noopener noreferrer");
                } catch (e) {}
            }
            removeTrackAttrs(el);
            // Bug Fix: Automatically scan and clean dataset attributes during link sanitization
            cleanDataset(el);
            PROCESSED.set(el, true);
            if (didChange) bumpPageCount();
        } finally {
            LOCK.delete(el);
        }
    }

    function cleanDataset(el) {
        if (!el || !el.dataset) return;
        const keys = [ "url", "href", "redirectUrl", "originalUrl", "curUrl", "cturl", "clickUrl", "destination", "safeRedirectUrl", "nAu", "cthref" ];
        for (let i = 0; i < keys.length; i++) {
            const k = keys[i], raw = el.dataset[k];
            if (!raw) continue;
            const iv = resolveIntent(raw);
            if (iv) {
                el.dataset[k] = iv;
                continue;
            }
            try {
                const d = extractRedirect(safeURL(raw));
                if (d) el.dataset[k] = d; 
                else {
                    const c = cleanURL(raw);
                    if (c !== raw) el.dataset[k] = c;
                }
            } catch (e) {}
        }
    }

    function handleEl(t) {
        const el = findAnchor(t);
        if (el) {
            cleanAnchor(el);
        }
        return el;
    }

    function scanDom() {
        try {
            const els = document.querySelectorAll("a[href],area[href]");
            for (let i = 0; i < els.length; i++) cleanAnchor(els[i]);
        } catch (e) {}
    }

    function scanSpecial() {
        const h = location.hostname, qs = location.search;
        let i, el, els, m;
        try {
            if (h === "news.google.com" || h === "discover.google.com") {
                els = document.querySelectorAll("a[data-n-au]");
                for (i = 0; i < els.length; i++) {
                    el = els[i];
                    if (el.dataset.nAu) el.href = el.dataset.nAu;
                }
            }
            if (location.pathname.indexOf("/shopping") === 0 || h === "shopping.google.com") {
                els = document.querySelectorAll("a[data-merchant-url],a[data-offer-url]");
                for (i = 0; i < els.length; i++) {
                    el = els[i];
                    if (el.dataset.merchantUrl) el.href = el.dataset.merchantUrl; 
                    else if (el.dataset.offerUrl) el.href = el.dataset.offerUrl;
                }
            }
            if (qs.indexOf("tbm=isch") > -1 || qs.indexOf("udm=2") > -1 || location.pathname === "/images") {
                els = document.querySelectorAll('a[href*="/imgres?"]');
                for (i = 0; i < els.length; i++) {
                    el = els[i];
                    m = /[?&]imgurl=((?:https?)[%:][^&]+)/.exec(el.search || "");
                    if (m) {
                        try { el.href = decodeURIComponent(m[1]); } catch (e) {}
                    }
                }
            }
            if (isActive()) {
                els = document.querySelectorAll("meta[http-equiv='refresh' i],meta[http-equiv='Refresh']");
                for (i = 0; i < els.length; i++) {
                    const meta = els[i];
                    const parts = /^\s*\d*\s*;\s*url\s*=\s*(.+)$/i.exec(meta.content || "");
                    if (parts && parts[1]) {
                        const dest = parts[1].replace(/^['"]|['"]$/g, "").trim();
                        const red = extractRedirect(safeURL(dest));
                        if (red && isGoodLink(red)) {
                            meta.content = parts[1].replace(/url\s*=\s*.+/i, "url=" + red);
                        }
                    }
                }
            }
        } catch (e) {}
    }

    let _navTimer = null;
    function scheduleNavScan() {
        stripSERPBar();
        scanDom();
        scanSpecial();
        if (_navTimer) clearTimeout(_navTimer);
        _navTimer = setTimeout(function() {
            _navTimer = null;
            scanDom();
            scanSpecial();
        }, 500);
    }

    // Consolidated History navigation wrap in Content Script
    (function() {
        const _push = history.pushState.bind(history);
        const _replace = history.replaceState.bind(history);
        function wrapNav(orig) {
            return function(state, title, url) {
                if (url && CFG.stripSERPParams) {
                    const eng = getEngine(location.hostname);
                    if (eng && eng.s) {
                        try {
                            const u = new URL(String(url), location.href);
                            let changed = false;
                            const params = eng.s;
                            const allKeys = Array.from(u.searchParams.keys());
                            allKeys.forEach(k => {
                                if (k.indexOf("rsv_") === 0) {
                                    u.searchParams.delete(k);
                                    changed = true;
                                    return;
                                }
                                for (let i = 0; i < params.length; i++) {
                                    if (k === params[i]) {
                                        u.searchParams.delete(k);
                                        changed = true;
                                        break;
                                    }
                                }
                            });
                            if (changed) url = u.toString();
                        } catch (e) {}
                    }
                }
                const r = orig.call(history, state, title, url);
                _clickedConsents = new WeakSet(); // Reset clicked consents on navigation!
                setTimeout(function() {
                    autoRejectConsent();
                    scheduleNavScan();
                }, 0);
                return r;
            };
        }
        try {
            history.pushState = wrapNav(_push);
            history.replaceState = wrapNav(_replace);
        } catch (e) {}

        window.addEventListener("popstate", () => setTimeout(scheduleNavScan, 0), { passive: true });
        if (typeof navigation !== "undefined" && navigation.addEventListener) {
            navigation.addEventListener("navigatesuccess", () => setTimeout(scheduleNavScan, 0));
        }
    })();

    // MutationObserver section
    (function() {
        if (typeof MutationObserver === "undefined") return;
        let pending = false;
        const queue = [];
        const MAX_PER_TICK = 400;
        let lastFlush = 0;

        const observer = new MutationObserver(function(records) {
            for (let ri = 0; ri < records.length; ri++) {
                const rec = records[ri];
                if (rec.type === "childList") {
                    for (let ni = 0; ni < rec.addedNodes.length; ni++) {
                        const node = rec.addedNodes[ni];
                        if (node.nodeType !== 1) continue;
                        if ((node.tagName === "A" || node.tagName === "AREA") && node.href) enq(node);
                        else if (node.querySelectorAll) {
                            const as = node.querySelectorAll("a[href],area[href]");
                            for (let ai = 0; ai < as.length; ai++) enq(as[ai]);
                        }
                    }
                } else if (rec.type === "attributes") {
                    const t = rec.target;
                    if ((t.tagName === "A" || t.tagName === "AREA") && t.href && !LOCK.has(t)) enq(t);
                }
            }
        });

        function flush() {
            pending = false;
            lastFlush = Date.now();
            const take = queue.splice(0, MAX_PER_TICK);
            for (let i = 0; i < take.length; i++) {
                const item = take[i];
                const el = item && item.deref ? item.deref() : item;
                if (el) {
                    cleanAnchor(el);
                    QUEUED.delete(el);
                }
            }
            if (queue.length) scheduleFlush();
        }

        function scheduleFlush() {
            if (pending) return;
            const wait = Date.now() - lastFlush < 60 ? 120 : 0;
            pending = true;
            setTimeout(flush, wait);
        }

        function enq(el) {
            if (QUEUED.has(el)) return;
            QUEUED.add(el);
            queue.push(typeof WeakRef !== "undefined" ? new WeakRef(el) : el);
            if (!pending) scheduleFlush();
        }

        function start() {
            try {
                observer.observe(document.documentElement || document.body, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: [ "href", "ping", "onmousedown", "data-jsarwt", "data-ved", "data-ei", "data-clk", "data-cthref" ]
                });
            } catch (e) {}
        }

        if (document.documentElement) start(); 
        else document.addEventListener("DOMContentLoaded", start, { once: true });
    })();

    // DOM event listeners
    document.addEventListener("mousedown", function mdh(e) {
        const el = handleEl(e.target);
        if (el && e.eventPhase === Event.CAPTURING_PHASE) {
            el.addEventListener(e.type, mdh, { capture: false, once: true });
            document.addEventListener(e.type, mdh, { capture: false, once: true });
        }
    }, true);

    document.addEventListener("touchstart", e => handleEl(e.target), { capture: true, passive: true });
    document.addEventListener("pointerdown", e => handleEl(e.target), { capture: true, passive: true });

    document.addEventListener("click", function(e) {
        if (e.button !== 0) return;
        const el = findAnchor(e.target);
        if (!el) return;
        if (el.dataset && el.dataset.url) {
            const iv = resolveIntent(el.dataset.url);
            if (iv) el.dataset.url = iv;
        }
        if (CFG.noping) el.removeAttribute("ping");
        cleanAnchor(el);
        const lh = location.hostname;
        if ((lh.indexOf("mail.") === 0 || lh.indexOf("chat.") === 0 || lh.indexOf("meet.") === 0) && el.origin !== location.origin && (el.protocol === "http:" || el.protocol === "https:" || el.protocol === "ftp:") && el.target === "_blank") {
            e.stopPropagation();
            applyRP(el);
        }
    }, true);

    document.addEventListener("contextmenu", function(e) {
        const el = handleEl(e.target);
        if (el) applyRP(el);
    }, true);

    document.addEventListener("auxclick", function(e) {
        if (e.button === 1) handleEl(e.target);
    }, true);

    // Target-Smart Context Menu Unblocker (User Gesture Override via GUI)
    document.addEventListener("contextmenu", function(e) {
        if (isSiteContextMenuUnblocked()) {
            // Stops propagation in capturing phase to neutralize any prevention handlers registered by page scripts
            e.stopPropagation();
        }
    }, true);

    // Target-Smart Text Selection Unblocker (User Gesture Override via GUI)
    document.addEventListener("selectstart", function(e) {
        if (isSiteTextSelectionUnblocked()) {
            // Stop selectstart event prevention by website handlers
            e.stopPropagation();
        }
    }, true);

    document.addEventListener("dragstart", function(e) {
        if (isSiteTextSelectionUnblocked()) {
            const range = window.getSelection() ? window.getSelection().toString() : "";
            if (range) {
                // Stop dragstart interception if dragging selected text content
                e.stopPropagation();
            }
        }
    }, true);

    document.addEventListener("mousedown", function(e) {
        if (!isSiteTextSelectionUnblocked()) return;
        // Targeted CSS override: dynamically walk path to remove user-select: none blocker, leaving non-selected layout intact
        let el = e.target;
        while (el && el !== document.documentElement) {
            try {
                const computed = window.getComputedStyle(el);
                const userSelect = computed.userSelect || computed.webkitUserSelect;
                if (userSelect === "none") {
                    el.style.setProperty("user-select", "text", "important");
                    el.style.setProperty("-webkit-user-select", "text", "important");
                    log("dynamically restored text selection style on element:", el);
                }
            } catch (err) {}
            el = el.parentElement;
        }
    }, true);

    document.addEventListener("dragstart", function(e) {
        const el = findAnchor(e.target);
        if (!el) return;
        cleanAnchor(el);
        try {
            if (e.dataTransfer) {
                e.dataTransfer.setData("text/uri-list", el.href);
                e.dataTransfer.setData("text/plain", el.href);
            }
        } catch (e2) {}
    }, true);

    // Bug Fix: Fully redesigned copy handler to protect text selection copy while sanitizing rich links seamlessly
    document.addEventListener("copy", function(e) {
        try {
            const sel = window.getSelection();
            if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;
            const rawText = sel.toString();
            if (!rawText) return;
            
            // If copying a direct URL, sanitize it
            if (/^https?:\/\/\S+$/i.test(rawText.trim())) {
                const cleaned = sanitizeHref(rawText.trim());
                if (cleaned && cleaned !== rawText.trim()) {
                    e.clipboardData.setData("text/plain", cleaned);
                    e.preventDefault();
                }
                return;
            }
            
            // If copying rich text, sanitize nested link URLs without destroying selection
            const range = sel.getRangeAt(0);
            const content = range.cloneContents();
            const div = document.createElement("div");
            div.appendChild(content);
            const anchors = div.querySelectorAll("a[href]");
            let changed = false;
            for (let i = 0; i < anchors.length; i++) {
                const href = anchors[i].getAttribute("href");
                const clean = sanitizeHref(href);
                if (clean && clean !== href) {
                    anchors[i].setAttribute("href", clean);
                    changed = true;
                }
            }
            if (changed) {
                e.clipboardData.setData("text/plain", div.textContent);
                e.clipboardData.setData("text/html", div.innerHTML);
                e.preventDefault();
            }
        } catch (e2) {}
    }, true);

    document.addEventListener("keydown", function(e) {
        if (e.key !== "Enter" && e.keyCode !== 13) return;
        const el = document.activeElement;
        if (el && el.href) cleanAnchor(el);
    }, true);

    function ntStyle(el, css) {
        el.style.cssText = css;
        return el;
    }

    function ntEl(tag, text, css) {
        const e = document.createElement(tag);
        if (text) e.textContent = text;
        if (css) e.style.cssText = css;
        return e;
    }

    // No-Jargon configuration groups for seamless and intuitive user friendly dashboard!
    const DASH_CFG_GROUPS = [ {
        title: "Privacy and Tracking Protection",
        items: [ 
            [ "globalStatus", "Enable Privacy Protection" ], 
            [ "forceNoReferrer", "Hide Where I Came From (Referrer)" ], 
            [ "noping", "Block Link Click Auditing & Beacons" ], 
            [ "relNoReferrer", "Secure Multi-tab Browsing" ], 
            [ "stripSERPParams", "Clean Search Engine Result Links" ], 
            [ "referralMarketing", "Allow Support For Creator Affiliate Links" ] 
        ]
    }, {
        title: "Content & Behavioral Blocking",
        items: [ 
            [ "blockGA", "Block Web Analytics & Tracking Beacons" ], 
            [ "blockPrivacySandbox", "Block Google Ad Interest Tracking" ], 
            [ "blockKeepalive", "Block Background Connection Tracking" ], 
            [ "blockIPLoggers", "Block Suspicious Location Trackers" ], 
            [ "blockBounceRedirect", "Skip Middleman Link Redirects" ] 
        ]
    }, {
        title: "Browser Cleanup",
        items: [ 
            [ "purgeGACookies", "Clear Search Analytics Cookies" ], 
            [ "purgeStorage", "Clear Hidden Website Trackers" ] 
        ]
    }, {
        title: "Privacy Settings Presets",
        items: [ 
            [ "enforcePrivacyPresets", "Enforce Maximum Shielding automatically" ] 
        ]
    }, {
        title: "Advanced Maintenance",
        items: [ 
            [ "autoUpdateRules", "Auto-update database rules silently" ], 
            [ "showHUD", "Display counter on web pages" ], 
            [ "debug", "Enable developer logs" ] 
        ]
    } ];

    function openDashboard() {
        const existing = document.getElementById("nt-dashboard");
        if (existing) {
            existing.remove();
            return;
        }
        const ov = ntEl("div", null, "position:fixed;inset:0;z-index:2147483647;background:rgba(10,12,20,.6);display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif");
        ov.id = "nt-dashboard";
        const box = ntEl("div", null, "background:#131720;color:#dfe4ee;border-radius:12px;width:480px;max-width:94vw;max-height:88vh;display:flex;flex-direction:column;box-shadow:0 16px 70px rgba(0,0,0,.65);border:1px solid rgba(255,255,255,.07);overflow:hidden");
        const hdr = ntEl("div", null, "display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid rgba(255,255,255,.06)");
        const hdrLeft = ntEl("div", null, "display:flex;flex-direction:column");
        hdrLeft.appendChild(ntEl("span", "NullTrail", "font-size:17px;font-weight:700;color:#14b8a6"));
        hdrLeft.appendChild(ntEl("span", "v1.0.0", "font-size:11px;color:#6b7280;margin-top:2px"));
        hdr.appendChild(hdrLeft);
        const closeBtn = ntEl("button", "x", "background:none;border:none;color:#9ca3af;font-size:22px;cursor:pointer;padding:0 4px;line-height:1");
        closeBtn.title = "Close";
        closeBtn.addEventListener("click", function() {
            ov.remove();
        });
        hdr.appendChild(closeBtn);
        box.appendChild(hdr);
        const tabBar = ntEl("div", null, "display:flex;border-bottom:1px solid rgba(255,255,255,.06);background:rgba(0,0,0,.15)");
        const tabs = [ "Settings", "Sites", "Stats", "Rules", "About" ];
        const tabBtns = [];
        const content = ntEl("div", null, "flex:1;overflow:auto;padding:18px 20px");
        
        function showTab(idx) {
            // Bug Fix: Assign style properties directly instead of fragile string manipulation of browser-normalized cssText
            for (let i = 0; i < tabBtns.length; i++) {
                tabBtns[i].style.color = "#9ca3af";
                tabBtns[i].style.borderBottomColor = "transparent";
            }
            tabBtns[idx].style.color = "#14b8a6";
            tabBtns[idx].style.borderBottomColor = "#14b8a6";
            
            while (content.firstChild) content.removeChild(content.firstChild);
            if (idx === 0) renderSettings(); 
            else if (idx === 1) renderSites(); 
            else if (idx === 2) renderStats(); 
            else if (idx === 3) renderRules(); 
            else renderAbout();
        }
        
        tabs.forEach((label, i) => {
            const btn = ntEl("button", label, "flex:1;padding:10px 6px;background:none;border:none;color:#9ca3af;font-size:13px;font-weight:500;cursor:pointer;border-bottom:2px solid transparent;transition:color .15s");
            btn.addEventListener("click", function() {
                showTab(i);
            });
            tabBar.appendChild(btn);
            tabBtns.push(btn);
        });
        box.appendChild(tabBar);
        box.appendChild(content);

        function makeToggle(key, label) {
            const row = ntEl("label", null, "display:flex;align-items:center;justify-content:space-between;padding:8px 0;cursor:pointer;font-size:13px;color:#dfe4ee");
            row.appendChild(ntEl("span", label));
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.checked = !!CFG[key];
            ntStyle(cb, "width:18px;height:18px;accent-color:#14b8a6;cursor:pointer");
            cb.addEventListener("change", function() {
                CFG[key] = cb.checked;
                SV(key, cb.checked);
                pushConfigToPage();
                if (key === "referralMarketing") {
                    _lruKeys.length = 0;
                    for (const k in _lruMap) delete _lruMap[k];
                }
                if (key === "purgeGACookies" && cb.checked) purgeGACookies();
                if (key === "purgeStorage" && cb.checked) purgeTrackerStorage();
                if (key === "showHUD") updateHUD();
            });
            row.appendChild(cb);
            return row;
        }

        function renderSettings() {
            DASH_CFG_GROUPS.forEach(grp => {
                content.appendChild(ntEl("div", grp.title, "font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#6b7280;margin:14px 0 4px;padding-bottom:4px;border-bottom:1px solid rgba(255,255,255,.04)"));
                grp.items.forEach(it => {
                    content.appendChild(makeToggle(it[0], it[1]));
                });
            });
            if (content.firstChild) content.firstChild.style.marginTop = "0";
        }

        function renderSites() {
            content.appendChild(ntEl("div", "Exclusion Whitelist", "font-size:14px;font-weight:600;margin-bottom:8px"));
            content.appendChild(ntEl("div", "NullTrail privacy controls will be completely disabled on the following websites (one per line):", "font-size:12px;color:#9ca3af;margin-bottom:12px;line-height:1.4"));
            const ta = document.createElement("textarea");
            ta.value = WHITELIST || "";
            ntStyle(ta, "width:100%;min-height:120px;background:#0e1219;color:#dfe4ee;border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:8px;font-size:12px;font-family:monospace;resize:vertical;outline:none");
            content.appendChild(ta);
            const taRow = ntEl("div", null, "display:flex;gap:8px;margin-top:10px");
            const saveBtn = ntEl("button", "Save changes", "flex:1;padding:8px;border:none;border-radius:6px;background:#14b8a6;color:#fff;font-size:12px;font-weight:600;cursor:pointer");
            saveBtn.addEventListener("click", function() {
                WHITELIST = ta.value.trim();
                SV("whitelist", WHITELIST);
                saveBtn.textContent = "Saved";
                setTimeout(function() {
                    saveBtn.textContent = "Save changes";
                }, 1200);
            });
            taRow.appendChild(saveBtn);
            const toggleBtn = ntEl("button", isWhitelisted(location.hostname) ? "Enable on this website" : "Disable on this website", "flex:1;padding:8px;border:1px solid rgba(255,255,255,.12);border-radius:6px;background:transparent;color:#dfe4ee;font-size:12px;cursor:pointer");
            toggleBtn.addEventListener("click", function() {
                if (isWhitelisted(location.hostname)) removeWhitelist(location.hostname); 
                else addWhitelist(location.hostname);
                ta.value = WHITELIST || "";
                toggleBtn.textContent = isWhitelisted(location.hostname) ? "Enable on this website" : "Disable on this website";
            });
            taRow.appendChild(toggleBtn);
            content.appendChild(taRow);
            content.appendChild(ntEl("div", "Current Website: " + location.hostname, "font-size:11px;color:#6b7280;margin-top:10px"));
            content.appendChild(ntEl("div", "Protection Status: " + (isActive() ? "ACTIVE (Shielded)" : "DISABLED (Excluded)"), "font-size:11px;font-weight:600;margin-top:2px;color:" + (isActive() ? "#14b8a6" : "#ef4444")));

            // User-requested site-specific browser restriction unblock options (Only active on explicitly toggling per site!)
            content.appendChild(ntEl("div", "Website Restrictions Bypass", "font-size:14px;font-weight:600;margin-top:20px;margin-bottom:8px"));
            content.appendChild(ntEl("div", "Selectively unblock standard browser features on this specific website. (These options are safe and target-specific with no broad wildcards):", "font-size:12px;color:#9ca3af;margin-bottom:12px;line-height:1.4"));

            const host = location.hostname.toLowerCase();

            // Toggle 1: Context Menu
            const row1 = ntEl("label", null, "display:flex;align-items:center;justify-content:space-between;padding:8px 0;cursor:pointer;font-size:13px;color:#dfe4ee");
            row1.appendChild(ntEl("span", "Enable standard right-click context menus"));
            const cb1 = document.createElement("input");
            cb1.type = "checkbox";
            cb1.checked = !!unblockContextMenuSites[host];
            ntStyle(cb1, "width:18px;height:18px;accent-color:#14b8a6;cursor:pointer");
            cb1.addEventListener("change", function() {
                if (cb1.checked) unblockContextMenuSites[host] = true;
                else delete unblockContextMenuSites[host];
                SV("unblockContextMenuSites", unblockContextMenuSites);
                pushConfigToPage();
            });
            row1.appendChild(cb1);
            content.appendChild(row1);

            // Toggle 2: Text Selection
            const row2 = ntEl("label", null, "display:flex;align-items:center;justify-content:space-between;padding:8px 0;cursor:pointer;font-size:13px;color:#dfe4ee");
            row2.appendChild(ntEl("span", "Enable standard text selection and copy"));
            const cb2 = document.createElement("input");
            cb2.type = "checkbox";
            cb2.checked = !!unblockTextSelectionSites[host];
            ntStyle(cb2, "width:18px;height:18px;accent-color:#14b8a6;cursor:pointer");
            cb2.addEventListener("change", function() {
                if (cb2.checked) unblockTextSelectionSites[host] = true;
                else delete unblockTextSelectionSites[host];
                SV("unblockTextSelectionSites", unblockTextSelectionSites);
                pushConfigToPage();
            });
            row2.appendChild(cb2);
            content.appendChild(row2);
        }

        function renderStats() {
            const eng = getEngine(location.hostname);
            const rows = [ 
                [ "Links Sanitized", STATS.cleaned ], 
                [ "Query Parameters Stripped", STATS.fields ], 
                [ "Tracking Requests Blocked", STATS.blocked ], 
                [ "Database Cleaners Active", PROVIDERS.length ], 
                [ "Engine Scrapers Configured", ENGINES.length ], 
                [ "Bypass Handlers Loaded", DOMAIN_REDIRECTS.length ], 
                [ "Current Engine", eng ? eng.n : "Generic / Agnostic" ] 
            ];
            rows.forEach(r => {
                const row = ntEl("div", null, "display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04)");
                row.appendChild(ntEl("span", r[0], "font-size:13px;color:#9ca3af"));
                row.appendChild(ntEl("span", String(r[1]), "font-size:13px;font-weight:600;color:#dfe4ee"));
                content.appendChild(row);
            });
            const resetBtn = ntEl("button", "Reset statistics", "margin-top:14px;padding:8px 16px;border:1px solid rgba(255,255,255,.12);border-radius:6px;background:transparent;color:#ef4444;font-size:12px;cursor:pointer");
            resetBtn.addEventListener("click", function() {
                STATS.cleaned = STATS.fields = STATS.blocked = 0;
                SV("statCleaned", 0);
                SV("statFields", 0);
                SV("statBlocked", 0);
                renderStats();
            });
            content.appendChild(resetBtn);
        }

        function renderRules() {
            const lastUpd = GV("rulesUpdated", 0) | 0;
            const lastHash = GV("rulesHash", "");
            const dateStr = lastUpd ? new Date(lastUpd).toLocaleString() : "never";
            const rows = [ 
                [ "Loaded Cleaners", PROVIDERS.length ], 
                [ "Last Rule Update", dateStr ], 
                [ "Database Verification Hash", lastHash ? "Verified (" + lastHash.substring(0, 12) + "...)" : "Not Cached" ], 
                [ "Automatic Updates", CFG.autoUpdateRules ? "Enabled (Every 6 days)" : "Disabled" ] 
            ];
            rows.forEach(r => {
                const row = ntEl("div", null, "display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04)");
                row.appendChild(ntEl("span", r[0], "font-size:13px;color:#9ca3af"));
                row.appendChild(ntEl("span", String(r[1]), "font-size:13px;font-weight:600;color:#dfe4ee"));
                content.appendChild(row);
            });
            const updBtn = ntEl("button", "Check for updates now", "margin-top:14px;width:100%;padding:10px;border:none;border-radius:6px;background:#14b8a6;color:#fff;font-size:13px;font-weight:600;cursor:pointer");
            updBtn.addEventListener("click", function() {
                updBtn.textContent = "Checking...";
                updBtn.disabled = true;
                updateRules(true).then(function() {
                    updBtn.textContent = "Updated successfully";
                    setTimeout(function() {
                        updBtn.textContent = "Check for updates now";
                        updBtn.disabled = false;
                        renderRules();
                    }, 1500);
                }).catch(function() {
                    updBtn.textContent = "Check for updates now";
                    updBtn.disabled = false;
                });
            });
            content.appendChild(updBtn);
        }

        function renderAbout() {
            content.appendChild(ntEl("div", "NullTrail v1.0.0", "font-size:15px;font-weight:700;color:#14b8a6;margin-bottom:8px"));
            content.appendChild(ntEl("div", "An autonomous, zero-jargon browser privacy engine fusing advanced hyperlink scrubbing, tracking parameter deletion, fast-forward redirect unwrapping, and strict analytical API shielding.", "font-size:12px;color:#9ca3af;line-height:1.5;margin-bottom:14px"));
            const features = [ 
                "40+ Search Engine Redirect unwrapping & sanitization", 
                "Comprehensive tracking query-parameter & anchor ping removal", 
                "Strict, robust blocking of IP logging endpoints & web sockets", 
                "Interception of background trackers and Google Analytics scripts", 
                "Automatic, non-intrusive cookie consent banner rejection", 
                "Dynamic memory-safe caching & high-speed MutationObservers", 
                "Secure, sandboxed local storage to protect your whitelist" 
            ];
            content.appendChild(ntEl("div", "Core Safeguards", "font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280;margin-bottom:6px"));
            features.forEach(f => {
                content.appendChild(ntEl("div", "- " + f, "font-size:12px;color:#dfe4ee;padding:3px 0;line-height:1.4"));
            });
            content.appendChild(ntEl("div", "Control Shortcuts", "font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280;margin:14px 0 6px"));
            content.appendChild(ntEl("div", "Alt + Shift + N  —  Toggle protection on current website", "font-size:12px;color:#dfe4ee;padding:3px 0"));
            content.appendChild(ntEl("div", "Alt + Shift + D  —  Open / Close this settings dashboard", "font-size:12px;color:#dfe4ee;padding:3px 0"));
            const resetBtn = ntEl("button", "Reset all settings to default", "margin-top:16px;padding:8px 16px;border:1px solid rgba(255,255,255,.12);border-radius:6px;background:transparent;color:#ef4444;font-size:12px;cursor:pointer");
            resetBtn.addEventListener("click", function() {
                if (confirm("Are you sure you want to reset all NullTrail settings, whitelist sites, and cached rule databases?")) {
                    [ "globalStatus", "referralMarketing", "forceRedirection", "forceNoReferrer", "relNoReferrer", "noping", "stripSERPParams", "blockGA", "blockPrivacySandbox", "blockKeepalive", "blockBounceRedirect", "blockIPLoggers", "enforcePrivacyPresets", "purgeGACookies", "purgeStorage", "showHUD", "autoUpdateRules", "whitelist", "rulesData", "rulesHash", "rulesUpdated", "statCleaned", "statFields", "statBlocked", "unblockContextMenuSites", "unblockTextSelectionSites" ].forEach(DV);
                    alert("Settings successfully reset. Please reload the webpage.");
                    ov.remove();
                }
            });
            content.appendChild(resetBtn);
        }
        
        ov.appendChild(box);
        ov.addEventListener("click", function(e) {
            if (e.target === ov) ov.remove();
        });
        showTab(0);
        (document.body || document.documentElement).appendChild(ov);
    }

    document.addEventListener("keydown", function(e) {
        if (e.altKey && e.shiftKey && (e.key === "N" || e.key === "n" || e.code === "KeyN")) {
            e.preventDefault();
            e.stopPropagation();
            if (isWhitelisted(location.hostname)) removeWhitelist(location.hostname); 
            else addWhitelist(location.hostname);
        }
        if (e.altKey && e.shiftKey && (e.key === "D" || e.key === "d" || e.code === "KeyD")) {
            e.preventDefault();
            e.stopPropagation();
            openDashboard();
        }
    }, true);

    if (typeof GM_registerMenuCommand === "function") {
        GM_registerMenuCommand("NullTrail Dashboard", function() {
            openDashboard();
        });
        GM_registerMenuCommand(CFG.globalStatus ? "Pause NullTrail" : "Resume NullTrail", function() {
            CFG.globalStatus = !CFG.globalStatus;
            SV("globalStatus", CFG.globalStatus);
            pushConfigToPage();
        });
        GM_registerMenuCommand(isWhitelisted(location.hostname) ? "Enable on this site" : "Disable on this site", function() {
            if (isWhitelisted(location.hostname)) removeWhitelist(location.hostname); 
            else addWhitelist(location.hostname);
            pushConfigToPage();
        });
        GM_registerMenuCommand("Update rules now", function() {
            updateRules(true).then(function() {});
        });
    }

    const cached = GV("rulesData", null);
    if (cached && typeof cached === "object" && cached.providers) setRules(cached); 
    else setRules(EMBEDDED_RULES);
    
    pushConfigToPage();
    getNonce();
    injectMainWorld();

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function() {
            enforceMetaReferrer();
            monitorBounce();
            stripSERPBar();
            purgeGACookies();
            purgeTrackerStorage();
            applyPrivacyPresets();
            blockIPLoggerNav();
            scanDom();
            scanSpecial();
            pushConfigToPage();
            updateHUD();
            setTimeout(autoRejectConsent, 1000);
            setTimeout(autoRejectConsent, 3000);
        }, { once: true });
    } else {
        enforceMetaReferrer();
        monitorBounce();
        stripSERPBar();
        purgeGACookies();
        purgeTrackerStorage();
        applyPrivacyPresets();
        blockIPLoggerNav();
        scanDom();
        scanSpecial();
        updateHUD();
        setTimeout(autoRejectConsent, 1000);
        setTimeout(autoRejectConsent, 3000);
    }

    (function whenReady() {
        if (getNonce() || document.readyState !== "loading") {
            pushConfigToPage();
            return;
        }
        const t = setInterval(function() {
            if (getNonce() || document.readyState !== "loading") {
                clearInterval(t);
                pushConfigToPage();
                injectMainWorld();
            }
        }, 40);
        setTimeout(function() { clearInterval(t); }, 5000);
    })();

    let _hoverOn = false;
    function ensureHover() {
        if (_hoverOn) return;
        _hoverOn = true;
        document.addEventListener("mouseover", function(e) {
            const el = findAnchor(e.target);
            if (el) cleanAnchor(el);
        }, { passive: true });
    }

    const gdh = [ "docs", "sheets", "slides", "drive" ];
    for (let i = 0; i < gdh.length; i++) {
        if (location.hostname === gdh[i] + ".google.com") {
            ensureHover();
            break;
        }
    }

    if (typeof requestIdleCallback === "function") {
        requestIdleCallback(function() {
            scanDom();
            scanSpecial();
        }, { timeout: 2000 });
    }

    setTimeout(function() { updateRules(false); }, 3000);
    setInterval(function() { updateRules(false); }, 6 * 3600 * 1000);

    log("NullTrail v1.0.0 initialised —", PROVIDERS.length, "providers,", ENGINES.length, "engines,", DOMAIN_REDIRECTS.length, "domain bypasses,", getEngine(location.hostname) ? getEngine(location.hostname).n : "generic");
})();

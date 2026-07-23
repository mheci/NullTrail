// ==UserScript==
// @name         NullTrail — Universal Tracking & Redirect Scrubber
// @namespace    https://github.com/nulltrail
// @version      3.0.0
// @description  Fix the web.
// @license      Unlicense
// @supportURL   https://github.com/mheci/NullTrail/issues
// @author       NullTrail
// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCACAAIADASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAwABAgQGBwUI/8QAPxAAAgEDAgMEBgcFCAMAAAAAAQIDAAQRBSEGEjEHE0FRFCJhcYHBMkJSU3KRkhYjVGKhFSQlNESCsdFjc/D/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQMEBQIG/8QALREAAgEDAgEMAgMAAAAAAAAAAAECAwQRITESBRMUIjJBUXGBobHRkfBhksH/2gAMAwEAAhEDEQA/APl1aKtCSirVoiCr4URaGnhRF60wYdBtRkoKVYgR5G5Y0ZyPBRmmck1ogFSS2uT/AKaX9NFFrdY/y036TTEANDYVba1uv4ab9JoT21z/AA0v6aAyU3oMnSrM6PG2HRkPkwxVeSuRgD40JqK1Cag6QJ6E1FehNSAS4oq0JaItABkoqHegpRVPSmDLEeWIUdScCrHeZHdoSIh0H2vaaqxHDE+Skj/j50aAZYDB+FM5LMKllZgNl61btYHncJGuSaaytpZQI1DAyEDcdRmuvcGcMQ8K6N+0WrxB9UL93p1iy5IkwCZHH8uRheuSM+VS06bm8GZe8oQto+LeyOQ3ULwyGN15SKqSY8q6vxJoScXWk+r6TEi6tAc6jZIMc++DNGPf9JOoO4G+Bh9F0EahNqBml7qGzgaRnAG7dAN8eOSfHAO1TztJqXCixQuVOGXvt6mb7zH7tyTGeo+z7RVeTKsVPUHFTl60OVssD5qP+vlVNltAW60NqI3jQmrk6QJ6E3WiNQ2oAZelFWgrRUoAMtEWgrRFoQMNGfWf8PzFbnss4et+JL2e1lufRzBE0/ME5mPKRsBkb7+YrDIoCu5YZxjHxFbvskY+kakqv3beiEhvb3ibVJTWZGbypOUbWcoPDR0HQrCzs7tbbh2wZr8g/wB7uGVpIB4yH6kKDfLbt5GvL464jhe4Sw0e5a5Wzi7hbtfo4J/eOnm7sSeboBgDfevF1nVtTvNXvdMj9TTbQF5baBe7SQKo3cjdiSerZ67U+r28ek8PQtLuzriIM3NyZHMV9wDfmTV+isvTRI87aWbdxGVV8Tevku/P1/I3CnEcceoxreSd3JvG8rHAuIyOUo58Gx0bpsM4617Osi39HWC6unZL+RnedQod4lyqHJ2LcoO5694Mmuc6BYza3xFZ6bbnle6nWMN9kE7sfcMn4VsOIdbil7QjYWcUTWURFskboGwqrhceIIAUZHlVi3unJYntn5PSxiukRivDL+F/v4Mz2haFbaHd2iWt2bmO5txMC0fIy5ZhykZIz6vgSKyrAkBvAL8zWt7R3Z20xnfmc2gJ/W9ZEt6vX6vzNZ94lGs0i9NrPVBt1obVI70NjVRjQN6G1Tahsd6QEVoqGgrRFNMYdamDQlNTBoEWCdzkYPL4+8Vu+y6aJLbUmiRhdxWcspfm5QArRsu/hjBNc/5iSxJOeXx94roHYtEt5xBd6aBlb3TLqD3sYWKD9SipaPbRm8qJdFk3stT2OSNdZ4ovmTkUxYj5iQCGkTJGOo5VI8a8rtNvfTNVZoQFRnOFHgP/ALFTv71lnMjkkTxBApOw5okYe7cn45r3OzuGJdU/avWrK3m0uA9xm5UNGJSAOcqRhlXIz5c4O+MVe2i4rv8AsxaMujt3MtcLCX9cL1cTPdnUselJqfEEwHNawNFCD152U8x+C7e9xXgcNzyz8VWs7sTI05ct7dyTWy7VZ7D+zFttM0qHTUtZe6dIR6x5izkOfrLzAcpPToNqxXB6ltdifcBElfP4Y2P/AFUeHTnCD8zYtpuVKV1JYclnyS2+/U9btKR0GkM/Mzvp6PIxOcszyHr7dzWNQq0qhjgcvX4nFb7twiFpxHZae2zWml2sLj+cRKW/qxrnZPrr+H5mobqXFVbLFjU563jPxJMc0NjUiaGxqsXCLGhN1qbGhtSGMtTU0MGpqaYMKpNEU70FTU1OCDQIPMGRskY5lyPzFajsl1E6bx7pN2pwUuAPzyPnWVubjvSNsYX5irGjXT2d9BcRMQ6OG69cEEA/ECpKbxNMq3VLnredN96aOu6/aaXpPG9p6fZem6bdrHdRwlyqvErvzJsQQwBK9fCuh8VPZ6roMTaXbLFpKKEse7h7tHj39ZUIB5dzjIHMcnGNzy/ji4kfQ1ubeXMthOQz4DFbe4AZSM+RC7+ZNepwJxtDyDhie4ikhMzDT7x25EjBzlCD0yfo5Pqlt9sVpdWNbhPIXFpWr2dOvT1lB4az7479P3YyWrO8GjX63kcvMIPR7dwOYEFlKRsfNQMqfIY8BT9kmnQ33E9zOYm9BtoDJKrsCwTnUYPtPT417nabbRro8CRBERp+Yqy9Sqlcg5GNwarcACLT+HpLveGW+uQoDH1nhhBZ3Pl1PTbIFS1aXFcxj4I9ReKTslThvJJfnf21M12u6idU491W7L8w74qD58oC/KslHGzIZBjCrv8AmasazePe3c1w7ZZnJwD0ySf+SapJKyqUB2Yb/mayq7TqNos0KPM0o047LCHJ3qDmnJ61AmoSwRY1A1ImoE0hoiDUwaGKkDQMKDUs4oYNPnemIkTufd86NbSxxglgc5BBFVSdz7vnSU0J4E4prB1PSLiHUNItnnlVLVoWsL0lhnkOORh5kZBH/qNZG+ttVj1F9FktUEtpLKWRAEyQMtv4jCZHv260XgzUYY53sr+Tks7te6kf7o/Vk/2nr7Ca1nH+jS30On3Bi7vVO4MT4O9w0ZwVyPrcpBX7Q28s6UodIo8Ue0jFt6ysbp0p9mXxv7fRm4L7UtWFhoNtdXF9AxSO2LDAR2AJQAj6ILHOTjG+OlaHiGWKx0+57u4QRpCNPsJFIKlMnnY46E4ZiP8Ayr50/Z1o0+nXF5cpD/iUNuzcp6Ql/VRPxEnJ+yoI88ZPi29tpnNpZT81rYgRxn75ifXk/wBx6ewCrUIyoUOOb6zNjEakuNbLb9/dzPTZDHJyTvmhg+sPd8zUXcscmmB3GfL5msNvU7C561EmmzvTE0gGJqDGpE1A0hipwaalTAmDTk71AGkTQAmPre8EUgahITjI6jekCCOYfRP9PZQBZineNw6EqcEfA9a672daxY8T6EOF9Vkhi1CJ1k0y6mbClht3LnwBGyt4ELnYAjjWfbR7W6ktpBJExBHkamo1nTeUUL6yjdQxtJapnXe0rWbLhnRzwvpE0Ut9K3Pqd1E2VBwQIEbxCgnmbxLNjbc8imkZpGdzzMxySfOmurmS5lMkrEk+2glvbXVe5lV3JrWg6NJQbyyRNOp9bHkBQyQF5m+iP6+ylESQWPU7mq5ZDZ3piaiD1pE0AImo09NSAelSpYoAVLrSpxTAiw2xQcMrZRivuNWDUCtDQAuef7xqXPP941EC0/LSwIFzz/eNS7yb7xqLy0uWjAAsO7AuxY+00ZRtTBcVLFNIYhSpYpYoYCpUqVID/9k=
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        unsafeWindow
// @connect      rules1.clearurls.xyz
// @connect      rules2.clearurls.xyz
// @noframes
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
// @match        *://*.cdn.ampproject.org/*
// @match        *://cdn.ampproject.org/*
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
        debug: GV("debug", false),
        activeAdObfuscation: GV("activeAdObfuscation", false),
        // Disabled by default: resolving server-side redirects on hover requires
        // firing background requests at third-party servers, which leaks hover
        // intent. Users who want FastForward-style multi-hop resolution can opt in.
        serverRedirectResolution: GV("serverRedirectResolution", false),
        // When true (default), all optional background traffic (scheduled rule
        // downloads, hover redirect resolution, ad-noise clicks) is paused while
        // the browser reports a metered connection or Data-Saver mode.
        respectMetered: GV("respectMetered", true),
        // v3.0.0 — new features (all precision-gated; see PROPOSALS.md):
        // Deep-clean same-origin iframes from the top document. Off by default:
        // cross-origin frames are never touched.
        deepFrames: GV("deepFrames", false),
        // Staged rule rollout: freshly downloaded rulesets activate after a
        // 72h soak (or a manual "activate now"), so a bad upstream push never
        // hits conservative users instantly.
        stagedRules: GV("stagedRules", true),
        // When true, tracker keys purged from web storage are IMMEDIATELY
        // re-purged if the site re-creates them. Off by default (report-only).
        respawnStrict: GV("respawnStrict", false),
        // User-promoted personal strip rules (from the Candidates tab).
        // Explicitly user-authored, so precision accountability is theirs.
        userStripRules: GV("userStripRules", [])
    };

    // ------------------------------------------------------------------
    // Network-condition awareness (v2.3.0)
    // The Network Information API is Chromium-only; on Firefox/LibreWolf the
    // API is absent, so detection simply reports "unknown" — and because every
    // heavy feature below is already opt-in or metered-gated, that failure mode
    // stays bandwidth-friendly by default.
    // ------------------------------------------------------------------
    function isMeteredConnection() {
        try {
            const c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (c && (c.saveData === true || c.metered === true)) return true;
        } catch (e) {}
        return false;
    }

    // Single policy checkpoint for ALL optional background network traffic.
    function backgroundDataAllowed() {
        return !CFG.respectMetered || !isMeteredConnection();
    }

    let WHITELIST = GV("whitelist", "");

    // User-requested site-specific settings maps
    let unblockContextMenuSites = GV("unblockContextMenuSites", {});
    // Bug Fix (v2.2.0): default was the string "activeAdObfuscation" (bad copy-paste).
    // In strict mode, assigning a site key onto a string primitive throws, which made
    // the dashboard "text selection" toggle fail silently on first use.
    let unblockTextSelectionSites = GV("unblockTextSelectionSites", {});

    // Storage schema v3 (v3.0.0): additive keys below. Older installs simply
    // get defaults; factory-reset list below covers every key.
    try { if ((GV("schemaVersion", 0) | 0) < 3) SV("schemaVersion", 3); } catch (e) {}

    // v3.0.0 (#17) — per-site dry-run: classify & count, rewrite nothing.
    let dryRunSites = GV("dryRunSites", {});
    function isSiteDryRun() {
        try { return !!dryRunSites[location.hostname.toLowerCase()]; } catch (e) { return false; }
    }

    // v3.0.0 (#18) — timed pause: protection auto-resumes after the deadline,
    // so "disable for a minute" can never silently become "off forever".
    let pauseUntil = GV("pauseUntil", 0) | 0;
    let _sessionPaused = false; // per-tab, in-memory "pause this session"
    function isPaused() {
        if (_sessionPaused) return true;
        if (pauseUntil > 0) {
            if (Date.now() < pauseUntil) return true;
            // expired — clear & auto-resume
            pauseUntil = 0;
            SV("pauseUntil", 0);
        }
        return false;
    }

    // v3.0.0 (#19) — per-site config overrides: {host: {cfgKey: value}}.
    // Storage supports ANY key; the Sites tab currently exposes three.
    let siteProfiles = GV("siteProfiles", {});
    function eff(key) {
        try {
            const p = siteProfiles[location.hostname.toLowerCase()];
            if (p && Object.prototype.hasOwnProperty.call(p, key)) return p[key];
        } catch (e) {}
        return CFG[key];
    }

    // v3.0.0 (#15) — per-site AMP→canonical redirect opt-in.
    let ampCanonicalSites = GV("ampCanonicalSites", {});

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
        // v3.0.0: timed/session pause is a third state beside globalStatus and
        // whitelisting — checked here so EVERY feature path respects it.
        return CFG.globalStatus && !isPaused() && !isWhitelisted(location.hostname);
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

    // LRU Cache for URL Sanitization.
    // Perf Fix (v2.2.0): Map-backed LRU — O(1) get/set/evict instead of the old
    // O(n) indexOf/splice/shift scans on every lookup, and it cannot be confused
    // by special keys like "__proto__" the way a plain object could.
    const LRU_MAX = 384;
    const _lruCache = new Map();

    function lruGet(key) {
        if (_lruCache.has(key)) {
            const val = _lruCache.get(key);
            // Refresh recency: delete + set moves the key to the newest position.
            _lruCache.delete(key);
            _lruCache.set(key, val);
            return { hit: true, val: val };
        }
        return { hit: false, val: undefined };
    }

    function lruSet(key, val) {
        if (_lruCache.has(key)) _lruCache.delete(key);
        _lruCache.set(key, val);
        while (_lruCache.size > LRU_MAX) {
            // Map preserves insertion order: first key is the oldest.
            _lruCache.delete(_lruCache.keys().next().value);
        }
    }

    function lruClear() {
        _lruCache.clear();
    }

    const STATS = {
        cleaned: GV("statCleaned", 0) | 0,
        fields: GV("statFields", 0) | 0,
        blocked: GV("statBlocked", 0) | 0
    };

    let _statFlush = null;
    // Pending deltas not yet merged into persistent storage.
    let _deltaCleaned = 0, _deltaFields = 0, _deltaBlocked = 0;
    function flushStats() {
        if (_statFlush) {
            clearTimeout(_statFlush);
            _statFlush = null;
        }
        if (!_deltaCleaned && !_deltaFields && !_deltaBlocked) return;
        // Bug Fix (v2.5.0): merge deltas into storage instead of writing
        // absolute counters — two tabs used to overwrite each other's counts
        // (last writer wins).
        const dc = _deltaCleaned, df = _deltaFields, db = _deltaBlocked;
        _deltaCleaned = _deltaFields = _deltaBlocked = 0;
        SV("statCleaned", (GV("statCleaned", 0) | 0) + dc);
        SV("statFields", (GV("statFields", 0) | 0) + df);
        SV("statBlocked", (GV("statBlocked", 0) | 0) + db);
        bumpDaily(dc, db); // v3.0.0 (#24)
    }
    // Bug Fix (v2.6.0): deltas pending in the 1.5s debounce window were lost
    // when the tab closed or navigated right after a burst of cleaning — flush
    // on pagehide / backgrounding so every cleaned link is counted.
    function bumpStats(fieldsRemoved, blocked) {
        if (!CFG.statistics) return;
        STATS.cleaned++;
        STATS.fields += fieldsRemoved || 0;
        STATS.blocked += blocked ? 1 : 0;
        _deltaCleaned++;
        _deltaFields += fieldsRemoved || 0;
        _deltaBlocked += blocked ? 1 : 0;
        if (_statFlush) return;
        _statFlush = setTimeout(flushStats, 1500);
    }
    try {
        window.addEventListener("pagehide", flushStats);
        document.addEventListener("visibilitychange", function() {
            if (document.visibilityState === "hidden") flushStats();
        });
        // v3.0.0 (#28) — BFCache resurrection: a bfcache-restored page keeps
        // closures that assume a FRESH document (stale boot-time assumptions,
        // latched one-shot flags). Re-sync everything idempotently.
        window.addEventListener("pageshow", function(ev) {
            if (!ev || !ev.persisted) return;
            try {
                pushConfigToPage();
                window.dispatchEvent(new CustomEvent("nt:bfcache"));
                stripSERPBar();
                scanDom();
                scanSpecial();
                flushStats();
            } catch (e) {}
        });
    } catch (e) {}

    // v3.0.0 (#16) — explainability ring buffer: the last ~60 actions, held in
    // MEMORY ONLY (never persisted, never leaves the tab), and recorded without
    // query strings so no sensitive URLs are retained. Feeding the dashboard's
    // "Recent activity" tab answers "why was this touched?" instantly.
    const ACTIVITY_MAX = 60;
    const _activity = [];
    function recordActivity(kind, url, rule) {
        if (!CFG.statistics) return; // stats off = no traces at all, anywhere
        try {
            const u = new URL(url, location.href);
            _activity.push({
                t: Date.now(),
                kind: kind,
                text: u.hostname + u.pathname.slice(0, 96),
                rule: rule || ""
            });
            while (_activity.length > ACTIVITY_MAX) _activity.shift();
        } catch (e) {}
    }

    // v3.0.0 (#24) — daily stats buckets, local-only, auto-pruned past 90 days.
    function bumpDaily(cleanedDelta, blockedDelta) {
        if (!CFG.statistics) return;
        try {
            const day = new Date().toISOString().slice(0, 10);
            const d = GV("statDaily", {}) || {};
            if (!d[day]) d[day] = { c: 0, b: 0 };
            d[day].c += cleanedDelta;
            d[day].b += blockedDelta;
            const cutoff = Date.now() - 90 * 86400000;
            Object.keys(d).forEach(k => {
                if (new Date(k + "T00:00:00Z").getTime() < cutoff) delete d[k];
            });
            SV("statDaily", d);
        } catch (e) {}
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

    // v3.0.0 (#2) — regex fusion: instead of testing K keys against R separate
    // anchored regexes (K×R), compile the R sources into chunked alternations
    // of max 64 — identical match semantics, far fewer engine invocations.
    // Compilation failure of any chunk degrades that chunk to per-rule mode.
    const FUSION_CHUNK = 64;
    function fuseRules(ruleSources) {
        const chunks = [];
        for (let i = 0; i < ruleSources.length; i += FUSION_CHUNK) {
            const part = ruleSources.slice(i, i + FUSION_CHUNK);
            try {
                chunks.push(new RegExp("^(?:" + part.join(")|(?:") + ")$", "i"));
            } catch (e) {
                chunks.push(null); // degraded chunk → per-rule fallback
            }
        }
        return chunks;
    }

    // v3.0.0 (#1 spirit, corpus-enforced) — precision rule overrides. Upstream
    // ClearURLs strips Amazon's `th`/`psc`, but those encode the user's CHOSEN
    // product variant on /dp/ links: dropping them silently changes which
    // variant loads. That's a broken website, not a tracker. The override is
    // applied at compile time so it survives every future feed update, and the
    // precision-budget CI corpus (tests/precision-corpus.js) guards it.
    const PRECISION_RULE_OVERRIDES = {
        amazon: { rules: [ "th", "psc" ], referralMarketing: [] }
    };
    function applyPrecisionOverrides(name, def) {
        const ov = PRECISION_RULE_OVERRIDES[name.toLowerCase()];
        if (!ov) return def;
        const out = {};
        Object.keys(def).forEach(k => {
            out[k] = def[k];
        });
        if (Array.isArray(def.rules)) out.rules = def.rules.filter(r => ov.rules.indexOf(r) === -1);
        if (Array.isArray(def.referralMarketing)) out.referralMarketing = def.referralMarketing.filter(r => (ov.referralMarketing || []).indexOf(r) === -1);
        return out;
    }

    function compileProvider(name, def) {
        def = applyPrecisionOverrides(name, def);
        const ruleSrcs = (def.rules || []).concat(def.completeProvider ? [ ".*" ] : []);
        const refSrcs = def.referralMarketing || [];
        return {
            name: name,
            completeProvider: !!def.completeProvider,
            forceRedirection: !!def.forceRedirection,
            urlPattern: def.urlPattern ? new RegExp(def.urlPattern, "i") : null,
            exceptions: (def.exceptions || []).map(r => new RegExp(r, "i")),
            rawRules: (def.rawRules || []).map(r => new RegExp(r, "gi")),
            redirections: (def.redirections || []).map(r => new RegExp(r, "i")),
            ruleRes: ruleSrcs.map(r => new RegExp("^" + r + "$", "i")),
            referralRes: refSrcs.map(r => new RegExp("^" + r + "$", "i")),
            _fused: fuseRules(ruleSrcs),
            _fusedReferral: fuseRules(refSrcs)
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
            // v3.0.0 (#14): user-promoted personal strip rules ride along as a
            // synthetic provider (catch-all). Each entry was explicitly approved
            // in the dashboard — NullTrail never strips on its own suspicion.
            if (Array.isArray(CFG.userStripRules)) {
                const okRules = [];
                CFG.userStripRules.forEach(r => {
                    try {
                        new RegExp("^(?:" + r + ")$", "i");
                        okRules.push(r);
                    } catch (e) {
                        log("invalid user rule skipped:", r);
                    }
                });
                if (okRules.length) {
                    try {
                        arr.push(compileProvider("user (personal)", { urlPattern: ".*", rules: okRules }));
                    } catch (e) {}
                }
            }
            // Bug Fix (v2.2.0): the old comparator returned -1 for every pair where
            // `a` was not the global provider — an inconsistent ordering relation that
            // made provider order engine-dependent. Weight-based comparator keeps the
            // global (".*") provider last deterministically.
            arr.sort((a, b) => {
                const ga = a.urlPattern && a.urlPattern.source === ".*" ? 1 : 0;
                const gb = b.urlPattern && b.urlPattern.source === ".*" ? 1 : 0;
                return ga - gb;
            });
            // Hardening (v2.4.0): never swap a working ruleset for an empty one.
            // If every remote provider failed to compile, keep the current rules —
            // otherwise all stripping would silently stop until the next update.
            if (arr.length > 0) {
                PROVIDERS = arr;
                log("rules loaded:", arr.length, "providers");
                return true;
            } else {
                log("no valid providers compiled — keeping existing rules");
                return false;
            }
        } catch (e) {
            log("setRules error", e);
            return false;
        }
    }

    // ------------------------------------------------------------------
    // v3.0.0 (#3/#4/#5/#6/#21) — rules pipeline: canary, staging, quorum,
    // rollback, diff. Never let a bad/corrupt/forged ruleset reach a user.
    // ------------------------------------------------------------------

    // #3 canary: invariant fixtures the loaded ruleset MUST satisfy. These are
    // precision contracts (strip trackers, NEVER eat functional params).
    function rulesCanary() {
        try {
            const fx = [
                [ "https://example.com/?utm_source=x&id=1", "https://example.com/?id=1" ],
                [ "https://www.google.com/url?q=" + encodeURIComponent("https://example.org/"), "https://example.org/" ],
                [ "https://example.com/p?utm_campaign=c#sec=2", "https://example.com/p#sec=2" ],
                // Referral-allow contract (default ON): affiliate tag survives,
                // tracker param goes. If the user strips referrals, both go.
                [ "https://www.amazon.com/dp/B0000000?tag=aff-20&th=1",
                  CFG.referralMarketing ? "https://www.amazon.com/dp/B0000000?tag=aff-20" : "https://www.amazon.com/dp/B0000000" ]
            ];
            for (let i = 0; i < fx.length; i++) {
                const got = cleanPass(fx[i][0], {});
                if (got !== fx[i][1]) {
                    log("canary fixture failed:", fx[i][0], "→", got);
                    return false;
                }
            }
            return true;
        } catch (e) {
            return false;
        }
    }

    let _canaryFailed = false;
    // Apply a ruleset with verification + automatic recovery (#3 + #6):
    // try new → previous-good → embedded, in that order, until the canary passes.
    function applyRulesVerified(data, hash, source) {
        DV("rulesCanaryFail");
        let label = source || "unknown";
        if (setRules(data) && rulesCanary()) {
            _canaryFailed = false;
            log("rules verified by canary (" + label + ")");
            return true;
        }
        const prev = GV("rulesDataPrev", null);
        if (prev && prev.data && prev.data.providers) {
            log("canary failed on " + label + " — trying previous-good ruleset");
            if (setRules(prev.data) && rulesCanary()) {
                _canaryFailed = true;
                SV("rulesCanaryFail", JSON.stringify({ at: Date.now(), source: label, recovery: "previous-good" }));
                return false;
            }
        }
        log("canary failed on prev too — falling back to embedded rules");
        setRules(EMBEDDED_RULES);
        _canaryFailed = true;
        SV("rulesCanaryFail", JSON.stringify({ at: Date.now(), source: label, recovery: "embedded" }));
        return false;
    }

    // #21 rules diff: compact summary of what a new ruleset changes.
    function summarizeRulesDiff(prevData, nextData) {
        try {
            const pp = (prevData && prevData.providers) || {};
            const np = (nextData && nextData.providers) || {};
            const added = Object.keys(np).filter(k => !pp[k]);
            const removed = Object.keys(pp).filter(k => !np[k]);
            let addedRules = 0, removedRules = 0;
            Object.keys(np).forEach(k => {
                if (!pp[k]) return;
                const o = new Set(pp[k].rules || []), n = new Set(np[k].rules || []);
                n.forEach(r => { if (!o.has(r)) addedRules++; });
                o.forEach(r => { if (!n.has(r)) removedRules++; });
            });
            return { at: Date.now(), addedProviders: added, removedProviders: removed, addedRules: addedRules, removedRules: removedRules };
        } catch (e) {
            return null;
        }
    }

    // #4/#6 activation with staging + prev-snapshot. Returns true if the new
    // ruleset became the live one.
    function activateRules(data, hash, source) {
        const current = GV("rulesData", null);
        const currentHash = String(GV("rulesHash", ""));
        if (current && current.providers) {
            SV("rulesDataPrev", { data: current, hash: currentHash });
            SV("rulesDiff", summarizeRulesDiff(current, data));
        }
        lruClear(); // new matchers — old sanitizer cache is stale
        SV("rulesData", data);
        if (hash) SV("rulesHash", hash);
        SV("rulesUpdated", Date.now());
        DV("rulesPending");
        return applyRulesVerified(data, hash, source || "update");
    }

    const RULE_STAGE_MS = 72 * 3600 * 1000;

    // v3.0.0 (#14): recompile the active ruleset so personal rules take effect
    // immediately (and stale LRU entries can't bypass them).
    function rebuildRulesWithUserRules() {
        lruClear();
        const d = GV("rulesData", null);
        if (d && d.providers) setRules(d);
        else setRules(EMBEDDED_RULES);
    }

    // Activate a staged (pending) ruleset once its soak has elapsed. Called at
    // boot and from the dashboard's "activate now" button.
    function maybeActivatePending(forceActivate) {
        try {
            const pending = GV("rulesPending", null);
            if (!pending || !pending.data || !pending.data.providers) return "none";
            if (!forceActivate && (!pending.activateAt || Date.now() < pending.activateAt)) return "waiting";
            const okd = activateRules(pending.data, pending.hash || "", "staged rollout");
            log("pending rules activated:", okd ? "verified" : "canary recovery engaged");
            return okd ? "updated" : "failed";
        } catch (e) {
            return "none";
        }
    }

    // #5 quorum: fetch all three independent hash feeds; require at least two
    // agreeing hashes before trusting an update. Three ~100-byte files, only at
    // update time — never speculative.
    function hashQuorum() {
        return Promise.all(HASH_URLS.map(u => gmFetch(u).then(r => (r.status === 200 ? (r.text || "").trim().toLowerCase() : null)).catch(() => null))).then(vals => {
            const got = vals.filter(v => v && v.length >= 32);
            if (got.length < 2) return null;
            const counts = {};
            let best = null, bestN = 0;
            got.forEach(v => {
                counts[v] = (counts[v] || 0) + 1;
                if (counts[v] > bestN) {
                    bestN = counts[v];
                    best = v;
                }
            });
            return bestN >= 2 ? best : null;
        });
    }

    function isLocalURL(url) {
        try {
            const h = new URL(url, location.href).hostname;
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

    // Removed in v2.4.0: decodeURIEncodedMod() — defined but never called (dead code).
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
        // Perf (v2.5.0): memoize the concatenated list — it was reallocated on
        // every cleaned URL whenever referral stripping was enabled by the user.
        return CFG.referralMarketing ? p.ruleRes : (p._allRes || (p._allRes = p.ruleRes.concat(p.referralRes)));
    }

    // v3.0.0 (#1) — confidence-tiered classification. Unknown params are NEVER
    // stripped by us; they are merely counted (and, if high-entropy, offered to
    // the user as personal-rule candidates — human-in-the-loop only).
    const FUNCTIONAL_PARAMS_RE = /^(?:q|wd|p|query|search|text|keyword|ia|iai|qft|oq|url|u|target|dest|next|to|return|callback|id|page|pageno|page_num|offset|limit|sort|order|filter|lang|locale|hl|gl|tab|view|type|format|sid|session|token|auth|code|state|nonce|client_id|redirect_uri|scope|response_type|access_token|refresh_token|kbn|node|s)$/i;
    const ENTROPY_VALUE_RE = /^[A-Za-z0-9+/_=\-.]{16,}$/;
    let _clsFunctional = 0, _clsUnknown = 0;
    const CANDIDATES_MAX = 200;
    const _candidates = Object.create(null); // param name -> sightings this page

    function classifyParam(key, value) {
        if (!CFG.statistics) return;
        if (FUNCTIONAL_PARAMS_RE.test(key)) {
            _clsFunctional++;
            return;
        }
        _clsUnknown++;
        // v3.0.0 (#14) candidate discovery: values that look like unique
        // high-entropy identifiers are tracker-suspicious — suggested, never stripped.
        if (value && value.length >= 16 && ENTROPY_VALUE_RE.test(value)) {
            if (!(key in _candidates) && Object.keys(_candidates).length >= CANDIDATES_MAX) return;
            _candidates[key] = (_candidates[key] || 0) + 1;
        }
    }

    // Fused (v3.0.0 #2) rule test with per-rule fallback for degraded chunks.
    function fusedTest(chunks, fallbackRes, key) {
        for (let i = 0; i < chunks.length; i++) {
            const re = chunks[i];
            if (re) {
                if (re.test(key)) return true;
            } else {
                for (let j = i * FUSION_CHUNK, e = Math.min(j + FUSION_CHUNK, fallbackRes.length); j < e; j++) {
                    if (fallbackRes[j].test(key)) return true;
                }
            }
        }
        return false;
    }

    function rulesMatch(p, key) {
        if (CFG.referralMarketing) return fusedTest(p._fused, p.ruleRes, key);
        // Referral stripping enabled: test both fused sets.
        return fusedTest(p._fused, p.ruleRes, key) || fusedTest(p._fusedReferral, p.referralRes, key);
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
        // Classification counters only on the catch-all provider so the same
        // param isn't double-counted across overlapping providers.
        const classifyHere = CFG.statistics && p.urlPattern && p.urlPattern.source === ".*";
        let removed = 0;
        const fkeys = Array.from(new Set(Array.from(fields.keys())));
        for (let k = 0; k < fkeys.length; k++) {
            const key = fkeys[k];
            if (rulesMatch(p, key)) {
                fields.delete(key);
                removed++;
            } else if (classifyHere) {
                classifyParam(key, fields.get(key));
            }
        }
        const hkeys = fragments.keys();
        for (let h = 0; h < hkeys.length; h++) {
            if (rulesMatch(p, hkeys[h])) {
                fragments.delete(hkeys[h]);
                removed++;
            }
        }
        if (removed === 0) return url;
        // Bug Fix (v2.4.0): URL.origin omits userinfo — rebuilding from it
        // silently dropped "user:pass@" credentials from cleaned URLs.
        let out = urlObj.protocol + "//" +
            (urlObj.username ? urlObj.username + (urlObj.password ? ":" + urlObj.password : "") + "@" : "") +
            urlObj.host + urlObj.pathname;
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

    // Bug Fix: Add official GitLab raw fallbacks to ensure extreme reliability
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
                // Bug Fix (v2.4.0): the fetch fallback previously had NO timeout,
                // unlike the GM path — a hung connection would leave updateRules'
                // in-flight flag set forever, silently ending all future updates.
                let ctrl = null;
                try { ctrl = new AbortController(); } catch (e) {}
                const timer = ctrl ? setTimeout(function() {
                    try { ctrl.abort(); } catch (e) {}
                }, 20000) : null;
                const clear = () => { if (timer) clearTimeout(timer); };
                fetch(url, ctrl ? { signal: ctrl.signal } : undefined).then(r => {
                    return r.text().then(t => ({ status: r.status, text: t }));
                }).then(
                    v => { clear(); resolve(v); },
                    e => { clear(); reject(e); }
                );
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

    let _updatingRules = false;
    // Consecutive failures of *scheduled* updates — drives a capped exponential
    // backoff persisted via "rulesNextTry", so devices on flaky/expensive links
    // are not re-pounded on every page load (the 6-day cadence stays untouched
    // on healthy connections).
    let _ruleFailCount = 0;

    // v2.6.0: updateRules resolves with a RESULT STRING instead of an empty
    // fulfillment. Previously it swallowed every failure path, so the dashboard's
    // "Check for updates now" button cheerfully reported "Updated successfully"
    // even when all three feeds were unreachable or the hash verification
    // failed — the update checker lied. Statuses: "updated" (fresh database
    // installed), "current" (remote hash identical — nothing to do), "failed"
    // (transport, hash-mismatch, parse, or structural rejection), "busy" (a
    // check is already in flight), "skipped" (scheduled gate: too soon, in
    // failure backoff, or metered connection).
    let _lastRuleResult = "";
    function recordRuleResult(status) {
        _lastRuleResult = status;
        try {
            SV("rulesLastCheck", Date.now());
            SV("rulesLastResult", status);
        } catch (e) {}
    }

    function updateRules(force) {
        if (!CFG.autoUpdateRules && !force) return Promise.resolve("skipped");
        // In-flight guard: boot, the 6-hour interval, and manual dashboard updates
        // could otherwise run duplicate parallel downloads of the same ~200KB feed.
        if (_updatingRules) return Promise.resolve("busy");
        if (!force) {
            // Metered-friendly (v2.3.0): scheduled updates are skipped entirely on
            // metered / Data-Saver connections. A manual "Check for updates now"
            // (force) is user intent and always allowed.
            if (!backgroundDataAllowed()) {
                log("rule auto-update skipped: metered / data-saver connection");
                return Promise.resolve("skipped");
            }
            const last = GV("rulesUpdated", 0) | 0;
            if (last && Date.now() - last < UPDATE_INTERVAL) return Promise.resolve("skipped");
            const nextTry = GV("rulesNextTry", 0) | 0;
            if (nextTry && Date.now() < nextTry) return Promise.resolve("skipped");
        }
        _updatingRules = true;
        // v3.0.0 (#5): hash feeds must reach QUORUM (2-of-3 agree) before any
        // download is trusted — single-feed compromise can no longer push a
        // forged ruleset.
        return hashQuorum().then(remoteHash => {
            if (!remoteHash) throw new Error("hash-quorum");
            // Bandwidth fix (v2.2.0): if the remote hash matches our cached rules we
            // can skip downloading the full ~200KB data file entirely.
            const cachedHash = String(GV("rulesHash", "")).toLowerCase();
            if (cachedHash === remoteHash && GV("rulesData", null)) {
                SV("rulesUpdated", Date.now());
                log("rules already up to date");
                return "current";
            }
            // Already staged with this exact hash? Nothing new to do.
            const pending = GV("rulesPending", null);
            if (pending && pending.hash === remoteHash) return "staged";
            return firstOK(RULE_URLS).then(dr => {
                const dataText = (dr.text || "").trim();
                const accept = digest => {
                    if (digest && digest !== remoteHash) {
                        log("rule hash mismatch");
                        return "failed";
                    }
                    let data;
                    try {
                        data = JSON.parse(dataText);
                    } catch (e) {
                        log("rule parse failed");
                        return "failed";
                    }
                    // Never replace a working ruleset with structurally invalid data.
                    if (!data || !data.providers || Object.keys(data.providers).length === 0) {
                        log("rule payload invalid");
                        return "failed";
                    }
                    SV("rulesUpdated", Date.now());
                    // v3.0.0 (#4): staged rollout — the new ruleset soaks for
                    // 72h before activation (dashboard offers "activate now").
                    if (CFG.stagedRules) {
                        SV("rulesPending", {
                            data: data,
                            hash: digest || remoteHash,
                            fetchedAt: Date.now(),
                            activateAt: Date.now() + RULE_STAGE_MS
                        });
                        log("rules staged — activates after 72h soak");
                        return "staged";
                    }
                    log("rules fetched — activating with canary verification");
                    return activateRules(data, digest || remoteHash, "update") ? "updated" : "failed";
                };
                // crypto.subtle is unavailable in insecure (http://) contexts.
                // Hash quorum (2-of-3 feeds over TLS) still anchors trust.
                if (typeof crypto !== "undefined" && crypto.subtle && remoteHash) {
                    return sha256Hex(dataText).then(accept, () => accept(null));
                }
                return accept(null);
            });
        }).then(status => {
            _ruleFailCount = 0;
            if (GV("rulesNextTry", 0) | 0) SV("rulesNextTry", 0);
            _updatingRules = false;
            // Defensive: an anomalous empty status must never masquerade as success.
            recordRuleResult(status || "failed");
            return status || "failed";
        }, e => {
            _ruleFailCount++;
            // Capped exponential backoff: 6h → 12h → 24h (max), persisted.
            // Manual (forced) checks share the transport, so they share the
            // backoff — but the failure is still reported honestly to the UI.
            const backoff = Math.min(6 * 3600 * 1000 * Math.pow(2, Math.min(_ruleFailCount - 1, 2)), 24 * 3600 * 1000);
            SV("rulesNextTry", Date.now() + backoff);
            _updatingRules = false;
            recordRuleResult("failed");
            log("rule update failed:", e && e.message, "— retry paused for", Math.round(backoff / 360000) / 10, "h");
            return "failed";
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

    // Bug Fix (v2.2.0): 'core' must be mutable — padding a const threw a strict-mode
    // TypeError, silently breaking all Bing click-through unwrapping. Host gate now also
    // covers ecosia.org, whose engine entry references this unwrapper (previously dead config).
    function unwrapBing(u) {
        if (!u || !/(?:^|\.)(?:bing\.com|ecosia\.org)$/i.test(u.hostname)) return null;
        if (u.pathname !== "/ck/a" && u.pathname !== "/ck/d") return null;
        const m = /[?&]u=([A-Za-z0-9_+/=\-]*)/.exec(u.search);
        if (!m) return null;
        let core = m[1].replace(/^[a-z][0-9]/i, "").replace(/-/g, "+").replace(/_/g, "/");
        while (core.length % 4) core += "=";
        const dec = safeAtob(core);
        if (dec && /^https?:\/\//i.test(dec)) return dec;
        return null;
    }

    function unwrapYahoo(u) {
        // Precision Fix (v2.6.0): "\.?" matched "evilsearch.yahoo.*" hosts.
        if (!u || !/(?:^|\.)search\.yahoo\./i.test(u.hostname)) return null;
        const combined = (u.pathname || "") + (u.search || "");
        const m = /\/RU=(.+?)(?=\/[A-Za-z]{1,2}=|$)/i.exec(combined);
        if (!m) return null;
        const dec = safeDecode(m[1]);
        if (dec && /^https?:\/\//i.test(dec)) return dec.replace(/\/{3,}$/, "/");
        return null;
    }

    function unwrapDDG(u) {
        // Precision Fix (v2.6.0): missing host boundary matched "notduckduckgo.com".
        if (!u || !/(?:^|\.)duckduckgo\.com$/i.test(u.hostname)) return null;
        if (u.pathname !== "/l/") return null;
        const m = /[?&]uddg=([^&]+)/.exec(u.search);
        if (m) {
            const dec = safeDecode(m[1]);
            if (dec && /^https?:\/\//i.test(dec)) return dec;
        }
        return null;
    }

    function unwrapYandex(u) {
        // Precision Fix (v2.6.0): "\.?" matched "xyandex.com" lookalike hosts.
        if (!u || !/(?:^|\.)yandex\.[a-z]{2,}$/i.test(u.hostname)) return null;
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

    // Critical Patch: Do not block functional routing parameters 'ia' and 'iai' on DuckDuckGo
    const ENGINES = [ {
        n: "google",
        // Bug Fix (v2.2.0): old pattern required a subdomain prefix (".google."),
        // so the bare apex "google.com" was never recognized as an engine host.
        h: /(?:^|\.)google\.(?:[a-z]{2,3})(?:\.[a-z]{2})?$/i,
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
        s: [ "kp", "kl", "k1", "kaf", "khq", "kns", "kac", "km", "kam", "rut", "df", "iar", "iaf" ]
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
        // Bug Fix (v2.6.0): "q" is Perplexity's QUERY parameter — stripping it
        // emptied the search on reload and destroyed every shared link.
        s: [ "copilot", "s", "rq" ]
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
        // Bug Fix (v2.6.0): "q" is Walla's QUERY parameter — stripping it broke
        // reloads and shared result links.
        s: [ "e", "l" ]
    } ];

    // Hardening (v2.4.0): null-prototype map — hostname keys are attacker-influenced
    // (any URL's host), so a plain {} could be prototype-mutated by crafted names.
    const _engineCache = Object.create(null);
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

    // Hardening (v2.6.0): every capture is run through safeDecode() —
    // decodeURIComponent() THROWS URIError on malformed escapes (e.g. "%E0%A4"
    // truncated by a lazy CMS), and this extractor sits on the sanitize hot
    // path, so one bad href previously crashed the whole cleaning pass.
    function extractGoogleRedirect(urlObj) {
        if (!urlObj || (urlObj.protocol !== "https:" && urlObj.protocol !== "http:")) return null;
        const h = urlObj.hostname, p = urlObj.pathname, s = urlObj.search, hash = urlObj.hash;
        let m;
        if (isGoogleHost(h) && (p === "/url" || p === "/local_url" || p === "/searchurl/rr.html" || p === "/linkredirect" || p === "/interstitial")) {
            if (m = /[?&](?:q|url|dest|imgurl|continue)=((?:https?|ftp)[%:][^&]+)/.exec(s)) return safeDecode(m[1]);
            if (m = /[?&](?:q|url|dest|continue)=((?:%2[Ff]|\/)[^&]+)/.exec(s)) return urlObj.origin + safeDecode(m[1]);
            if (m = /[#&]url=(https?[:%][^&]+)/.exec(hash)) return safeDecode(m[1]);
        }
        if (isGoogleHost(h) && p === "/sorry/index" && (m = /[?&]continue=((?:https?)[%:][^&]+)/.exec(s))) return safeDecode(m[1]);
        if (h === "cdn.ampproject.org" || h.indexOf(".cdn.ampproject.org") > -1 || h === "www.bing-amp.com" || h.indexOf(".bing-amp.com") > -1) {
            const amp = (p || "").replace(/^\/c\/s\/|^\/v\/[^/]+\/|^\/+/, "").replace(/^\/+/, "");
            if (amp && amp.indexOf("/") > -1) {
                const ampd = "https://" + amp + (s || "");
                if (isGoodLink(ampd)) return ampd;
            }
        }
        if (isGoogleHost(h) && p === "/maps/preview/place" && (m = /[?&](?:q|url)=((?:https?)[%:][^&]+)/.exec(s))) return safeDecode(m[1]);
        if (h === "googleweblight.com" && (p === "/fp" || p === "/i" || p === "/lite") && (m = /[?&]u=((?:https?|ftp)[%:][^&]+)/.exec(s))) return safeDecode(m[1]);
        if (h.indexOf("googleadservices") > -1 && p === "/pagead/aclk" && (m = /[?&](?:adurl|dest)=((?:https?)[%:][^&]+)/.exec(s))) return safeDecode(m[1]);
        if (h.indexOf("consent.google") === 0 && (m = /[?&]continue=((?:https?)[%:][^&]+)/.exec(s))) return safeDecode(m[1]);
        if ((h === "news.google.com" || h === "discover.google.com") && (m = /[?&](?:url|dest)=((?:https?)[%:][^&]+)/.exec(s))) return safeDecode(m[1]);
        if (/^\/amp\/s\//.test(p)) {
            const c = p.substring(7) + s + hash;
            if (c && c !== "/") return "https://" + c;
        }
        if (h.indexOf("translate.google") === 0 && p === "/translate" && (m = /[?&]u=((?:https?)[%:][^&]+)/.exec(s))) return safeDecode(m[1]);
        if (h.indexOf("scholar.google") === 0 && p === "/scholar_url" && (m = /[?&]url=((?:https?|ftp)[%:][^&]+)/.exec(s))) return safeDecode(m[1]);
        if (h.indexOf("books.google") === 0 && (m = /[?&](?:url|redirect)=((?:https?)[%:][^&]+)/.exec(s))) return safeDecode(m[1]);
        if (h === "play.google.com" && p === "/url" && (m = /[?&]url=((?:https?)[%:][^&]+)/.exec(s))) return safeDecode(m[1]);
        if (h.indexOf(".googlesyndication.com") > -1 && (m = /[?&](?:adurl|dest_url|redirect)=((?:https?)[%:][^&]+)/.exec(s))) return safeDecode(m[1]);
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
            // v3.0.0 (#8): the quick pass previously ignored hash-fragment
            // params — SPA routers carry trackers there (#/view?utm_=…).
            if (u.hash && u.hash.indexOf("=") !== -1) {
                const fr = parseHashFragments(u);
                const hkeys = fr.keys();
                let hChanged = false;
                for (let i = 0; i < hkeys.length; i++) {
                    if (STRIP_PARAMS_RE.test(hkeys[i]) || /utm_/i.test(hkeys[i])) {
                        fr.delete(hkeys[i]);
                        hChanged = true;
                    }
                }
                if (hChanged) {
                    const hs = fr.toString();
                    u.hash = hs ? "#" + hs : "";
                    changed = true;
                }
            }
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

    // v3.0.0 (#30) — debug-gated perf counters for the About tab "engine health".
    const _perf = { cold: { n: 0, total: 0, max: 0 }, hit: { n: 0, total: 0 } };

    function sanitizeHref(href) {
        if (!href) return href;
        const key = String(href);
        if (key.length > 2048) return sanitizeHrefRaw(href);
        const c = lruGet(key);
        if (c.hit) {
            if (CFG.debug && typeof performance !== "undefined") {
                _perf.hit.n++;
            }
            return c.val;
        }
        let res;
        if (CFG.debug && typeof performance !== "undefined") {
            const t0 = performance.now();
            res = sanitizeHrefRaw(href);
            const us = (performance.now() - t0) * 1000;
            _perf.cold.n++;
            _perf.cold.total += us;
            if (us > _perf.cold.max) _perf.cold.max = us;
        } else {
            res = sanitizeHrefRaw(href);
        }
        lruSet(key, res);
        return res;
    }

    // Strips the active engine's known tracking parameters from a URL object in place.
    // Deduplicated (v2.2.0): stripSERPBar() and the history.pushState wrapper below
    // previously each carried their own copy of this loop.
    function stripEngineSearchParams(u, eng) {
        if (!eng || !eng.s) return false;
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
        return changed;
    }

    let _serpBusy = false;
    function stripSERPBar() {
        // v3.0.0 (#19): per-site profile override, then global default.
        if (!eff("stripSERPParams") || _serpBusy || !isActive()) return;
        const eng = getEngine(location.hostname);
        if (!eng || !eng.s) return;
        try {
            const u = new URL(location.href);
            if (stripEngineSearchParams(u, eng)) {
                _serpBusy = true;
                history.replaceState(history.state, "", u.toString());
                _serpBusy = false;
            }
        } catch (e) {
            _serpBusy = false;
        }
    }

    const GA_COOKIE_RE = /^(_ga|_gid|_gat|_gcl_|_gac_|__utm[a-z]|_gali)/;

    // Hardening (v2.5.0): build domain candidates by walking UP the hostname so
    // parent-domain cookies (e.g. set on ".example.com" while visiting
    // "sub.example.com") are expired too. The browser simply rejects public
    // suffixes (e.g. "co.uk"), so the walk is safe without a suffix list.
    function cookieDomainVariants() {
        const variants = [ "" ];
        const parts = location.hostname.split(".");
        for (let i = 0; i <= parts.length - 2; i++) {
            variants.push(parts.slice(i).join("."));
        }
        return variants;
    }

    function purgeGACookies() {
        if (!CFG.purgeGACookies) return;
        try {
            const cookies = document.cookie.split(";");
            const paths = [ "/", "" ], hosts = cookieDomainVariants();
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
            // Hardening (v2.5.0): mark cookies Secure on secure origins.
            const sec = location.protocol === "https:" ? ";Secure" : "";
            const parts = [ name + "=" + val + exp, "path=/", "SameSite=Lax" + sec ];
            document.cookie = parts.join(";");
            const h = location.hostname;
            document.cookie = name + "=" + val + exp + ";path=/;domain=." + h + ";SameSite=Lax" + sec;
            document.cookie = name + "=" + val + exp + ";path=/;domain=" + h + ";SameSite=Lax" + sec;
        } catch (e) {}
    }

    // Consent selectors, split by trust level (v2.5.0):
    //  - "trusted": already scoped to consent/cookie containers or precise CMP ids.
    //  - "generic": broad patterns that CAN hit ordinary page elements — notably
    //    `a[href*=reject]`, which also matches article URLs like
    //    "/news/mayor-rejects-budget". Clicking those navigated the user away —
    //    a false positive worse than any tracker.
    const CONSENT_SELECTORS = [
        { s: "[id*=consent] button[id*=reject i], [id*=consent] button[id*=decline i], [id*=consent] button[id*=refuse i]", generic: false },
        { s: "[id*=consent] button[class*=reject i], [id*=consent] button[class*=decline i]", generic: false },
        { s: "[class*=consent] button[class*=reject i], [class*=consent] button[class*=decline i]", generic: false },
        { s: "[class*=cookie] button[class*=reject i], [class*=cookie] button[class*=decline i]", generic: false },
        { s: "button#onetrust-reject-all-handler", generic: false },
        { s: "button[data-cy=reject-cookies], button[aria-label*=reject i]", generic: false },
        { s: "a[href*=reject i], button[class*=opt-out i]", generic: true },
        { s: ".sp_choice_type_REJECT_ALL, .sp_choice_type_REJECT", generic: false },
        { s: "[data-testid=reject-cookies], [data-testid=cookie-policy-decline]", generic: false },
        { s: "button.fc-button[aria-label*=consent i]:not(.fc-cta-consent)", generic: false },
        { s: ".cmp-reject, .cookie-reject, #cookie-notice-reject", generic: false },
        { s: ".osano-cm-denyAll, .cm-btn-accept-all + button", generic: false }
    ];

    const CONSENT_SCOPE_RE = /(consent|cookie|gdpr|privacy|cmp|banner|notice)/i;
    // v3.0.0 (#10): multilingual reject wording — the generic consent gate now
    // understands 12 languages instead of English-only.
    const CONSENT_WORD_RE = /(reject|decline|refuse|deny|opt[-\s]?out|necessary only|essentials? only|ablehnen|verweigern|nur notwendige|refuser|rechazar|rifiuta|odrzuć|odrzuc|weigeren|weigern|rejeitar|recusar|رفض|拒否|거부|거절)/i;
    // Negative signal for the classifier: accept-style wording vetoes a click.
    const CONSENT_ACCEPT_RE = /(accept|agree|allow|annehmen|akzeptieren|accepter|aceptar|accetta|zaakceptuj|accepteren|aceitar|موافق|قبول|同意|동의)/i;

    // For generic matches: require (1) a consent-ish ancestor within 6 levels and
    // (2) reject-style wording in the element's own accessible text. Either alone
    // can false-positive ("privacy" footer links, /reject/ article URLs); both
    // together are decisive.
    function looksLikeConsentChoice(el) {
        try {
            let node = el;
            for (let depth = 0; node && depth < 6 && node !== document.documentElement; depth++) {
                const sig = (node.id || "") + " " + (typeof node.className === "string" ? node.className : "") + " " + (node.getAttribute ? (node.getAttribute("role") || "") : "");
                if (CONSENT_SCOPE_RE.test(sig)) return true;
                node = node.parentElement;
            }
        } catch (e) {}
        return false;
    }
    function consentChoiceReads(el) {
        try {
            const t = (el.textContent || "") + " " + (el.getAttribute && el.getAttribute("aria-label") || "") + " " + (el.value || "");
            return CONSENT_WORD_RE.test(t);
        } catch (e) {
            return false;
        }
    }

    // Bug Fix: Use WeakSet to allow auto-reject to run dynamically on re-rendered or multi-step banners
    let _clickedConsents = new WeakSet();
    let _darkPatterns = 0; // v3.0.0 (#25) — report-only dark-pattern counter
    function autoRejectConsent() {
        if (!eff("enforcePrivacyPresets")) return; // v3.0.0 (#19) per-site override
        try {
            for (let i = 0; i < CONSENT_SELECTORS.length; i++) {
                const rule = CONSENT_SELECTORS[i];
                const els = document.querySelectorAll(rule.s);
                for (let j = 0; j < els.length; j++) {
                    const el = els[j];
                    if (_clickedConsents.has(el)) continue;
                    if (el.disabled) continue;
                    if (!(el.offsetParent !== null || el.getClientRects().length > 0)) continue;
                    // Precision gate (v2.5.0) for generic patterns
                    if (rule.generic && !(looksLikeConsentChoice(el) && consentChoiceReads(el))) continue;
                    _clickedConsents.add(el);
                    try {
                        el.click();
                        log("auto-rejected consent banner element:", el);
                    } catch (e) {}
                }
            }
            consentClassifierPass();
            auditConsentDarkPatterns();
        } catch (e) {}
    }

    // v3.0.0 (#10) — scored classifier fallback for CMPs the selector list
    // doesn't know. ONLY buttons are eligible (anchor links can navigate — they
    // are never auto-clicked), and a strict point threshold must be crossed:
    // consent-scoped ancestor (+3), multilingual reject wording (+3), accept
    // wording present (-4 veto), button-like tag/role (+1). Clicks need ≥6.
    function consentClassifierPass() {
        try {
            const cands = document.querySelectorAll("button, [role='button'], input[type='button'], input[type='submit']");
            const cap = Math.min(cands.length, 350);
            for (let i = 0; i < cap; i++) {
                const el = cands[i];
                if (_clickedConsents.has(el)) continue;
                if (el.disabled) continue;
                if (!(el.offsetParent !== null || el.getClientRects().length > 0)) continue;
                const text = (el.textContent || "") + " " + (el.getAttribute && (el.getAttribute("aria-label") || "")) + " " + (el.value || "");
                if (CONSENT_ACCEPT_RE.test(text)) continue; // hard veto
                let score = 0;
                if (looksLikeConsentChoice(el)) score += 3;
                else continue; // scope is mandatory
                if (CONSENT_WORD_RE.test(text)) score += 3;
                else continue; // explicit reject wording is mandatory
                score += 1; // button-shaped interactive element
                if (score < 6) continue;
                _clickedConsents.add(el);
                try {
                    el.click();
                    recordActivity("auto-rejected consent", location.href, "classifier");
                    log("consent classifier rejected banner element:", el);
                } catch (e) {}
            }
        } catch (e) {}
    }

    // v3.0.0 (#25) — dark-pattern auditor, REPORT-ONLY by design: counts
    // banners with pre-ticked boxes or no visible reject path. Surfaces a stat;
    // never interacts.
    function auditConsentDarkPatterns() {
        if (!CFG.statistics) return;
        try {
            const boxes = document.querySelectorAll("[id*=consent i], [class*=consent i], [id*=cookie i], [class*=cookie i], [role=dialog]");
            const cap = Math.min(boxes.length, 40);
            for (let i = 0; i < cap; i++) {
                const box = boxes[i];
                if (box.__ntDarkAudited) continue;
                box.__ntDarkAudited = true;
                if (!(box.offsetParent !== null || box.getClientRects().length > 0)) continue;
                let dark = false;
                const cks = box.querySelectorAll("input[type='checkbox']:checked");
                if (cks.length > 0) dark = true; // pre-ticked consent
                const hasAccept = /(accept|agree|allow|alle)/i.test(box.textContent || "");
                const hasReject = CONSENT_WORD_RE.test(box.textContent || "");
                if (hasAccept && !hasReject) dark = true; // no visible refuse path
                if (dark) _darkPatterns++;
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
            // Bug Fix (v2.2.0): the four rules below used double-escaped dots ("\\."),
            // which match a literal backslash + any char — never a hostname dot —
            // so the Twitter/X, TikTok, Spotify and LinkedIn presets never fired.
            if (/(^|\.)(twitter|x)\.com$/.test(h)) {
                setCookie("personalization_id", "", -1);
            }
            if (/(^|\.)facebook\.com$/.test(h)) {
                setCookie("dpr", "1", 365);
                setCookie("wd", "1280x720", 365);
            }
            if (/(^|\.)tiktok\.com$/.test(h)) {
                setCookie("tt_cs_1", "", -1);
            }
            if (/(^|\.)amazon\.[a-z.]+$/.test(h)) {
                setCookie("ad-id", "", -1);
            }
            if (/(^|\.)(spotify)\.com$/.test(h)) {
                setCookie("sp_t", "", -1);
            }
            if (/(^|\.)(linkedin)\.com$/.test(h)) {
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
        // Deduplicated (v2.4.0): both listeners were the same 10-line handler.
        // auxclick additionally guards on middle-button so right-click menu
        // actions aren't disturbed unnecessarily.
        function neutralizeIPLoggerClick(e) {
            if (e.type === "auxclick" && e.button !== 1) return;
            const el = findAnchor(e.target);
            if (el && el.href && isIPLogger(el.href)) {
                e.preventDefault();
                e.stopPropagation();
                el.setAttribute("data-nt-blocked-iplogger", "true");
                bumpStats(0, 1);
                log("blocked IP-logger navigation:", el.href);
            }
        }
        document.addEventListener("click", neutralizeIPLoggerClick, true);
        document.addEventListener("auxclick", neutralizeIPLoggerClick, true);
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

    // Advanced, CSP-Proof, Camouflaged Main World Bootstrapper
    function ntMainWorldBoot(win) {
        "use strict";
        win = win || window;
        // Idempotency guard (v2.2.0): this bootstrapper previously ran 2–3 times per
        // page (script-tag injection + direct unsafeWindow call + nonce retry path),
        // stacking duplicate wrappers on fetch / XHR / sendBeacon / href and doubling
        // per-call overhead on hot page APIs. Mark the realm and bail on re-entry.
        // If the marker cannot be defined we still boot — protection beats idempotency.
        try {
            if (win.__ntMWBooted) return;
            Object.defineProperty(win, "__ntMWBooted", { configurable: true, value: true });
        } catch (e) {}
        const doc = win.document;
        const nav = win.navigator;
        const ElementProto = win.Element.prototype;
        const HTMLAnchorElementProto = win.HTMLAnchorElement.prototype;
        const HTMLImageElementProto = win.HTMLImageElement.prototype;
        const XMLHttpRequestProto = win.XMLHttpRequest.prototype;
        const WebSocketRef = win.WebSocket;
        const EventSourceRef = win.EventSource;
        const NavigatorProto = win.Navigator.prototype;

        let cfg = {
            active: true,
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
        // Perf Fix (v2.4.0): steady-state memoization. loadCfg() previously ran a
        // getElementById + attribute read on EVERY intercepted fetch / beacon /
        // XHR open / href assignment (i.e. hundreds of DOM queries per page).
        // The "nt:cfg" event already signals changes, so in between changes we
        // skip the DOM entirely. Stays dirty while the meta tag is absent so the
        // document-start race (boot before pushConfigToPage) still resolves.
        let _cfgDirty = true;

        function loadCfg() {
            if (!_cfgDirty) return;
            try {
                const m = doc.getElementById("nt-config");
                if (!m) return; // keep dirty — config meta not injected yet
                const raw = m.getAttribute("content");
                if (raw && raw !== _rawCfg) {
                    _rawCfg = raw;
                    const j = JSON.parse(decodeURIComponent(escape(atob(raw))));
                    if (j) cfg = j;
                }
                _cfgDirty = false;
            } catch (e) {}
        }
        loadCfg();

        doc.addEventListener("nt:cfg", function() {
            // Config changed in the content world: invalidate and reload.
            _cfgDirty = true;
            _rawCfg = null;
            loadCfg();
        }, true);

        // v3.0.0 (#28): content world signals a BFCache restore — any one-shot
        // navigation latches from the PREVIOUS visit must re-arm.
        doc.addEventListener("nt:bfcache", function() {
            try {
                _navigatedMW = false;
            } catch (e) {}
        }, true);

        const GRE = /\.google\.(?:[a-z]{2,3})(?:\.[a-z]{2})?$/;
        function isG(h) {
            return h === "www.google.com" || h === "google.com" || GRE.test(h);
        }

        function policy() {
            loadCfg();
            if (!cfg.active) return ""; // disabled on this site — no referrer overrides (v2.4.0)
            return cfg.forceNoReferrer ? (cfg.referrerPolicy === "no-referrer" ? "no-referrer" : "origin") : "";
        }

        function safeAtob(s) {
            try { return win.atob(s); } catch (e) { return null; }
        }

        function safeDec(s) {
            try { return decodeURIComponent(s); } catch (e) { return s; }
        }

        function realGoogle(a) {
            if (a.protocol !== "https:" && a.protocol !== "http:") return null;
            let url;
            if ((isG(a.hostname) || a.hostname === win.location.hostname) && (a.pathname === "/url" || a.pathname === "/local_url" || a.pathname === "/searchurl/rr.html" || a.pathname === "/linkredirect" || a.pathname === "/interstitial")) {
                if (url = /[?&](?:q|url|dest|imgurl|continue)=((?:https?|ftp)[%:][^&]+)/.exec(a.search)) return safeDec(url[1]);
                if (url = /[?&](?:q|url|dest|continue)=((?:%2[Ff]|\/)[^&]+)/.exec(a.search)) return a.origin + safeDec(url[1]);
                if (url = /[#&]url=(https?[:%][^&]+)/.exec(a.hash)) return safeDec(url[1]);
            }
            if (a.hostname === "googleweblight.com" && (a.pathname === "/fp" || a.pathname === "/i" || a.pathname === "/lite")) {
                if (url = /[?&]u=((?:https?|ftp)[%:][^&]+)/.exec(a.search)) return safeDec(url[1]);
            }
            if (a.hostname.indexOf("googleadservices") > -1 && a.pathname === "/pagead/aclk") {
                if (url = /[?&](?:adurl|dest)=((?:https?)[%:][^&]+)/.exec(a.search)) return safeDec(url[1]);
            }
            return null;
        }

        function realBing(a) {
            if (!/(?:^|\.)(?:bing\.com|ecosia\.org)$/i.test(a.hostname)) return null;
            if (a.pathname !== "/ck/a" && a.pathname !== "/ck/d") return null;
            const m = /[?&]u=([A-Za-z0-9_+/=\-]*)/.exec(a.search);
            if (!m) return null;
            let core = m[1].replace(/^[a-z][0-9]/i, "").replace(/-/g, "+").replace(/_/g, "/");
            while (core.length % 4) core += "=";
            const d = safeAtob(core);
            return d && /^https?:\/\//i.test(d) ? d : null;
        }

        function realYahoo(a) {
            if (!/(?:^|\.)search\.yahoo\./i.test(a.hostname)) return null;
            const comb = (a.pathname || "") + (a.search || "");
            const m = /\/RU=(.+?)(?=\/[A-Za-z]{1,2}=|$)/i.exec(comb);
            if (!m) return null;
            const d = safeDec(m[1]);
            return d && /^https?:\/\//i.test(d) ? d.replace(/\/{3,}$/, "/") : null;
        }

        function realDDG(a) {
            if (!/(?:^|\.)duckduckgo\.com$/i.test(a.hostname) || a.pathname !== "/l/") return null;
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
                const u = new URL(link.trim(), win.location.href);
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
            loadCfg(); // memoized — near-free after first load (v2.4.0)
            if (!cfg.active) return null; // disabled on this site — no rewriting (v2.4.0)
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

        // Camouflaged toString mapping to bypass anti-userscript / fingerprint checkers
        const camouflageMap = new WeakMap();
        const nativeToString = win.Function.prototype.toString;
        function camouflage(proxiedFn, nativeFn) {
            try {
                camouflageMap.set(proxiedFn, nativeToString.call(nativeFn));
            } catch (e) {}
        }

        try {
            Object.defineProperty(win.Function.prototype, "toString", {
                configurable: true,
                writable: true,
                value: function() {
                    if (camouflageMap.has(this)) return camouflageMap.get(this);
                    return nativeToString.call(this);
                }
            });
        } catch (e) {}

        // Set up universal DNT (Do Not Track) and GPC (Global Privacy Control)
        try {
            Object.defineProperty(NavigatorProto, "globalPrivacyControl", {
                configurable: true,
                enumerable: true,
                get: () => true
            });
            Object.defineProperty(NavigatorProto, "doNotTrack", {
                configurable: true,
                enumerable: true,
                get: () => "1"
            });
        } catch (e) {}

        // Active Telemetry & Ad Fingerprint Poisoner (Generates bogus tracking attributes)
        try {
            // 1. Battery status poisoner (Injects random realistic values)
            if (nav.getBattery) {
                const originalGetBattery = nav.getBattery;
                const fakeBattery = function() {
                    return Promise.resolve({
                        charging: Math.random() > 0.5,
                        chargingTime: 0,
                        dischargingTime: Infinity,
                        level: 0.4 + Math.random() * 0.5,
                        onchargingchange: null,
                        onchargingtimechange: null,
                        ondischargingtimechange: null,
                        onlevelchange: null,
                        addEventListener: () => {},
                        removeEventListener: () => {},
                        dispatchEvent: () => true
                    });
                };
                nav.getBattery = fakeBattery;
                camouflage(fakeBattery, originalGetBattery);
            }

            // 2. Canvas fingerprint poisoner (Injects sub-perceptual noise into image readbacks)
            const originalGetImageData = win.CanvasRenderingContext2D.prototype.getImageData;
            const fakeGetImageData = function(sx, sy, sw, sh) {
                const imgData = originalGetImageData.apply(this, arguments);
                const data = imgData.data;
                // Add noise exclusively to fingerprinting contexts (typically small flat pixel reads under 20x20)
                if (sw <= 20 && sh <= 20) {
                    for (let i = 0; i < data.length; i += 4) {
                        data[i] = Math.min(255, Math.max(0, data[i] + (Math.random() > 0.5 ? 1 : -1)));
                        data[i+1] = Math.min(255, Math.max(0, data[i+1] + (Math.random() > 0.5 ? 1 : -1)));
                        data[i+2] = Math.min(255, Math.max(0, data[i+2] + (Math.random() > 0.5 ? 1 : -1)));
                    }
                }
                return imgData;
            };
            win.CanvasRenderingContext2D.prototype.getImageData = fakeGetImageData;
            camouflage(fakeGetImageData, originalGetImageData);
        } catch (e) {}

        // Anchor overrides
        try {
            const hp = Object.getOwnPropertyDescriptor(HTMLAnchorElementProto, "href");
            if (hp && hp.get && hp.set) {
                const hget = Function.prototype.call.bind(hp.get);
                const hset = Function.prototype.call.bind(hp.set);
                const fakeHrefDescriptor = {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        const origAttr = this.getAttribute("data-nt-orig-href");
                        if (origAttr) return origAttr;
                        if (this._nt_orig) return this._nt_orig;
                        return hget(this);
                    },
                    set: function(v) {
                        this._nt_orig = String(v);
                        // Bug Fix (v2.2.0): any fresh assignment invalidates the stored
                        // original-href marker. Without this, a page re-assigning href on
                        // an anchor NullTrail had cleaned earlier would keep seeing (and
                        // getting) the STALE original URL from a previous destination.
                        // The content world re-sets the marker right after its own assigns.
                        try { this.removeAttribute("data-nt-orig-href"); } catch (e) {}
                        let target = v;
                        try {
                            // Bug Fix (v2.2.0): resolve the value BEING ASSIGNED. The old
                            // code inspected the element's *current* href, which is stale
                            // at assignment time and could overwrite the new value with a
                            // redirect extracted from the old one.
                            const assignUrl = new win.URL(String(v), win.location.href);
                            const r = realLink(assignUrl);
                            if (r) target = r;
                        } catch (e) {}
                        hset(this, target);
                        updateRP(this);
                    }
                };
                camouflage(fakeHrefDescriptor.get, hp.get);
                camouflage(fakeHrefDescriptor.set, hp.set);
                Object.defineProperty(HTMLAnchorElementProto, "href", fakeHrefDescriptor);
            }
            
            const origGetAttr = ElementProto.getAttribute;
            const fakeGetAttribute = function(name) {
                const ln = String(name).toLowerCase();
                if (ln === "href" && this.tagName === "A") {
                    const origAttr = origGetAttr.call(this, "data-nt-orig-href");
                    if (origAttr) return origAttr;
                    if (this._nt_orig_attr) return this._nt_orig_attr;
                    if (this._nt_orig) return this._nt_orig;
                }
                return origGetAttr.apply(this, arguments);
            };
            ElementProto.getAttribute = fakeGetAttribute;
            camouflage(fakeGetAttribute, origGetAttr);

            const origSetAttr = ElementProto.setAttribute;
            const fakeSetAttribute = function(name, val) {
                const ln = String(name).toLowerCase();
                if (ln === "href" && this.tagName === "A") {
                    this._nt_orig_attr = String(val);
                    if (this.href !== undefined) {
                        this.href = val;
                    } else {
                        origSetAttr.call(this, "href", val);
                    }
                } else {
                    origSetAttr.apply(this, arguments);
                }
            };
            ElementProto.setAttribute = fakeSetAttribute;
            camouflage(fakeSetAttribute, origSetAttr);
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

        killRwt(win);
        if (win.google) killRwt(win.google);
        let gi = 0;
        const gt = win.setInterval(function() {
            if (win.google) killRwt(win.google);
            if (++gi > 30) win.clearInterval(gt);
        }, 250);

        let _navigatedMW = false;
        function navigateMW(target) {
            if (_navigatedMW || !isGoodLinkMW(target)) return false;
            try { win.onbeforeunload = null; } catch (e) {}
            _navigatedMW = true;
            try { win.location.assign(target); } catch (e) {}
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
            try { r = win.atob(r); } catch (e) { return null; }
            r = r.substring(r.length - (r.length - 16));
            r = r.substring(0, r.length - 16);
            return r;
        }

        let _ysmmSeen = false;
        try {
            Object.defineProperty(win, "ysmm", {
                configurable: true,
                set: function(r) {
                    if (typeof r !== "string" || _ysmmSeen) return;
                    _ysmmSeen = true;
                    const dest = decodeAdflyYsmm(r);
                    if (dest && /^https?:\/\//i.test(dest)) navigateMW(dest);
                },
                // Bug Fix (v2.5.0): returned the STRING "undefined" — adfly-style
                // anti-adblock checks (`typeof ysmm`) saw "string", exposing us.
                get: () => undefined
            });
        } catch (e) {}

        try {
            const _safelinkForced = { counter: 0, adblock: false, click2x: false };
            Object.defineProperty(win, "safelink", {
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
            Object.defineProperty(win, "soralink", {
                configurable: true,
                get: () => ({})
            });
        } catch (e) {}

        try {
            Object.defineProperty(win, "adtival_base64_encode", {
                configurable: true,
                get: () => undefined
            });
        } catch (e) {}

        try {
            const _downloadBtnNav = a => {
                if (a && a.href && isGoodLinkMW(a.href)) navigateMW(a.href);
            };
            Object.defineProperty(win, "downloadButton", {
                configurable: true,
                set: a => { _downloadBtnNav(a); },
                get: () => null
            });
        } catch (e) {}

        try {
            if (win.location.href.indexOf("?r=") !== -1) {
                const m = /[?&]r=([^&]+)/.exec(win.location.search);
                if (m) {
                    const r = safeDec(m[1]);
                    const d = safeAtob(r);
                    if (d && /^https?:\/\//i.test(d) && isGoodLinkMW(d)) navigateMW(d);
                }
            }
            if (win.location.href.indexOf("?dest=") !== -1 || win.location.href.indexOf("&dest=") !== -1) {
                const md = /[?&]dest=([^&]+)/.exec(win.location.search);
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
            if (!cfg.active) return false; // whitelist / global pause disables blocking (v2.4.0)
            if (!url) return false;
            const s = String(url);
            if (cfg.google && cfg.blockGA && GA.test(s)) return "ga";
            if (cfg.blockIPLoggers) {
                try {
                    const h = new URL(s, win.location.origin).hostname.toLowerCase();
                    if (IP_LOG_MW_RE.test(h)) return "iplogger";
                } catch (e) {}
            }
            return false;
        }

        // Consolidated Hook 1: Navigator.prototype.sendBeacon
        try {
            const sb = NavigatorProto.sendBeacon;
            if (sb) {
                const sba = Function.prototype.apply.bind(sb);
                const isTrack = RegExp.prototype.test.bind(/^(?:(?:https?:\/\/[^\/]+)?\/)?gen_204(?:[?#]|$)/);
                const fakeSendBeacon = function(u) {
                    try {
                        loadCfg();
                        if (isTrack(u) && cfg.noping) return true;
                        if (shouldBlock(u)) return true;
                    } catch (e) {}
                    return sba(this, arguments);
                };
                NavigatorProto.sendBeacon = fakeSendBeacon;
                camouflage(fakeSendBeacon, sb);
            }
        } catch (e) {}

        // Consolidated Hook 2: window.fetch
        try {
            const f = win.fetch;
            if (f) {
                const fa = Function.prototype.apply.bind(f);
                const fakeFetch = function(input, opts) {
                    try {
                        loadCfg();
                        const u = typeof input === "string" ? input : (input && input.url ? input.url : "");
                        if (shouldBlock(u)) {
                            return Promise.resolve(new Response("", { status: 204 }));
                        }
                        if (cfg.blockKeepalive) {
                            // Bug Fix (v2.4.0): Request.keepalive is READ-ONLY — the
                            // old code's `input.keepalive = false` silently no-opped,
                            // so keepalive was never stripped from Request objects.
                            // Rebuild the Request with keepalive:false instead.
                            try {
                                if (opts && opts.keepalive) {
                                    opts.keepalive = false;
                                } else if (input && typeof input === "object" && input.keepalive) {
                                    input = new win.Request(input, { keepalive: false });
                                }
                            } catch (e) {}
                        }
                    } catch (e) {}
                    return fa(this, [ input, opts ]);
                };
                win.fetch = fakeFetch;
                camouflage(fakeFetch, f);
            }
        } catch (e) {}

        // Consolidated Hook 3: XMLHttpRequest (Unified & Clean Async mocking)
        try {
            const xo = XMLHttpRequestProto.open;
            const xs = XMLHttpRequestProto.send;
            const blockMap = new WeakMap();

            const fakeXHRopen = function(m, u) {
                try {
                    loadCfg();
                    blockMap.set(this, !!shouldBlock(u));
                } catch (e) {}
                return xo.apply(this, arguments);
            };
            XMLHttpRequestProto.open = fakeXHRopen;
            camouflage(fakeXHRopen, xo);

            const fakeXHRsend = function() {
                if (blockMap.get(this) === true) {
                    const self = this;
                    win.setTimeout(() => {
                        try {
                            Object.defineProperties(self, {
                                readyState: { configurable: true, get: () => 4 },
                                status: { configurable: true, get: () => 204 },
                                // Hardening (v2.5.0): complete the response surface —
                                // statusText/responseURL readers previously saw native
                                // defaults from an unsent request ("", 0, etc), which
                                // code paths keying on them could mis-handle.
                                statusText: { configurable: true, get: () => "No Content" },
                                responseURL: { configurable: true, get: () => "" },
                                responseText: { configurable: true, get: () => "" },
                                response: { configurable: true, get: () => "" }
                            });
                            if (typeof self.onreadystatechange === "function") self.onreadystatechange();
                            self.dispatchEvent(new Event("readystatechange"));
                            self.dispatchEvent(new Event("load"));
                            if (typeof self.onload === "function") self.onload();
                            // Bug Fix (v2.4.0): libraries awaiting "loadend" never
                            // resolved — it wasn't dispatched for blocked XHRs.
                            self.dispatchEvent(new Event("loadend"));
                            if (typeof self.onloadend === "function") self.onloadend();
                        } catch (e) {}
                    }, 0);
                    return;
                }
                return xs.apply(this, arguments);
            };
            XMLHttpRequestProto.send = fakeXHRsend;
            camouflage(fakeXHRsend, xs);
        } catch (e) {}

        // Consolidated Hook 4: HTMLImageElement.prototype.src
        try {
            const ip = Object.getOwnPropertyDescriptor(HTMLImageElementProto, "src");
            if (ip && ip.set) {
                const ig = Function.prototype.call.bind(ip.get);
                const is = Function.prototype.call.bind(ip.set);
                const fakeImageSrcDescriptor = {
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
                };
                camouflage(fakeImageSrcDescriptor.get, ip.get);
                camouflage(fakeImageSrcDescriptor.set, ip.set);
                Object.defineProperty(HTMLImageElementProto, "src", fakeImageSrcDescriptor);
            }
        } catch (e) {}

        // Consolidated Hook 5: EventSource proxy
        try {
            if (EventSourceRef) {
                const fakeEventSource = new Proxy(EventSourceRef, {
                    construct: function(T, args) {
                        loadCfg();
                        if (args[0] && shouldBlock(args[0])) {
                            const d = Object.create(T.prototype);
                            Object.defineProperty(d, "readyState", { get: () => 2 });
                            Object.defineProperty(d, "url", { get: () => String(args[0]) });
                            d.close = () => {};
                            // Robustness (v2.6.0): inherited EventTarget methods
                            // require a real EventSource internal slot and throw
                            // "Illegal invocation" on this shell — stub them so a
                            // site attaching handlers to a blocked stream survives.
                            d.addEventListener = () => {};
                            d.removeEventListener = () => {};
                            d.dispatchEvent = () => true;
                            d.onopen = d.onmessage = d.onerror = null;
                            return d;
                        }
                        return Reflect.construct(T, args);
                    }
                });
                camouflage(fakeEventSource, EventSourceRef);
                win.EventSource = fakeEventSource;
            }
        } catch (e) {}

        // Consolidated Hook 6: window.open
        try {
            const ow = win.open;
            const fakeOpen = function(url, name, features) {
                const blank = !url || url === "about:blank";
                try {
                    if (!blank) {
                        const a = doc.createElement("a");
                        a.href = url;
                        const r = realLink(a);
                        if (r) a.href = r;
                        url = a.href;
                        if (policy() && a.origin !== win.location.origin && !isG(a.hostname) && !/\b(?:opener|noreferrer)\b/.test(features || "")) {
                            features = (features ? features + "," : "") + "noreferrer";
                        }
                    }
                } catch (e) {}
                const winRef = ow.call(this, url, name, features);
                try {
                    if (blank && winRef) {
                        const dw = winRef.Function.prototype.call.bind(winRef.document.write);
                        winRef.document.write = function(html) {
                            try { html = fixMeta(html); } catch (e) {}
                            return dw(this, html);
                        };
                    }
                } catch (e) {}
                return winRef;
            };
            win.open = fakeOpen;
            camouflage(fakeOpen, ow);

            function fixMeta(html) {
                html = String(html || "");
                return html.replace(/<meta[^>]*http-equiv=(["']?)refresh\1[^>]*>/i, function(m) {
                    const documentParser = new DOMParser();
                    const parsedDoc = documentParser.parseFromString(m, "text/html");
                    const meta = parsedDoc.querySelector("meta[http-equiv=refresh]");
                    if (!meta) return m;
                    const parts = /^(\d*\s*;\s*url=)(.+)$/i.exec(meta.content);
                    if (!parts) return m;
                    const a = doc.createElement("a");
                    a.href = parts[2];
                    const r = realLink(a);
                    if (r) a.href = r;
                    meta.content = parts[1] + a.href;
                    return meta.outerHTML;
                });
            }
        } catch (e) {}

        // Consolidated Hook 7: WebSocket proxy
        try {
            if (WebSocketRef) {
                const fakeWebSocket = new Proxy(WebSocketRef, {
                    construct: function(T, args) {
                        loadCfg();
                        if (args[0] && shouldBlock(args[0]) === "iplogger") {
                            // Robustness (v2.6.0): was a bare {} — a page calling
                            // addEventListener/send/close on its "socket" crashed.
                            return {
                                readyState: 3, // CLOSED
                                bufferedAmount: 0,
                                extensions: "",
                                protocol: "",
                                url: String(args[0]),
                                binaryType: "blob",
                                onopen: null, onmessage: null, onerror: null, onclose: null,
                                send: () => {},
                                close: () => {},
                                addEventListener: () => {},
                                removeEventListener: () => {},
                                dispatchEvent: () => true
                            };
                        }
                        return Reflect.construct(T, args);
                    }
                });
                camouflage(fakeWebSocket, WebSocketRef);
                win.WebSocket = fakeWebSocket;
            }
        } catch (e) {}

        // Consolidated Hook 8: Privacy Sandbox API mocking
        if (cfg.blockPrivacySandbox) {
            try {
                const privFn = () => Promise.resolve([]);
                if (doc.browsingTopics) {
                    try { Object.defineProperty(doc, "browsingTopics", { configurable: true, writable: true, value: privFn }); } catch (e) {}
                }
                if (doc.interestCohort) {
                    try { Object.defineProperty(doc, "interestCohort", { configurable: true, writable: true, value: privFn }); } catch (e) {}
                }
                const joinAd = () => Promise.resolve();
                [ "joinAdInterestGroup", "leaveAdInterestGroup", "runAdAuction", "updateAdInterestGroups", "createAuctionNonce" ].forEach(fn => {
                    try {
                        if (win.navigator[fn]) {
                            Object.defineProperty(win.navigator, fn, { configurable: true, writable: true, value: joinAd });
                        }
                    } catch (e) {}
                });
                try {
                    const wm = Object.getOwnPropertyDescriptor(win, "sharedStorage");
                    if (wm) {
                        Object.defineProperty(win, "sharedStorage", {
                            configurable: true,
                            get: () => undefined,
                            set: () => {}
                        });
                    }
                } catch (e) {}
            } catch (e) {}
        }

        // v3.0.0 (#7) — Consolidated Hook 9: JS-driven navigation unwrap.
        // Anchor/pushState/window.open were already covered; a page calling
        // location.assign("https://google.com/url?q=…") was not. Same
        // destination-preserving unwrap — the hop is skipped, never altered.
        try {
            const unwrapDest = function(u) {
                try {
                    loadCfg();
                    if (!cfg.active) return u;
                    const url = new win.URL(String(u), win.location.href);
                    const r = realLink(url);
                    return r || u;
                } catch (e) {
                    return u;
                }
            };
            const loc = win.location;
            if (loc) {
                [ "assign", "replace" ].forEach(fn => {
                    try {
                        const orig = loc[fn];
                        if (typeof orig !== "function") return;
                        const bound = orig.bind(loc);
                        const fake = function(u) {
                            return bound(unwrapDest(u));
                        };
                        camouflage(fake, orig);
                        loc[fn] = fake;
                    } catch (e) {}
                });
                // Location.href setter — [Unforgeable] in Blink, so this is
                // best-effort and silently skipped where locked.
                try {
                    const locProto = Object.getPrototypeOf(loc);
                    const hd = Object.getOwnPropertyDescriptor(locProto, "href");
                    if (hd && hd.set && hd.configurable !== false) {
                        Object.defineProperty(locProto, "href", {
                            configurable: true,
                            enumerable: hd.enumerable,
                            get: hd.get,
                            set: function(v) {
                                return hd.set.call(this, unwrapDest(v));
                            }
                        });
                    }
                } catch (e) {}
            }
        } catch (e) {}

        // v3.0.0 (#9) — Consolidated Hook 10: tracker-respawn watcher. After
        // NullTrail purges tracker storage, sites often re-create the keys at
        // once. Default: count attempts (surfaced in Stats). respawnStrict
        // (opt-in): drop tracker writes at the source.
        try {
            if (typeof win.__ntRespawns !== "number") win.__ntRespawns = 0;
            const getTRE = function() {
                try {
                    return cfg.trackerRe ? new RegExp(cfg.trackerRe, "i") : null;
                } catch (e) {
                    return null;
                }
            };
            const sset = win.Storage && win.Storage.prototype && win.Storage.prototype.setItem;
            if (sset) {
                const fakeSetItem = function(k, v) {
                    try {
                        const tre = getTRE();
                        if (tre && tre.test(String(k))) {
                            win.__ntRespawns++;
                            loadCfg();
                            if (cfg.respawnStrict) return; // dropped at source
                        }
                    } catch (e) {}
                    return sset.apply(this, arguments);
                };
                win.Storage.prototype.setItem = fakeSetItem;
                camouflage(fakeSetItem, sset);
            }
            const cookieDesc = Object.getOwnPropertyDescriptor(win.Document.prototype, "cookie");
            if (cookieDesc && cookieDesc.set && cookieDesc.configurable !== false) {
                Object.defineProperty(win.Document.prototype, "cookie", {
                    configurable: true,
                    enumerable: cookieDesc.enumerable,
                    get: cookieDesc.get,
                    set: function(v) {
                        try {
                            const tre = getTRE();
                            if (tre) {
                                const name = String(v).split("=")[0].trim();
                                if (tre.test(name)) {
                                    win.__ntRespawns++;
                                    loadCfg();
                                    if (cfg.respawnStrict) return;
                                }
                            }
                        } catch (e) {}
                        return cookieDesc.set.call(this, v);
                    }
                });
            }
        } catch (e) {}

        // v3.0.0 (#12) — Consolidated Hook 11: open shadow-root registry.
        // MutationObservers cannot see inside shadow trees; register OPEN roots
        // (closed ones stay a hard privacy boundary — our own dashboard uses
        // one) so the content world can observe and clean them.
        try {
            const asFn = ElementProto.attachShadow;
            if (asFn) {
                const fakeAttachShadow = function(init) {
                    const root = asFn.call(this, init);
                    try {
                        if (init && init.mode === "open") {
                            const bag = win.__ntShadowRoots || (win.__ntShadowRoots = []);
                            if (bag.length < 50) bag.push(root);
                        }
                    } catch (e) {}
                    return root;
                };
                win.Element.prototype.attachShadow = fakeAttachShadow;
                camouflage(fakeAttachShadow, asFn);
            }
        } catch (e) {}
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
                // Bug Fix (v2.4.0): include the site's active flag so whitelisting
                // truly disables main-world protections too (they previously kept
                // blocking beacons/XHR/fetch and forcing referrer policy).
                active: isActive(),
                forceNoReferrer: CFG.forceNoReferrer,
                referrerPolicy: CFG.referrerPolicy,
                noping: CFG.noping,
                google: isGoogleHost(location.hostname),
                blockGA: CFG.blockGA,
                blockPrivacySandbox: CFG.blockPrivacySandbox,
                blockKeepalive: CFG.blockKeepalive,
                blockIPLoggers: CFG.blockIPLoggers,
                unblockContextMenu: isSiteContextMenuUnblocked(),
                unblockTextSelection: isSiteTextSelectionUnblocked(),
                // v3.0.0 (#9): respawn watcher config
                respawnStrict: !!CFG.respawnStrict,
                trackerRe: TRACKER_STORAGE_RE.source
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
        // Perf Fix (v2.2.0): PROCESSED is now an href memo instead of dead code.
        // MutationObservers re-queue the same node repeatedly (childList + attribute
        // records); without this memo every re-queue re-ran the full sanitize and
        // attribute sweep even when the href was unchanged.
        const hrefNow = el.href;
        if (PROCESSED.get(el) === hrefNow) return;
        LOCK.add(el);
        try {
            if (isIPLogger(el.href)) {
                el.setAttribute("data-nt-iplogger", "true");
                el.removeAttribute("ping");
                el.removeAttribute("onmousedown");
                applyRP(el);
                PROCESSED.set(el, hrefNow);
                recordActivity("flagged IP-logger", el.href, "IP_LOGGERS");
                return;
            }
            if (CFG.noping && el.hasAttribute && el.hasAttribute("ping")) el.removeAttribute("ping");
            const md = el.getAttribute && el.getAttribute("onmousedown");
            if (md && RWT_CALL_RE.test(md)) {
                el.removeAttribute("onmousedown");
                el.removeAttribute("ping");
            }
            const orig = el.href;
            // Robustness (v2.6.0): sanitize runs regex/provider machinery — keep
            // any residual throw from escaping into page event handlers.
            let cleaned = null;
            try {
                cleaned = sanitizeHref(orig);
            } catch (e) {
                log("sanitizeHref failed", e);
            }
            const didChange = cleaned && cleaned !== orig;
            // v3.0.0 (#17) — per-site dry-run: classify & count everything,
            // rewrite nothing. Builds trust before the user goes live on a site.
            if (didChange && isSiteDryRun()) {
                recordActivity("dry-run: would clean", orig, "sanitizeHref");
                _pageCount++;
                if (CFG.showHUD) updateHUD();
                PROCESSED.set(el, hrefNow);
                removeTrackAttrs(el);
                applyRP(el);
                return;
            }
            if (didChange) {
                recordActivity("cleaned", cleaned, "sanitizeHref");
                try {
                    // Critical Compatibility Mitigation: store the original href in
                    // data-nt-orig-href so website JS still sees what it expects.
                    // Order matters (v2.2.0): the main-world href setter now clears this
                    // marker on every assignment, so the marker must be (re)applied AFTER
                    // assigning the cleaned URL.
                    el.href = cleaned;
                    el.setAttribute("data-nt-orig-href", orig);
                } catch (e) {}
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
            // v3.0.0 (#29): shed this expensive pass when the queue is deep.
            if (!_shedMode) cleanDataset(el);
            PROCESSED.set(el, hrefNow);
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

    // NOTE (v2.3.0): the speculative hover warmup (dns-prefetch + preconnect) was
    // REMOVED, not just optimized. Any connection opened before the user actually
    // clicks is wasted bandwidth on links they never visit — unacceptable on
    // metered/limited networks. NullTrail now guarantees ZERO speculative traffic:
    // bytes only flow after a deliberate user action (click, or an explicit opt-in
    // feature below).

    // Advanced Multi-Hop Redirect Resolver (Server-Side Bypassing via GM HEAD checks)
    // Bug Fix (v2.2.0): the original implementation was triple-broken —
    //   1. `maxRedirects: 0` is not a supported GM_xmlhttpRequest option in
    //      Tampermonkey/Violentmonkey, so redirect chains were silently followed;
    //   2. `response.headers` does not exist — GM exposes `responseHeaders` as a
    //      raw STRING, so reading `headers["location"]` always yielded undefined;
    //   3. there was no guard for GM_xmlhttpRequest being unavailable.
    // It is now opt-in (serverRedirectResolution), detects the redirect via
    // response.finalUrl, and parses responseHeaders correctly as a fallback.
    const RESOLVED_MAP = new WeakMap();
    const REDIRECT_HINT_RE = /(?:[?&](?:url|u|q|dest|target|to|redir)=|\/(?:ck|redirect|go|out|away|l)\b)/i;
    // Hard per-page budget so even an opted-in user on an infinite SERP can't
    // generate unbounded hover traffic.
    const BG_RESOLVE_PAGE_CAP = 25;
    let _bgResolveCount = 0;
    function preResolveServerRedirect(el) {
        // v3.0.0 (#19): per-site profile override (e.g. resolve ONLY on SERPs).
        if (!eff("serverRedirectResolution")) return;
        // Metered gate (v2.3.0): never spend hover traffic on metered/data-saver links.
        if (!backgroundDataAllowed()) return;
        if (typeof GM_xmlhttpRequest !== "function") return;
        if (!el || !el.href || RESOLVED_MAP.has(el) || el._nt_resolving) return;
        if (_bgResolveCount >= BG_RESOLVE_PAGE_CAP) return;
        // Precision gate: only hover-resolve links that still LOOK like redirect
        // wrappers. Plain destination links were already unwrapped by cleanAnchor;
        // HEAD-requesting them would leak hover intent to every site on the SERP.
        if (!REDIRECT_HINT_RE.test(el.href)) return;
        _bgResolveCount++;
        el._nt_resolving = true;

        GM_xmlhttpRequest({
            method: "HEAD",
            url: el.href,
            anonymous: true, // Strips cookies to prevent tracking
            // Bug Fix (v2.6.0): no timeout previously — a hung HEAD request kept
            // el._nt_resolving latched forever and permanently consumed one of
            // the 25-per-page budget slots.
            timeout: 10000,
            ontimeout: function() {
                el._nt_resolving = false;
            },
            onload: function(response) {
                try {
                    let target = null;
                    // Tampermonkey/Violentmonkey follow redirects and expose the final URL.
                    if (response.finalUrl && response.finalUrl !== el.href && /^https?:/i.test(response.finalUrl)) {
                        target = response.finalUrl;
                    } else if (response.status >= 300 && response.status < 400) {
                        const loc = /(?:^|[\r\n])location:\s*(\S+)/i.exec(String(response.responseHeaders || ""));
                        if (loc) target = new URL(loc[1], el.href).toString();
                    }
                    if (target && isGoodLink(target)) {
                        el.setAttribute("data-nt-orig-href", el.href);
                        el.href = sanitizeHref(target);
                        RESOLVED_MAP.set(el, true);
                    }
                } catch (e) {}
                el._nt_resolving = false;
            },
            onerror: function() {
                el._nt_resolving = false;
            }
        });
    }

    // AdNauseam-Style Active Ad & Tracker Obfuscation (Generates noise to poison advertising profiles)
    const AD_TRACKER_HOSTS_RE = /(?:^|\.)(?:googleadservices\.com|doubleclick\.net|doubleclick\.com|adnxs\.com|advertising\.com|openx\.net|rubiconproject\.com|pubmatic\.com|criteo\.com|casalemedia\.com|adroll\.com|yieldmanager\.com|flashtalking\.com|outbrain\.com|taboola\.com)$/i;
    const AD_QUERY_PARAMS_RE = /[?&](?:adurl|clickid|click_id|affid|affiliate|gclid|srsltid|twclid|fbclid|yclid)=/i;
    const _clickedAdURLs = new Set();
    let _bgClicksCount = 0;

    function simulateAdClick(url) {
        // Metered gate (v2.3.0): this feature deliberately generates NOISE traffic,
        // so it must yield to metered/data-saver connections even when opted in.
        if (!CFG.activeAdObfuscation || _bgClicksCount >= 5 || !backgroundDataAllowed()) return;
        try {
            const parsed = new URL(url, location.href);
            const cleanUrl = parsed.origin + parsed.pathname + parsed.search;

            if (_clickedAdURLs.has(cleanUrl)) return;
            _clickedAdURLs.add(cleanUrl);
            _bgClicksCount++;

            // Mimic AdNauseam: dispatch anonymous, cookie-less background request with custom headers
            // and random delay to simulate natural human clicking behaviors
            const delay = 1500 + Math.random() * 3500;
            setTimeout(() => {
                log("Simulating background ad-click (AdNauseam-Style) to poison profile:", cleanUrl);
                if (typeof GM_xmlhttpRequest === "function") {
                    GM_xmlhttpRequest({
                        method: "GET",
                        url: cleanUrl,
                        anonymous: true, // Strips cookies to protect privacy
                        headers: {
                            "DNT": "1",
                            "Sec-GPC": "1",
                            "User-Agent": navigator.userAgent,
                            "Referer": location.href
                        },
                        onload: () => {}, // Discard response safely
                        onerror: () => {}
                    });
                } else if (typeof fetch === "function") {
                    fetch(cleanUrl, {
                        method: "GET",
                        credentials: "omit", // Strips cookies
                        mode: "no-cors",
                        headers: {
                            "DNT": "1",
                            "Sec-GPC": "1"
                        }
                    }).catch(() => {});
                }
            }, delay);
        } catch (e) {}
    }

    function scanAndClickAds() {
        if (!CFG.activeAdObfuscation || _bgClicksCount >= 5 || !backgroundDataAllowed()) return;
        try {
            const anchors = document.querySelectorAll("a[href]");
            for (let i = 0; i < anchors.length; i++) {
                if (_bgClicksCount >= 5) break;
                const a = anchors[i];
                const href = a.href;
                if (!href) continue;
                
                let isAd = false;
                try {
                    const u = new URL(href, location.href);
                    const h = u.hostname.toLowerCase();
                    if (AD_TRACKER_HOSTS_RE.test(h) || AD_QUERY_PARAMS_RE.test(u.search)) {
                        isAd = true;
                    }
                } catch (e) {
                    if (href.indexOf("googleadservices") > -1 || href.indexOf("/pagead/aclk") > -1) {
                        isAd = true;
                    }
                }
                
                if (isAd) {
                    simulateAdClick(href);
                }
            }
        } catch (e) {}
    }

    // Network-Budgeted Idle Frame DOM Link Cleaner (Keeps UI buttery smooth at 60/120fps)
    let linkCleaningQueue = [];
    let isCleanupScheduled = false;
    // v3.0.0 (#29) — pressure shedding: beyond this queue depth the cleaner
    // drops the expensive dataset scrub and keeps only href safety work.
    let _shedMode = false;
    const SHED_DEPTH = 600;

    // v3.0.0 (#29) — viewport-first ordering: links register with an
    // IntersectionObserver (200px lookahead); visible ones jump the queue,
    // off-screen ones are cleaned by bounded background drains (nothing is
    // ever skipped — only ordering changes).
    let _io = null;
    const _pendingIO = new Set();
    if (typeof IntersectionObserver !== "undefined") {
        try {
            _io = new IntersectionObserver(function(entries) {
                for (let i = 0; i < entries.length; i++) {
                    if (!entries[i].isIntersecting) continue;
                    const el = entries[i].target;
                    try { _io.unobserve(el); } catch (e) {}
                    _pendingIO.delete(el);
                    if (QUEUED.has(el)) {
                        linkCleaningQueue.unshift(el); // visible links first
                        ensureCleanupScheduled();
                    }
                }
            }, { rootMargin: "200px" });
        } catch (e) {
            _io = null;
        }
    }

    function drainIOPending() {
        // Bounded iterator (not forEach): forEach would scan the whole set on
        // every call — O(n²) on multi-thousand-link pages.
        let n = 0;
        const it = _pendingIO.values();
        while (n < 96) {
            const nx = it.next();
            if (nx.done) break;
            const el = nx.value;
            _pendingIO.delete(el);
            if (_io) {
                try { _io.unobserve(el); } catch (e) {}
            }
            linkCleaningQueue.push(el);
            n++;
        }
        if (linkCleaningQueue.length > 0) ensureCleanupScheduled();
    }

    function processBatchQueue(deadline) {
        const hasDeadline = deadline && typeof deadline.timeRemaining === "function";
        // Perf Fix (v2.2.0): the setTimeout fallback returned a constant 8ms forever,
        // so the fallback path ignored its time budget and drained the entire queue
        // in one tick (main-thread jank on Safari / huge feeds). Track real elapsed
        // time whenever a native deadline is unavailable.
        const startedAt = Date.now();
        const remaining = () => hasDeadline ? deadline.timeRemaining() : Math.max(0, 8 - (Date.now() - startedAt));
        while (remaining() > 1 && linkCleaningQueue.length > 0) {
            const el = linkCleaningQueue.shift();
            if (el) {
                QUEUED.delete(el);
                // Robustness (v2.6.0): never let ONE anchor's exception kill the
                // idle-clean loop for the whole page — isCleanupScheduled would
                // stay latched true and all future cleaning would silently stop.
                try {
                    cleanAnchor(el);
                } catch (e) {
                    log("cleanAnchor failed", e);
                }
            }
        }
        if (linkCleaningQueue.length > 0) {
            if (typeof requestIdleCallback === "function") {
                requestIdleCallback(processBatchQueue);
            } else {
                setTimeout(processBatchQueue, 40);
            }
        } else {
            isCleanupScheduled = false;
            _shedMode = false;
            scanAndClickAds();
            // Background tier (#29): keep draining pending below-fold links in
            // bounded batches until everything registered is clean.
            drainIOPending();
        }
    }

    function ensureCleanupScheduled() {
        if (isCleanupScheduled) return;
        isCleanupScheduled = true;
        // #29: under pressure, shed the expensive dataset scrub for this drain.
        _shedMode = linkCleaningQueue.length > SHED_DEPTH;
        if (typeof requestIdleCallback === "function") {
            requestIdleCallback(processBatchQueue, { timeout: 1000 });
        } else {
            setTimeout(processBatchQueue, 40);
        }
    }

    function scheduleElementCleanup(el) {
        // Perf Fix (v2.2.0): QUEUED was declared but never used, so the same element
        // could pile up dozens of duplicate queue entries per mutation burst.
        if (!el || QUEUED.has(el)) return;
        QUEUED.add(el);
        if (_io) {
            // #29: defer to visibility; the IO callback unshifts visible links
            // to the front, drainIOPending guarantees background completion.
            _pendingIO.add(el);
            try { _io.observe(el); } catch (e) {}
            drainIOPending();
            return;
        }
        linkCleaningQueue.push(el);
        ensureCleanupScheduled();
    }

    function scanDom() {
        try {
            const els = document.querySelectorAll("a[href],area[href]");
            for (let i = 0; i < els.length; i++) scheduleElementCleanup(els[i]);
        } catch (e) {}
        drainShadowRoots();
        scanSameOriginFrames();
    }

    // v3.0.0 (#12) — clean anchors registered inside OPEN shadow roots by the
    // main-world attachShadow hook, then keep observing them.
    const _shadowObserved = new WeakSet();
    function drainShadowRoots() {
        try {
            const w = (typeof unsafeWindow !== "undefined") ? unsafeWindow : window;
            const bag = w.__ntShadowRoots;
            if (!bag || !bag.length) return;
            while (bag.length) {
                const root = bag.shift();
                if (!root || _shadowObserved.has(root)) continue;
                _shadowObserved.add(root);
                try {
                    const as = root.querySelectorAll ? root.querySelectorAll("a[href],area[href]") : [];
                    for (let i = 0; i < as.length; i++) scheduleElementCleanup(as[i]);
                    if (typeof MutationObserver !== "undefined" && _shadowObserver) {
                        _shadowObserver.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: [ "href" ] });
                    }
                } catch (e) {}
            }
        } catch (e) {}
    }
    const _shadowObserver = (typeof MutationObserver !== "undefined") ? new MutationObserver(function(records) {
        for (let ri = 0; ri < records.length; ri++) {
            const rec = records[ri];
            if (rec.type === "childList") {
                for (let ni = 0; ni < rec.addedNodes.length; ni++) {
                    const node = rec.addedNodes[ni];
                    if (node.nodeType !== 1) continue;
                    if ((node.tagName === "A" || node.tagName === "AREA") && node.href) scheduleElementCleanup(node);
                    else if (node.querySelectorAll) {
                        const as = node.querySelectorAll("a[href],area[href]");
                        for (let ai = 0; ai < as.length; ai++) scheduleElementCleanup(as[ai]);
                    }
                }
            } else if (rec.type === "attributes") {
                const t = rec.target;
                if ((t.tagName === "A" || t.tagName === "AREA") && t.href && !LOCK.has(t)) scheduleElementCleanup(t);
            }
        }
    }) : null;

    // v3.0.0 (#11) — opt-in same-origin iframe cleaning, driven from the TOP
    // document so @noframes stays (no script injection into ad frames).
    // Cross-origin frames throw on contentDocument access and are skipped.
    const FRAMES_MAX = 10;
    const _framesObserved = new WeakSet();
    function scanSameOriginFrames() {
        if (!CFG.deepFrames || !isActive()) return;
        try {
            const frames = document.querySelectorAll("iframe");
            let done = 0;
            for (let i = 0; i < frames.length && done < FRAMES_MAX; i++) {
                const fr = frames[i];
                try {
                    const fd = fr.contentDocument;
                    if (!fd || _framesObserved.has(fd)) continue;
                    _framesObserved.add(fd);
                    done++;
                    const as = fd.querySelectorAll("a[href],area[href]");
                    for (let ai = 0; ai < as.length; ai++) scheduleElementCleanup(as[ai]);
                    if (_shadowObserver) {
                        _shadowObserver.observe(fd, { childList: true, subtree: true, attributes: true, attributeFilter: [ "href" ] });
                    }
                } catch (e) { /* cross-origin — leave alone */ }
            }
        } catch (e) {}
    }

    // Critical Compatibility Mitigation: Do not rewrite the href elements of search result items
    // dynamically on DuckDuckGo if they are accessed by DDG's image searches
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
                    // Bug Fix (v2.2.0): capture the "delay;url=" prefix and rebuild the
                    // content attribute. The old code assigned parts[1].replace(...) —
                    // searching for "url=" *inside the URL itself* — which dropped the
                    // delay prefix and corrupted valid refresh tags.
                    const parts = /^\s*(\d*\s*;\s*url\s*=\s*)(.+)$/i.exec(meta.content || "");
                    if (parts && parts[2]) {
                        const dest = parts[2].replace(/^['"]|['"]$/g, "").trim();
                        const red = extractRedirect(safeURL(dest));
                        if (red && isGoodLink(red)) {
                            meta.content = parts[1] + red;
                        }
                    }
                }
            }
            // v3.0.0 (#13) — tracker-bound speculative-tag neutralizer. Pages
            // waste metered users' bytes with prefetch/prerender/preconnect to
            // AD/LOGGER domains; drop ONLY those, ONLY on metered links, and
            // never first-party/functional hints.
            if (CFG.respectMetered && isMeteredConnection()) {
                const hints = document.querySelectorAll("link[rel~=prefetch i], link[rel~=prerender i], link[rel~=preconnect i]");
                for (i = 0; i < hints.length; i++) {
                    const ln = hints[i];
                    try {
                        const href = ln.href || ln.getAttribute("href") || "";
                        if (!href) continue;
                        const host = new URL(href, location.href).hostname.toLowerCase();
                        if (host && host !== location.hostname.toLowerCase() && (AD_TRACKER_HOSTS_RE.test(host) || IP_LOGGERS.test(host))) {
                            ln.remove();
                            recordActivity("dropped tracker prefetch", href, "metered-neutralizer");
                        }
                    } catch (e) {}
                }
            }
        } catch (e) {}
    }

    // v3.0.0 (#15) — AMP→canonical redirect, per-site opt-in. AMP pages ping
    // Google and proxy content; the canonical is the publisher's own URL.
    // Off everywhere unless the user enables it for the current site.
    let _ampChecked = false;
    function ensureAMPCanonical() {
        if (_ampChecked) return;
        _ampChecked = true;
        try {
            const host = location.hostname.toLowerCase();
            if (!ampCanonicalSites[host]) return;
            const isAmp = /(^|\/)amp(\/|$)/i.test(location.pathname) || document.documentElement.hasAttribute("amp") || document.documentElement.hasAttribute("⚡");
            if (!isAmp) return;
            const canon = document.querySelector("link[rel='canonical' i]");
            const target = canon && (canon.href || canon.getAttribute("href"));
            if (target && /^https?:\/\//i.test(target) && isGoodLink(target) && target !== location.href) {
                log("AMP page — redirecting to canonical:", target);
                location.replace(target);
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
                            if (stripEngineSearchParams(u, eng)) url = u.toString();
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

    // MutationObserver section using our Network-Budgeted Idle Frame cleaner
    (function() {
        if (typeof MutationObserver === "undefined") return;

        const observer = new MutationObserver(function(records) {
            for (let ri = 0; ri < records.length; ri++) {
                const rec = records[ri];
                if (rec.type === "childList") {
                    for (let ni = 0; ni < rec.addedNodes.length; ni++) {
                        const node = rec.addedNodes[ni];
                        if (node.nodeType !== 1) continue;
                        if ((node.tagName === "A" || node.tagName === "AREA") && node.href) scheduleElementCleanup(node);
                        else if (node.querySelectorAll) {
                            const as = node.querySelectorAll("a[href],area[href]");
                            for (let ai = 0; ai < as.length; ai++) scheduleElementCleanup(as[ai]);
                        }
                    }
                } else if (rec.type === "attributes") {
                    const t = rec.target;
                    if ((t.tagName === "A" || t.tagName === "AREA") && t.href && !LOCK.has(t)) scheduleElementCleanup(t);
                }
            }
        });

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

    // Hover-activated server-side redirect resolution (opt-in; gated).
    // v2.3.0: the speculative connection warmup was removed — hovering now costs
    // exactly zero bytes unless the user explicitly opted into redirect resolution.
    // Cheap boolean checks run before any DOM traversal.
    document.addEventListener("mouseover", function(e) {
        // v3.0.0 (#19): eff() honors per-site overrides (on-here-only or off-here).
        if (!eff("serverRedirectResolution")) return;
        if (!isEngineHost(location.hostname)) return;
        const el = findAnchor(e.target);
        if (!el || !el.href) return;
        preResolveServerRedirect(el);
    }, { passive: true });

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

    // v3.0.0 (#22) — personas: preset mappings over existing toggles only.
    const PERSONA_PRESETS = {
        gentle: {
            serverRedirectResolution: false, activeAdObfuscation: false, deepFrames: false,
            respawnStrict: false, stagedRules: true, globalStatus: true
        },
        balanced: {
            serverRedirectResolution: false, activeAdObfuscation: false, deepFrames: false,
            respawnStrict: false, stagedRules: true, globalStatus: true
        },
        paranoid: {
            serverRedirectResolution: true, deepFrames: true, respawnStrict: true,
            stagedRules: true, globalStatus: true, blockGA: true, blockPrivacySandbox: true,
            blockKeepalive: true, blockIPLoggers: true, blockBounceRedirect: true,
            enforcePrivacyPresets: true, purgeGACookies: true, purgeStorage: true,
            stripSERPParams: true, forceNoReferrer: true, relNoReferrer: true, noping: true
        }
    };
    function applyPersona(name) {
        const p = PERSONA_PRESETS[name];
        if (!p) return;
        Object.keys(p).forEach(k => {
            CFG[k] = p[k];
            SV(k, p[k]);
        });
        lruClear();
        pushConfigToPage();
    }

    // v3.0.0 (#23) — offline backup/restore with strict schema validation.
    // Keys are host-pattern filtered (prototype-pollution safe); booleans are
    // type-checked against the CURRENT defaults, so unknown keys can't land.
    function exportSettings() {
        try {
            const payload = {
                ntExport: 3,
                exportedAt: new Date().toISOString(),
                toggles: {},
                whitelist: String(GV("whitelist", "")),
                siteProfiles: siteProfiles,
                dryRunSites: dryRunSites,
                ampCanonicalSites: ampCanonicalSites,
                unblockContextMenuSites: unblockContextMenuSites,
                unblockTextSelectionSites: unblockTextSelectionSites,
                userStripRules: Array.isArray(CFG.userStripRules) ? CFG.userStripRules : []
            };
            Object.keys(CFG).forEach(k => {
                if (typeof CFG[k] === "boolean" || k === "referrerPolicy") payload.toggles[k] = CFG[k];
            });
            const json = JSON.stringify(payload, null, 2);
            const blob = new Blob([ json ], { type: "application/json" });
            const a = document.createElement("a");
            const objUrl = URL.createObjectURL(blob);
            a.href = objUrl;
            a.download = "nulltrail-settings.json";
            (document.body || document.documentElement).appendChild(a);
            a.click();
            a.remove();
            setTimeout(function() {
                try { URL.revokeObjectURL(objUrl); } catch (e) {}
            }, 4000);
        } catch (e) {}
    }

    const HOST_KEY_RE = /^[a-z0-9][a-z0-9.\-]{0,252}$/i;
    function saneHostMap(v) {
        if (!v || typeof v !== "object" || Array.isArray(v)) return null;
        const out = {};
        Object.keys(v).forEach(h => {
            if (!HOST_KEY_RE.test(h)) return;
            if (typeof v[h] === "boolean") out[h] = v[h];
            else if (v[h] && typeof v[h] === "object" && !Array.isArray(v[h])) {
                const inner = {};
                Object.keys(v[h]).forEach(k2 => {
                    if (typeof v[h][k2] === "boolean" && typeof CFG[k2] === "boolean") inner[k2] = v[h][k2];
                });
                if (Object.keys(inner).length) out[h] = inner;
            } else if (v[h]) {
                out[h] = true;
            }
        });
        return out;
    }

    function importSettings(text) {
        try {
            const data = JSON.parse(String(text || ""));
            if (!data || typeof data !== "object" || !data.ntExport) return "Not a NullTrail backup";
            let applied = 0;
            if (data.toggles && typeof data.toggles === "object") {
                Object.keys(CFG).forEach(k => {
                    if (typeof CFG[k] === "boolean" && typeof data.toggles[k] === "boolean") {
                        CFG[k] = data.toggles[k];
                        SV(k, CFG[k]);
                        applied++;
                    }
                });
                if (data.toggles.referrerPolicy === "origin" || data.toggles.referrerPolicy === "no-referrer") {
                    CFG.referrerPolicy = data.toggles.referrerPolicy;
                    SV("referrerPolicy", CFG.referrerPolicy);
                    applied++;
                }
            }
            if (typeof data.whitelist === "string" && data.whitelist.length <= 20000) {
                WHITELIST = data.whitelist;
                SV("whitelist", WHITELIST);
                applied++;
            }
            const maps = [
                [ "siteProfiles", v => { siteProfiles = v; SV("siteProfiles", v); } ],
                [ "dryRunSites", v => { dryRunSites = v; SV("dryRunSites", v); } ],
                [ "ampCanonicalSites", v => { ampCanonicalSites = v; SV("ampCanonicalSites", v); } ],
                [ "unblockContextMenuSites", v => { unblockContextMenuSites = v; SV("unblockContextMenuSites", v); } ],
                [ "unblockTextSelectionSites", v => { unblockTextSelectionSites = v; SV("unblockTextSelectionSites", v); } ]
            ];
            maps.forEach(pair => {
                const sv = saneHostMap(data[pair[0]]);
                if (sv) {
                    pair[1](sv);
                    applied++;
                }
            });
            if (Array.isArray(data.userStripRules)) {
                const rules = [];
                data.userStripRules.forEach(r => {
                    if (typeof r === "string" && r.length > 0 && r.length <= 100 && !/[\\[\](){}|^$+?]/.test(r.slice(1))) {
                        try {
                            new RegExp("^(?:" + r + ")$", "i");
                            rules.push(r);
                        } catch (e) {}
                    }
                });
                CFG.userStripRules = rules.slice(0, 200);
                SV("userStripRules", CFG.userStripRules);
                applied++;
            }
            lruClear();
            rebuildRulesWithUserRules();
            pushConfigToPage();
            return applied > 0 ? ("Imported " + applied + " setting groups") : "Nothing valid found to import";
        } catch (e) {
            return "Import failed: invalid JSON";
        }
    }

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
            [ "blockBounceRedirect", "Skip Middleman Link Redirects" ],
            [ "serverRedirectResolution", "Resolve Server Redirects (hover; uses a little data)" ]
        ]
    }, {
        title: "Browser Cleanup",
        items: [
            [ "purgeGACookies", "Clear Search Analytics Cookies" ],
            [ "purgeStorage", "Clear Hidden Website Trackers" ]
        ]
    }, {
        title: "Active Profile Obfuscation",
        items: [
            [ "activeAdObfuscation", "Generate Bogus Ad Clicks (uses extra data)" ]
        ]
    }, {
        title: "Privacy Settings Presets",
        items: [
            [ "enforcePrivacyPresets", "Enforce Maximum Shielding automatically" ]
        ]
    }, {
        title: "Coverage & Trust",
        items: [
            [ "deepFrames", "Also clean same-origin embedded frames" ],
            [ "stagedRules", "Soak new rules 72h before activating (safest)" ],
            [ "respawnStrict", "Actively block tracker re-creation (strict)" ]
        ]
    }, {
        title: "Advanced Maintenance",
        items: [
            [ "respectMetered", "Save Mobile Data (metered-network friendly)" ],
            [ "autoUpdateRules", "Auto-update cleaning rules (paused on metered)" ],
            [ "showHUD", "Display counter on web pages" ],
            [ "debug", "Enable developer logs" ]
        ]
    } ];

    // Plain-language explanations shown as hover tooltips on every toggle (v2.3.0):
    // friendlier UX — nobody should have to guess what a privacy switch does.
    const TOGGLE_HINTS = {
        globalStatus: "Master switch for every NullTrail protection.",
        forceNoReferrer: "Sites you visit won't see which page you came from.",
        noping: "Stops sites from silently logging your clicks through 'ping' beacons.",
        relNoReferrer: "Adds rel=noopener to new-tab links so destinations can't script your tab.",
        stripSERPParams: "Removes tracking junk from search engine URLs and result links.",
        referralMarketing: "When ON, keeps creator affiliate tags (ref=, tag=) so creators still get credit.",
        blockGA: "Blocks Google Analytics endpoints while browsing Google properties.",
        blockPrivacySandbox: "Disables Chromium's built-in ad-interest APIs (Topics, FLEDGE).",
        blockKeepalive: "Prevents quiet background keep-alive requests used for tracking.",
        blockIPLoggers: "Blocks known IP/location grabber domains everywhere (links, images, sockets).",
        blockBounceRedirect: "Skips hop-through trackers (t.co, bit.ly…) during navigations.",
        serverRedirectResolution: "Optional: resolves hidden redirect chains when you hover a result, using anonymous requests. Paused on metered networks.",
        purgeGACookies: "Deletes Google Analytics cookies already stored in this browser.",
        purgeStorage: "Removes known tracker identifiers from the site's local storage.",
        activeAdObfuscation: "Optional (AdNauseam-style): sends fake ad clicks to pollute advertising profiles. Consumes extra data; paused on metered networks.",
        enforcePrivacyPresets: "Automatically sets privacy-preserving cookies on supported sites.",
        respectMetered: "Pauses every optional background download while your connection is metered or your system/browser Data-Saver is enabled.",
        autoUpdateRules: "Downloads updated cleaning rules about every 6 days. Skipped on metered networks; failed attempts back off gently.",
        showHUD: "Shows a small on-page counter of links NullTrail has cleaned.",
        debug: "Writes verbose diagnostic logs to the browser console.",
        deepFrames: "Optional: also sanitizes links inside same-origin embedded frames. Cross-origin frames are never touched.",
        stagedRules: "Downloaded rules wait 72h before taking effect, so a bad upstream update can't break your browsing instantly. You can always activate early from the Rules tab.",
        respawnStrict: "When a site re-creates tracker storage NullTrail removed, drop the new write at the source. Report-only when off; forceful when on."
    };

    function openDashboard() {
        const existing = document.getElementById("nt-dashboard-root");
        if (existing) {
            existing.remove();
            return;
        }
        
        // Shadow DOM Container (Isolates settings styling completely from the host page)
        // Hardening (v2.4.0): fall back to a plain container if attachShadow is
        // unavailable (legacy engines) instead of failing to open at all.
        const container = document.createElement("div");
        container.id = "nt-dashboard-root";

        let shadow;
        try {
            shadow = container.attachShadow({ mode: "closed" });
        } catch (e) {
            shadow = container;
        }

        // Accessibility (v2.6.0): restore keyboard focus to whatever the user was
        // doing before the dashboard opened, and route every close path through
        // one helper so focus/Esc cleanup can't drift apart.
        let prevFocus = null;
        try { prevFocus = document.activeElement; } catch (e) {}
        function closeDash() {
            document.removeEventListener("keydown", onEsc, true);
            try { container.remove(); } catch (err) {}
            try { if (prevFocus && prevFocus.focus) prevFocus.focus(); } catch (e) {}
        }

        // UX (v2.4.0): Escape closes the dashboard.
        function onEsc(e) {
            if (!container.isConnected) {
                document.removeEventListener("keydown", onEsc, true);
                return;
            }
            if (e.key === "Escape") {
                e.stopPropagation();
                closeDash();
            }
        }
        document.addEventListener("keydown", onEsc, true);
        
        const ov = ntEl("div", null, "position:fixed;inset:0;z-index:2147483647;background:rgba(10,12,20,.6);display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif");
        ov.id = "nt-dashboard";
        const box = ntEl("div", null, "background:#131720;color:#dfe4ee;border-radius:12px;width:480px;max-width:94vw;max-height:88vh;display:flex;flex-direction:column;box-shadow:0 16px 70px rgba(0,0,0,.65);border:1px solid rgba(255,255,255,.07);overflow:hidden");
        // Accessibility (v2.6.0): real dialog semantics for screen readers.
        try {
            box.setAttribute("role", "dialog");
            box.setAttribute("aria-modal", "true");
            box.setAttribute("aria-label", "NullTrail settings");
        } catch (e) {}
        const hdr = ntEl("div", null, "display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid rgba(255,255,255,.06)");
        const hdrLeft = ntEl("div", null, "display:flex;flex-direction:column");
        hdrLeft.appendChild(ntEl("span", "NullTrail", "font-size:17px;font-weight:700;color:#14b8a6"));
        hdrLeft.appendChild(ntEl("span", "v3.0.0", "font-size:11px;color:#6b7280;margin-top:2px"));
        hdr.appendChild(hdrLeft);
        const closeBtn = ntEl("button", "×", "background:none;border:none;color:#9ca3af;font-size:24px;cursor:pointer;padding:0 4px;line-height:1");
        closeBtn.title = "Close (Esc)";
        try { closeBtn.setAttribute("aria-label", "Close dashboard"); } catch (e) {}
        closeBtn.addEventListener("click", function() {
            closeDash();
        });
        hdr.appendChild(closeBtn);
        box.appendChild(hdr);
        const tabBar = ntEl("div", null, "display:flex;border-bottom:1px solid rgba(255,255,255,.06);background:rgba(0,0,0,.15)");
        try { tabBar.setAttribute("role", "tablist"); } catch (e) {}
        const tabs = [ "Settings", "Sites", "Stats", "Activity", "Rules", "About" ];
        const tabBtns = [];
        const content = ntEl("div", null, "flex:1;overflow:auto;padding:18px 20px");
        try { content.setAttribute("role", "tabpanel"); } catch (e) {}
        
        function showTab(idx) {
            for (let i = 0; i < tabBtns.length; i++) {
                tabBtns[i].style.color = "#9ca3af";
                tabBtns[i].style.borderBottomColor = "transparent";
                try { tabBtns[i].setAttribute("aria-selected", "false"); } catch (e) {}
            }
            tabBtns[idx].style.color = "#14b8a6";
            tabBtns[idx].style.borderBottomColor = "#14b8a6";
            try { tabBtns[idx].setAttribute("aria-selected", "true"); } catch (e) {}
            
            while (content.firstChild) content.removeChild(content.firstChild);
            if (idx === 0) renderSettings(); 
            else if (idx === 1) renderSites(); 
            else if (idx === 2) renderStats(); 
            else if (idx === 3) renderActivity();
            else if (idx === 4) renderRules(); 
            else renderAbout();
        }
        
        tabs.forEach((label, i) => {
            const btn = ntEl("button", label, "flex:1;padding:10px 6px;background:none;border:none;color:#9ca3af;font-size:13px;font-weight:500;cursor:pointer;border-bottom:2px solid transparent;transition:color .15s");
            try { btn.setAttribute("role", "tab"); } catch (e) {}
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
            if (TOGGLE_HINTS[key]) row.title = TOGGLE_HINTS[key];
            const lbl = ntEl("span", label);
            if (TOGGLE_HINTS[key]) lbl.title = TOGGLE_HINTS[key];
            row.appendChild(lbl);
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.checked = !!CFG[key];
            ntStyle(cb, "width:18px;height:18px;accent-color:#14b8a6;cursor:pointer");
            cb.addEventListener("change", function() {
                CFG[key] = cb.checked;
                SV(key, cb.checked);
                pushConfigToPage();
                if (key === "referralMarketing") {
                    lruClear();
                }
                if (key === "purgeGACookies" && cb.checked) purgeGACookies();
                if (key === "purgeStorage" && cb.checked) purgeTrackerStorage();
                if (key === "showHUD") updateHUD();
            });
            row.appendChild(cb);
            return row;
        }

        function renderSettings() {
            // Friendlier UX (v2.3.0): reassure users up front — everything is local,
            // and hover any setting for a plain-language explanation.
            content.appendChild(ntEl("div", "All processing happens locally on your device — nothing is ever uploaded. Hover any option for a plain-language explanation.", "font-size:11px;color:#6b7280;line-height:1.5;margin-bottom:4px"));
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
                // Bug Fix (v2.2.0): previously persisted the string "activeAdObfuscation"
                // instead of the site map (same bad copy-paste as the GV default).
                SV("unblockTextSelectionSites", unblockTextSelectionSites);
                pushConfigToPage();
            });
            row2.appendChild(cb2);
            content.appendChild(row2);

            // ============ v3.0.0 — per-site protection controls ============
            content.appendChild(ntEl("div", "Protection Modes For This Website", "font-size:14px;font-weight:600;margin-top:20px;margin-bottom:8px"));

            // #18 timed pause — protection that can NEVER be forgotten off.
            if (isPaused()) {
                const when = pauseUntil > 0 ? new Date(pauseUntil).toLocaleTimeString() : null;
                content.appendChild(ntEl("div", _sessionPaused ? "Protection PAUSED for this tab session" : "Protection PAUSED — auto-resumes at " + when, "font-size:12px;font-weight:600;color:#f59e0b;margin-bottom:6px"));
                const resumeBtn = ntEl("button", "Resume protection now", "width:100%;padding:8px;border:none;border-radius:6px;background:#14b8a6;color:#fff;font-size:12px;font-weight:600;cursor:pointer;margin-bottom:6px");
                resumeBtn.addEventListener("click", function() {
                    pauseUntil = 0;
                    _sessionPaused = false;
                    SV("pauseUntil", 0);
                    pushConfigToPage();
                    renderSites();
                });
                content.appendChild(resumeBtn);
            } else {
                const pRow = ntEl("div", null, "display:flex;gap:8px;margin-bottom:4px");
                const p1 = ntEl("button", "Pause 1 hour", "flex:1;padding:8px;border:1px solid rgba(255,255,255,.12);border-radius:6px;background:transparent;color:#dfe4ee;font-size:12px;cursor:pointer");
                p1.title = "Auto-resumes after 60 minutes — you can't forget protection off.";
                p1.addEventListener("click", function() {
                    pauseUntil = Date.now() + 3600 * 1000;
                    SV("pauseUntil", pauseUntil);
                    pushConfigToPage();
                    renderSites();
                });
                const p2 = ntEl("button", "Pause this session", "flex:1;padding:8px;border:1px solid rgba(255,255,255,.12);border-radius:6px;background:transparent;color:#dfe4ee;font-size:12px;cursor:pointer");
                p2.title = "Paused in this tab until you close it or resume manually.";
                p2.addEventListener("click", function() {
                    _sessionPaused = true;
                    pushConfigToPage();
                    renderSites();
                });
                pRow.appendChild(p1);
                pRow.appendChild(p2);
                content.appendChild(pRow);
            }

            // #17 dry-run mode for this site
            content.appendChild(makeSiteFlag(
                "Dry-run mode on this website (classify & count, rewrite nothing)",
                "NullTrail reports what it WOULD do here without changing anything — validate precision first.",
                !!dryRunSites[host],
                function(on) {
                    if (on) dryRunSites[host] = true;
                    else delete dryRunSites[host];
                    SV("dryRunSites", dryRunSites);
                }
            ));

            // #15 AMP→canonical per-site opt-in
            content.appendChild(makeSiteFlag(
                "Leave AMP pages for the canonical (publisher) version",
                "On AMP articles, redirects you to the site's own canonical URL. Reloads the page when triggered.",
                !!ampCanonicalSites[host],
                function(on) {
                    if (on) ampCanonicalSites[host] = true;
                    else delete ampCanonicalSites[host];
                    SV("ampCanonicalSites", ampCanonicalSites);
                }
            ));

            // #19 per-site overrides (Inherit / Force on / Force off)
            content.appendChild(ntEl("div", "Per-Site Feature Overrides", "font-size:14px;font-weight:600;margin-top:20px;margin-bottom:8px"));
            [ [ "serverRedirectResolution", "Resolve server redirects on hover" ],
              [ "stripSERPParams", "Strip search-result URL parameters" ],
              [ "enforcePrivacyPresets", "Auto privacy presets & consent rejection" ] ].forEach(function(pair) {
                const key = pair[0], label = pair[1];
                const row = ntEl("div", null, "display:flex;align-items:center;justify-content:space-between;padding:6px 0;font-size:13px;color:#dfe4ee");
                row.appendChild(ntEl("span", label));
                const sel = document.createElement("select");
                ntStyle(sel, "background:#0e1219;color:#dfe4ee;border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:4px 6px;font-size:12px;cursor:pointer");
                const cur = (siteProfiles[host] && Object.prototype.hasOwnProperty.call(siteProfiles[host], key)) ? (siteProfiles[host][key] ? "on" : "off") : "inherit";
                [ [ "inherit", "Inherit (" + (CFG[key] ? "on" : "off") + ")" ], [ "on", "Force on here" ], [ "off", "Force off here" ] ].forEach(function(o) {
                    const opt = document.createElement("option");
                    opt.value = o[0];
                    opt.textContent = o[1];
                    if (o[0] === cur) opt.selected = true;
                    sel.appendChild(opt);
                });
                sel.addEventListener("change", function() {
                    const v = sel.value;
                    if (v === "inherit") {
                        if (siteProfiles[host]) delete siteProfiles[host][key];
                    } else {
                        siteProfiles[host] = siteProfiles[host] || {};
                        siteProfiles[host][key] = (v === "on");
                    }
                    if (siteProfiles[host] && Object.keys(siteProfiles[host]).length === 0) delete siteProfiles[host];
                    SV("siteProfiles", siteProfiles);
                    pushConfigToPage();
                    renderSites();
                });
                row.appendChild(sel);
                content.appendChild(row);
            });
        }

        // v3.0.0 — compact per-site flag row factory (shared by the modes above).
        function makeSiteFlag(label, hint, checked, onChange) {
            const row = ntEl("label", null, "display:flex;align-items:center;justify-content:space-between;padding:8px 0;cursor:pointer;font-size:13px;color:#dfe4ee");
            row.title = hint;
            const sp = ntEl("span", label);
            sp.title = hint;
            row.appendChild(sp);
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.checked = !!checked;
            cb.title = hint;
            ntStyle(cb, "width:18px;height:18px;accent-color:#14b8a6;cursor:pointer;flex-shrink:0;margin-left:10px");
            cb.addEventListener("change", function() {
                onChange(cb.checked);
            });
            row.appendChild(cb);
            return row;
        }

        // Stats renderer
        function renderStats() {
            // Bug Fix (v2.2.0): clear before re-render — the reset button below used
            // to append a duplicate set of rows on top of the stale ones.
            while (content.firstChild) content.removeChild(content.firstChild);
            const eng = getEngine(location.hostname);
            // Accuracy (v2.6.0): display fresh cross-tab storage merged with this
            // tab's pending (unflushed) deltas — the old read showed the counters
            // exactly as they were when this page loaded, ignoring other tabs.
            const dispCleaned = (GV("statCleaned", 0) | 0) + _deltaCleaned;
            const dispFields = (GV("statFields", 0) | 0) + _deltaFields;
            const dispBlocked = (GV("statBlocked", 0) | 0) + _deltaBlocked;
            let respawns = 0;
            try {
                const w = (typeof unsafeWindow !== "undefined") ? unsafeWindow : window;
                respawns = w.__ntRespawns | 0;
            } catch (e) {}
            const rows = [ 
                [ "Links Sanitized", dispCleaned ], 
                [ "Query Parameters Stripped", dispFields ], 
                [ "Tracking Requests Blocked", dispBlocked ], 
                [ "Tracker Writes Observed (this page)" + (CFG.respawnStrict ? " — blocked at source" : ""), respawns ],
                [ "Dark-Pattern Banners Seen (report only)", _darkPatterns ],
                [ "Pending Stat Flush Deltas", _deltaCleaned + _deltaBlocked ],
                [ "Database Cleaners Active", PROVIDERS.length ], 
                [ "Engine Scrapers Configured", ENGINES.length ], 
                [ "Bypass Handlers Loaded", DOMAIN_REDIRECTS.length ], 
                [ "Current Engine", eng ? eng.n : "Generic / Agnostic" ],
                [ "Metered / Data-Saver Connection", isMeteredConnection() ? "Detected" : "Not detected" ],
                [ "Optional Background Downloads", backgroundDataAllowed() ? "Allowed" : "Paused (saving your data)" ]
            ];
            rows.forEach(r => {
                const row = ntEl("div", null, "display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04)");
                row.appendChild(ntEl("span", r[0], "font-size:13px;color:#9ca3af"));
                row.appendChild(ntEl("span", String(r[1]), "font-size:13px;font-weight:600;color:#dfe4ee"));
                content.appendChild(row);
            });
            // v3.0.0 (#24) — 30-day inline-SVG sparkline (local-only buckets).
            const daily = GV("statDaily", {}) || {};
            const days = [];
            for (let i = 29; i >= 0; i--) {
                days.push(new Date(Date.now() - i * 86400000).toISOString().slice(0, 10));
            }
            const vals = days.map(d => (daily[d] ? ((daily[d].c | 0) + (daily[d].b | 0)) : 0));
            const maxV = Math.max.apply(null, vals.concat([ 1 ]));
            const hasData = vals.some(v => v > 0);
            content.appendChild(ntEl("div", "Last 30 Days (links cleaned + trackers blocked)", "font-size:13px;font-weight:600;margin-top:18px;margin-bottom:6px"));
            if (!hasData) {
                content.appendChild(ntEl("div", "Daily history accumulates locally as you browse — it is pruned automatically after 90 days.", "font-size:11px;color:#6b7280;line-height:1.5"));
            } else {
                const W = 440, H = 64, BW = W / 30;
                let bars = "";
                vals.forEach(function(v, i) {
                    const h = Math.max(v > 0 ? 2 : 0, Math.round((v / maxV) * (H - 6)));
                    bars += "<rect x='" + (i * BW + 1).toFixed(1) + "' y='" + (H - h) + "' width='" + (BW - 2).toFixed(1) + "' height='" + h + "' rx='2' fill='#14b8a6'><title>" + days[i] + ": " + v + "</title></rect>";
                });
                const svgWrap = ntEl("div", null, "background:#0e1219;border:1px solid rgba(255,255,255,.06);border-radius:8px;padding:8px");
                try {
                    svgWrap.innerHTML = "<svg viewBox='0 0 " + W + " " + H + "' width='100%' height='64' role='img' aria-label='30-day activity sparkline'>" + bars + "</svg>";
                    content.appendChild(svgWrap);
                } catch (e) {
                    // Trusted-Types page: numbers beat charts — render a text summary.
                    const total = vals.reduce(function(a, b) { return a + b; }, 0);
                    content.appendChild(ntEl("div", "Total over 30 days: " + total, "font-size:12px;color:#9ca3af"));
                }
            }

            const resetBtn = ntEl("button", "Reset statistics", "margin-top:14px;padding:8px 16px;border:1px solid rgba(255,255,255,.12);border-radius:6px;background:transparent;color:#ef4444;font-size:12px;cursor:pointer");
            resetBtn.addEventListener("click", function() {
                STATS.cleaned = STATS.fields = STATS.blocked = 0;
                // Keep pending deltas from resurrecting pre-reset counts (v2.5.0).
                _deltaCleaned = _deltaFields = _deltaBlocked = 0;
                SV("statCleaned", 0);
                SV("statFields", 0);
                SV("statBlocked", 0);
                SV("statDaily", {}); // v3.0.0: history hygiene included in reset
                renderStats();
            });
            content.appendChild(resetBtn);
        }

        // v3.0.0 (#16 + #14) — Activity tab: explainability buffer, parameter
        // classification, and user-promoted tracker candidates.
        function renderActivity() {
            content.appendChild(ntEl("div", "Recent Activity (this tab only — never saved, never uploaded)", "font-size:14px;font-weight:600;margin-bottom:8px"));
            if (!_activity.length) {
                content.appendChild(ntEl("div", "Nothing recorded yet on this page. Cleaned links, unwrapped redirects and consent actions will appear here with the exact rule that fired.", "font-size:12px;color:#9ca3af;line-height:1.5;margin-bottom:6px"));
            } else {
                _activity.slice().reverse().forEach(function(a) {
                    const row = ntEl("div", null, "padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:12px");
                    const head = ntEl("div", null, "display:flex;justify-content:space-between");
                    head.appendChild(ntEl("span", a.kind, "font-weight:600;color:#14b8a6"));
                    head.appendChild(ntEl("span", new Date(a.t).toLocaleTimeString(), "color:#6b7280"));
                    row.appendChild(head);
                    row.appendChild(ntEl("div", a.text, "color:#dfe4ee;word-break:break-all"));
                    if (a.rule) row.appendChild(ntEl("div", "rule: " + a.rule, "color:#6b7280;font-size:11px"));
                    content.appendChild(row);
                });
            }

            content.appendChild(ntEl("div", "Parameter Classification (this page)", "font-size:14px;font-weight:600;margin-top:18px;margin-bottom:8px"));
            [ [ "Known trackers stripped", STATS.fields ],
              [ "Known functional parameters seen", _clsFunctional ],
              [ "Unknown parameters seen (left untouched, always)", _clsUnknown ] ].forEach(function(r) {
                const row = ntEl("div", null, "display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04)");
                row.appendChild(ntEl("span", r[0], "font-size:13px;color:#9ca3af"));
                row.appendChild(ntEl("span", String(r[1]), "font-size:13px;font-weight:600;color:#dfe4ee"));
                content.appendChild(row);
            });
            content.appendChild(ntEl("div", "Unknown parameters are never stripped automatically — NullTrail only removes what the verified ruleset positively identifies as tracking. One broken website is worse than ten missed trackers.", "font-size:11px;color:#6b7280;line-height:1.5;margin-top:6px"));

            // #14 candidates: entropy-scored suggestions the USER may promote.
            content.appendChild(ntEl("div", "Tracker Candidates (review & optionally block)", "font-size:14px;font-weight:600;margin-top:18px;margin-bottom:8px"));
            const candKeys = Object.keys(_candidates).sort(function(a, b) { return _candidates[b] - _candidates[a]; }).slice(0, 12);
            if (!candKeys.length) {
                content.appendChild(ntEl("div", "No suspicious high-entropy parameters spotted on this page.", "font-size:12px;color:#9ca3af;margin-bottom:6px"));
            } else {
                content.appendChild(ntEl("div", "These parameters carried long identifier-like values. If you recognize a tracker, block it — your personal rules apply on every site and survive rule updates.", "font-size:11px;color:#6b7280;line-height:1.5;margin-bottom:8px"));
                candKeys.forEach(function(k) {
                    const row = ntEl("div", null, "display:flex;align-items:center;justify-content:space-between;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04)");
                    const already = Array.isArray(CFG.userStripRules) && CFG.userStripRules.indexOf(k) !== -1;
                    row.appendChild(ntEl("span", k + "  (seen " + _candidates[k] + "x)", "font-size:12px;color:#dfe4ee;font-family:monospace;word-break:break-all"));
                    const btn = ntEl("button", already ? "Blocked" : "Block", "padding:5px 12px;border:none;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;background:" + (already ? "#374151;color:#9ca3af" : "#ef4444;color:#fff"));
                    btn.disabled = already;
                    btn.addEventListener("click", function() {
                        if (!Array.isArray(CFG.userStripRules)) CFG.userStripRules = [];
                        if (CFG.userStripRules.indexOf(k) === -1) {
                            CFG.userStripRules.push(k);
                            SV("userStripRules", CFG.userStripRules);
                            rebuildRulesWithUserRules();
                            renderActivity();
                        }
                    });
                    row.appendChild(btn);
                    content.appendChild(row);
                });
            }
            if (Array.isArray(CFG.userStripRules) && CFG.userStripRules.length) {
                content.appendChild(ntEl("div", "Your Personal Block Rules (" + CFG.userStripRules.length + ")", "font-size:14px;font-weight:600;margin-top:18px;margin-bottom:8px"));
                CFG.userStripRules.slice().forEach(function(rule) {
                    const row = ntEl("div", null, "display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04)");
                    row.appendChild(ntEl("span", rule, "font-size:12px;font-family:monospace;color:#dfe4ee;word-break:break-all"));
                    const btn = ntEl("button", "Remove", "padding:5px 12px;border:1px solid rgba(255,255,255,.12);border-radius:6px;background:transparent;color:#ef4444;font-size:11px;cursor:pointer;flex-shrink:0;margin-left:8px");
                    btn.addEventListener("click", function() {
                        CFG.userStripRules = CFG.userStripRules.filter(function(r) { return r !== rule; });
                        SV("userStripRules", CFG.userStripRules);
                        rebuildRulesWithUserRules();
                        renderActivity();
                    });
                    row.appendChild(btn);
                    content.appendChild(row);
                });
            }
        }

        function renderRules() {
            // Bug Fix (v2.2.0): clear before re-render — the update button below used
            // to append duplicate rows and a duplicate button after each refresh.
            while (content.firstChild) content.removeChild(content.firstChild);
            const lastUpd = GV("rulesUpdated", 0) | 0;
            const lastHash = GV("rulesHash", "");
            const lastCheck = GV("rulesLastCheck", 0) | 0;
            const lastResult = String(GV("rulesLastResult", "") || _lastRuleResult || "");
            const dateStr = lastUpd ? new Date(lastUpd).toLocaleString() : "never";
            // v2.6.0: plain-language, honest result labels (see updateRules contract).
            const RESULT_LABELS = {
                updated: [ "Fresh database installed", "#14b8a6" ],
                current: [ "Already up to date", "#14b8a6" ],
                staged: [ "Staged — activates after a 72h soak", "#f59e0b" ],
                failed: [ "Failed — auto-retry scheduled", "#ef4444" ],
                busy: [ "Check already in progress", "#f59e0b" ],
                skipped: [ "Skipped (metered network / schedule)", "#f59e0b" ]
            };
            const rl = RESULT_LABELS[lastResult] || null;
            const rows = [ 
                [ "Loaded Cleaners", PROVIDERS.length ], 
                [ "Last Rule Update", dateStr ], 
                [ "Database Verification Hash", lastHash ? "Verified (" + lastHash.substring(0, 12) + "...)" : "Not Cached" ], 
                [ "Automatic Updates", CFG.autoUpdateRules ? "Enabled (Every 6 days)" : "Disabled" ],
                [ "Last Update Check", lastCheck ? new Date(lastCheck).toLocaleString() : "never" ]
            ];
            rows.forEach(r => {
                const row = ntEl("div", null, "display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04)");
                row.appendChild(ntEl("span", r[0], "font-size:13px;color:#9ca3af"));
                row.appendChild(ntEl("span", String(r[1]), "font-size:13px;font-weight:600;color:#dfe4ee"));
                content.appendChild(row);
            });
            if (rl) {
                const row = ntEl("div", null, "display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04)");
                row.appendChild(ntEl("span", "Last Update Result", "font-size:13px;color:#9ca3af"));
                row.appendChild(ntEl("span", rl[0], "font-size:13px;font-weight:600;color:" + rl[1]));
                content.appendChild(row);
            }

            // v3.0.0 (#3) — canary failure banner: rules self-healed, user is told.
            const canaryInfo = GV("rulesCanaryFail", null);
            if (canaryInfo) {
                let ci = null;
                try { ci = typeof canaryInfo === "string" ? JSON.parse(canaryInfo) : canaryInfo; } catch (e) {}
                if (ci) {
                    content.appendChild(ntEl("div", "A bad ruleset (" + ci.source + ") was blocked by the self-test and " + (ci.recovery === "embedded" ? "built-in safe rules were restored" : "the previous good database was restored") + ". Your protection never ran on a corrupt database.", "font-size:12px;color:#f59e0b;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.3);border-radius:8px;padding:8px 10px;line-height:1.5;margin:10px 0"));
                }
            }

            // v3.0.0 (#4) — staged rollout status + early activation.
            const pending = GV("rulesPending", null);
            if (pending && pending.data) {
                const left = Math.max(0, (pending.activateAt | 0) - Date.now());
                const hrs = Math.ceil(left / 3600000);
                content.appendChild(ntEl("div", "A fresh database verified OK and is soaking" + (left > 0 ? " — activates automatically in ~" + hrs + "h" : " — ready to activate") + ".", "font-size:12px;color:#9ca3af;line-height:1.5;margin-top:8px"));
                const actBtn = ntEl("button", left > 0 ? "Activate the staged database now" : "Activate the staged database", "margin-top:8px;width:100%;padding:9px;border:1px solid #14b8a6;border-radius:6px;background:transparent;color:#14b8a6;font-size:12px;font-weight:600;cursor:pointer");
                actBtn.addEventListener("click", function() {
                    actBtn.textContent = "Activating & self-testing…";
                    actBtn.disabled = true;
                    const res = maybeActivatePending(true);
                    actBtn.textContent = res === "updated" ? "Activated & verified" : "Activation failed — safe rules kept";
                    setTimeout(renderRules, 1200);
                });
                content.appendChild(actBtn);
            }

            // v3.0.0 (#21) — what changed in the last applied update.
            const diff = GV("rulesDiff", null);
            if (diff && typeof diff === "object") {
                const dparts = [];
                if (diff.addedProviders && diff.addedProviders.length) dparts.push("+" + diff.addedProviders.length + " cleaners (" + diff.addedProviders.slice(0, 3).join(", ") + (diff.addedProviders.length > 3 ? "…" : "") + ")");
                if (diff.removedProviders && diff.removedProviders.length) dparts.push("-" + diff.removedProviders.length + " cleaners");
                if (diff.addedRules) dparts.push("+" + diff.addedRules + " rules");
                if (diff.removedRules) dparts.push("-" + diff.removedRules + " rules");
                if (dparts.length) {
                    content.appendChild(ntEl("div", "Last database change: " + dparts.join(", ") + ".", "font-size:11px;color:#6b7280;line-height:1.5;margin-top:8px"));
                } else {
                    content.appendChild(ntEl("div", "Last database change: structural refresh (rule contents unchanged).", "font-size:11px;color:#6b7280;line-height:1.5;margin-top:8px"));
                }
            }

            // v3.0.0 (#6) — one-click rollback to previous-good database.
            const prev = GV("rulesDataPrev", null);
            if (prev && prev.data && prev.data.providers) {
                const rbBtn = ntEl("button", "Restore previous database", "margin-top:10px;width:100%;padding:9px;border:1px solid rgba(255,255,255,.14);border-radius:6px;background:transparent;color:#dfe4ee;font-size:12px;cursor:pointer");
                rbBtn.title = "Instantly reverts to the ruleset that was active before the last update — with self-test verification.";
                rbBtn.addEventListener("click", function() {
                    rbBtn.textContent = "Restoring…";
                    rbBtn.disabled = true;
                    lruClear();
                    SV("rulesData", prev.data);
                    if (prev.hash) SV("rulesHash", prev.hash);
                    DV("rulesDataPrev");
                    const okd = applyRulesVerified(prev.data, prev.hash || "", "manual rollback");
                    rbBtn.textContent = okd ? "Previous database restored" : "Restore failed canary — safe rules kept";
                    setTimeout(renderRules, 1200);
                });
                content.appendChild(rbBtn);
            }

            content.appendChild(ntEl("div", "Userscript updates are handled automatically by your userscript manager (Tampermonkey/Violentmonkey) via the GitHub feed — no manual action needed.", "font-size:11px;color:#6b7280;line-height:1.5;margin-top:10px"));
            const updBtn = ntEl("button", "Check for updates now", "margin-top:14px;width:100%;padding:10px;border:none;border-radius:6px;background:#14b8a6;color:#fff;font-size:13px;font-weight:600;cursor:pointer");
            updBtn.addEventListener("click", function() {
                updBtn.textContent = "Checking all rule feeds...";
                updBtn.disabled = true;
                // v2.6.0: updateRules now resolves with a truthful result string.
                updateRules(true).then(function(status) {
                    const lbl = RESULT_LABELS[status];
                    updBtn.textContent = lbl ? lbl[0] : "Done";
                    updBtn.title = "Result: " + status;
                    setTimeout(function() {
                        updBtn.textContent = "Check for updates now";
                        updBtn.disabled = false;
                        renderRules();
                    }, 1600);
                }).catch(function() {
                    // Contract says this never rejects, but stay truthful even then.
                    updBtn.textContent = "Update failed — auto-retry scheduled";
                    setTimeout(function() {
                        updBtn.textContent = "Check for updates now";
                        updBtn.disabled = false;
                    }, 1600);
                });
            });
            content.appendChild(updBtn);
        }

        function renderAbout() {
            content.appendChild(ntEl("div", "NullTrail v3.0.0", "font-size:15px;font-weight:700;color:#14b8a6;margin-bottom:8px"));
            content.appendChild(ntEl("div", "An autonomous, zero-jargon browser privacy engine fusing advanced hyperlink scrubbing, tracking parameter deletion, fast-forward redirect unwrapping, and strict analytical API shielding.", "font-size:12px;color:#9ca3af;line-height:1.5;margin-bottom:14px"));
            const features = [ 
                "40+ Search Engine Redirect unwrapping & sanitization", 
                "Comprehensive tracking query-parameter & anchor ping removal", 
                "Strict, robust blocking of IP logging endpoints & web sockets", 
                "Interception of background trackers and Google Analytics scripts", 
                "Multilingual, precision-scored cookie consent rejection", 
                "Self-testing rule updates with staged rollouts & 2-of-3 feed quorum", 
                "Confidence-tiered cleaning — unknown parameters are never stripped", 
                "Per-site dry-run, timed pause with auto-resume & site overrides", 
                "Viewport-first cleaning with shadow-DOM & same-origin frame coverage", 
                "Secure, sandboxed local storage to protect your whitelist" 
            ];
            content.appendChild(ntEl("div", "Core Safeguards", "font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280;margin-bottom:6px"));
            features.forEach(f => {
                content.appendChild(ntEl("div", "- " + f, "font-size:12px;color:#dfe4ee;padding:3px 0;line-height:1.4"));
            });
            content.appendChild(ntEl("div", "Control Shortcuts", "font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280;margin:14px 0 6px"));
            content.appendChild(ntEl("div", "Alt + Shift + N  —  Toggle protection on current website", "font-size:12px;color:#dfe4ee;padding:3px 0"));
            content.appendChild(ntEl("div", "Alt + Shift + D  —  Open / Close this settings dashboard", "font-size:12px;color:#dfe4ee;padding:3px 0"));
            content.appendChild(ntEl("div", "Alt + Shift + C  —  Copy a fully cleaned URL of this page", "font-size:12px;color:#dfe4ee;padding:3px 0"));

            // v3.0.0 (#22) — one-click personas over the existing toggle matrix.
            content.appendChild(ntEl("div", "Protection Personas", "font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280;margin:14px 0 6px"));
            content.appendChild(ntEl("div", "Personas only flip switches you can also set individually — nothing hidden.", "font-size:11px;color:#6b7280;line-height:1.5;margin-bottom:6px"));
            const pRow = ntEl("div", null, "display:flex;gap:6px;margin-bottom:10px");
            [ [ "Gentle", "Maximum website compatibility — every risky feature off." ],
              [ "Balanced", "The recommended default mix (as shipped)." ],
              [ "Paranoid", "Everything on, including strict respawn blocking and frame cleaning. Ad-noise stays off unless you opt in." ] ].forEach(function(p) {
                const b = ntEl("button", p[0], "flex:1;padding:8px 4px;border:1px solid rgba(255,255,255,.14);border-radius:6px;background:transparent;color:#dfe4ee;font-size:12px;font-weight:600;cursor:pointer");
                b.title = p[1];
                b.addEventListener("click", function() {
                    applyPersona(p[0].toLowerCase());
                    b.textContent = p[0] + " ✓";
                    setTimeout(function() { b.textContent = p[0]; }, 1200);
                });
                pRow.appendChild(b);
            });
            content.appendChild(pRow);

            // v3.0.0 (#23) — offline settings portability (files/clipboard only).
            content.appendChild(ntEl("div", "Backup & Transfer", "font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280;margin:14px 0 6px"));
            const bRow = ntEl("div", null, "display:flex;gap:6px;margin-bottom:6px");
            const expBtn = ntEl("button", "Export settings", "flex:1;padding:8px 4px;border:1px solid rgba(255,255,255,.14);border-radius:6px;background:transparent;color:#dfe4ee;font-size:12px;cursor:pointer");
            expBtn.title = "Downloads a JSON backup of your toggles, whitelist and site settings. Never leaves your device.";
            expBtn.addEventListener("click", function() {
                exportSettings();
            });
            const impBtn = ntEl("button", "Import settings", "flex:1;padding:8px 4px;border:1px solid rgba(255,255,255,.14);border-radius:6px;background:transparent;color:#dfe4ee;font-size:12px;cursor:pointer");
            impBtn.title = "Restore a previously exported JSON backup (validated before anything is applied).";
            impBtn.addEventListener("click", function() {
                showImportBox();
            });
            bRow.appendChild(expBtn);
            bRow.appendChild(impBtn);
            content.appendChild(bRow);
            const impTa = document.createElement("textarea");
            impTa.placeholder = "Paste an exported NullTrail JSON backup here, then press Apply import";
            ntStyle(impTa, "display:none;width:100%;min-height:90px;background:#0e1219;color:#dfe4ee;border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:8px;font-size:11px;font-family:monospace;resize:vertical;outline:none;margin-bottom:6px");
            content.appendChild(impTa);
            const impApply = ntEl("button", "Apply import", "display:none;width:100%;padding:8px;border:none;border-radius:6px;background:#14b8a6;color:#fff;font-size:12px;font-weight:600;cursor:pointer");
            impApply.addEventListener("click", function() {
                const res = importSettings(impTa.value);
                impApply.textContent = res;
                setTimeout(function() {
                    impApply.textContent = "Apply import";
                }, 1800);
            });
            content.appendChild(impApply);
            function showImportBox() {
                impTa.style.display = "block";
                impApply.style.display = "block";
            }

            // v3.0.0 (#30) — engine health (debug-gated perf counters).
            content.appendChild(ntEl("div", "Engine Health", "font-size:11px;font-weight:700;text-transform:uppercase;color:#6b7280;margin:14px 0 6px"));
            if (CFG.debug && _perf.cold.n + _perf.hit.n > 0) {
                const cAvg = _perf.cold.n ? (_perf.cold.total / _perf.cold.n).toFixed(1) : "0";
                const hAvg = _perf.hit.n ? (_perf.hit.total / _perf.hit.n).toFixed(2) : "0";
                content.appendChild(ntEl("div", "Sanitize: cold avg " + cAvg + "µs (max " + _perf.cold.max.toFixed(0) + "µs, n=" + _perf.cold.n + ") · repeat avg " + hAvg + "µs (n=" + _perf.hit.n + ")", "font-size:11px;color:#9ca3af;line-height:1.5"));
            } else {
                content.appendChild(ntEl("div", "Enable “developer logs” to start collecting on-page performance counters.", "font-size:11px;color:#6b7280;line-height:1.5"));
            }

            const resetBtn = ntEl("button", "Reset all settings to default", "margin-top:16px;padding:8px 16px;border:1px solid rgba(255,255,255,.12);border-radius:6px;background:transparent;color:#ef4444;font-size:12px;cursor:pointer");
            resetBtn.addEventListener("click", function() {
                // Hardening (v2.4.0): confirm/alert can throw in sandboxed frames.
                let agreed = false;
                try {
                    agreed = window.confirm("Are you sure you want to reset all NullTrail settings, whitelist sites, and cached rule databases?");
                } catch (e) {}
                if (agreed) {
                    [ "globalStatus", "referralMarketing", "forceRedirection", "forceNoReferrer", "relNoReferrer", "noping", "stripSERPParams", "blockGA", "blockPrivacySandbox", "blockKeepalive", "blockBounceRedirect", "blockIPLoggers", "enforcePrivacyPresets", "purgeGACookies", "purgeStorage", "showHUD", "autoUpdateRules", "whitelist", "rulesData", "rulesHash", "rulesUpdated", "rulesLastCheck", "rulesLastResult", "statCleaned", "statFields", "statBlocked", "statDaily", "unblockContextMenuSites", "unblockTextSelectionSites", "activeAdObfuscation", "serverRedirectResolution", "respectMetered", "rulesNextTry", "deepFrames", "stagedRules", "respawnStrict", "userStripRules", "siteProfiles", "dryRunSites", "pauseUntil", "ampCanonicalSites", "rulesDataPrev", "rulesPending", "rulesDiff", "rulesCanaryFail" ].forEach(DV);
                    try { window.alert("Settings successfully reset. Please reload the webpage."); } catch (e) {}
                    closeDash();
                }
            });
            content.appendChild(resetBtn);
        }
        
        ov.appendChild(box);
        ov.addEventListener("click", function(e) {
            if (e.target === ov) closeDash();
        });
        showTab(0);
        shadow.appendChild(ov);
        (document.body || document.documentElement).appendChild(container);
        // Accessibility (v2.6.0): move focus into the dialog so keyboard and
        // screen-reader users land inside it instead of staring at the page.
        try { closeBtn.focus(); } catch (e) {}
    }

    // UX safety (v2.5.0): never hijack shortcuts while the user is typing.
    function isEditableTarget(t) {
        while (t && t !== document.documentElement) {
            if (t.isContentEditable) return true;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT") return true;
            t = t.parentElement;
        }
        return false;
    }

    // v3.0.0 (#20) — copy a fully sanitized URL of the current page.
    function copyCleanPageURL() {
        try {
            const eng = getEngine(location.hostname);
            let url = location.href;
            if (eng && eng.s) {
                try {
                    const u = new URL(url);
                    if (stripEngineSearchParams(u, eng)) url = u.toString();
                } catch (e) {}
            }
            url = sanitizeHref(url);
            const done = function(okd) {
                // Transient HUD confirmation (shown even if HUD is off).
                try {
                    const wasOn = CFG.showHUD;
                    CFG.showHUD = true;
                    _pageCount = _pageCount; // no-op, display untouched below
                    updateHUD();
                    if (_hudEl) _hudEl.textContent = okd ? "Clean URL copied to clipboard" : "Copy failed — clean URL logged to console";
                    setTimeout(function() {
                        CFG.showHUD = wasOn;
                        updateHUD();
                    }, 1400);
                } catch (e) {}
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url).then(() => done(true), () => done(false));
            } else {
                const ta = document.createElement("textarea");
                ta.value = url;
                ta.style.cssText = "position:fixed;opacity:0";
                (document.body || document.documentElement).appendChild(ta);
                ta.select();
                let okd = false;
                try { okd = document.execCommand("copy"); } catch (e) {}
                ta.remove();
                done(okd);
            }
            recordActivity("copied clean page URL", url, "shortcut");
        } catch (e) {}
    }

    document.addEventListener("keydown", function(e) {
        if (isEditableTarget(e.target)) return;
        if (e.altKey && e.shiftKey && (e.key === "N" || e.key === "n" || e.code === "KeyN")) {
            e.preventDefault();
            e.stopPropagation();
            if (isWhitelisted(location.hostname)) removeWhitelist(location.hostname); 
            else addWhitelist(location.hostname);
            pushConfigToPage(); // propagate enabled/disabled state to the page world (v2.4.0)
        }
        if (e.altKey && e.shiftKey && (e.key === "D" || e.key === "d" || e.code === "KeyD")) {
            e.preventDefault();
            e.stopPropagation();
            openDashboard();
        }
        // v3.0.0 (#20): Alt+Shift+C copies a sanitized URL of this page.
        if (e.altKey && e.shiftKey && (e.key === "C" || e.key === "c" || e.code === "KeyC")) {
            e.preventDefault();
            e.stopPropagation();
            copyCleanPageURL();
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
            updateRules(true).then(function(status) {
                log("manual rule update finished:", status);
            });
        });
    }

    const cached = GV("rulesData", null);
    // v3.0.0 (#3): the cached ruleset must pass the boot canary — a corrupt or
    // tampered cache self-heals to previous-good/embedded instead of running
    // with broken matchers.
    if (cached && typeof cached === "object" && cached.providers) {
        applyRulesVerified(cached, String(GV("rulesHash", "")), "cached");
    } else {
        setRules(EMBEDDED_RULES);
    }
    // v3.0.0 (#4): activate a staged ruleset whose 72h soak has elapsed.
    maybeActivatePending(false);

    pushConfigToPage();
    getNonce();
    injectMainWorld();

    // CSP-Proof execution call directly inside the Content Script context
    const win = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;
    ntMainWorldBoot(win);

    // Privacy Fix (v2.2.0): enforce the referrer meta immediately at document-start.
    // Previously it only ran at DOMContentLoaded — after early subresource requests
    // (stylesheets, preloads, beacons) had already gone out with the site's default
    // referrer. The DOMContentLoaded re-run below remains as an idempotent catch-up.
    enforceMetaReferrer();

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function() {
            enforceMetaReferrer();
            monitorBounce();
            stripSERPBar();
            purgeGACookies();
            purgeTrackerStorage();
            applyPrivacyPresets();
            blockIPLoggerNav();
            ensureAMPCanonical(); // v3.0.0 (#15)
            scanDom();
            scanSpecial();
            scanAndClickAds();
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
        ensureAMPCanonical(); // v3.0.0 (#15)
        scanDom();
        scanSpecial();
        scanAndClickAds();
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
                ntMainWorldBoot(win);
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

    log("NullTrail v3.0.0 initialised —", PROVIDERS.length, "providers,", ENGINES.length, "engines,", DOMAIN_REDIRECTS.length, "domain bypasses,", getEngine(location.hostname) ? getEngine(location.hostname).n : "generic");
})();

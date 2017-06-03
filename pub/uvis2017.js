var batch2017jan = [{
"n": 2157,
"x": "Fixed a case of showing the wrong new pledge amount in the legit check email if you had auto-increasing pledges turned off. #bugfix",
"u": "https://twitter.com/beemuvi/status/816448028806516741",
"t": "2017-01-04 00:55:53 +0000",
"c": "[https://github.com/beeminder/beeminder/commit/720f3f05a9a6608171349cc449521798ba6b89e8 https://trello.com/c/aB2lyvJa/726-pledge-cap-no-autoincrease]",
}, { // ------------------------------------------------------------------------
"x": "Fixed checkbox that was acting like expand/collapse instead of a checkbox for whether to auto-increase pledges when you derail. mini #bugfix",
"u": "https://twitter.com/beemuvi/status/816805335851618304",
"t": "2017-01-05 00:35:42 +0000",
}, { // ------------------------------------------------------------------------
"x": "Mini #bugfix w/ pointlessly clickable things when viewing other people's graphs. Also cleaned up CSS bugs on some landing pages.",
"u": "https://twitter.com/beemuvi/status/817171195246223360",
"t": "2017-01-06 00:49:29 +0000",
}, { // ------------------------------------------------------------------------
"x": "If you set a default deadline we were accidentally applying that to autodata goals that don't support arbitrary deadlines. #bugfix",
"u": "https://twitter.com/beemuvi/status/817535853194948608",
"t": "2017-01-07 00:58:31 +0000",
}, { // ------------------------------------------------------------------------
"x": "Avoided a bunch of confusion by nixing the instant-archive buttons in the dashboard for frozen/completed goals; all done from goal pages now",
"u": "https://twitter.com/beemuvi/status/817791742523019264",
"t": "2017-01-07 17:55:19 +0000",
}, { // ------------------------------------------------------------------------
"x": "Don't mention \"safe days\" in bot email subject when it exceeds days till goal end date. Also iOS notifications now make the default sound.",
"u": "https://twitter.com/beemuvi/status/817793892049240064",
"t": "2017-01-07 18:03:52 +0000",
}, { // ------------------------------------------------------------------------
"x": "Removed now-meaningless backburner line in reminder settings, and brought back all autodata settings that got lost in the redesign",
"u": "https://twitter.com/beemuvi/status/822600228209643520",
"t": "2017-01-21 00:22:32 +0000",
}, { // ------------------------------------------------------------------------
"x": "Mini UVIs: We now refresh graph after updating weekends-off, higher-res Duolingo logo, more obvious link to change goal date / goal total",
"u": "https://twitter.com/beemuvi/status/822944514016849924",
"t": "2017-01-21 23:10:36 +0000",
}, { // ------------------------------------------------------------------------
"x": "Added button on goal page to archive frozen goals. Bonus #mini UVI: datapoint value is cleared when you submit it on dashboard.",
"u": "https://twitter.com/beemuvi/status/823321895609110528",
"t": "2017-01-23 00:10:11 +0000",
}, { // ------------------------------------------------------------------------
"x": "Pledge stepper now indicates when it hits its limit (eg, you can't pledge more than $2430). #mini",
"u": "https://twitter.com/beemuvi/status/823690513320591362",
"t": "2017-01-24 00:34:56 +0000",
}, { // ------------------------------------------------------------------------
"x": "One more thing we broke in the redesign: we weren't allowing a negative rate for Fitbit net calories goals. #bugfix",
"u": "https://twitter.com/beemuvi/status/824056999327342592",
"t": "2017-01-25 00:51:13 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now use your chosen timezone in your Beeminder settings for showing \"today\"/\"yesterday\", not whatever your browser thinks. #bugfix",
"u": "https://twitter.com/beemuvi/status/824416736787124224",
"t": "2017-01-26 00:40:41 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a 500 error for the case of opening the pledge popup for a goal (maybe just on archived goals?) with no credit card on file. #bugfix",
"u": "https://twitter.com/beemuvi/status/824775719490170880",
"t": "2017-01-27 00:27:09 +0000",
}, { // ------------------------------------------------------------------------
"x": "UI improvement: x-max can't be in the past and x-min can't be in the future. #mini",
"u": "https://twitter.com/beemuvi/status/825137206654230528",
"t": "2017-01-28 00:23:35 +0000",
}, { // ------------------------------------------------------------------------
"x": "You can now change the default GmailZero query when creating GmailZero goals, instead of having to go digging in settings afterwards.",
"u": "https://twitter.com/beemuvi/status/825137922743562240",
"t": "2017-01-28 00:26:25 +0000",
}, { // ------------------------------------------------------------------------
"x": "On /archived it says \"No archived goals!\" if you have none. And on the front page, link to autodata landing pages, not goal creation. #mini",
"u": "https://twitter.com/beemuvi/status/825144702127058945",
"t": "2017-01-28 00:53:22 +0000",
}, { // ------------------------------------------------------------------------
"x": "This counts as a UVI but we're not yet happy with the interaction between goal units & things like y-axis label: http://forum.beeminder.com/t/y-axis-label-didnt-update-in-graph-after-changed-in-settings/2652",
"u": "https://twitter.com/beemuvi/status/826231486420377600",
"t": "2017-01-31 00:51:51 +0000",
}, { // ------------------------------------------------------------------------
"x": "We're now consistent for all autodata goal creation in giving you the option to start with an arbitrary amount of safety buffer",
"u": "https://twitter.com/beemuvi/status/826594990264512512",
"t": "2017-02-01 00:56:17 +0000",
} /* ---------------------------------------------------------- end 2017jan */ ]

var batch2017feb = [{
"x": "We're obviously very behind on UVI tweets because we're just getting to our official Todoist integration! http://blog.beeminder.com/todoist/",
"u": "https://twitter.com/beemuvi/status/826950360493236224",
"t": "2017-02-02 00:28:24 +0000",
}, { // ------------------------------------------------------------------------
"x": "All Fitbit goals were getting created as Do More (or failing altogether?) for 2 months after we launched the redesign. #bugfix",
"u": "https://twitter.com/beemuvi/status/827321931829383168",
"t": "2017-02-03 01:04:54 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a couple UI bugs with changing goalnames (&amp; #bugfix w/ using numbers as goalnames). http://forum.beeminder.com/t/how-to-change-goal-url/2818",
"u": "https://twitter.com/beemuvi/status/827650491605671936",
"t": "2017-02-03 22:50:28 +0000",
}, { // ------------------------------------------------------------------------
"x": "Another embarrassing thing we broke w/ redesign: If you said \"hide y-axis\" for a while we weren't also hiding stats that leaked that info.",
"u": "https://twitter.com/beemuvi/status/827651020880699393",
"t": "2017-02-03 22:52:35 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now show the expanded road dial (w/ end date &amp; end value as well as rate) if the goal is ending within 30 days (too magical?)",
"u": "https://twitter.com/beemuvi/status/827651474821767168",
"t": "2017-02-03 22:54:23 +0000",
}, { // ------------------------------------------------------------------------
"x": "Gitminder goal creation now handles the case revoked Beeminder's authorization on GitHub (&amp; maybe other cases of bad GitHub credentials)",
"u": "https://twitter.com/beemuvi/status/828715293107064833",
"t": "2017-02-06 21:21:37 +0000",
}, { // ------------------------------------------------------------------------
"x": "More tweaks to error banners so that important ones don't get obscured. #mini",
"u": "https://twitter.com/beemuvi/status/829126787581874177",
"t": "2017-02-08 00:36:45 +0000",
}, { // ------------------------------------------------------------------------
"x": "UI tweak in Gitminder goal creation: automatically switch the radio button to specific repository if you start to type one. #mini",
"u": "https://twitter.com/beemuvi/status/829126883224625152",
"t": "2017-02-08 00:37:08 +0000",
}, { // ------------------------------------------------------------------------
"x": "More #mini UVIs: nixed superfluous logged in/out banners, fixed links to create goals on <a href=\"http://ifthismindthat.com\">ifthismindthat.com</a> and <a href=\"http://zapminder.com\">zapminder.com</a>",
"u": "https://twitter.com/beemuvi/status/829491678767570947",
"t": "2017-02-09 00:46:42 +0000",
}, { // ------------------------------------------------------------------------
"x": "We used to magically re-sort the dashboard when you entered data but that turned out to be a bad idea; now you can click \"DEADLINE\" to do so",
"u": "https://twitter.com/beemuvi/status/829847215900233728",
"t": "2017-02-10 00:19:28 +0000",
}, { // ------------------------------------------------------------------------
"x": "Mini #bugfix / UI-polish with expanding/collapsing the goals: if you do it to all of them one by one you can still undo w/ 1 click in header",
"u": "https://twitter.com/beemuvi/status/829847252495536128",
"t": "2017-02-10 00:19:37 +0000",
}, { // ------------------------------------------------------------------------
"x": "Previous UVI also fixed a nasty focus bug when entering data in succession in dashboard. Also related: we killed reverse sorting.",
"u": "https://twitter.com/beemuvi/status/830210568057270273",
"t": "2017-02-11 00:23:18 +0000",
}, { // ------------------------------------------------------------------------
"x": "Custom fine print for goals is publicly visible again and we allow hyperlinks. http://forum.beeminder.com/t/link-in-fine-print/2976/1",
"u": "https://twitter.com/beemuvi/status/830212454017748992",
"t": "2017-02-11 00:30:48 +0000",
}, { // ------------------------------------------------------------------------
"x": "We can now link directly to specific tabs in account settings, eg, https://www.beeminder.com/settings/account#account-details",
"u": "https://twitter.com/beemuvi/status/831303765802094592",
"t": "2017-02-14 00:47:17 +0000",
}, { // ------------------------------------------------------------------------
"x": "Used to be that every time we autoratched (automatically capping safety buffer) the graph would get stuck w/ buzzy bee for 5-10min. #bugfix",
"u": "https://twitter.com/beemuvi/status/831303848991956992",
"t": "2017-02-14 00:47:37 +0000",
}, { // ------------------------------------------------------------------------
"x": "Thing we broke like a year ago: when fetching your initial GmailZero count, if it's too big to fetch, we once again tell you that. #bugfix",
"u": "https://twitter.com/beemuvi/status/831640403468120064",
"t": "2017-02-14 23:04:57 +0000",
}, { // ------------------------------------------------------------------------
"x": "API #bugfix: the requestid param only did worked as advertised for creating single datapoints, not create_all. HT John Swanson",
"u": "https://twitter.com/beemuvi/status/831642893920018432",
"t": "2017-02-14 23:14:51 +0000",
"c": "When creating a datapoint via API, sending requestid param is supposed to make it act like an UPSERT, but this was broken in the create_all (multi-create) endpoint. so it would still work to make sure you weren't creating duplicate datapoints, but it wouldn't update an existing datapoint if you passed in updated parameters with the same requestid",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug in the URLminder magic that lets us fetch the plaintext version of a Google doc. https://www.beeminder.com/nanowrimo #bugfix",
"u": "https://twitter.com/beemuvi/status/832032295703830529",
"t": "2017-02-16 01:02:12 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug that meant we wouldn't show you even landing pages of some autodata integrations if you hadn't entered a credit card. #bugfix",
"u": "https://twitter.com/beemuvi/status/832032343070085121",
"t": "2017-02-16 01:02:23 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We added \"make private\" to \"new goal settings\" in account settings if you want all new goals to default to private. http://forum.beeminder.com/t/please-let-me-default-new-goals-to-private/2880",
"u": "https://twitter.com/beemuvi/status/832305201717530624",
"t": "2017-02-16 19:06:38 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "For goals denominated in hours we now display amounts in HH:MM in most places on the website.",
"u": "https://twitter.com/beemuvi/status/832306668511731713",
"t": "2017-02-16 19:12:27 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a nasty bug w/ road dial where we'd mess up the last segment of your road when you changed the rate units (daily/weekly/etc). #bugfix",
"u": "https://twitter.com/beemuvi/status/832319327185408000",
"t": "2017-02-16 20:02:46 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a 500-error involving displaying bare-mins as HH:MM for ended goals. Also stopped showing HH:MM:SS in recent data. #bugfix",
"u": "https://twitter.com/beemuvi/status/832319389248610305",
"t": "2017-02-16 20:03:00 +0000",
}, { // ------------------------------------------------------------------------
"x": "Somewhat smarter rounding and don't show integers as X.00. And another #mini #bugfix with sometimes showing \"++HH:MM\" instead of \"+HH:MM\"",
"u": "https://twitter.com/beemuvi/status/832320549879631872",
"t": "2017-02-16 20:07:37 +0000",
}, { // ------------------------------------------------------------------------
"x": "A bunch of small improvements to our datapoint format checker. You can see all the crazy example parsings at http://d.gomix.me",
"u": "https://twitter.com/beemuvi/status/832321317076504577",
"t": "2017-02-16 20:10:40 +0000",
}, { // ------------------------------------------------------------------------
"x": "Made the navigation header not annoyingly large. Also: tweaks to <a href=\"http://beeminder.com/aboutus\">beeminder.com/aboutus</a>: Capitalize \"Hours\", make our titles fit on 1 line.",
"u": "https://twitter.com/beemuvi/status/834201015926681600",
"t": "2017-02-22 00:39:55 +0000",
}, { // ------------------------------------------------------------------------
"x": "More #mini UVIs: shrunk annoyingly large navigation header, made archived gallery show 4 across, link to archive in gallery view.",
"u": "https://twitter.com/beemuvi/status/834204402223181824",
"t": "2017-02-22 00:53:22 +0000",
}, { // ------------------------------------------------------------------------
"x": "And a super #mini one: made the pledge box not have an \"i'm a button\" shadow if you're looking at someone else's goal so it's not clickable",
"u": "https://twitter.com/beemuvi/status/834204607987331072",
"t": "2017-02-22 00:54:11 +0000",
}, { // ------------------------------------------------------------------------
"x": "In goal settings for Trello goals we now link to the actual board that we're pulling data from.",
"u": "https://twitter.com/beemuvi/status/834547176843866114",
"t": "2017-02-22 23:35:26 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now show both the goalname and the description (the latter in a tiny font) on the dashboard. No more confusing toggling (for goalnames)!",
"u": "https://twitter.com/beemuvi/status/834927994535735297",
"t": "2017-02-24 00:48:40 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed missing newline in text under graph thumbnails in gallery view. #mini #bugfix #redesign And show full goal description as hovertext.",
"u": "https://twitter.com/beemuvi/status/834928140828868609",
"t": "2017-02-24 00:49:15 +0000",
}, { // ------------------------------------------------------------------------
"x": "When you had non-midnight deadlines for a goal we'd sometimes show you the wrong date for adding new data. #redesign #bugfix",
"u": "https://twitter.com/beemuvi/status/834928214552150016",
"t": "2017-02-24 00:49:33 +0000",
}, { // ------------------------------------------------------------------------
"x": "#bugfix in URLminder: don't add a new datapoint every single time we check, only when wordcount has actually changed https://www.beeminder.com/new#urlminder",
"u": "https://twitter.com/beemuvi/status/835272597826764800",
"t": "2017-02-24 23:38:00 +0000",
}, { // ------------------------------------------------------------------------
"x": "Added a new premium FAQ item at <a href=\"http://beeminder.com/premium\">beeminder.com/premium</a>. Includes my ill-advised murder joke. #yolo #mini",
"u": "https://twitter.com/beemuvi/status/836379564016201728",
"t": "2017-02-28 00:56:41 +0000",
}, { // ------------------------------------------------------------------------
"x": "#bugfix kind of: the dates used for the add-data form were being too clever and magically updating when your deadline hit; caused confusion!",
"u": "https://twitter.com/beemuvi/status/836379664083931136",
"t": "2017-02-28 00:57:05 +0000",
}, { // ------------------------------------------------------------------------
"x": "#bugfix: The iPhone beemergency badge icon didn't show up unless you remembered to manually launch the app every single day. HT Paul Schmidt",
"u": "https://twitter.com/beemuvi/status/836724603003162624",
"t": "2017-02-28 23:47:45 +0000",
}, { // ------------------------------------------------------------------------
"x": "I guess we'll count this: We now have an informative static image to show in place of graphs in case Amazon goes down and won't show them...",
"u": "https://twitter.com/beemuvi/status/836725068415717380",
"t": "2017-02-28 23:49:36 +0000",
} /* ---------------------------------------------------------- end 2017feb */ ]

var batch2017mar = [{
"x": "#bugfix w/ goal wizard that'd occasionally/rarely give a blank page when creating a goal (related to bad state from previous goal creation)",
"u": "https://twitter.com/beemuvi/status/837095751960272896",
"t": "2017-03-02 00:22:34 +0000",
}, { // ------------------------------------------------------------------------
"x": "Super facepalmy bug made us forget toggle states (countdown vs time, expanded vs not, etc) on dashboard after visiting new goal page #bugfix",
"u": "https://twitter.com/beemuvi/status/837095869421768704",
"t": "2017-03-02 00:23:02 +0000",
}, { // ------------------------------------------------------------------------
"x": "#mini UVIs: new Epson logo, made table in the middle of http://beeminder.com/api not ugly (#redesign), tweaked flash banner for premium plans",
"u": "https://twitter.com/beemuvi/status/837458622347010048",
"t": "2017-03-03 00:24:29 +0000",
}, { // ------------------------------------------------------------------------
"x": "At some point our push notifications for the Android app broke which made graphs appear to be regenerating forever. #bugfix #firebase",
"u": "https://twitter.com/beemuvi/status/837458670753456128",
"t": "2017-03-03 00:24:40 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now have proper error handling for losing authorization to read a user's Todoist data #mini #bugfix",
"u": "https://twitter.com/beemuvi/status/837821433833111553",
"t": "2017-03-04 00:26:10 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now support Romanian as one of the languages you can beemind learning on Duolingo!",
"u": "https://twitter.com/beemuvi/status/837821533942751232",
"t": "2017-03-04 00:26:34 +0000",
}, { // ------------------------------------------------------------------------
"x": "We added \"number of activities\" as a thing you can beemind via <a href=\"https://twitter.com/fitbit\">@fitbit</a> (&amp; removed \"very active time\" since Fitbit doesn't support that now)",
"u": "https://twitter.com/beemuvi/status/837821657444036608",
"t": "2017-03-04 00:27:03 +0000",
}, { // ------------------------------------------------------------------------
"x": "We made the goal descriptions smaller because we're very opinionated about people focusing on the goalnames as the main identifiers of goals",
"u": "https://twitter.com/beemuvi/status/837821793666650112",
"t": "2017-03-04 00:27:36 +0000",
}, { // ------------------------------------------------------------------------
"x": "We again let you jump from $0 to $5 pledged (even without the Beemium plan that lets you jump to any amount). #bugfix #redesign-regression",
"u": "https://twitter.com/beemuvi/status/840363555736043520",
"t": "2017-03-11 00:47:39 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Feature! We trust our users so much that when you update a failed payment method you can actually pick which charges should be retried!",
"u": "https://twitter.com/beemuvi/status/841394559523344385",
"t": "2017-03-13 21:04:30 +0000",
}, { // ------------------------------------------------------------------------
"x": "iPhone app couldn't handle safety buffer &gt;32767 days so now we cap it at that. Also fixed a redesign regression as part of prev UVI. #bugfix",
"u": "https://twitter.com/beemuvi/status/841401764553277440",
"t": "2017-03-13 21:33:07 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug where sometimes the tabs below the graph would be completely blank until you reloaded the page. #bugfix",
"u": "https://twitter.com/beemuvi/status/841786857054658561",
"t": "2017-03-14 23:03:21 +0000",
}, { // ------------------------------------------------------------------------
"x": "We made our jobs page &mdash; https://www.beeminder.com/jobs &mdash; less out of date and embarrassing! And added a little \"need help?\" footer link.",
"u": "https://twitter.com/beemuvi/status/841786998343970816",
"t": "2017-03-14 23:03:54 +0000",
}, { // ------------------------------------------------------------------------
"x": "Added link to forum post which explains the aggday custom goal setting. &amp; Fitbit \"number activities\" was buggy for the 1st 11 days. #bugfix",
"u": "https://twitter.com/beemuvi/status/842168206873657345",
"t": "2017-03-16 00:18:41 +0000",
}, { // ------------------------------------------------------------------------
"x": "We fixed our SMTP/DNS/whatever settings so outgoing mail doesn't say \"sent via mailgun dot org\" in Gmail. #mini HT our CEO's mother",
"u": "https://twitter.com/beemuvi/status/842443924195098624",
"t": "2017-03-16 18:34:18 +0000",
}, { // ------------------------------------------------------------------------
"x": "We made updates via the website &amp; Android &amp; iOS all have higher priority which noticeably improved graph regeneration times (tho still bad)",
"u": "https://twitter.com/beemuvi/status/842888435874447360",
"t": "2017-03-18 00:00:37 +0000",
}, { // ------------------------------------------------------------------------
"x": "We fixed some annoying things with the guest access (for beemium people) to our dev chat: URLs work now, and disconnects handled better",
"u": "https://twitter.com/beemuvi/status/843971141798584320",
"t": "2017-03-20 23:42:55 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug in the dashboard where quickly tripleclicking the goal would show the add data form below the collapsed goal. #bugfix",
"u": "https://twitter.com/beemuvi/status/844337564970467328",
"t": "2017-03-21 23:58:57 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now support Swahili in Duolingo! And a #mini UVI: Tooltips in the header of the big table for setting reminders for all goals at once.",
"u": "https://twitter.com/beemuvi/status/844698187176693760",
"t": "2017-03-22 23:51:56 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed the hovertext for datapoints to always show the relevant metadata and not redundantly repeat the comment as hovertext. #mini",
"u": "https://twitter.com/beemuvi/status/845413740929400832",
"t": "2017-03-24 23:15:17 +0000",
}, { // ------------------------------------------------------------------------
"x": "Email replies when you add data via the bot now never totally fail to send if we can't fetch one of the random tips of the day. #bugfix",
"u": "https://twitter.com/beemuvi/status/845413824857485312",
"t": "2017-03-24 23:15:37 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "You can now see and update the list of URLminder URLs in your goal settings. Makes URLminder much more useful! https://www.beeminder.com/nanowrimo",
"u": "https://twitter.com/beemuvi/status/846428625796710400",
"t": "2017-03-27 18:28:04 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Also URLminder now supports arbitrary deadlines!",
"u": "https://twitter.com/beemuvi/status/846497098082103296",
"t": "2017-03-27 23:00:09 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a big with strange font sizes of goalnames on the dashboard. #bugfix http://forum.beeminder.com/t/strange-font-sizes-on-dashboard/3043",
"u": "https://twitter.com/beemuvi/status/847125467559739392",
"t": "2017-03-29 16:37:04 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug with creating new Fitbit number-of-activities goal. The initial import of last week of data could insta-derail you. #bugfix",
"u": "https://twitter.com/beemuvi/status/847125582265532416",
"t": "2017-03-29 16:37:32 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "URLminder now magically fixes Dropbox links so you can beemind wordcount for any plaintext document you have sync'd with Dropbox",
"u": "https://twitter.com/beemuvi/status/847589722658529281",
"t": "2017-03-30 23:21:51 +0000",
}, { // ------------------------------------------------------------------------
"x": "Another #bugfix with Fitbit number-of-activities goals: we used the wrong endpoint and only got ones added via the website, not devices",
"u": "https://twitter.com/beemuvi/status/847940708417720320",
"t": "2017-03-31 22:36:33 +0000",
}, { // ------------------------------------------------------------------------
"x": "#bugfix for the +/- stepper buttons for Garmin &amp; Epson goal creation: hitting the \"-\" button would increase the value. Negation is tricky!",
"u": "https://twitter.com/beemuvi/status/847940755867934720",
"t": "2017-03-31 22:36:44 +0000",
}, /* --------------------------------------------------------- end 2017mar */ ]

var batch2017apr = [{
"f": true,
"x": "We upgraded our database and got graph regeneration times back down to ~5s. Phew! Now we may <a href=\"http://forum.beeminder.com/t/februarys-annoyingness-straw-poll/2995\" title=\"Forum post with our Annoyingness Straw Poll\">have to work on mass-editing of goals</a>",
"u": "https://twitter.com/beemuvi/status/849045469703528449",
"t": "2017-04-03 23:46:29 +0000",
}, { // ------------------------------------------------------------------------
"x": "We changed the smoothing constant for the purple line from .1 to .25. (<a href=\"http://forum.beeminder.com/t/any-way-to-control-exponential-moving-average-history/2938/7?u=dreev\">forum post</a>)",
"u": "https://twitter.com/beemuvi/status/849409757672812544",
"t": "2017-04-04 23:54:02 +0000",
}, { // ------------------------------------------------------------------------
"x": "We made a proper landing page for URLminder: http://beeminder.com/urlminder",
"u": "https://twitter.com/beemuvi/status/849771908128161793",
"t": "2017-04-05 23:53:05 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now always fix Dropbox and Google Docs links when you add/edit them in Settings, not just when first creating the goal.",
"u": "https://twitter.com/beemuvi/status/849771959273443328",
"t": "2017-04-05 23:53:17 +0000",
}, { // ------------------------------------------------------------------------
"x": "Goals created via <a href=\"http://beemind.me\">Beemind.me</a> now act like proper autodata goals and magically fetch data before zeno'ing instead of just hourly!",
"u": "https://twitter.com/beemuvi/status/850135561683652608",
"t": "2017-04-06 23:58:07 +0000",
}, { // ------------------------------------------------------------------------
"x": "Our Twitter hashtag-minding integration was case-sensitive with the hashtags but Twitter search results aren't so now we're not either!",
"u": "https://twitter.com/beemuvi/status/850483794507255808",
"t": "2017-04-07 23:01:52 +0000",
}, { // ------------------------------------------------------------------------
"x": "We now allow dots in the names you give 3rd-party apps that use the Beeminder API, and we no longer let you change those names! #consistency",
"u": "https://twitter.com/beemuvi/status/850484164356841472",
"t": "2017-04-07 23:03:20 +0000",
}, { // ------------------------------------------------------------------------
"x": "We added a link to our newbee-friendly blog post about beeminding writing to the <a href=\"http://beeminder.com/urlminder\">URLminder landing page</a>. #mini",
"u": "https://twitter.com/beemuvi/status/850484239959076864",
"t": "2017-04-07 23:03:38 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed our redirect from beeminder.com/services to point to https://www.beeminder.com/settings/account#account-permissions #mini",
"u": "https://twitter.com/beemuvi/status/850484557644087296",
"t": "2017-04-07 23:04:54 +0000",
}, { // ------------------------------------------------------------------------
"x": "Simplified http://forum.beeminder.com header, added an infinibee linking to Beeminder. (other improvements purely from Discourse don't count)",
"u": "https://twitter.com/beemuvi/status/852306113424801792",
"t": "2017-04-12 23:43:07 +0000",
}, { // ------------------------------------------------------------------------
"x": "Fixed a typo and added an FAQ item to http://beeminder.com/premium about the SMS bot being US-only #mini",
"u": "https://twitter.com/beemuvi/status/852307170427191297",
"t": "2017-04-12 23:47:19 +0000",
}, { // ------------------------------------------------------------------------
"x": "Also we now link to the FAQ item about SMS being US-only in the actual SMS settings, something we lost in the #redesign",
"u": "https://twitter.com/beemuvi/status/852317002890792961",
"t": "2017-04-13 00:26:23 +0000",
}, { // ------------------------------------------------------------------------
"x": "Closing another loophole: we now don't let you delete a goal that has a pending charge",
"u": "https://twitter.com/beemuvi/status/853029611386552321",
"t": "2017-04-14 23:38:02 +0000",
}, { // ------------------------------------------------------------------------
"x": "Also closed loophole where if you archived a goal and the archive took effect after derailing but before charging you, we wouldn't charge you",
"u": "https://twitter.com/beemuvi/status/853029721499590656",
"t": "2017-04-14 23:38:28 +0000",
}, { // ------------------------------------------------------------------------
"x": "And to minimize surprises, when you insta-archive a goal after derailing we warn you if there's a pending charge that'll still happen",
"u": "https://twitter.com/beemuvi/status/854120852920516609",
"t": "2017-04-17 23:54:14 +0000",
}, { // ------------------------------------------------------------------------
"x": "Safety buffer auto-trimming for do-less now asks for how much buffer you want in terms of, eg, cups of coffee (not days like do-more). #mini",
"u": "https://twitter.com/beemuvi/status/854457099840921600",
"t": "2017-04-18 22:10:22 +0000",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Big API improvement! 3rd-party apps can specify an autofetch callback so Beeminder tells them when to autofetch instead of polling",
"u": "https://twitter.com/beemuvi/status/854829206009593856",
"t": "2017-04-19 22:48:59 +0000",
}, { // ------------------------------------------------------------------------
"x": "Added documentation of the autofetch callback URL in <a href=\"http://beeminder.com/api\">beeminder.com/api</a> (grep \"autofetch\") plus some other API docs cleanup",
"u": "https://twitter.com/beemuvi/status/854829557307719680",
"t": "2017-04-19 22:50:23 +0000",
}, { // ------------------------------------------------------------------------
"x": "And we now link nicely to the docs from <a href=\"http://beeminder.com/apps/new\">beeminder.com/apps/new</a> (milking this for 3 UVIs but it's a big deal guys!!)",
"u": "https://twitter.com/beemuvi/status/854829661095723008",
"t": "2017-04-19 22:50:47 +0000",
}, { // ------------------------------------------------------------------------
"x": "Another improvement for 3rd-party apps: you can explicitly register your app as the datasource for any goal. http://blog.beeminder.com/autofetch",
"u": "https://twitter.com/beemuvi/status/855528876302192640",
"t": "2017-04-21 21:09:13 +0000",
}, { // ------------------------------------------------------------------------
"n": 2260,
"f": true,
"x": "beeminder.com/changelog now points to an archive of all 2260 (as of this one) Beeminder UVIs!",
"u": "https://twitter.com/beemuvi/status/855570654602473476",
"d": "2017-04-21",
"t": "2017-04-21 23:55:14 +0000",
"c": "[twttr#2259] This originally said 2261 but there had been a numbering error; 2260 is correct.",
}, { // ------------------------------------------------------------------------
"x": "A bunch of improvements to the styling, layout, and webcopy for beeminder.com/changelog -- it's almost pretty now, at least up to mid-2016",
"u": "https://twitter.com/beemuvi/status/856657403521126400",
"d": "2017-04-24",
}, { // ------------------------------------------------------------------------
"x": "Prettified the rest of beeminder.com/changelog and made http://beeminder.com/changelog#latest link to the bottom of the page",
"u": "https://twitter.com/beemuvi/status/857019759874850817",
"d": "2017-04-25",
"c": "Got rid of all the stuff dumped between &lt;pre&gt; tags",
}, { // ------------------------------------------------------------------------
"x": "Fixed a bug in the road editor that rejected the road if you got rid of everything except the start and end. #bugfix (<a href=\"https://trello.com/c/cnLvtiu5/818-road-editor-bug-removing-flat-spot\">Trello card</a>)",
"d": "2017-04-25",
"t": "2017-04-26",
"u": "https://twitter.com/beemuvi/status/857380213944066049",
"c": "JSON formatting error made us reject empty roads (i.e. only the initial & final rows)",
}, { // ------------------------------------------------------------------------
"x": "And a different road editor bug that made us reject most changes to the road for do-less goals. #bugfix (<a href=\"http://forum.beeminder.com/t/code-that-enforces-akrasia-horizon/3133/6?u=dreev\">forum thread</a>)",
"d": "2017-04-25",
"t": "2017-04-26",
"u": "https://twitter.com/beemuvi/status/857380935414595584",
"c": "The sadedgy parameter which we used to set on do-less goals made the user-set vini disagree with the Beebrain-computed vini. Possibly this only mattered for newish do-less goals? Like if the goal had ever derailed the vini thing might not really matter?",
}, { // ------------------------------------------------------------------------
"x": "The <a href=\"http://beeminder.com/api\">API</a> now returns the user-specified fine print for goals. (<a href=\"http://forum.beeminder.com/t/title-description-fields-returned-by-api-get-goal-request/3153\">forum thread</a>)",
"d": "2017-04-27",
"u": "https://twitter.com/beemuvi/status/857737322208444417",
"c": "HT Andy and Bee and user zzap",
}, { // ------------------------------------------------------------------------
"x": "Removed the deprecated 'edgy' parameter from the API docs and stopped setting it for all new goals",
"d": "2017-04-28",
"u": "https://twitter.com/beemuvi/status/858095193718796288",
}, { // ------------------------------------------------------------------------
"x": "Changed countdown format to be like \"1h 30m 59s\" (makes the difference from time-of-day more obvious) & no seconds if 2 or more days left",
"d": "2017-04-28",
"t": "2017-04-28",
"u": "https://twitter.com/beemuvi/status/858095475467079681",
}, { // ------------------------------------------------------------------------
"x": "Changed default format for time-to-derailment on dashboard to day/date instead of countdown; lots of simultaneous countdowns is nerveracking",
"d": "2017-04-28",
"u": "https://twitter.com/beemuvi/status/858098808311357441",
}, /* --------------------------------------------------------- end 2017apr */ ]

var batch2017may = [{
"x": "Fixed broken image for blog post on front page; trimmed whitespace when not displaying seconds; fixed formatting bug in API docs. #mini ×3",
"t": "2017-05-02",
"u": "https://twitter.com/beemuvi/status/859557387643961345",
"c": "We can't figuring out what that formatting bug actually was from looking at the commit so hopefully that's not lies. Fortunately it's a 3-for-1 UVI so there's an error margin!",
}, { // ------------------------------------------------------------------------
"x": "We were failing to update Todoist goals if you deleted the parent project of a project you had Beeminder tracking. #bugfix",
"u": "https://twitter.com/beemuvi/status/859918078896783360",
"d": "2017-04-28",
"t": "2017-05-03",
}, { // ------------------------------------------------------------------------
"x": "If you (ie, a 3rd-party app developer) tried to set your app as the datasource for a goal we were giving a 500 error. #bugfix",
"u": "https://twitter.com/beemuvi/status/859918808428855296",
"d": "2017-05-01",
"t": "2017-05-03",
"c": "Thanks Sergii Kalinchuk",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "We converted our <a href=\"http://beeminder.com/api\">API docs</a> to the vastly prettier <a href=\"http://lord.github.io/slate/\">Slate</a> and can also accept pull requests (<a href=\"http://github.com/beeminder/slate\">github.com/beeminder/apidocs</a>)!",
"u": "https://twitter.com/beemuvi/status/860280146913247232",
"d": "2017-05-04",
"t": "2017-05-04",
"c": "Redirecting to GitHub Pages for now. UPDATE: fixed the link since we renamed the repository from 'slate' to 'apidocs'.",
}, { // ------------------------------------------------------------------------
"x": "api.beeminder.com is now the canonical URL for the <a href=\"http://beeminder.com/api\">API docs</a> (still hosting it on github.io but we don't redirect to that URL now)",
"u": "https://twitter.com/beemuvi/status/860641008882556928",
"d": "2017-05-05",
"t": "2017-05-05",
"c": "Added a CNAME to beeminder.github.io/apidocs. Also got rid of the wildcard subdomain entry so notathing.beeminder.com just fails to resolve now instead of redirecting to www.beeminder.com.",
}, { // ------------------------------------------------------------------------
"x": "Added clarification and warning about auth_tokens vs access_tokens to the API docs. Also fixed some typos. #mini",
"u": "https://twitter.com/beemuvi/status/860641116105744385",
"d": "2017-05-04",
"t": "2017-05-05",
}, { // ------------------------------------------------------------------------
"x": "Fixed 2 links on http://beeminder.com/api and got rid of the search box since it was much worse than just grepping the page. #mini",
"u": "https://twitter.com/beemuvi/status/861725549445627904",
"d": "2017-05-08",
"t": "2017-05-08",
}, { // ------------------------------------------------------------------------
"x": "If you have SMS turned on but we can't SMS you cuz you didn't finish activating your phone number we now say so in the fallback email alert",
"u": "https://twitter.com/beemuvi/status/862094048592515072",
"d": "2017-05-09",
"t": "2017-05-09",
}, { // ------------------------------------------------------------------------
"x": "URLminder (and other autodata!) goals now do a re-fetch of data after you change settings, e.g. add/remove a URL or whatever.",
"u": "https://twitter.com/beemuvi/status/862094296391991296",
"d": "2017-05-09",
"t": "2017-05-09",
"c": "https://trello.com/c/VAaWDa4y/824-fetch-data-when-changing-urlminder-urls-in-goal-settings",
}, { // ------------------------------------------------------------------------
"n": 2278,
"f": true,
"x": "<a href=\"http://blog.beeminder.com/gtbee\">GTBee</a> now lets you start w/ any amt at risk, fits on any screen size w/out being pixelated, & simpler task creation by moving to own screen!",
"u": "https://twitter.com/beemuvi/status/862452309032181760",
"t": "2017-05-10",
}, { // ------------------------------------------------------------------------
"n": 2279,
"f": true,
"x": "(+) Version 4.5 of iOS app!",
"u": "https://twitter.com/beemuvi/status/862791255087955968",
"t": "2017-05-11",
"c": "This isn't actually its own UVI, just a heading for 3 related UVIs",
}, { // ------------------------------------------------------------------------
"n": 2279,
"s": true,
"x": "(1) Updated Today widget: you can now add (integer) data directly from the Today screen. And the really huge news...",
"u": "https://twitter.com/beemuvi/status/862791255087955968",
"t": "2017-05-11",
"c": "NB: This and the parent UVI are both #2280 because they were tweeted as the same UVI",
}, { // ------------------------------------------------------------------------
"n": 2280,
"s": true,
"f": true,
"x": "(2) Apple Health integration! You can now automatically sync data like steps, active energy, workout distances from Apple Health &rarr; Beeminder!",
"u": "https://twitter.com/beemuvi/status/862791436948783104",
"t": "2017-05-11",
}, { // ------------------------------------------------------------------------
"n": 2281,
"s": true,
"x": "(3) The goal screen in the iOS app now includes a button to view the goal on mobile Safari.",
"u": "https://twitter.com/beemuvi/status/862792205974478848",
"t": "2017-05-11",
}, { // ------------------------------------------------------------------------
"n": 2282,
"x": "Version 4.5.1 of the iOS app fixes a crash that was occurring with the Today screen if you had less than three Beeminder goals. #bugfix",
"u": "https://twitter.com/beemuvi/status/864003196414377984",
"d": "2017-05-12",
"t": "2017-05-14",
}, { // ------------------------------------------------------------------------
"n": 2283,
"x": "The footer of the website (including links to mobile apps!) has been missing since October when viewed on mobile devices. #bugfix #redesign #facepalm",
"u": "https://twitter.com/beemuvi/status/864628931139219457",
"c": "[recreated from Andy's 'mobile' branch]",
}, { // ------------------------------------------------------------------------
"x": "Added error checking to the goal creation API call for the pledge parameter so you can only start at pledges the user is allowed to start at",
"u": "https://twitter.com/beemuvi/status/864629166339112960",
"c": "HT Sergii Kalinchuk",
}, { // ------------------------------------------------------------------------
"x": "We were previously only alerting you about a failed credit card payment if it was for a derailment. Now we do so for API charges, IFTTT, etc.",
"u": "https://twitter.com/beemuvi/status/864989541416837120",
"d": "2017-05-16",
"t": "2017-05-17",
"c": "Part of PayPal deploy; and what about premium payments??",
}, { // ------------------------------------------------------------------------
"x": "We no longer show the \"Beeminder can't be a credible threat until you add a credit card\" banner if you're already on the payments page. #mini",
"u": "https://twitter.com/beemuvi/status/865271047813070848",
"d": "2017-05-16",
"t": "2017-05-18",
"c": "Part of PayPal deploy",
}, { // ------------------------------------------------------------------------
"x": "Apple Health is now listed as an integration on https://www.beeminder.com/new with a link to (a draft of) instructions for setting it up",
"u": "https://twitter.com/beemuvi/status/865704379856207872",
"d": "2017-05-19",
"t": "2017-05-19",
}, { // ------------------------------------------------------------------------
"x": "Nixed \"red archive button\" copy (cuz it's not red anymore) + version 4.5.2 of the iOS app: #bugfix for a crash that happened in obscure situations", 
"u": "https://twitter.com/beemuvi/status/865704826541178880",
"t": "2017-05-19",
"c": "Copy fix was May 18 and beemiOS 4.5.2 should hit the app store May 21",
}, { // ------------------------------------------------------------------------
"f": true,
"x": "Road Editor's Undo button now available for an hour after any change so you can revert unwanted edits. HT @kenoubi (<a href=\"http://forum.beeminder.com/t/road-editor-isnt-really-useful-right-now/3051\">forum thread</a>)",
"u": "https://twitter.com/beemuvi/status/866776780954140674",
"d": "2017-05-19",
"t": "2017-05-22",
"c": "Also the Mysterious Mystery with double-submit that might've been user-visible",
}, { // ------------------------------------------------------------------------
"x": "Dashboard sorting is now stable, meaning it breaks ties in favor of how things are currently sorted. HT @PhilipHellyer",
"u": "https://twitter.com/beemuvi/status/867120030101553153",
"d": "2017-05-20",
"t": "2017-05-23",
"c": "Also some refactoring to make opinionated sorting simpler; also more opinionated, for instance sorting by losedate, then pledge, and then slug so that the goals with the highest pledges appear at the top of their losedate cohort",
}, { // ------------------------------------------------------------------------
"x": "Stopped confusingly showing 2 buttons (one disabled) for each plan on http://beeminder.com/premium if you hadn't confirmed your email address",
"u": "https://twitter.com/beemuvi/status/867516336355725312",
"d": "2017-05-16",
"t": "2017-05-24",
"c": "Part of PayPal deploy. There was a disabled button that said 'add card' and then below it a second button that said 'resend confirmation email' so we got rid of the disabled one altogether [https://github.com/beeminder/beeminder/commit/d44b6229a98dfcb286dfeafbee5b41b6cedde63d]",
}, { // ------------------------------------------------------------------------
"n": 2292,
"x": "We had a regression of <a href=\"#2037\">#2037</a> which is now fixed for real! #redesign-regression",
"u": "https://twitter.com/beemuvi/status/867527470454407168",
"d": "2017-05-16",
"t": "2017-05-24",
"c": "Part of PayPal deploy. We were disallowing it from the 'credible threat' banner, and were disallowing on premium page and on commitwall page, but not on the actual payments page itself. [original commit = https://github.com/beeminder/beeminder/commit/bbbaf6bf8e4e9ade59df70ef04cbc9e3e952c401 and new commit = https://github.com/beeminder/beeminder/commit/618787d83dcefb803a01af876ca7a41527411dc4]",
}, { // ------------------------------------------------------------------------
"n": 2293,
"x": "We introduced a bug (part of upcoming PayPal integration) where we'd give a 500 error on your goal page if you had a pledge stepdown pending. #bugfix",
"u": "https://twitter.com/beemuvi/status/867885487918329856",
"t": "2017-05-25",
"c": "Something with dollars() vs centsible() and only affected one person before we caught it."
}, { // ------------------------------------------------------------------------
"n": 2294,
"x": "We now automatically email you if Beeminder loses its authorization to fetch your data from an autodata integration",
"u": "https://twitter.com/beemuvi/status/868245706133221376",
"d": "2017-05-17",
"t": "2017-05-26",
"c": "https://trello.com/c/OKjDZJ3Q/811-email-user-when-a-service-authorization-expires https://github.com/beeminder/beeminder/commit/3688bcc826cb679cb4049e48174828db362e06de",
}, { // ------------------------------------------------------------------------
"n": 2295,
"x": "Change in the Habitica API that we now handle for when a user's API key changes (or user's account deleted). Failed silently before! #bugfix",
"u": "https://twitter.com/beemuvi/status/868245842485891072",
"d": "2017-05-23",
"t": "2017-05-26",
"c": "https://github.com/beeminder/beeminder/commit/26adb8cde4fd61b70a01f63eb30887b8bf740c97",
}, { // ------------------------------------------------------------------------
"n": 2296,
"x": "Fixed bug that (rarely but nastily) caused a 500 error on goal pages after adding a credit card. #bugfix",
"u": "https://twitter.com/beemuvi/status/869335845521637377",
"t": "2017-05-29",
"c": "Part of PayPal deploy. This was a timing issue: 1) add credit card to stripe; 2) queue up pledges job; 3) save user. But if 2 got executed immediately, before the user got saved, then error. Otherwise no error. A case of failing loudly being very helpful, because it was a pretty nasty bug, but we caught it right away for the handful of people who encountered it. https://github.com/beeminder/beeminder/commit/5870c47a862aa6c2e2204778516526f351d36ec0",
}, { // ------------------------------------------------------------------------
"n": 2297,
"x": "We broke the ability to start goals with $0 pledges for 5 days. #bugfix #regression http://forum.beeminder.com/t/pledge-upgrade-on-startup/3193",
"u": "https://twitter.com/beemuvi/status/869704026933174272",
"d": "2017-05-21",
"t": "2017-05-30",
"c": "Originally mistakenly tweeted as being a redesign regression. Spec for how this was supposed to work: http://blog.beeminder.com/deathtofreebees/ & Commit that fixed it again: https://github.com/beeminder/beeminder/commit/8be93db3376a1c24c5e88cc7597ef4712edec9fe",
}, { // ------------------------------------------------------------------------
"n": 2298,
"x": "Handling timeouts from 3rd party autofetch urls (eg Beemind.me): retry couple times then show user an error message (like w/ other autodata)",
"u": "https://twitter.com/beemuvi/status/870065420086136832",
"d": "2017-05-25",
"t": "2017-05-31",
"c": "[twttr#2297] We pointed publicly to #2298 but there had been a numbering mishap and we meant the previous UVI about $0 pledges, #2297. https://github.com/beeminder/beeminder/commit/ebed9c3edc1e1f749592d93d03d6050ea69b6f16",
}, { // ------------------------------------------------------------------------
"n": 2299,
"x": "We now notice if a Twitter account we're autofetching tweet counts from gets deleted (or becomes private) & show an error, not silently fail",
"u": "https://twitter.com/beemuvi/status/870066574660481024",
"d": "2017-05-25",
"t": "2017-05-31",
"c": "[twttr#2298] https://github.com/beeminder/beeminder/commit/bcd878d52a938fd1b407e109e9c430a0252ceeed",
}, /* --------------------------------------------------------- end 2017may */ ]

var batch2017jun = [{
"n": 2300,
"x": "<a href=\"http://blog.beeminder.com/gtbee\">GTBee</a> 1.4! It now shows you your list of your completed tasks (only starting from when you upgrade though) http://forum.beeminder.com/t/gtbee/3209",
"u": "https://twitter.com/beemuvi/status/870427512588730368",
"d": "2017-05-30",
"t": "2017-06-01",
"c": "[twttr#2300] Twitter numbers should match again from now on!",
}, { // ------------------------------------------------------------------------
"n": 2301,
"x": "GTBee now does <a href=\"http://blog.beeminder.com/zeno/\">Zeno polling</a>, hounding you more and more frequently as your deadline approaches, not just at T minus 1 day & T minus 1 hour",
"u": "https://twitter.com/beemuvi/status/870428073975361536",
"d": "2017-05-30",
"t": "2017-06-01",
"c": "https://trello.com/c/Ak9g8hPN/46-zeno-polling",
}, { // ------------------------------------------------------------------------
"n": 2302,
"x": "We revamped the layout of <a href=\"http://beeminder.com/premium\">/premium</a>, mainly making it much easier to compare the different perqs between plans (not separated in boxes)",
"u": "https://twitter.com/beemuvi/status/870774547380711424",
"d": "2017-05-26",
"t": "2017-06-02",
}, { // ------------------------------------------------------------------------
"n": 2303,
"x": "Also changed the styling of the discount slider and colors and moved things like coupon alerts and discount amounts to be more noticeable",
"u": "https://twitter.com/beemuvi/status/870774928441724929",
"d": "2017-05-26",
"t": "2017-06-02",
"c": "buttons and titles and disables oh my",
}, { // ------------------------------------------------------------------------
"n": 2304,
"x": "And a #bugfix we caught later: fixing the hover effects on links and buttons in the popups for changing plans",
"u": "https://twitter.com/beemuvi/status/870775233866735617",
"d": "2017-05-26",
"t": "2017-06-02",
}, /* --------------------------------------------------------- end 2017jun */ ]


/*
STAGED: ------10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140  
}, { // ------------------------------------------------------------------------
"x": "One more for http://beeminder.com/premium: legacy plans aren't displayed jankily anymore [TODO: and clearly indicate their legacy-ness]
"d": "2017-05-26",
"t": "2017-06-XX",
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
}, { // ------------------------------------------------------------------------
CANDIDATES: --10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140  
* fixed some (most? many?) of the thing where flash banner shows up again after you leave current page and go to another page [maybe this mostly only happens for admins?]
IDEAS: -------10--------20--------30--------40--------50--------60--------70--------80--------90-------100-------110-------120-------130-------140  
1. fix FAQ copy: "form below your graph"
2. github issues tagged UVI & PEA
-->
*/

var staged = [{
}, /* ---------------------------------------------------------- end staged */ ]

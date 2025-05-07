# Fandom Top Contributors Webhook

This project is a Discord webhook 'bot' that fetches contributor data from a Fandom wiki and posts a summary to a Discord channel every week. The bot is designed to be run via a scheduler like GitHub Actions.

Using GitHub Actions is recommended.


## Setup
1. Fork or clone the template using the "Use this template" button
2. Create your repository and stuff
3. Head into the repo's settings and go to "Secrets and variables"
4. Add the webhook variable into Secrets, and everything else into Variables
5. And you're done!

You may also test if it works or not by going to "Actions" and manually run "Weekly Discord Webhook". Also, the schedule can be changed in the `schedule.yaml` file, which means the bot can be run daily or biweekly if you so choose to.

## Environment Variables

To run this project, you need to set up the following environment/secret variables. You can create a `.env` file in the root of your project for local development, or you can hardcode it in the `config.ts` file.

```
WEBHOOK_URL=your_discord_webhook_url
FANDOM_SUBDOMAIN=your_fandom_subdomain
EMBED_COLOR=your_hexadecimal_color
TOP_N_CONTRIBUTORS=your_number_lol
```

-   `WEBHOOK_URL`: (SECRET) The Discord webhook URL to send messages to.
-   `FANDOM_SUBDOMAIN`: (VAR) The subdomain of the Fandom wiki to fetch data from (e.g., `tds` for `tds.fandom.com`). Defaults to `tds` if not set.
-   `EMBED_COLOR`: (VAR) The hexadecimal color code that shows up on the left of the Discord embed. Defaults to `0099FF` (cyanish blue) if not set.
-   `TOP_N_CONTRIBUTORS`:  (VAR) The number of top contributors to display in the list. The theoretical maximum that could be displayed is `29`, however, it is likely around `25` due to limitations. Defaults to `5` if not set.

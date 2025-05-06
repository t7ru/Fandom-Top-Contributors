# Discord Webhook Bot

This project is a Discord webhook 'bot' that fetches contributor data from a Fandom wiki and posts a summary to a Discord channel every week. The bot is designed to be run via a scheduler like GitHub Actions.

## Environment Variables

To run this project, you need to set up the following environment variables. You can create a `.env` file in the root of your project for local development.

```
WEBHOOK_URL=your_discord_webhook_url
FANDOM_SUBDOMAIN=your_fandom_subdomain
EMBED_COLOR=your_hexadecimal_color
TOP_N_CONTRIBUTORS=your_number_lol
```

-   `WEBHOOK_URL`: (Required) The Discord webhook URL to send messages to.
-   `FANDOM_SUBDOMAIN`: The subdomain of the Fandom wiki to fetch data from (e.g., `tds` for `tds.fandom.com`). Defaults to `tds` if not set.
-   `EMBED_COLOR`: The hexadecimal color code that shows up on the left of the Discord embed. Defaults to `0x0099FF` (cyanish blue) if not set.
-   `TOP_N_CONTRIBUTORS`: The number of top contributors to display in the list. Defaults to `5` if not set. The theoretical maximum that could be displayed is `29`, however, it is likely around `25` due to limitations.
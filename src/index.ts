import { fetchData } from './fetchData';
import { sendWebhook } from './discordWebhook';
import { Contributor } from './types';
import { FANDOM_SUBDOMAIN, EMBED_COLOR, TOP_N_CONTRIBUTORS } from './config';

// Extract image URL from avatar HTML
function extractAvatarUrl(avatarHtml: string): string | undefined {
    const match = avatarHtml.match(/<img src="([^"]+)"/);
    return match ? match[1] : undefined;
}

// The meat
async function main() {
    try {
        const data = await fetchData();
        // console.log('Fetched data:', data); // Debug: see the structure
        const contributors = data.contributors;
        if (contributors && contributors.length > 0) {
            const numberOfContributorsToShow = Math.min(contributors.length, TOP_N_CONTRIBUTORS, 29);
            const topContributors = contributors.slice(0, numberOfContributorsToShow);

            const now = new Date();
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0'); // JavaScript months are 0 indexed
            const year = now.getFullYear();
            const formattedDateString = `Week ending ${day}/${month}/${year}`;

            const embed = {
                title: `Top ${topContributors.length} Contributors`,
                url: "https://github.com/Paradoxum-Wikis/Fandom-Top-Contributors",
                fields: topContributors.map((c: Contributor, i: number) => {
                    const profileUrl = `https://${FANDOM_SUBDOMAIN}.fandom.com${c.profileUrl}`;
                    const displayName = c.isAdmin ? `${c.userName} :star2:` : c.userName;
                    return {
                        name: `${i + 1}. ${displayName}`,
                        value: `Contributions: ${c.contributions}\n[Profile](${profileUrl})`,
                        inline: false,
                    };
                }),
                thumbnail: topContributors.length > 0 ? { url: extractAvatarUrl(topContributors[0].avatar) } : undefined,
                timestamp: new Date().toISOString(),
                footer: {
                    text: formattedDateString
                },
                color: EMBED_COLOR,
            };
            
            // Filter out thumbnail if URL is undefined
            if (embed.thumbnail && !embed.thumbnail.url) {
                delete embed.thumbnail;
            }

            await sendWebhook({ embeds: [embed] });
        } else {
            await sendWebhook({ content: 'No contributors found in the data.' });
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
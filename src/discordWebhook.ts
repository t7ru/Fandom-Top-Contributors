import axios from 'axios';
import { WEBHOOK_URL } from './config';

export const sendWebhook = async (payload: any) => {
    if (!WEBHOOK_URL) {
        console.error('Error: WEBHOOK_URL is not defined in environment variables.');
        return;
    }
    try {
        await axios.post(WEBHOOK_URL, payload);
    } catch (error) {
        console.error('Error sending webhook:', error);
    }
};
import axios from 'axios';
import { FeedResponse } from './types';
import { FANDOM_SUBDOMAIN } from './config';

const API_PATH = '/wikia.php?controller=CommunityPageController&method=getTopContributorsData&format=json&uselang=en';
const DATA_URL = `https://${FANDOM_SUBDOMAIN}.fandom.com${API_PATH}`;

export const fetchData = async (): Promise<FeedResponse> => {
    try {
        const response = await axios.get(DATA_URL);
        return response.data as FeedResponse;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }
};
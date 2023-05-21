import axios from 'axios';

const API_KEY = 'AIzaSyBYUJYPckDVjrgwbEIm4Z_kioyJVryOd3g';

export default {
  checkSite(url) {
    const endpoint = 'https://safebrowsing.googleapis.com/v4/threatMatches:find';
    const requestBody = {
      client: {
        clientId: '520593454073-34thjdcuk31595giqiklrtbv7lupkcve.apps.googleusercontent.com',
        clientVersion: '1.0.0',
      },
      threatInfo: {
        threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING', 'UNWANTED_SOFTWARE'],
        platformTypes: ['ANY_PLATFORM'],
        threatEntryTypes: ['URL'],
        threatEntries: [{ url }],
      },
    };

    const config = {
      params: {
        key: API_KEY,
      },
    };

    return axios.post(endpoint, requestBody, config);
  },
};

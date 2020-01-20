const axios = require('axios');
const baseURL = 'https://csm-api-staging.enouvo.com/api/v1/auth';

export const callAPI = (endpoint, method = 'GET', body) => {
  return axios({
    method: method,
    url: baseURL + '/' + endpoint,
    data: body,
  });
};

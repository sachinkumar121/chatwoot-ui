import endPoints from '@/api/endPoints';
import { API } from '@/helpers/axios';
import agents from '@/mock-data/agents.js';

export const getAvailableAgents = async websiteToken => {
  // TODO: Should return from our API.
  return Promise.resolve(agents);
  const urlData = endPoints.getAvailableAgents(websiteToken);
  console.log(JSON.stringify(urlData))
  return API.get(urlData.url, { params: urlData.params });
};

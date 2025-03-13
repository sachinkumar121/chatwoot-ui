import endPoints from '@/api/endPoints';
import { API } from '@/helpers/axios';

export const getMostReadArticles = async (slug, locale) => {
  const urlData = endPoints.getMostReadArticles(slug, locale);
  return API.get(urlData.url, { params: urlData.params });
};

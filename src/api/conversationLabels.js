import { API } from '@/helpers/axios';

const buildUrl = endPoint => `/api/v1/${endPoint}${window.location.search}`;

export default {
  create(label) {
    return API.post(buildUrl('@/labels'), { label });
  },
  destroy(label) {
    return API.delete(buildUrl(`widget/labels/${label}`));
  },
};

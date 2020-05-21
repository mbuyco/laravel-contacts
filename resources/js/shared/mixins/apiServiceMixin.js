import createApiService from '../services/apiService';

const apiServiceMixin = (baseURL, headers = {}) => {
  return {
    created() {
      this.apiService = createApiService({ baseURL, headers });
    },
  };
};

export default apiServiceMixin;

import axios from 'axios';

const formatResponse = ({ data }) => data;
const formatRequestData = ({ id, ...formattedRequest}) => formattedRequest;

const createApiService = ({
  baseURL,
  headers = {},
}) => {
  const serviceInstance = axios.create({
    baseURL,
    headers,
  });

  return {
    create: (data) => serviceInstance.post('/', formatRequestData(data)).then(formatResponse),
    delete: (id) => serviceInstance.delete(`/${id}`).then(formatResponse),
    list: (query) => serviceInstance.get('/', { params: query }).then(formatResponse),
    show: (id) => serviceInstance.get(`/${id}`).then(formatResponse),
    update: (id, data) => serviceInstance.put(`/${id}`, formatRequestData(data)).then(formatResponse),
  };
};

export default createApiService;

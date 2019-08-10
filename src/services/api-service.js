import dbConfig from '../../db-config';

const apiRoute = {
  root: 'api',
  roles: 'roles'
};

const rootApiUri = `https://${dbConfig.host}:${dbConfig.port}/${apiRoute.root}/`;

const apiService = {
  apiUri: {
    roles: rootApiUri + apiRoute.roles
  }
};

export default apiService;

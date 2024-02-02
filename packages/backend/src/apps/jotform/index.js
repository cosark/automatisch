import defineApp from '../../helpers/define-app.js';
import addAuthHeader from './common/add-auth-header.js';
import auth from './auth/index.js';
import setBaseUrl from './common/set-base-url.js';

export default defineApp({
  name: 'Jotform',
  key: 'jotform',
  iconUrl: '{BASE_URL}/apps/jotform/assets/favicon.svg',
  authDocUrl: 'https://automatisch.io/docs/apps/jotform/connection',
  supportsConnections: true,
  baseUrl: 'https://www.jotform.com',
  apiBaseUrl: 'https://api.jotform.com',
  primaryColor: 'FF6100',
  beforeRequest: [setBaseUrl, addAuthHeader],
  auth,
});

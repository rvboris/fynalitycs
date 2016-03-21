import { createAction } from 'redux-actions';

import config from '../config';

const USER_API = `${config.apiUrl}/user`;
const AUTH_API = `${config.apiUrl}/auth`;

export const login = createAction('LOGIN',
  null,
  (values) => ({
    request: {
      url: `${AUTH_API}/login`,
      method: 'post',
      values,
    },
  })
);

export const register = createAction('REGISTER',
  null,
  (values) => ({
    request: {
      url: `${AUTH_API}/register`,
      method: 'post',
      values,
    },
  })
);

export const getProfile = createAction('GET_PROFILE',
  null,
  () => ({
    request: {
      url: `${USER_API}/profile`,
      method: 'get',
    },
  })
);

export const logout = createAction('LOGOUT',
  null,
  () => ({
    request: {
      url: `${AUTH_API}/logout`,
      method: 'post',
    },
  })
);

export const setToken = createAction('SET_TOKEN',
  (token) => ({ token })
);

export const removeToken = createAction('REMOVE_TOKEN');

export const setUserAgent = createAction('SET_USER_AGENT',
  (userAgent) => ({ userAgent })
);

export default {
  login,
  register,
  getProfile,
  logout,
  setToken,
  removeToken,
  setUserAgent,
};
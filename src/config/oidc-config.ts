const CLIENT_BASE_URL = process.env.VUE_APP_CLIENT_BASE_URL;

export const userManagerConfig = {
  authority: process.env.VUE_APP_KEYCLOAK_URL,
  client_id: process.env.VUE_APP_CLIENT_ID,
  redirect_uri: CLIENT_BASE_URL + "/callback.html",
  automaticSilentRenew: true,
  silent_redirect_uri: CLIENT_BASE_URL + "/silent-renew.html",
  response_type: "code",
  scope: "openid profile",
  post_logout_redirect_uri: CLIENT_BASE_URL + "/",
  filterProtocolClaims: true,
};

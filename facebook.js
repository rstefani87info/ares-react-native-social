import { LoginManager, AccessToken } from 'react-native-fbsdk';

export async function login(callback , errorCallback){
  const loginResults = await LoginManager.logInWithPermissions(['public_profile']);

  if (loginResults.isCancelled) {
    console.log('Login cancelled');
    return;
  }

  const accessToken = await AccessToken.getCurrentAccessToken();

  if (!accessToken) {
    console.log('Error getting access token');
    errorCallback('Error getting access token');
    return;
  }

  console.log('Facebook access token:', accessToken.accessToken);

  const { userID } = accessToken;
  const response = await fetch(`https://graph.facebook.com/v15.0/${userID}?fields=name,email&access_token=${accessToken.accessToken}`);
  const user = await response.json();
  return await callback(user);
};
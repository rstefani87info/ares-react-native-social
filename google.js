import * as GoogleSignIn from "@react-native-google-signin/google-signin";

export async function login(callback, errorCallback) {
  try {
    await GoogleSignIn.configure({});
    const userInfo = await GoogleSignIn.signIn();
    const accessToken = userInfo.accessToken;
    console.log("Google access token:", accessToken);
    const user = userInfo.user;
    console.log("Google user data:", user);
    return callback(user);
  } catch (error) {
    return errorCallback(error);
  }
}

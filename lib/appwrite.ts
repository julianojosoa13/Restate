import * as Linking from "expo-linking";

import { openAuthSessionAsync } from "expo-web-browser";

import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";

export const config = {
  platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM,
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  prodectID: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

console.log("Config >> ", config);
const client = new Client();

client
  .setEndpoint(config.endpoint!)
  .setProject(config.prodectID!)
  .setPlatform(config.platform!);

export const avatar = new Avatars(client);

export const account = new Account(client);

export const login = async () => {
  try {
    const redirectUri = Linking.createURL("/");

    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );

    if (!response) throw new Error("Failed to log in");

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );

    console.log(browserResult);

    if (browserResult.type !== "success")
      throw new Error("Create OAuth2 token failed");

    const url = new URL(browserResult.url);

    const secret = url.searchParams.get("secret")?.toString();

    const userId = url.searchParams.get("userId")?.toString();

    if (!userId || !secret) throw new Error("Failed to log in");

    const session = await account.createSession(userId, secret);

    if (!session) throw Error("Failed to create a session");
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const logout = async () => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await account.get();

    if (response.$id) {
      const userAvatar = avatar.getInitials(response.name);
      return {
        ...response,
        avatar: userAvatar.toString,
      };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

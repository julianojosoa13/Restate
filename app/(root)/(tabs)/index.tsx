import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=" text-3xl my-10 font-rubik-extrabold ">
        Welcome to ReState
      </Text>
      <Link href={"/signIn"}>Sign In</Link>
      <Link href={"/Explore"}>Explore</Link>
      <Link href={"/Profile"}>Profile</Link>
      <Link href={"/properties/1"}>Property</Link>
    </View>
  );
}

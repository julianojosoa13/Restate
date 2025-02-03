import images from "@/constants/images";
import React, { FC } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

interface Props {}

const signIn: FC<Props> = (props) => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to ReState
          </Text>
          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's get you close to {"\n"}
            <Text className="text-primary-300">Your ideal home</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;

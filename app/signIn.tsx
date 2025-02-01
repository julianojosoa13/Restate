import React, { FC } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

interface Props {}

const signIn: FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Sign In</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default signIn;

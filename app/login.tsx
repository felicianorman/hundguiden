import { StyleSheet, Text } from "react-native";

import ThemedView from "../components/ThemedView";

export default function Login() {
  return (
    <ThemedView style={styles.container}>
      <Text>Login</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
  },
});
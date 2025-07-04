import { StyleSheet, Text } from "react-native";

import ThemedCard from "@/components/ThemedCard";
import Spacer from "../components/Spacer";
import ThemedView from "../components/ThemedView";

export default function Login() {
  return (
    <ThemedView style={styles.container}>
      <ThemedCard style={styles.card}>
        <Text>Login</Text>
        <Spacer height={50} />
        <Text>Login</Text>
      </ThemedCard>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "80%",
    height: "50%",
    borderWidth: 1,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
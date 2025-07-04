import { Link } from "expo-router";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export default function Index() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.primary,
      }}
    >
      <Text style={{ color: theme.secondary }}>hello hundguiden</Text>
      <Link href="/login" style={{ color: theme.secondary }}>Login</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
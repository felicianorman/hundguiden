import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import ThemedView from "../components/ThemedView";
import { Colors } from "../constants/Colors";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <ThemedView>
      <Stack 
        screenOptions={{ 
          headerStyle: { backgroundColor: theme.primary },
          headerTintColor: theme.secondary,
          contentStyle: { backgroundColor: theme.tertiary }
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Hundguiden' }} />
        <Stack.Screen name="login" options={{ title: 'Login' }} />
      </Stack>
    </ThemedView>
  );
}

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, useColorScheme, View } from "react-native";
import ThemedView from "../components/ThemedView";
import { Colors } from "../constants/Colors";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.text} />
      </View>
    );
  }

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

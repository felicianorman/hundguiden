import { Stack } from "expo-router";
import { useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <View style={{ flex: 1, backgroundColor: theme.primary }}>
      <Stack 
        screenOptions={{ 
          headerStyle: { backgroundColor: theme.primary },
          headerTintColor: theme.secondary,
          contentStyle: { backgroundColor: theme.primary }
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Hundguiden' }} />
        <Stack.Screen name="login" options={{ title: 'Login' }} />
      </Stack>
    </View>
  );
}

import { StyleProp, Text, TextStyle, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

interface ThemedTextProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
}

export default function ThemedText({ children, style, ...props }: ThemedTextProps) {
    const colorScheme = useColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
    const textColor = theme.text;

    return <Text style={[style, { color: textColor }]} {...props}>{children}</Text>;
}
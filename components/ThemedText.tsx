import { Colors } from "@/constants/Colors";
import { Text, useColorScheme } from "react-native";

interface ThemedTextProps {
    children: React.ReactNode;
    style?: any;
}

export default function ThemedText({ children, style, ...props }: ThemedTextProps) {
    const colorScheme = useColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
    const textColor = theme.text;

    return <Text style={[style, { color: textColor }]} {...props}>{children}</Text>;
}
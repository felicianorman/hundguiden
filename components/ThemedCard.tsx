import React from "react";
import { StyleProp, View, ViewStyle, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

interface ThemedCardProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export default function ThemedCard({ children, style }: ThemedCardProps) {
    const colorScheme = useColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

    return (
        <View
            style={[
                {
                    backgroundColor: theme.tertiary,
                    borderRadius: 10,
                    padding: 10,
                    margin: 10,
                },
                style,
            ]}
        >
            {children}
        </View>
    );
}

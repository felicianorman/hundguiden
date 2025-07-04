import React from "react";
import { Image, ImageStyle, useColorScheme } from "react-native";

interface ThemedLogoProps {
  style?: ImageStyle;
}

export default function ThemedLogo({ style }: ThemedLogoProps) {
  const colorScheme = useColorScheme();
  const logoSource =
    colorScheme === "dark"
      ? require("../assets/images/logo_dark.png")
      : require("../assets/images/logo_light.png");

  return (
    <Image
      source={logoSource}
      style={[
        { width: 300, height: 300, resizeMode: "contain" },
        style,
      ]}
    />
  );
} 
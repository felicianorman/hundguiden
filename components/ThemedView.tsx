import React from 'react';
import { StyleProp, View, ViewStyle, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

interface ThemedViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function ThemedView({ children, style }: ThemedViewProps) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <View 
      style={[
        { 
          flex: 1, 
          backgroundColor: theme.primary 
        }, 
        style
      ]}
    >
      {children}
    </View>
  );
}
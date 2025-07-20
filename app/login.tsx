import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Spacer from "../components/Spacer";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";

export default function Login() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.inner}>
        <ThemedLogo />
        
        <ThemedText style={styles.subtitle}>
          Upptäck hundvänliga platser nära dig
        </ThemedText>
        <Spacer height={20} />
        {/* Google Login Button */}
        <TouchableOpacity style={styles.googleButton}>
          <AntDesign name="google" size={24} color="#4285F4" style={{ marginRight: 8 }} />
          <Text style={styles.googleButtonText}>Fortsätt med Google</Text>
        </TouchableOpacity>
        <Spacer height={16} />
        {/* Apple Login Button */}
        <TouchableOpacity style={styles.appleButton}>
          <FontAwesome name="apple" size={24} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.appleButtonText}>Fortsätt med Apple</Text>
        </TouchableOpacity>
        <Spacer height={32} />
        <ThemedText style={styles.disclaimer}>
          Genom att fortsätta accepterar du våra användarvillkor och integritetspolicy
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  inner: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    opacity: 0.7,
    fontFamily: "Poppins-Regular",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#d9d1d1",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 24,
    width: "100%",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  googleButtonText: {
    fontSize: 18,
    color: "#222",
    fontWeight: "500",
  },
  appleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 24,
    width: "100%",
    justifyContent: "center",
  },
  appleButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "500",
  },
  disclaimer: {
    fontSize: 13,
    textAlign: "center",
    opacity: 0.6,
    marginTop: 16,
    marginHorizontal: 8,
  },
});
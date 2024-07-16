import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: "https://example.com/logo.png" }}
        style={styles.logo}
      />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.content}>
        Welcome to our app! We are dedicated to providing the best experience
        possible. Our team is passionate about delivering high-quality software
        solutions that meet the needs of our users. Thank you for choosing our
        app!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
  },
});

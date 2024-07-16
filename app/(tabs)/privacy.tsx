// PrivacyPolicyScreen.js
import React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.headline}>1. Information Collection:</Text>
        <Text>We Do not Collect any information from our users</Text>
        <Text style={styles.headline}>2. Sharing of Information</Text>
        <Text>
          We do not share your personal information with third parties except as
          described in this Privacy Policy
        </Text>
        <Text style={styles.headline}>3. Data Security</Text>
        <Text>
          We implement security measures designed to protect your information.
        </Text>
        <Text style={styles.headline}>4. Changes to this Privacy Policy</Text>
        <Text>
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page. These changes are effective immediately after they are posted on
          this page.
        </Text>

        <Text style={styles.headline}>5. Contact Us</Text>
        <Text>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at{" "}
          <Text style={{ textDecorationLine: "underline" }}>
            f.nafiziqbal@gmail.com
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  main: {
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  headline: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: "justify",
  },
});

export default PrivacyPolicyScreen;

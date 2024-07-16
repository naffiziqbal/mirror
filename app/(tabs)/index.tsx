import { Button, StyleSheet, Text, View } from "react-native";

import { CameraView, useCameraPermissions } from "expo-camera";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text style={styles.text}>
          We need camera permission to start the Mirror
        </Text>
        <Button onPress={requestPermission} title="Request permission" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={"front"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

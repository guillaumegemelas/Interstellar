import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Constants } from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Interstellar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 40,
  },
});

import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";

const HomeScreen = () => {
  return (
    <Surface style={styles.rootSurface}>
      <View>
        <Text>Welcome to the home screen</Text>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  rootSurface: { flex: 1 },
});

export default HomeScreen;

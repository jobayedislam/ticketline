import { StyleSheet, View } from "react-native";
import { Appbar, Surface, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <Surface style={[styles.rootSurface, { paddingBottom: insets.bottom }]}>
      <Appbar.Header>
        <Appbar.Content title="Search destination" />
      </Appbar.Header>

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

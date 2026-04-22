import UnderConstruction from "@/components/UnderConstruction";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { Appbar, Surface } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Login = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <Surface style={[styles.rootLayout, { paddingBottom: insets.bottom }]}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Login" />
        <Appbar.Action icon="home" onPress={() => router.replace("/")} />
      </Appbar.Header>
      <UnderConstruction />
    </Surface>
  );
};

const styles = StyleSheet.create({
  rootLayout: { flex: 1 },
});

export default Login;

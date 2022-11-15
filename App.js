import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { CText } from "./components/CustomsComponents";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <View style={styles.container}>
        <HomeScreen />
      </View>
      <StatusBar style="light" />
    </>
  );
}

export function AppLoading() {
  return (
    <SafeAreaView>
      <ActivityIndicator size={"large"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

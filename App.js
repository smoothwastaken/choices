import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoomCreationScreen from "./screens/rooms/RoomCreationScreen";
import RoomJoiningScreen from "./screens/rooms/RoomJoiningScreen";

const MainStack = createNativeStackNavigator();

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
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <MainStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          {/* Rooms related */}
          <MainStack.Group screenOptions={{ headerShown: false }}>
            <MainStack.Screen
              name="RoomCreation"
              component={RoomCreationScreen}
            />
            <MainStack.Screen
              name="RoomJoining"
              component={RoomJoiningScreen}
            />
          </MainStack.Group>
        </MainStack.Navigator>
      </NavigationContainer>
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

import React from "react";
import { StyleSheet, View } from "react-native";
import { ArrowLeftCircleIcon } from "react-native-heroicons/solid";
import {
  CText,
  CTitle,
  CTouchableOpacity,
} from "../../components/CustomsComponents";

const RoomJoiningScreen = ({ navigation, route }) => {
  const { username } = route.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <CTouchableOpacity
          style={{ marginRight: 5 }}
          callback={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeftCircleIcon color="white" fill="white" size={42} />
        </CTouchableOpacity>
        <CTitle>join.</CTitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 45,
    backgroundColor: "#000",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RoomJoiningScreen;

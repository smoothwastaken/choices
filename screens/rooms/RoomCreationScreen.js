import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Switch,
  View,
} from "react-native";
import { ArrowLeftCircleIcon } from "react-native-heroicons/solid";
import {
  CButton,
  CInput,
  CText,
  CTitle,
  CTouchableOpacity,
} from "../../components/CustomsComponents";
import { onCreateRoom } from "../../methods/FirebaseMethod";

const RoomCreationScreen = ({ navigation, route }) => {
  const { username } = route.params;

  const [isPassword, setIsPassword] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [roomPassword, setRoomPassword] = useState(0);

  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    setCanSubmit(true);
    roomName.length < 4 ? setCanSubmit(false) : null;
    isPassword ? (roomPassword.length < 5 ? setCanSubmit(false) : null) : null;
  }, [roomName, roomPassword]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftHeaderContainer}>
          <CTouchableOpacity
            style={{ marginRight: 5 }}
            callback={() => {
              navigation.goBack();
            }}
          >
            <ArrowLeftCircleIcon color="white" fill="white" size={42} />
          </CTouchableOpacity>
          <CTitle>create.</CTitle>
        </View>
        <CText>{username}</CText>
      </View>
      <View style={styles.container}>
        <CInput
          title={"room's name"}
          onTextChangeCallback={(name) => setRoomName(name)}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: Dimensions.get("screen").width - 30,
            marginLeft: 25,
          }}
        >
          <View style={{ marginRight: 10, marginVertical: 20 }}>
            <CText fontSize={18} color={"#FAFAFA"}>
              password
            </CText>
          </View>
          <Switch
            onValueChange={(value) => {
              if (value) {
                setIsPassword(true);
                setRoomPassword(0);
              } else {
                setIsPassword(false);
                setRoomPassword(0);
              }
            }}
            value={isPassword}
            trackColor={{ false: "red", true: "red" }}
          />
        </View>
        {isPassword ? (
          <CInput
            title={"room's code"}
            keyboardType={"number-pad"}
            maxLength={5}
            onTextChangeCallback={(code) =>
              isPassword ? setRoomPassword(Number(code)) : setRoomPassword(0)
            }
          />
        ) : null}
        <CButton
          disabled={!canSubmit}
          callback={() => {
            onCreateRoom(username, roomName, roomPassword, (infos) =>
              console.log(infos)
            );
          }}
        >
          create it.
        </CButton>
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
    justifyContent: "space-between",
  },
  leftHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    marginTop: Dimensions.get("screen").height * 0.1,
    alignItems: "center",
  },
});

export default RoomCreationScreen;

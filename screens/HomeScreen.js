import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, Dimensions } from "react-native";
import {
  CButton,
  CInput,
  CText,
  CTitle,
  CTouchableOpacity,
} from "../components/CustomsComponents";

const HomeScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    if (username === "" || username.length < 3) {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
  }, [username]);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 45,
        backgroundColor: "#000",
      }}
    >
      <CTitle>choose.</CTitle>
      <View
        style={{
          flex: 1,
          height: Dimensions.get("screen").height * 0.7,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CInput
          title={"username"}
          placeholder={"ilikechoices324"}
          textContentType={"username"}
          onTextChangeCallback={(text) => setUsername(text.toLowerCase())}
        ></CInput>

        <View style={{ marginTop: 50 }} />

        {/* First Button */}
        <CButton
          disabled={!canSubmit}
          callback={() => {
            navigation.navigate("RoomCreation", { username });
          }}
        >
          create.
        </CButton>

        {/* Second Button */}
        <CButton
          disabled={!canSubmit}
          callback={() => {
            navigation.navigate("RoomJoining", { username });
          }}
        >
          join.
        </CButton>
      </View>
    </View>
  );
};

export default HomeScreen;

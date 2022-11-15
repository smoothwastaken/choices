import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { CInput, CText, CTitle } from "../components/CustomsComponents";

const HomeScreen = () => {
  const [username, setUsername] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    if (username === "" || username <= 3) {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
  }, [username]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 45 }}
    >
      <CTitle>choice</CTitle>
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
          placeholder={"XxX_darkS4suke_XxX"}
          onTextChangeCallback={(text) => setUsername(text)}
        ></CInput>

        {/* First Button */}
        <View
          style={{
            marginVertical: 15,
            padding: 25,
            backgroundColor: "#707070",
            borderRadius: 30,
            width: Dimensions.get("screen").width * 0.7,
            alignItems: "center",
            borderWidth: 2,
            borderColor: "grey",
          }}
        >
          <CText fontSize={20}>Create</CText>
        </View>

        {/* Second Button */}
        <View
          style={{
            marginVertical: 15,
            padding: 25,
            backgroundColor: "#707070",
            borderRadius: 30,
            width: Dimensions.get("screen").width * 0.7,
            alignItems: "center",
            borderWidth: 2,
            borderColor: "grey",
          }}
        >
          <CText fontSize={20}>Join</CText>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

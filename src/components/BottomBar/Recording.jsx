import { View, Text, Image } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";

export default Recording = ({ recording, setRecording }) => {
  if (recording === true) {
    return (
      <TouchableOpacity onPress={() => setRecording(false)}>
        <Image
          source={require("../../../assets/images/voiceLoading.gif")}
          style={{ width: hp(10), height: hp(10) }}
          className="rounded-full self-center"
        />
      </TouchableOpacity>
    );
  } else if (recording === false) {
    return (
      <TouchableOpacity onPress={() => setRecording(true)}>
        <Image
          source={require("../../../assets/images/recordingIcon.png")}
          style={{ width: hp(10), height: hp(10) }}
          className="rounded-full self-center"
        />
      </TouchableOpacity>
    );
  }
};

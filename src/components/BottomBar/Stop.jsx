import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Stop({ setRecording, recording, speaking, setSpeaking }) {
  if (speaking === true) {
    return (
      <TouchableOpacity
        className={`py-2 px-3 bg-red-500 rounded-3xl absolute left-3`}
        onPress={() => setSpeaking(false)}
        style={{}}
      >
        <Text>Stop</Text>
      </TouchableOpacity>
    );
  }
}

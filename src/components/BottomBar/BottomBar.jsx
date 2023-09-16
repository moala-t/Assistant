import { View, Text } from "react-native";
import React from "react";
import Recording from "./Recording";
import Clear from "./Clear";
import Stop from "./Stop";

export default BottomBar = ({ recording, setRecording, setMessages, messages, speaking, setSpeaking }) => {
  return (
    <View className="flex flex-row items-center justify-center">
      <Stop setRecording={setRecording} recording={recording} speaking={speaking} setSpeaking={setSpeaking}/>
      <Recording recording={recording} setRecording={setRecording} />
      <Clear setMessages={setMessages} messages={messages}/>
    </View>
  );
};

import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Features from "../components/Features";
import { dummyMessages } from "../constants/dummyData";
import HomeScreenLogo from "../components/HomeScreenLogo";
import Messages from "../components/Messages";
import BottomBar from "../components/BottomBar/BottomBar";
// import Voice from "@react-native-community/voice";

function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

  const speechStartHandler = (e) => {
    console.log("speech start handler");
  };

  const speechEndHandler = (e) => {
    console.log("speech End handler");
  };

  const speechErrorHandler = (e) => {
    console.log("speech error handler", e);
  };

  const speechResultHandler = (e) => {
    console.log("speech reuslt handler", e);
  };

  // const startRecording = async () => {
  //   setRecording(true)
  //   try{
  //     await Voice.start('en-GB')
  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  
  // const stopRecording = async () => {
  //   try{
  //     await Voice.stop('en-GB')
  //     setRecording(false)
  //     // fetch response
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  const clear = () => {

  }

  const stopSpeaking = () => {
    
  }

  useEffect(() => {}, []);

  return (
    <SafeAreaView className="flex-1 bg-white px-3">
      <HomeScreenLogo />
      {/* features || messages */}
      {messages.length > 0 ? (
        <Messages messages={messages} setMessages={setMessages} />
      ) : (
        <Features />
      )}
      <BottomBar
        recording={recording}
        setRecording={setRecording}
        speaking={speaking}
        setSpeaking={setSpeaking}
        setMessages={setMessages}
        messages={messages}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;

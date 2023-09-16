import { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Messages = ({messages, setMessages}) => {
  return (
    <View className="space-y-2 flex-1">
      <Text
        className="text-gray-700 font-semibold ml-1"
        style={{ fontSize: wp(5) }}
      >
        Assistant
      </Text>

      <View
        style={{ height: hp(58) }}
        className="bg-neutral-200 rounded-3xl p-4"
      >
        <ScrollView
          // ref={scrollViewRef}
          bounces={false}
          className="space-y-4"
          showsVerticalScrollIndicator={false}
        >
          {messages.map((message, index) => {
            if (message.role == "assistant") {
              if (message.content.includes("https")) {
                // result is an ai image
                return (
                  <View key={index} className="flex-row justify-start">
                    <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                      <Image
                        source={{ uri: message.content }}
                        className="rounded-2xl"
                        resizeMode="contain"
                        style={{ height: wp(60), width: wp(60) }}
                      />
                    </View>
                  </View>
                );
              } else {
                // chat gpt response
                return (
                  <View
                    key={index}
                    style={{ width: wp(70) }}
                    className="bg-emerald-100 p-2 rounded-xl rounded-tl-none"
                  >
                    <Text
                      className="text-neutral-800"
                      style={{ fontSize: wp(4) }}
                    >
                      {message.content}
                    </Text>
                  </View>
                );
              }
            } else {
              // user input text
              return (
                <View key={index} className="flex-row justify-end">
                  <View
                    style={{ width: wp(70) }}
                    className="bg-white p-2 rounded-xl rounded-tr-none"
                  >
                    <Text style={{ fontSize: wp(4) }}>{message.content}</Text>
                  </View>
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
    </View>
  );
};
export default Messages;

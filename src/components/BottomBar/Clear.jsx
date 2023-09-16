import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Clear({ setMessages, messages }) {
  if (messages.length > 0) {
    return (
      <TouchableOpacity
        className="py-2 px-3 bg-neutral-300 rounded-3xl absolute right-3"
        onPress={() => setMessages([])}
      >
        <Text>Clear</Text>
      </TouchableOpacity>
    );
  }
}

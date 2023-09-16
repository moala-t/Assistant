import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation() 
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-2">
        <Text style={{fontSize:wp(10)}} className={`text-center font-bold text-gray-700`}>Robost</Text>
        <Text style={{fontSize:wp(4)}} className="text-center tracking-wider font-semibold text-gray-700">The Future is here, powered by AI</Text>
      </View>
      <View className="flex flex-row justify-center">
        <Image source={require('../../assets/images/welcome.png')} style={{height:wp(75), width:wp(75)}} />
      </View>
      <TouchableOpacity className="bg-emerald-600 mx-5 p-4 rounded-2xl" onPress={() => navigation.navigate("Home")}>
        <Text className="text-center font-bold text-white text-2xl"> Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
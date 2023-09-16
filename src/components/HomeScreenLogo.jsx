import { View, Image } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

  
export default HomeScreenLogo = () => {
    return (
      <View className="flex-row justify-center">
        <Image
          source={require("../../assets/images/bot.png")}
          style={{ height: hp(15), width: hp(15) }}
        />
      </View>
    );
  };
  
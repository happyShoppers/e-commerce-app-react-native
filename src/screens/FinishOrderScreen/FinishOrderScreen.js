import React from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
//Icon
import CustomText from "../../components/UI/CustomText";
import Colors from "../../utils/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
//Icon
import LottieView from "lottie-react-native";
const { height } = Dimensions.get("window");

export const FinishOrderScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.info}>
        <View>
          <LottieView
            source={require("../../components/IconAnimation/done.json")}
            autoPlay
            loop={false}
            resizeMode='contain'
            style={{ height: 115 }}
          />
        </View>
        <CustomText style={styles.title}>
      
Thank you, your order was successful ^^
        </CustomText>
      </View>
      <View style={styles.id}>
        <CustomText style={styles.title}>
          We will confirm your order as soon as possible.
        </CustomText>
      </View>
      <View style={styles.buttom}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <CustomText style={{ ...styles.title, color: "#fff" }}>
           go back to the main page
          </CustomText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  info: {
    marginTop: height / 4,
    alignItems: "center",
  },
  id: {
    flexDirection: "row",
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.text,
  },
  buttom: {
    marginTop: 20,
    backgroundColor: Colors.blue,
    width: 200,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

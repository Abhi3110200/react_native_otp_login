
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import auth from '@react-native-firebase/auth';
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();
  const { setConfirmation } = useAuth();
  const [loading, setLoading] = useState(false);

  const formatPhoneNumber = (number) => {
    let formattedNumber = number.replace(/\D/g, '');
    if (!formattedNumber.startsWith('+')) {
      formattedNumber = `+91${formattedNumber}`;
    }
    return formattedNumber;
  };

  const isValidPhoneNumber = (number) => {
    const Regex = /^\+[1-9]\d{1,14}$/;
    return Regex.test(number);
  };
 
  const handleLogin = async () => {
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    if (!isValidPhoneNumber(formattedPhoneNumber)) {
      alert("Please enter a valid phone number in E.164 format.");
      return;
    }
    setLoading(true);

    try {
      const confirmation = await auth().signInWithPhoneNumber(formattedPhoneNumber);
      console.log('Confirmation:', confirmation);
      if (confirmation) {
        setConfirmation(confirmation);
        navigation.navigate('Otp',{phoneNumber});
      }
    } catch (error) {
      console.error("Failed to sign in with phone number:", error);
      alert("Failed to sign in with phone number. Please ensure it is in the correct format.");
    } finally{
      setLoading(false);
    }
    setPhoneNumber('');
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingTop: 70,
          gap: 15,
          backgroundColor: "#161616",
          paddingHorizontal: 30,
        }}
      >
        <Image
          source={require("./../../assets/adx.png")}
          resizeMode="contain"
          style={{
            width: 125,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            marginTop: -50,
          }}
        >
          Sign in or create Account
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "white",
            opacity: 0.7,
            textAlign: "center",
            width: "95%",
          }}
        >
          Hello! Looks like you’re enjoying our page, but you haven’t signed up
          for an account yet.
        </Text>

        <View
          style={{
            width: "100%",
            marginVertical: 10,
          }}
        >
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            autoComplete=""
            keyboardType="numeric"
            placeholderTextColor="#FFFFFF"
            placeholder="Phone Number"
            style={{
              backgroundColor: "#323232",
              padding: 12,
              borderRadius: 10,
              paddingLeft: 15,
              color: "white",
              fontSize:16,
            }}
          />

          <Image
            source={require("./../../assets/user.png")}
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              right: 15,
              top: 15,
            }}
          />
        </View>

        <TouchableOpacity onPress={handleLogin}
          style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 12,
            width: "100%",
            alignItems: "center",
            marginTop: 30,
          }}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="black" /> // Show loading indicator
          ) : (
            <Text
              style={{
                color: "black",
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              Login
            </Text>
          )}
        </TouchableOpacity>

        <Text
          style={{
            color: "white",
            opacity: 0.7,
            textAlign: "center",
            fontSize: 12,
            lineHeight: 18,
            width: "90%",
          }}
        >
          by creating an account, you agree to our’s{" "}
          <Text
            style={{
              textDecorationLine: "underline",
            }}
          >
            Privacy Policy
          </Text>{" "}
          and{" "}
          <Text
            style={{
              textDecorationLine: "underline",
            }}
          >
            Terms of Use.
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login
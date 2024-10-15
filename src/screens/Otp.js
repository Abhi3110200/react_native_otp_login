import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import auth from '@react-native-firebase/auth';
export default function Otp() {
  const navigation = useNavigation();
  const route = useRoute();
  const phoneNumber = route.params?.phoneNumber;
  const { confirmation, setConfirmation } = useAuth();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "","",""]);
  const otpInput = useRef([]);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);
  const [resendLoading, setResendLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: () => {
        return (
          <Text style={{ color: "white", fontSize: 21, fontWeight: "700" }}>
            OTP Verification
          </Text>
        );
      },
      headerTitleAlign: "center",
      headerTintColor: "#ffffff",
    });
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [navigation]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      otpInput.current[index + 1].focus();
    } else if (!text && index > 0) {
      otpInput.current[index - 1].focus();
    }
  };

  const verifyOtp = async () => {
    const otpCode = otp.join("");
    setLoading(true);
    try {
      await confirmation.confirm(otpCode);
      setTimeout(() => {
        navigation.navigate('Main');
      }, 2000);
    } catch (error) {
      console.error("Invalid OTP. Please try again.", error);
      alert("Invalid OTP. Please try again.");
    } finally{
      setLoading(false);
    }
  };

  const startTimer = () => {
    setTimer(45); // 60 seconds timer
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResendOtp = async () => {
    if (timer > 0) return; // Prevent resending if timer is active

    setResendLoading(true);
    try {
      const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
      const newConfirmation = await auth().signInWithPhoneNumber(`+91${formattedPhoneNumber}`);
      setConfirmation(newConfirmation);
      startTimer();
    } catch (error) {
      console.error("Failed to resend OTP:", error);
      alert("Failed to resend OTP. Please try again.");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 75,
        backgroundColor: "#161616",
      }}
    >
      <View
        style={{
          height: 0.5,
          backgroundColor: "#ffffff",
          marginTop: 20,
          opacity: 0.1,
        }}
      />

      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontSize: 20,
            lineHeight: 24,
            fontWeight: "600",
            marginBottom: 15,
          }}
        >
          Enter OTP
        </Text>

        <Text
          style={{
            color: "#ffffff",
            fontSize: 16,
            lineHeight: 24,
            textAlign: "center",
            opacity: 0.6,
          }}
        >
          Enter the code we’ve sent to your phone number +91{phoneNumber}{" "}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          {otp.map((digit, index) => (
            <TextInput
              maxLength={1}
              value={digit}
              key={index}
              onChangeText={(text) => handleOtpChange(text, index)}
              keyboardType="numeric"
              style={{
                width: 40,
                height: 50,
                color: "white",
                fontSize: 24,
                backgroundColor: "#323232",
                margin: 8,
                borderRadius: 10,
                textAlign: "center",
                padding: 10,
              }}
              ref={(input) => (otpInput.current[index] = input)}
            />
          ))}
        </View>

        <TouchableOpacity onPress={handleResendOtp} disabled={timer > 0 || resendLoading}>
          {resendLoading ? (
            <ActivityIndicator size="small" color="#0081FA" />
          ) : (
            <Text style={{ color: "#0081FA", marginVertical: 20, fontSize: 14, lineHeight: 21, fontWeight: "700" }}>
              {timer > 0 ? `Resend Code in ${timer}s` : "Resend Code"}
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={verifyOtp}
          style={{
            backgroundColor: "white",
            padding: 18,
            borderRadius: 12,
            width: "90%",
            alignItems: "center",
            marginTop: 20,
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
              Verify
            </Text>
          )}
        </TouchableOpacity>

        <Text
          style={{
            color: "#ffffff",
            textAlign: "center",
            opacity: 0.3,
            marginTop: 20,
            fontSize: 12,
            width: "90%",
          }}
        >
          by creating an account, you agree to our’s{" "}
          <Text style={{ textDecorationLine: "underline" }}>
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
    </View>
  );
}

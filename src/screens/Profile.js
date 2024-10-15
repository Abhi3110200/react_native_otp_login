import { View, Text,  Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
export default function Profile() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: () => {
        return (
          <Text
            style={{
              color: "white",
              fontSize: 16,
              lineHeight: 24,
              fontWeight: "700",
            }}
          >
            User Profile
          </Text>
        );
      },
      headerTitleAlign: "center",
      headerTintColor: "#ffffff",
      headerLeft: () => {
        return (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 15 }}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        );
      },
      headerRight: () => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfile")}
            style={{ marginRight: 15 }}
          >
            <Entypo name="dots-three-vertical" size={20} color="white" />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#17191A",
        paddingTop: 90,
        paddingHorizontal: 30,
        justifyContent:'space-between'
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/user1.png")}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: "#ffffff",
              marginLeft: 10,
              fontWeight: "bold",
              lineHeight: 26,
            }}
          >
            Bhavesh Kapoor
          </Text>
        </View>

        <View
          style={{
            flexDirection: "colunm",
            marginTop: 25,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "#ffffff",
              fontWeight: "500",
            }}
          >
            Personal Info
          </Text>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <AntDesign name="user" size={20} color="white" />
              <Text
                style={{
                  fontSize: 16,
                  color: "#ffffff",
                  lineHeight: 24,
                  fontWeight: "400",
                }}
              >
                Profile
              </Text>
            </View>
            <AntDesign name="right" size={18} color="white" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "colunm",
            marginTop: 25,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "#ffffff",
              fontWeight: "500",
            }}
          >
            About
          </Text>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Feather name="shield" size={20} color="white" />
              <Text
                style={{
                  fontSize: 16,
                  color: "#ffffff",
                  lineHeight: 24,
                  fontWeight: "400",
                }}
              >
                Legal and Policies
              </Text>
            </View>
            <AntDesign name="right" size={18} color="white" />
          </View>
          <View
            style={{
              marginTop: 25,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <FontAwesome5 name="question-circle" size={20} color="white" />
              <Text
                style={{
                  fontSize: 16,
                  color: "#ffffff",
                  lineHeight: 24,
                  fontWeight: "400",
                }}
              >
                Help & Support
              </Text>
            </View>
            <AntDesign name="right" size={18} color="white" />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('LastScreen')} style={{
        padding:15,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        marginBottom:30,
        borderRadius:30
      }}>
        <Text style={{
            fontSize:16,
            lineHeight:24,
            fontWeight:'500',
            color:'black'
        }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

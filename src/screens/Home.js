import { View, Text, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import Video from "react-native-video";

export default function Home() {
  const [liked, setLiked] = useState(true);
  const navigation = useNavigation();
  const widthD =Dimensions.get('window').width;
  const heightD = Dimensions.get('window').height;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#303030",
        opacity: 0.7,
        paddingHorizontal: 20,
      }}
    >
      <Video
        source={require('../../assets/v1.mp4')} // Replace with your video URL
        style={{
          width: widthD,
          height: heightD,
          position:'absolute',
        }}
        resizeMode="cover"
        repeat={true}
      />
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          bottom: 30,
          left: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail')}>
          <Image
            source={require("../../assets/user1.png")}
            style={{
              width: 40,
              height: 40,
              objectFit: "cover",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail')}>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Fletch Skinner
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          flexDirection: "column",
          bottom: 35,
          right: 20,
          gap: 25,
        }}
      >
        <TouchableOpacity onPress={() => setLiked(!liked)}
          style={{
            alignItems: "center",
            gap: 3,
          }}
        >
          <AntDesign name={liked ? "heart" : "hearto"} size={24} color={liked ? "red" : '#ffffff'} />
          <Text
            style={{
              color: "white",
              fontSize: 12,
            }}
          >
            2.3M
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            gap: 3,
          }}
        >
          <Entypo name="share" size={24} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 12,
            }}
          >
            743
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
              alignItems: "center",
              gap: 3,
          }}
        >
          <Entypo name="dots-three-vertical" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

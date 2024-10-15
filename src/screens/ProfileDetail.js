import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ProfileDetail() {
  const navigation = useNavigation();
  const samplebox = [
    {
      id: "1",
      icon: <AntDesign name="eyeo" size={20} color="black" />,
      title: "4742 views",
    },
    {
      id: "2",
      icon: <AntDesign name="eyeo" size={20} color="black" />,
      title: "2373 views",
    },
    {
      id: "3",
      icon: <AntDesign name="eyeo" size={20} color="black" />,
      title: "4742 views",
    },
    {
      id: "4",
      icon: <AntDesign name="eyeo" size={20} color="black" />,
      title: "2373 views",
    },
    {
      id: "5",
      icon: <AntDesign name="eyeo" size={20} color="black" />,
      title: "4742 views",
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: false,
      headerStyle: {
        backgroundColor: '#17191A',
      },
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
            Cecil Hipplington
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

  const renderItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        height: 200,
        backgroundColor: "white",
        margin: 5,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        {item.icon}
        <Text>{item.title}</Text>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#17191A",
        paddingHorizontal: 15,
        width: "100%",
        alignItems: "center",
        marginBottom:20
      }}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          width: "100%",
        }}
      >
        <View
          style={{
            width: 90,
            height: 90,
            borderRadius: 50,
            backgroundColor: "#DADFE8",
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          Creator
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 13,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          I am currently working as Sr. UI UX Designer and product lead at
          Unificars.
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            alignItems: "center",
            gap: 20,
            borderColor: "gray",
            borderWidth: 1,
            width: "100%",
            marginTop: 15,
            borderRadius: 15,
            paddingHorizontal: 30,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "#6E7072",
                fontSize: 12,
              }}
            >
              Following
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                fontWeight: "500",
                lineHeight: 24,
              }}
            >
              1.3k
            </Text>
          </View>
          <View
            style={{
              height: 35,
              width: 1,
              backgroundColor: "gray",
            }}
          />
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "#6E7072",
                fontSize: 12,
              }}
            >
              Post
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                fontWeight: "500",
                lineHeight: 24,
              }}
            >
              347
            </Text>
          </View>
          <View
            style={{
              height: 35,
              width: 1,
              backgroundColor: "gray",
            }}
          />
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "#6E7072",
                fontSize: 12,
              }}
            >
              Views
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "white",
                fontWeight: "500",
                lineHeight: 24,
              }}
            >
              2.8k
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#3184FE",
          width: '100%',
          marginVertical: 20,
          alignItems: "center",
          paddingVertical: 10,
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: "white",
            lineHeight: 18,
            fontWeight: "700",
          }}
        >
          FOLLOW
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 14,
          color: "white",
          lineHeight: 21,
          textDecorationLine: "underline",
          fontWeight: "500",
        }}
      >
        Casting
      </Text>
    </View>
  );

  return (
    <View style={{
      backgroundColor: "#17191A",
    }}>

      <FlatList
        ListHeaderComponent={renderHeader}
        data={samplebox}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

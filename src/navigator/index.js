import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Otp from '../screens/Otp';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home';
import ProfileDetail from '../screens/ProfileDetail';
import Profile from '../screens/Profile';
import { Image, Text, View, } from 'react-native';
import  Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import LastScreen from '../screens/LastScreen';
import { AuthProvider } from '../context/AuthContext';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#3498db",
        tabBarInactiveTintColor: "#333",
        tabBarStyle: {
          height: 60,
          backgroundColor: "#303030",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          headerTitleStyle:{
            color:"white",
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <Image
                source={require("../../assets/adx.png")}
                style={{
                  width: 70,
                  height: 30,
                  objectFit: "contain",
                  marginLeft: 15,
                }}
              />
            );
          },
          headerRight: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  paddingVertical: 7,
                  marginRight: 15,
                  borderRadius: 18,
                  backgroundColor: "#3184FE",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Feather name="eye" size={18} color="white" />
                <Text
                  style={{
                    color: "#fff",
                  }}
                >
                  5.6 M
                </Text>
              </View>
            );
          },

          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                size={20}
                color={focused ? "#3184FE" : "#CED1D7"}
              />
            );
          },
        }}
      />
      <Tab.Screen name="ProfileDetail" component={ProfileDetail} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={20}
                color={focused ? "#3184FE" : "#CED1D7"}
              />
            );
          },
        }} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesome6 name="user-large" size={19} color="#3184FE" />
            ) : (
              <Feather name="user" size={20} color="#CED1D7" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Navigator = () =>{
    return (
        <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home' screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='Login' component={Login} options={{
                        headerShown: false
                    }}/>
                    <Stack.Screen name="Otp" component={Otp} />
                    <Stack.Screen name="Main" component={BottomTabNavigator} />
                    <Stack.Screen name='LastScreen' component={LastScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}

export default Navigator;
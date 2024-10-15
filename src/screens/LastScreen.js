import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function LastScreen() {

    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);
    },[navigation])
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#161616',
        paddingHorizontal:40,
        gap:10
    }}>
      <Image source={require('../../assets/adx.png')} style={{
        width: 125,
        height: 100,
        objectFit:'contain'
      }}/>

      <Text style={{
        fontSize: 24,
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold'
      }}>Thank you for 
      downloading our app</Text>
      <Text style={{
        fontSize: 18,
        color:'#fff',
        textAlign:'center',
        fontStyle:'italic',
        width:250
      }}>You're on our waitlist, we'll keep 
      you updated regarding our app updates.</Text>
    </View>
  )
}
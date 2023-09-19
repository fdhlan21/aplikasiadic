import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../utils/colors'
import { SplashGIF } from '../../assets'
import { getData } from '../../localstorage/local';

export default function SplashScreen({navigation}) {
useEffect(()=>{
 setTimeout(()=> {

  getData('user').then(res=>{
    if(!res){
 navigation.replace('LoginScreen');
    }else{
 navigation.replace('HomeScreen');
    }
  })
 
 }, 2000)
}, []);
  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
    <View style={{padding:10, alignItems:'center', }}>
    <Image style={{height:400, width:400}} source={SplashGIF}/>
    </View>
    </View>
  )
}
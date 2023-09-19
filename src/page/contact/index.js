import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'
import { LeftArrow } from '../../assets'

export default function ContactScreen({navigation}) {
    const HandleBack = () => {
    navigation.goBack()
  }

  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
       {/* TOPBAR  */}
    <View style={{padding:10, backgroundColor:colors.secondary,  marginTop:-30, borderBottomLeftRadius:5, borderBottomRightRadius:5,}}>
    <View style={{top: 25}}>
    <TouchableOpacity onPress={HandleBack} style={{width:35, height:35,}}>
      <Image style={{width:35, height:35,}} source={LeftArrow}/>
    </TouchableOpacity>
    </View>
    <View style={{ top: 0}}>
      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center',}}>Contact</Text>
    </View>
    </View>
    {/* END TOPBAR */}
    <ScrollView>

    </ScrollView>
    </View>
  )
}
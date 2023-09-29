import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../../utils/colors'
import Pdf from 'react-native-pdf'
import Orientation from 'react-native-orientation';
import { LeftArrow } from '../../../assets';
import { WebView } from 'react-native-webview';


export default function MemandikanBayi({navigation}) {
        const HandleBack = () => {
    navigation.goBack()
  }

    // const source = {uri: 'bundle-assets://pdf/2_Memandikan_Bayi.pdf'}

    useEffect(() => {
    // Set orientasi layar ke landscape saat komponen dimount
    Orientation.lockToLandscape();
    
    // Fungsi untuk mengembalikan orientasi layar ke portrait saat komponen unmount
    return () => {
      Orientation.lockToPortrait();
    };
  }, []);


  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
        {/* TOPBAR */}
    <View style={{padding:10, backgroundColor:colors.secondary,  marginTop:-30, borderBottomLeftRadius:5, borderBottomRightRadius:5,}}>
    <View style={{top: 25}}>
    <TouchableOpacity onPress={HandleBack} style={{width:40, height:40,}}>
      <Image style={{width:35, height:35,}} source={LeftArrow}/>
    </TouchableOpacity>
    </View>
    <View style={{ top: 0}}>
      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center',}}>Memandikan Bayi</Text>
    </View>
    </View>
     <WebView 
        source={{ uri: 'https://www.flipbookpdf.net/web/site/d5906302f4685ba140cc9b4d15756c6b000cdd1f202309.pdf.html'}}
        style={{flex:1,}}
      />
  
    </View>
  )
}
import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../../utils/colors'
import Pdf from 'react-native-pdf'
import { LeftArrow } from '../../../assets'
import Orientation from 'react-native-orientation'
import { WebView } from 'react-native-webview';



export default function KmcPdf({navigation}) {
     const HandleBack = () => {
    navigation.goBack()
  }

    // const source = {uri: 'bundle-assets://pdf/6_KMC.pdf'}

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
      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center',}}>KMC</Text>
    </View>
    </View>


   <WebView 
        source={{ uri: 'https://www.flipbookpdf.net/web/site/0fcd1166fea548dcc4b81530d5624a8ec070f721202309.pdf.html'}}
        style={{flex:1,}}
      />
   
    </View>
  )
}
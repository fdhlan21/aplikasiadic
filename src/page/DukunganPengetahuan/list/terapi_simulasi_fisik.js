import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Orientation from 'react-native-orientation'
import Pdf from 'react-native-pdf'
import { LeftArrow } from '../../../assets'
import colors from '../../../utils/colors'
import { WebView } from 'react-native-webview';

export default function TerapiStimulasFisik({navigation}) {
     const HandleBack = () => {
    navigation.goBack()
  }

    // const source = {uri: 'bundle-assets://pdf/5_terapi_stimulas_fisik.pdf'}



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
      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center',}}>Terapi Stimulasi Fisik</Text>
    </View>
    </View>

 <WebView 
        source={{ uri: 'https://www.flipbookpdf.net/web/site/512bd38940f936c9fc141fbaa99447e9472ccb84202309.pdf.html'}}
        style={{flex:1,}}
      />
  
    </View>
  )
}
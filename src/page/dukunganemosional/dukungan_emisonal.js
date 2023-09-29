import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Orientation from 'react-native-orientation'
import Pdf from 'react-native-pdf'
import { LeftArrow } from '../../assets'
import colors from '../../utils/colors'
import { WebView } from 'react-native-webview';




export default function DukunganEmosional({navigation}) {
     const HandleBack = () => {
    navigation.goBack()
  }

    // const source = {uri: 'bundle-assets://pdf/dukungan_emosional.pdf'}

    useEffect(() => {
    // Set orientasi layar ke landscape saat komponen dimount
    Orientation.lockToLandscape();
    
    // Fungsi untuk mengembalikan orientasi layar ke portrait saat komponen unmount
    return () => {
      Orientation.lockToPortrait();
    };
  }, []);


  return (
    <View style={{flex:1, backgroundColor:'#8EB4E3'}}>
        {/* TOPBAR */}
    <View style={{padding:10, backgroundColor:colors.secondary,  marginTop:-30, borderBottomLeftRadius:5, borderBottomRightRadius:5,}}>
    <View style={{top: 25}}>
    <TouchableOpacity onPress={HandleBack} style={{width:40, height:40,}}>
      <Image style={{width:35, height:35,}} source={LeftArrow}/>
    </TouchableOpacity>
    </View>
    <View style={{ top: 0}}>
      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center',}}>Dukungan Emosional</Text>
    </View>
    </View>

    <WebView 
        source={{ uri: 'https://flipbookpdf.net/web/site/ebc6df4a58c841dd431cc8bf52589680e5089562202309.pdf.html' }}
        style={{flex:1,}}
      />
   
    </View>
  )
}
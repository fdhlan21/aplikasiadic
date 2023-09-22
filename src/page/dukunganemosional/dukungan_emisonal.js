import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Orientation from 'react-native-orientation'
import Pdf from 'react-native-pdf'
import { LeftArrow } from '../../assets'
import colors from '../../utils/colors'

export default function DukunganEmosional({navigation}) {
     const HandleBack = () => {
    navigation.goBack()
  }

    const source = {uri: 'bundle-assets://pdf/dukungan_emosional.pdf'}

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

 <Pdf style={{flex:1, backgroundColor:'#8EB4E3'}} scale={1}   source={source} 
    onLoadComplete={(numberofPages, filePath) => {
        console.log(`Number of pages: ${numberofPages}`);
    }}
    onPageChanged={(page,numberOfPages) => {
        console.log(`current page: ${page}`);
    }}
    onError={(error) => {
        console.log(error);
    }}
    onPressLink={(uri) => {
        console.log(`Link pressed: ${uri}`);
    }}
 
    horizontal={true}
/>
   
    </View>
  )
}
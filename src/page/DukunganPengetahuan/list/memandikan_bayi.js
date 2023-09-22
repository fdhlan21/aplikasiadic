import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../../utils/colors'
import Pdf from 'react-native-pdf'
import Orientation from 'react-native-orientation';
import { LeftArrow } from '../../../assets';

export default function MemandikanBayi({navigation}) {
        const HandleBack = () => {
    navigation.goBack()
  }

    const source = {uri: 'bundle-assets://pdf/2_Memandikan_Bayi.pdf'}

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

 <Pdf style={{flex:1, backgroundColor:colors.primary}} scale={1}   source={source} 
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
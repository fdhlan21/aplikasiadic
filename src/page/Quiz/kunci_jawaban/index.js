import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../../utils/colors'
import Pdf from 'react-native-pdf'
import { LeftArrow } from '../../../assets'
import Orientation from 'react-native-orientation'

export default function KunciJawaban({navigation}) {
     const HandleBack = () => {
    navigation.goBack()
  }

    const source = {uri: 'bundle-assets://pdf/kunci_jawaban_quiz.pdf'}

//     useEffect(() => {
//     // Set orientasi layar ke landscape saat komponen dimount
//     Orientation.lockToLandscape();
    
//     // Fungsi untuk mengembalikan orientasi layar ke portrait saat komponen unmount
//     return () => {
//       Orientation.lockToPortrait();

//     };
//   }, []);


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
      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center',}}>KuncI Jawaban Kuis</Text>
    </View>
    </View>

 <Pdf style={{flex:1, backgroundColor:colors.primary}} scale={1.05}   source={source} 
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
 
    horizontal={false}
/>
   
    </View>
  )
}
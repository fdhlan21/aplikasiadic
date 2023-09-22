import { View, Text, TouchableOpacity, ScrollView, Image, Linking, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../utils/colors'
import { LeftArrow, LogoAdic } from '../../assets'
import { getData, storeData } from '../../localstorage/local';


export default function DaftarBacaan({navigation}) {


  const [datauser, setDataUser] = useState({});

useEffect(() => {
getData("user").then(response => {
  setDataUser(response);
  console.log('data user', response)
});
console.log('TES CUY');
},[])

  const signOut = () => {

        storeData('user',null);
        navigation.reset({
          index:0,
          routes:[{name:'HalamanSplash'}]
        })
        Alert.alert(MYAPP,'Berhasil Logout');
    
  }

      const HandleBack = () => {
    navigation.goBack()
  }

   const handleLogout = () => {
    // Menghapus parameter username sementara
    navigation.setParams({ username: null });
    // Navigasi ke halaman lain, misalnya LoginScreen
    navigation.navigate('LoginScreen');
  };

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
      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center',}}>Daftar Bacaan</Text>
    </View>
    </View>
    {/* END TOPBAR */}
  <ScrollView>

    <View style={{padding:10}}>

    <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, borderWidth:1, borderColor:'white',}}>
    <Text style={{fontFamily:'Poppins-Bold', fontSize:15, textAlign:'center'}}>Fundamentals of Nursing by Potter et al. (2017)</Text>
    <Text style={{marginTop:10, fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center'}}>Buku ini memberikan dasar-dasar keperawatan dan informasi penting tentang praktik keperawatan. Ini adalah referensi yang baik untuk memahami konsep dasar dalam perawatan pasien.</Text>
    </View>


    <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, borderWidth:1, borderColor:'white', marginTop:10,}}>
    <Text style={{fontFamily:'Poppins-Bold', fontSize:15, textAlign:'center'}}>Brunner & Suddarth's Textbook of Medical-Surgical Nursing by Smeltzer et al. (2017)</Text>
    <Text style={{marginTop:10, fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center'}}>Buku ini adalah referensi yang luas tentang keperawatan medis-bedah. Ini mencakup topik-topik seperti perawatan pasien dewasa dengan berbagai kondisi medis.</Text>
    </View>

    <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, borderWidth:1, borderColor:'white', marginTop:10,}}>
    <Text style={{fontFamily:'Poppins-Bold', fontSize:15, textAlign:'center'}}>Nursing Diagnosis: Application to Clinical Practice by Carpenito-Moyet (2016)</Text>
    <Text style={{marginTop:10, fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center'}}>Buku ini membahas proses diagnosis keperawatan dan aplikasinya dalam praktik klinis. Ini membantu perawat dalam mengidentifikasi masalah pasien dan merencanakan perawatan yang tepat.</Text>
    </View>

    <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, borderWidth:1, borderColor:'white', marginTop:10,}}>
    <Text style={{fontFamily:'Poppins-Bold', fontSize:15, textAlign:'center'}}>"The Nature of Nursing" oleh Henderson (1966)</Text>
    <Text style={{marginTop:10, fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center'}}>Artikel ini membahas pandangan Virginia Henderson tentang perawatan dan perannya dalam perawatan pasien. Ini membantu dalam pemahaman konsep perawatan holistik.</Text>
    </View>

    <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, borderWidth:1, borderColor:'white', marginTop:10,}}>
    <Text style={{fontFamily:'Poppins-Bold', fontSize:15, textAlign:'center'}}>"Nursing: The Philosophy and Science of Caring" oleh Watson (1979)</Text>
    <Text style={{marginTop:10, fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center'}}>Artikel ini menguraikan filosofi Jean Watson tentang perawatan sebagai ilmu dan seni. Ini membantu dalam memahami aspek-aspek emosional dan sosial dari perawatan.</Text>
    </View>

    <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, borderWidth:1, borderColor:'white', marginTop:10,}}>
    <Text style={{fontFamily:'Poppins-Bold', fontSize:15, textAlign:'center'}}>"From Novice to Expert" oleh Benner (1982)</Text>
    <Text style={{marginTop:10, fontFamily:'Poppins-Regular', fontSize:12, textAlign:'center'}}>Artikel ini menjelaskan teori perkembangan kompetensi perawat dari tingkat pemula hingga ahli. Ini penting dalam memahami evolusi keahlian dalam keperawatan.</Text>
    </View>

    </View>


  </ScrollView>
    </View>
  )
}
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

    <View style={{padding:10, backgroundColor:colors.secondary,}}>
      <Text style={{fontFamily:'Poppins-Bold', fontSize:15, textAlign:'center',}}>REFERENSI UTAMA</Text>
    </View>

    
    <View style={{padding:10, backgroundColor:colors.secondary, marginTop:10, }}>
      <Text style={{fontFamily:'Poppins-semiBold', fontSize:12, textAlign:'center',}}>Hockenberry M.J. & David W. (2015), Wong’s Nursing Care of Infants and Children 10th Edition, vol. UNIT IX, T, no. 23 Pediatric Nursing Interventions and Skills, 883 Terri L. Brown.</Text>
    </View>


    <View style={{padding:10, backgroundColor:colors.secondary, marginTop:10, }}>
      <Text style={{fontFamily:'Poppins-semiBold', fontSize:12, textAlign:'center',}}>Khotimah, S. K., Rahmawati, E., & Susmarini, D. (2019). Efektivitas Metode Video Dan Demonstrasi Terhadap Kangaroo Mother Care Self Efficacy. Jurnal Pendidikan Keperawatan Indonesia, 5(2), 136–145. https://doi.org/10.17509/jpki.v5i2</Text>
    </View>


    <View style={{padding:10, backgroundColor:colors.secondary, marginTop:10, }}>
      <Text style={{fontFamily:'Poppins-semiBold', fontSize:12, textAlign:'center',}}>Rahmawati, E., Susmarini D, MD Purnamasari (2020). Extremity Strengthening Exercise on Neonates Receiving Phototherapy. Jurnal Keperawatan Soedirman. 15(1). DOI:http://dx.doi.org/10.20884/1.jks.2020.15.1.1223</Text>
    </View>


    
    <View style={{padding:10, backgroundColor:colors.secondary, marginTop:10, }}>
      <Text style={{fontFamily:'Poppins-semiBold', fontSize:12, textAlign:'center',}}>World Health Organization [WHO], (2022) “Care of the preterm and low-birth-weight newborn,” WHO,WHO recommendations for care of the preterm or low-birth-weight infant</Text>
    </View>


    
    <View style={{padding:10, backgroundColor:colors.secondary, marginTop:10, }}>
      <Text style={{fontFamily:'Poppins-semiBold', fontSize:12, textAlign:'center',}}>World Health Organization [WHO] (2022). Launch of the WHO recommendations for care of the preterm or low birth weight infant. Launch of the WHO recommendations for care of the preterm or low birth weight infant</Text>
    </View>


    
    <View style={{padding:10, backgroundColor:colors.secondary, marginTop:10, }}>
      <Text style={{fontFamily:'Poppins-semiBold', fontSize:12, textAlign:'center',}}>Veniawati,o.,  Rahmawati,E., Susmarini, D. (2020).  Efek Video Perawatan Bayi Berat Lahir Rendah Saat Discharge Planning terhadap Keterampilan Orang Tua. Journal of Bionursing. 2020; 2(1): 28-31. DOI: https://doi.org/10.20884/bion.v2i1.34</Text>
    </View>

    </View>


  </ScrollView>
    </View>
  )
}
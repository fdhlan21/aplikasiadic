import { View, Text, TouchableOpacity, ScrollView, Image, Linking, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../../utils/colors';
import { LeftArrow, LogoAdic } from '../../../assets'
import { getData, storeData } from '../../../localstorage/local';


export default function PageQuiz({navigation}) {


  const [datauser, setDataUser] = useState({});

// useEffect(() => {
// getData("user").then(response => {
//   setDataUser(response);
//   console.log('data user', response)
// });
// console.log('TES CUY');
// // },[])

//   const signOut = () => {

//         storeData('user',null);
//         navigation.reset({
//           index:0,
//           routes:[{name:'HalamanSplash'}]
//         })
//         Alert.alert(MYAPP,'Berhasil Logout');
    
//   }

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
      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center',}}>Quiz</Text>
    </View>
    </View>
    {/* END TOPBAR */}
  <ScrollView>
    <View style={{padding:10,}}>

        {/* QUIZ ONLINE */}
        <TouchableOpacity onPress={() => Linking.openURL('https://bit.ly/Quiz_Evaluasi')} style={{padding:10, backgroundColor:colors.secondary , borderWidth:1, borderColor:'white', borderRadius:5}}>
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, color:'black', textAlign:'center'}}>Quiz Online</Text>
        </TouchableOpacity>

        
        {/* LATIHAN SOAL */}
        <TouchableOpacity onPress={() => navigation.navigate("Quizpdf")} style={{padding:10, backgroundColor:colors.secondary , borderWidth:1, borderColor:'white', borderRadius:5, marginTop:20}}>
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, color:'black', textAlign:'center'}}>Latihan Soal</Text>
        </TouchableOpacity>

        {/* KUNCI JAWABAN */}
        <TouchableOpacity onPress={() => navigation.navigate("KunciJawabanQuiz")} style={{padding:10, backgroundColor:colors.secondary , borderWidth:1, borderColor:'white', borderRadius:5, marginTop:20}}>
            <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, color:'black', textAlign:'center'}}>Kunci Jawaban</Text>
        </TouchableOpacity>

    </View>
  </ScrollView>
    </View>
  )
}
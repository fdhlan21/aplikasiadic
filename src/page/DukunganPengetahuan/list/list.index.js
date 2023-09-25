import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colors from '../../../utils/colors'
import { LeftArrow, LogoAdic } from '../../../assets'

export default function ListDukunganPengetahuan({navigation}) {

  const HandleBack = () => {
    navigation.goBack()
  }

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
      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center',}}>Dukungan Pengetahuan</Text>
    </View>
    </View>
    {/* END TOPBAR */}
  <ScrollView>
  {/* LIST */}
    <View style={{padding:10, marginTop: 20}}>

      {/* 1 */}
      <View style={{}}>
        <TouchableOpacity onPress={() => navigation.navigate("DukunganPengetahuanasi")}  style={{padding:10, borderRadius:5, backgroundColor:colors.secondary, borderWidth:1, }}>
          <Text style={{color:'black', fontFamily:'Poppins-SemiBold', fontSize:15, textAlign:'center', }}>ASI</Text>
        </TouchableOpacity>
      </View>

      {/* 2 */}
      <View style={{marginTop:20, }}>
        <TouchableOpacity onPress={() => navigation.navigate("DukunganPengetahuanBayi")} style={{padding:10, borderRadius:5, backgroundColor:colors.secondary, borderWidth:1, }}>
          <Text style={{color:'black', fontFamily:'Poppins-SemiBold', fontSize:15, textAlign:'center', }}>Memandikan Bayi</Text>
        </TouchableOpacity>
      </View>

      {/* 3 */}
      <View style={{marginTop:20, }}>
        <TouchableOpacity onPress={() => navigation.navigate("DukunganPijatOksitosin")} style={{padding:10, borderRadius:5, backgroundColor:colors.secondary, borderWidth:1, }}>
          <Text style={{color:'black', fontFamily:'Poppins-SemiBold', fontSize:15, textAlign:'center', }}>Pijat Oksitosin</Text>
        </TouchableOpacity>
      </View>

      {/* 4 */}
      <View style={{marginTop:20, }}>
        <TouchableOpacity onPress={() => navigation.navigate("DukunganTekniMenyusui")} style={{padding:10, borderRadius:5, backgroundColor:colors.secondary, borderWidth:1, }}>
          <Text style={{color:'black', fontFamily:'Poppins-SemiBold', fontSize:15, textAlign:'center', }}>Teknik Menyusui</Text>
        </TouchableOpacity>
      </View>

      {/* 5 */}
      <View style={{marginTop:20, }}>
        <TouchableOpacity onPress={() => navigation.navigate("DukunganStimulasFisik")} style={{padding:10, borderRadius:5, backgroundColor:colors.secondary, borderWidth:1, }}>
          <Text style={{color:'black', fontFamily:'Poppins-SemiBold', fontSize:15, textAlign:'center', }}>Terapi Stimulas Fisik</Text>
        </TouchableOpacity>
      </View>

      {/* 6 */}
      <View style={{marginTop:20, }}>
        <TouchableOpacity onPress={() => navigation.navigate("DukunganKMC")} style={{padding:10, borderRadius:5, backgroundColor:colors.secondary, borderWidth:1, }}>
          <Text style={{color:'black', fontFamily:'Poppins-SemiBold', fontSize:15, textAlign:'center', }}>KMC(Metode Kangguru)</Text>
        </TouchableOpacity>
      </View>


    </View>
  </ScrollView>
<View style={{alignItems:'center', marginTop: '-50%'}}>
<Image style={{width:300, height:300, }} source={LogoAdic}/>
</View>
    </View>
  )
}
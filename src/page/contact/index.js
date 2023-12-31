import React from 'react'
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { LeftArrow, LogoUniv } from '../../assets'
import colors from '../../utils/colors'

export default function ContactScreen({navigation}) {
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
      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center',}}>Contact</Text>
    </View>
    </View>
    {/* END TOPBAR */}
    <ScrollView>

    <View style={{padding:10, }}>

    {/* IMAGE LOGO */}
    <View style={{padding:10, alignItems:'center', top: -10}}>
      <Image style={{height:200, width:200 ,}} source={LogoUniv}/>
    </View> 
    {/* NAMA TIM  */}

    <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop: 10,}}>
    <Text style={{fontFamily:'Poppins-SemiBold'}}>Tim Pengembang Aplikasi : <Text style={{fontFamily:'Poppins-Regular'}}>{'\n'}Eni Rahmawati, S.Kep., Ns., M.Kep.{'\n'}Dian Ramawati, S.Kep., Ns., M.Kep., Ph.D.{'\n'}Atikah Proverawati, S.Kep., Ns., M.Kep.</Text> </Text>
    </View>

      {/* NAMA PRAKTIK  */}

    <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop: 10,}}>
    <Text style={{fontFamily:'Poppins-SemiBold'}}>Tempat Praktik : <Text style={{fontFamily:'Poppins-Regular'}}>Laboratorium Keperawatan Anak
Jurusan Keperawatan, Fakultas Ilmu-Ilmu Kesehatan
Universitas Jenderal Soedirman</Text> </Text>
    </View>

      {/* ALAMAT  */}

    <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop: 10,}}>
    <Text style={{fontFamily:'Poppins-SemiBold'}}>Alamat : <Text style={{fontFamily:'Poppins-Regular'}}>Jl. dr. Soeparno Grendeng Purwokerto Utara 53122 Banyumas, Jawa Tengah, Indonesia</Text> </Text>
    </View>

    {/* CONTACT  */}

    <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop: 10,}}>
    <Text style={{fontFamily:'Poppins-SemiBold'}}>Website : <Text style={{fontFamily:'Poppins-Regular', color:'blue'}} onPress={() => Linking.openURL('https://fikes.unsoed.ac.id/')}>https://fikes.unsoed.ac.id/</Text> </Text>
    </View>

    
    {/* CONTACT  */}

    <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop: 10,}}>
    <Text style={{fontFamily:'Poppins-SemiBold'}}>Email : <Text style={{fontFamily:'Poppins-Regular',}}>eni.rahmawati@unsoed.ac.id</Text> </Text>
    </View>


      
    {/* SPONSSOR  */}

    <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop: 10, marginTop: 50
    }}>
    <Text style={{fontFamily:'Poppins-SemiBold', textAlign:'center'}}>Sponsor</Text>
    </View>

    {/* SPONSSOR  */}

    <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop: 10, marginTop: 10
    }}>
    <Text style={{fontFamily:'Poppins-SemiBold', textAlign:'left'}}>LEMBAGA PENELITIAN DAN PENGABDIAN KEPADA MASYARAKAT (LPPM)
UNIVERSITAS JENDERAL SOEDIRMAN{'\n'}
{'\n'}
Kampus Grendeng Jl. Dr. Suparno Grendeng Purwokerto 53122{'\n'}
{'\n'}
Telpon/Fax  (0281)  625739{'\n'}
{'\n'}
Website : <Text style={{fontFamily:'Poppins-SemiBold', color:'blue'}} onPress={() => Linking.openURL('https://lppm.unsoed.ac.id/')}>lppm.unsoed.ac.id</Text>{'\n'}
{'\n'}
email : lppm@unsoed.ac.id</Text>
    </View>




    </View>

    </ScrollView>
    </View>
  )
}
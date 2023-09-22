import axios from 'axios';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { LogoAdic } from '../../assets';
import { RegisterURL, storeData } from '../../localstorage/local';
import colors from '../../utils/colors';

export default function LoginScreen({navigation}) {

const [inputText, setInputText] = useState('');
const [loading, setLoading] = useState(false);

const [form, setForm] = useState({

   nama: '',
   umur: '',
   kota: '',
   password: '',

});

const HandleLogin = () => {


    if ((form.nama.length == 0 ) | (form.umur.length == 0 ) | (form.kota.length == 0) | (form.password.length == 0)) {
    showMessage({
        type:'default',
        color:'white',
        backgroundColor:colors.error,
        message:'Tolong isi semua feild!',
    })
    } else {
    console.log(form);
    setLoading(true);

    axios
    .post(RegisterURL, form)
    .then(response => {
        setLoading(false);
        console.log(response.data);
        storeData('user', response.data);
        navigation.replace("HomeScreen",  { username: form.nama });
        showMessage({
            type:'default',
            color:'white',
            backgroundColor:colors.success,
            message:'Selamat Datang!',
        })
    })  
    .catch(error => {
        console.error(error)
    })
    }

}

const HandleGuest = () => {
    navigation.navigate("HomeScreen",  { username: 'Guest' });
    showMessage({
        type:'default',
        color:'white',
        backgroundColor:colors.success,
        message:'Selamat Datang!',
    })
    
}

  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>

    <ScrollView>

    <View style={{paddng:10, alignItems:'center'}}>
        <Image style={{width:300, height:120, }} source={LogoAdic}/>
    </View>

    <View style={{padding:10, marginTop:'20%'}}>
    <Text style={{fontFamily:'Poppins-Bold', textAlign:'center', fontSize:20, top: -10}}>Login</Text>
    <View style={{backgroundColor:'white', borderRadius:5, borderWidth:1,}}>

    {/*  */}
    <View style={{marginTop: 20, padding:10, }}>
    <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, }}>Nama Ibu Kandung</Text>
    <TextInput style={{backgroundColor:'#fff', color:'black', fontSize:12 , 
    fontFamily:'Poppins-Regular', borderWidth:1, height:40, borderRadius:5, paddingRight:10, paddingLeft:10 }}
    value={form.nama} onChangeText={value => setForm({...form,nama: value})} placeholder='Silahkan masukan nama ibu kandung...' placeholderTextColor='gray' />
    </View>

    <View style={{marginTop: 0, padding:10, }}>
    <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, }}>Usia</Text>
    <TextInput style={{backgroundColor:'#fff', color:'black', fontSize:12 , 
    fontFamily:'Poppins-Regular', borderWidth:1, height:40, borderRadius:5, paddingRight:10, paddingLeft:10 }} 
    value={form.umur} onChangeText={value => setForm({...form,umur: value})} placeholder='Silahkan masukan usia anda' placeholderTextColor='gray' keyboardType="numeric" />
    </View>

    <View style={{marginTop: 0, padding:10, }}>
    <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, }}>Asal Kota</Text>
    <TextInput style={{backgroundColor:'#fff', color:'black', fontSize:12 , 
    fontFamily:'Poppins-Regular', borderWidth:1, height:40, borderRadius:5,  paddingRight:10, paddingLeft:10}}  
   value={form.kota} onChangeText={value => setForm({...form,kota: value})}   placeholder='Silahkan masukan asal kota anda' placeholderTextColor='gray'/>
    </View>

     <View style={{marginTop: 0, padding:10, }}>
    <Text style={{fontFamily:'Poppins-SemiBold', fontSize:15, }}>Password</Text>
    <TextInput style={{backgroundColor:'#fff', color:'black', fontSize:12 , 
    fontFamily:'Poppins-Regular', borderWidth:1, height:40, borderRadius:5,  paddingRight:10, paddingLeft:10}}  
   value={form.password} onChangeText={value => setForm({...form,password: value})}   placeholder='Silahkan masukan asal kota anda' placeholderTextColor='gray' secureTextEntry={true}/>
    </View>

    <View style={{padding:10,}}>


    <TouchableOpacity onPress={HandleLogin}  style={{padding:10, backgroundColor:colors.success, borderRadius:5, }}>
    <Text style={{color:'white', fontSize:15, fontFamily:'Poppins-SemiBold', textAlign:'center'}}>Login</Text>
    </TouchableOpacity>
    
     <TouchableOpacity onPress={HandleGuest}  style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop:10,}}>
    <Text style={{color:'black', fontSize:15, fontFamily:'Poppins-SemiBold', textAlign:'center'}}>Guest</Text>
    </TouchableOpacity>
    
    </View>

    </View>
    </View>

    </ScrollView>
    
    </View>
  )
}
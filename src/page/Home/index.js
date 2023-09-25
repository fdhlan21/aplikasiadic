import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Dimensions, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Contact, DaftarBacaan, DukunganEmosional, DukunganKeterampilan, DukunganPengetahuan, LogOut, LogoAdic, LogoSponsor, Quiz, Slider1, Slider2, Slider3, Slider4 } from '../../assets'
import { MYAPP, getData, storeData } from '../../localstorage/local'
import colors from '../../utils/colors'


export default function HomeScreen({navigation}) {
   const route = useRoute();
   const username = route.params?.username || 'Guest';

     const { width } = Dimensions.get('window');
    const data = [
    { id: 1, source: Slider1 },
    { id: 2, source: Slider2 },
    { id: 3, source: Slider3 },
    { id: 4, source: Slider4 },
  // Tambahkan data lainnya
];


  const [activeSlide, setActiveSlide] = React.useState(0);
const carouselRef = React.useRef(null);

React.useEffect(() => {
  const timer = setInterval(() => {
    if (carouselRef.current) {
      if (activeSlide === images.length - 1) {
        carouselRef.current.snapToItem(0);
      } else {
        carouselRef.current.snapToNext();
      }
    }
  }, 3000); // Ganti dengan interval waktu (dalam milidetik) antara slide

  return () => {
    clearInterval(timer);
  };
}, [activeSlide]);

  const [datauser, setDataUser] = useState({});

useEffect(() => {
getData("user").then(response => {
  setDataUser(response);
  console.log('data user', response)
});
console.log('TES CUY');
},[])

 const handleLogout = () => {
    // Menghapus parameter username sementara
   storeData('user',null);
        navigation.reset({
          index:0,
          routes:[{name:'Splash'}]
        })
        Alert.alert(MYAPP,'Berhasil Logout');
    
  };


   const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item.source} style={styles.image} />
      </View>
    );
  };


  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
    <ScrollView>
    <View style={{padding:10}}>

    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <View style={{padding:10, }}>
        <Text style={{fontSize:15, fontFamily:'Poppins-SemiBold'}}>Selamat Datang</Text>
         <Text style={{fontFamily:'Poppins-Regular', fontSize: 12,}}>{username || 'Guest'}</Text>
         
        <TouchableOpacity style={{marginTop:5}} onPress={handleLogout}>
          <Image style={{width:22, height:22,}} source={LogOut} />
        </TouchableOpacity>

    </View>
    <View style={{padding:10, top: -30}}>
        <Image style={{width:100, height:100}} source={LogoAdic} />
    </View>
    </View>

    <View style={{padding:0, alignItems:'center', top: -30}}>
        
        <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActiveSlide(index)}
         autoplay
        loop
        autoplayInterval={3000} // Interval waktu otomatis (dalam milidetik)
      />
    </View>
   
   <View style={{padding:0, }}>

    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', }}>

{/* 1 */}
<TouchableOpacity onPress={() => navigation.navigate("ListDukunganPengetahuan")} style={{alignItems:'center', }}>
<View style={{padding:10, height:60, width:60, borderRadius:5, borderWidth:1, backgroundColor:colors.secondary}}>
<Image style={{height:40, width:40}} source={DukunganPengetahuan}  />
</View>
<Text style={{fontSize:9, fontFamily:'Poppins-Regular', textAlign:'center', top:5}}>Dukungan{'\n'}Pengetahuan</Text>
</TouchableOpacity>

{/* 2 */}
<TouchableOpacity onPress={() => navigation.navigate("DukunganEmosional")} style={{alignItems:'center'}}>
<View style={{padding:10, height:60, width:60, borderRadius:5, borderWidth:1, backgroundColor:colors.secondary}}>
<Image style={{height:40, width:40}} source={DukunganEmosional}  />
</View>
<Text style={{fontSize:9, fontFamily:'Poppins-Regular', textAlign:'center', top:5}}>Dukungan{'\n'}Emosional</Text>
</TouchableOpacity>

{/* 3 */}
<TouchableOpacity  onPress={() => navigation.navigate("ListDukunganKeterampilan")} style={{alignItems:'center'}}>
<View style={{padding:10, height:60, width:60, borderRadius:5, borderWidth:1, backgroundColor:colors.secondary}}>
<Image style={{height:40, width:40}} source={DukunganKeterampilan}  />
</View>
<Text style={{fontSize:9, fontFamily:'Poppins-Regular', textAlign:'center', top:5}}>Dukungan{'\n'}Keterampilan</Text>
</TouchableOpacity>


    </View>

 <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:'15%'}}>

{/* 1 */}
<TouchableOpacity onPress={() => navigation.navigate("DaftarBacaan")} style={{alignItems:'center'}}>
<View style={{padding:10, height:60, width:60, borderRadius:5, borderWidth:1, backgroundColor:colors.secondary}}>
<Image style={{height:40, width:40}} source={DaftarBacaan}  />
</View>
<Text style={{fontSize:9, fontFamily:'Poppins-Regular', textAlign:'center', top:5}}>Daftar Bacaan</Text>
</TouchableOpacity>


{/* 2 */}
<TouchableOpacity onPress={() => navigation.navigate("QuizPage")}  style={{alignItems:'center'}}>
<View style={{padding:10, height:60, width:60, borderRadius:5, borderWidth:1, backgroundColor:colors.secondary}}>
<Image style={{height:40, width:40}} source={Quiz}  />
</View>
<Text style={{fontSize:9, fontFamily:'Poppins-Regular', textAlign:'center', top:5}}>Quiz</Text>
</TouchableOpacity>

{/* 3 */}
<TouchableOpacity onPress={() => navigation.navigate('ContactScreen')} style={{alignItems:'center'}}>
<View style={{padding:10, height:60, width:60, borderRadius:5, borderWidth:1, backgroundColor:colors.secondary}}>
<Image style={{height:40, width:40}} source={Contact}  />
</View>
<Text style={{fontSize:9, fontFamily:'Poppins-Regular', textAlign:'center', top:5}}>Contact</Text>
</TouchableOpacity>


    </View>

    
    
   </View>

    </View>
    <View style={{alignItems:'center', marginTop:-50,}}>
        <Image style={{width:230, height:230}} source={LogoAdic}/>
    </View>
    <View style={{alignItems:'center', marginTop:-50,}}>
      <Text style={{color:'black', fontFamily:'Poppins-SemiBold', fontSize:18, textAlign:'center'}}>AYO DUKUNG IBU CERDAS</Text>
      <Text style={{color:'black', fontFamily:'Poppins-SemiBold', fontSize:11, textAlign:'center'}}>DUKUNGAN PENGETAHUAN, SKILL DAN EMOSIONAL IBU DAN KELUARGA DENGAN BAYI KECIL</Text>
    </View>
    </ScrollView>
  

    </View>
  )
}


const styles = StyleSheet.create({
imageContainer: {
    width:'100%',
    height:160 , // Sesuaikan tinggi gambar sesuai kebutuhan Anda
    padding:10,
   
 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius:5,
     
  },
  pagination: {
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: colors.warnatiga, // Ubah warna sesuai kebutuhan Anda
    
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray', // Ubah warna sesuai kebutuhan Anda
  },

    button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
})
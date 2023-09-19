import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../../utils/colors'
import Pdf from 'react-native-pdf'


export default function Dukunganpengetahuanasi() {
    const source = {uri: 'bundle-assets://pdf/1_ASI.pdf'}
//assets/pdf/8_anemia_new.pdf'

  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
    {/* TOPBAR */}
    <View style={{padding:10, backgroundColor:colors.secondary}}>
    <View>

    </View>
    <View>
        <Text style={{fontFamily:'Poppins-SemiBold', fontSize:12, textAlign:'center'}}>ASI</Text>
    </View>
    </View>
    <ScrollView  contentContainerStyle={{flex:1}}>
 <Pdf style={{flex:1, padding:0,left:0, backgroundColor:colors.primary, alignItems:'center', width:'100%',  bottom:0,     width: Dimensions.get('window').width,}} source={source} 
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
    trustAllCerts={false}
    horizontal={true}
/>
    </ScrollView>
    </View>
  )
}
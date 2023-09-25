// In App.js in a new project

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import ListDukunganKeterampilan from '../../page/DukunganKeterampilan/list';
import Dukunganpengetahuanasi from '../../page/DukunganPengetahuan/list/asi';
import KmcPdf from '../../page/DukunganPengetahuan/list/kmc_pdf.';
import ListDukunganPengetahuan from '../../page/DukunganPengetahuan/list/list.index';
import MemandikanBayi from '../../page/DukunganPengetahuan/list/memandikan_bayi';
import PijatOksitosin from '../../page/DukunganPengetahuan/list/pijat_oksitosin';
import TeknikMenyusui from '../../page/DukunganPengetahuan/list/teknik_menyusui';
import TerapiStimulasFisik from '../../page/DukunganPengetahuan/list/terapi_simulasi_fisik';
import HomeScreen from '../../page/Home';
import SplashScreen from '../../page/Splash';
import ContactScreen from '../../page/contact';
import DaftarBacaan from '../../page/daftarbaca';
import DukunganEmosional from '../../page/dukunganemosional/dukungan_emisonal';
import LoginScreen from '../../page/login';
import PageQuiz from '../../page/Quiz/page';
import KunciJawaban from '../../page/Quiz/kunci_jawaban';
import QuizPDF from '../../page/Quiz/Quiz-PDF';






const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator initialRouteName=''>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ListDukunganPengetahuan" component={ListDukunganPengetahuan} options={{headerShown:false}}/>
        <Stack.Screen name="DukunganPengetahuanasi" component={Dukunganpengetahuanasi} options={{headerShown:false}}/>
        <Stack.Screen name="ListDukunganKeterampilan" component={ListDukunganKeterampilan} options={{headerShown:false}}/>
        <Stack.Screen name="ContactScreen" component={ContactScreen} options={{headerShown:false}}/>
        <Stack.Screen name="DukunganPengetahuanBayi" component={MemandikanBayi} options={{headerShown:false}}/>
        <Stack.Screen name="DukunganPijatOksitosin" component={PijatOksitosin} options={{headerShown:false}}/>
        <Stack.Screen name="DukunganTekniMenyusui" component={TeknikMenyusui} options={{headerShown:false}}/>
        <Stack.Screen name="DukunganStimulasFisik" component={TerapiStimulasFisik} options={{headerShown:false}}/>
        <Stack.Screen name="DukunganKMC" component={KmcPdf} options={{headerShown:false}}/>
        <Stack.Screen name="DukunganEmosional" component={DukunganEmosional} options={{headerShown:false}}/>
        <Stack.Screen name="DaftarBacaan" component={DaftarBacaan} options={{headerShown:false}}/>
        <Stack.Screen name="QuizPage" component={PageQuiz} options={{headerShown:false}}/>
        <Stack.Screen name="KunciJawabanQuiz" component={KunciJawaban} options={{headerShown:false}}/>
        <Stack.Screen name="Quizpdf" component={QuizPDF} options={{headerShown:false}}/>


      </Stack.Navigator>
  
  );
}

export default MyStack;
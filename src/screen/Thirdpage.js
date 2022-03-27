import React from 'react';
import{
    SafeAreaView,
    Text,
    Image,
    View,
    TextInput,
    ScrollView,
    Button,
} from 'react-native';
import { exp } from 'react-native/Libraries/Animated/Easing';
import Styles from '../data/style'; 
import Secondpage from './Secondpage';

const Thirdpage = ({navigation}) => {

    return  (
        <SafeAreaView>
            <View style={Styles.boxTitle}>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                    <View style={{marginLeft: 5}}>
                        <Text style={Styles.TextTitleLeft} >A. C. P. T. S.</Text>
                        <Text style={{fontFamily: "Poppins",fontSize: 14, color:'#5F749B', textShadowColor: 'white', textShadowRadius: 1}}>
                        Aircraft Carrier Public Transportation System
                        </Text>

                    </View>
                    
                    <Image source={require('../data/image/500-MonkeyBuccaneer.webp')} style={{width:75, height:75, marginRight: 5}} />
                </View>
            </View>

            <ScrollView>
                <View style={Styles.centerView}>
                    <Text style={{fontFamily: 'Poppins', fontSize: 24, marginBottom: 20}}>Your purchase has been successful. Welcome aboard!</Text>
                    <View style={Styles.boxpagetwo}>
                        <Text style={{fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 24, marginBottom: 20}}>Boarding Ticket</Text>
                        <View style={Styles.pagetwoboxfill}>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={Styles.textticket}>Passenger: </Text>
                                <Text style={Styles.textticket}>Fajar Tegar</Text>
                            </View>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={Styles.textticket}>Departure: </Text>
                                <Text style={Styles.textticket}>Merak</Text>
                            </View>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={Styles.textticket}>Arrival: </Text>
                                <Text style={Styles.textticket}>Bakauheni</Text>
                            </View>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={Styles.textticket}>Seat: </Text>
                                <Text style={Styles.textticket}>24 E</Text>
                            </View>

                        </View>
                        



                    </View>
                    
                    <Button
                        title= "OKAY"
                        color= '#5F749B'
                        onPress={() => navigation.navigate ('Home')}
                        marginVertical= '20'
                    />
                </View>
                
                
            </ScrollView>





            {/* <View>
                <View style={Styles.centerView}>
                    <Text style={{color: '#0E1C36', fontWeight: 'bold', fontSize: 24, fontFamily: 'Poppins'}}>
                        Mohon Maaf Fajar sudah meninggal
                    </Text>
                    <Image source={require('../data/image/kys.jpg')} style={{width: 400, height: 225, marginVertical: 20}}>
                        
                    </Image>
                    <Button
                        title = "Buenas Noches"
                        onPress={()=>navigation.navigate('Home')}>
                
                    </Button>
                </View>
                
                
            </View> */}
            
        </SafeAreaView>
    );
}

export default Thirdpage;
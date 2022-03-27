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
import Styles from '../data/style'; 
import Thirdpage from './Thirdpage';
// import Home from './Homepage';

const Secondpage = ({navigation}) => {

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
                    <Text style={{fontFamily: 'Poppins', fontSize: 24, marginBottom: 20}}>You are about to purchase a ticket.</Text>
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
                                <Text style={Styles.textticket}>Price: </Text>
                                <Text style={Styles.textticket}>Rp. 300000</Text>
                            </View>

                        </View>
                        



                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '70%', marginTop: 15}}>
                        <Button
                            title= "CANCEL ORDER"
                            color= '#BD5757'
                            onPress={() => navigation.navigate ('Home')}
                        />
                        <Button
                            title= "ORDER NOW"
                            color= '#57BD8D'
                            onPress={() => navigation.navigate ('Thirdpage')}
                        />
                        
                    
                    
                        
                    
                    </View>
                </View>
                
                
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Secondpage;
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

import Secondpage from './Secondpage';


const Home = ({navigation}) => {

    const [textAwal, onChangeAwal] = React.useState('');
    const [textTujuan, onChangeTujuan] = React.useState('');
    const [textWaktu, onChangeWaktu] = React.useState('');
    const [textJam, onChangeJam] = React.useState('');

    return (
        <SafeAreaView >
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
                    
                    

                    <View style={Styles.boxmain}>
                        <View style={Styles.margins}>
                            <Text style={Styles.textSubtittle}>Passenger Name</Text>
                            <TextInput
                                style={Styles.textInput}
                                onChangeText={(text) => onChangeAwal(text)}
                                value={textAwal}
                                placeholder="Tulis..." />
                            <Text style={Styles.textSubtittle}>Boarding Port</Text>
                            <TextInput
                                style={Styles.textInput}
                                onChangeText={(text) => onChangeAwal(text)}
                                value={textAwal}
                                placeholder="Tulis..." />
                            <Text style={Styles.textSubtittle}>Destination Port</Text>
                            <TextInput
                                style={Styles.textInput}
                                onChangeText={(text) => onChangeTujuan(text)}
                                value={textTujuan}
                                placeholder="Tulis..." />
                            <Text style={Styles.textSubtittle}>Boarding Time</Text>
                            <TextInput
                                style={Styles.textInput}
                                onChangeText={(text) => onChangeWaktu(text)}
                                value={textWaktu}
                                placeholder="YYYY-MM-DD" />
                            <Text style={Styles.textSubtittle}>Time</Text>
                            <TextInput
                                style={Styles.textInput}
                                onChangeText={(text) => onChangeJam(text)}
                                value={textJam}
                                placeholder="Tulis..." />
                            <Button
                                title="BOOK NOW"
                                color='#5F749B'
                                onPress={() => navigation.navigate('Secondpage')}

                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Home ;
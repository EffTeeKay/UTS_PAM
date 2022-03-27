import React from "react";
import { StyleSheet} from "react-native";

const Styles = StyleSheet.create({

    container: {
        paddingTop: 50,
      },
      tinyLogo: {
        width: 50,
        height: 50,
      },
      logo: {
        width: 66,
        height: 58,
      },

    bacgroundSaveArea: {
        backgroundColor: 'green',
    },
    centerView: {
        alignItems: 'center',
        justifyContent: 'center',
        //borderRadius: 10,
        width: '100%',
        height: 600,
        backgroundColor: '#F9FBF2',

    },
    boxTitle: {
        backgroundColor: '#C3E2FF',
        width: '100%',
    },
    boxmain: {
        backgroundColor: '#C3E2FF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
        width: '70%',
        borderRadius: 10,
        borderColor: '#374869',
        shadowColor: 'gray',
        shadowRadius: 5,
    },
    boxpagetwo: {
        backgroundColor: '#C3E2FF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: '80%',
        borderRadius: 10,
        borderColor: '#374869',
        shadowColor: 'gray',
        shadowRadius: 5,
    },
    pagetwoboxfill: {
        width: '80%',
    },
    margins: {
        margin: 20,
        //alignItems:'flex-start',
        //backgroundColor: 'red',
    },
    textSubtittle: {
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold",
    },
    textInput: {
        height: 40,
        width: 250,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#5F749B',
        padding: 10,
        borderRadius: 20,
    },
    textticket: {
        fontFamily: "Poppins",
        fontSize: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'powderblue'
    },
    marginV: {
        marginVertical: 30,
    },
    TextTitleLeft: {
        fontFamily: "Bebas Neue",
        fontSize: 32,
        fontWeight: "bold",
        color: '#0E1C36',
        textAlign: 'left',
    },
    textTitle: {
        fontFamily: "Bebas Neue",
        fontSize: 32,
        fontWeight: "bold",
        color: '#5F749B',
        textShadowColor: '#AFCBFF',
        textShadowRadius: 5,
    },
    copyright: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 60,
    },

});

export default Styles;
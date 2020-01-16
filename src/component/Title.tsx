import { View, Text, StyleSheet, Alert } from "react-native"
import React from "react";
import {ToastAndroid} from 'react-native';

const handleInfoDev = () => {
    ToastAndroid.show('Desenvolvido por Rafael Boniolo', ToastAndroid.SHORT);    
}

const Title = ():JSX.Element =>{
    return(
        <>
            <View style={styles.titleContainer} onTouchEnd={handleInfoDev}>
                <Text style={styles.titleText} > Marca pra nóis </Text>
            </View>
            <View style={styles.teamsContainer}>
                <Text style={[styles.teamsText]}>Nós</Text>
                <Text style={styles.teamsText}>Eles</Text>
            </View>
        </>
        
    )
}

const styles = StyleSheet.create({
    titleContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20,
        marginBottom:45
    },
    titleText:{
        // fontFamily:"striverx",
        fontFamily:"PermanentMarker-Regular",
        fontSize:45,
        color:"white",
        textShadowColor: 'grey',
        textShadowOffset: {width: -1.5, height: 5},
        textShadowRadius: 1
    },
    teamsContainer:{
        flexDirection:"row",
        justifyContent:'space-around',
    },
    teamsText:{
        fontFamily:"PermanentMarker-Regular",
        fontSize:45,
        color:"white",
        textShadowColor: 'grey',
        textShadowOffset: {width: -1.5, height: 5},
        textShadowRadius: 1
    }
  });

export default Title;
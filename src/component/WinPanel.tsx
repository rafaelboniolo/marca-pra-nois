import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Vitoria from "../models/vitoria";



const WinPanel = (props:Vitoria):JSX.Element =>{
    return(
        <>
            <Text style={[styles.text,{textShadowColor: 'grey'}]}>Vitórias</Text>
            <View style={styles.containerPoints}>
                <Text style={styles.text}>{props.winA}</Text>
                <Text style={styles.text}>{props.winB}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerPoints:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    text:{
        fontSize:50,
        color:"white",
        textAlign:"center",
        // fontFamily:"striverx",
        fontFamily:"PermanentMarker-Regular",
        textShadowColor: 'red',
        textShadowOffset: {width: -1.5, height: 5},
        textShadowRadius: 1

    }
  });


export default WinPanel;
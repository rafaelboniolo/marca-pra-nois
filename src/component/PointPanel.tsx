import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Points from "../models/Points";



const PointPanel = (props:Points ):JSX.Element =>{
    return(
        <View style={styles.containerPoints}>
            <Text style={styles.text}>{props.pointA}</Text>
            <Text style={styles.text}>{props.pointB}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPoints:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    text:{
        fontSize:60,
        color:"white",
        textAlign:"center",
        // fontFamily:"striverx"
        fontFamily:"PermanentMarker-Regular",
        textShadowColor: 'red',
        textShadowOffset: {width: -1.5, height: 5},
        textShadowRadius: 1
    }
  });


export default PointPanel;
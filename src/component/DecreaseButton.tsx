import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import IncreaseDecrease from "../models/IncreaseDecrease";

const DecreaseButton = (props:IncreaseDecrease) => {

    const handlePressDecrease = () => {
        if((props.actualValue - props.proxValue) < 1){
            props.function(0)
            return;    
        }
        props.function(props.actualValue - props.proxValue)
    }

    return(
        <>
            <TouchableOpacity onPress={handlePressDecrease} style={styles.button}>
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop:15,
        paddingHorizontal:15
    },
    text:{
        fontSize:50,
        color:"white",
        textAlign:"center",
        fontFamily:"PermanentMarker-Regular",
    }
  });

export default DecreaseButton;
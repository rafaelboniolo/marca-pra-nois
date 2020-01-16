import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import IncreaseDecrease from "../models/IncreaseDecrease";

const IncreaseButton = (props: IncreaseDecrease) =>{

    const handlePressIncrease = () => {

        if(!props.trucoValue)
            props.function(props.actualValue + props.proxValue)
        else
            props.function(props.actualValue + (props.trucoValue == null ? 0 : props.trucoValue))
        props.reset()
    }

    return(
        <>
            <TouchableOpacity onPress={handlePressIncrease} style={styles.button}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    
    button:{
        paddingHorizontal:15
    },
    text:{
        fontSize:50,
        color:"white",
        textAlign:"center",
        fontFamily:"PermanentMarker-Regular",
    }
  });


export default IncreaseButton;
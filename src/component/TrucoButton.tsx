import { View, Text, StyleSheet, TouchableOpacity, Vibration, Alert } from "react-native";
import React, { useState } from "react";
// @deprecated
const TrucoButton = (props: {value:number, trucoValue:Function}) =>{

    const [value, setValue] = useState(props.value)

    const handlePressIncreaseTruco = () => {
        if(value >=12){
            setValue(0)
            return;
        }
            
        setValue(value+3)
    }

    props.trucoValue(value)

    return(
        <View style={styles.textContainer}>
            <TouchableOpacity onPress={handlePressIncreaseTruco} style={styles.button}>
                <Text style={styles.textTruco}>Truco</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer:{
        padding:3
    },
    text:{
        fontSize:50,
        color:"blue",
        textAlign:"center"
    },
    textTruco:{
        fontSize:25,
        color:"black",
        textAlign:"center"
    },
    button:{
        borderWidth:.5,
        borderColor:"grey",
        marginHorizontal:20,
        borderRadius:15,
        paddingVertical:10
    }
  });


export default TrucoButton;
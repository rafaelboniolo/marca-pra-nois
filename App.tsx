import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
  Alert,
  ToastAndroid,
  Vibration,
  Animated,
} from 'react-native';
import Title from './src/component/Title';
import IncreaseButton from './src/component/IncreaseButton';
import DecreaseButton from './src/component/DecreaseButton';
import WinPanel from './src/component/WinPanel';
import PointPanel from './src/component/PointPanel';

const App = () => {

  const [pointA, setPointA] = useState(0)
  const [pointB, setPointB] = useState(0)
  const [winA, setWinA] = useState(0)
  const [winB, setWinB] = useState(0)
  const [truco, setTruco] = useState(0)
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1))

  useEffect( ()=> {
    if(pointA >= 12){
      setPointA(0)
      setPointB(0)
      setWinA(winA+1)
      Vibration.vibrate([0,300,200,300])
      ToastAndroid.showWithGravity(
        'Vitória nossa :)',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );

      Animated.timing(fadeAnim, {
        toValue:20,
        duration:1000
      }).start()

    }
    else if(pointB >= 12){
      setPointA(0)
      setPointB(0)
      setWinB(winB+1)
      Vibration.vibrate([0,300,200,300])
      ToastAndroid.showWithGravity(
        'Vitória deles :/',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  },
    [pointA, pointB])

  const resetAllValues = () => {
    setPointA(0)
    setPointB(0)
    setTruco(0)
  }
  
  const resetTrucoValue = () => {
    setTruco(0)
  }

  const handlePressIncreaseTruco = () => {
    if(truco >=12){
        setTruco(0)
        return;
    }
        
    setTruco(truco+3)
}

  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor="rgb(34,31,32)" />
      <ImageBackground imageStyle={{width:"100%", height:"145%", left:0, top:-106}} source={{uri:"https://instrucoes.paulistacartoes.com.br/wp-content/uploads/2015/02/32.png"}} style={{width:"100%", height:"100%"}}>
      <View style={styles.appContainer}>
        <View style={stylesPosition.title}>
          <Title/>
        </View>

        <View style={styles.panelIncreaseDecrease}>
          <View style={styles.increaseDecreaseContainer}>
            <IncreaseButton function={setPointA} actualValue={pointA} proxValue={1} trucoValue={truco} reset={resetTrucoValue}/>
            <DecreaseButton function={setPointA} actualValue={pointA} proxValue={1} reset={()=>{}}/>
          </View>

          <View style={styles.increaseDecreaseContainer}>
            <IncreaseButton function={setPointB} actualValue={pointB} proxValue={1} trucoValue={truco} reset={resetTrucoValue}/>
            <DecreaseButton function={setPointB} actualValue={pointB} proxValue={1} reset={()=>{}}/>
          </View>

        </View>

        <View style={stylesPosition.pointPanel}>
          <PointPanel pointA={pointA} pointB={pointB}/>
        </View>
        
        <View style={stylesPosition.trucoButton}>
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={handlePressIncreaseTruco} style={styles.button}>
                <Animated.Text style={styles.textTruco} >Truco</Animated.Text>
            </TouchableOpacity>
            <Text style={styles.text}>{truco}</Text>
          </View>
        </View>
        
        <View style={stylesPosition.winPanel}>
          <WinPanel winA={winA} winB={winB}/>
        </View>

      </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    // backgroundColor:"green"
  },
  panelIncreaseDecrease:{
    flexDirection:"row", 
    justifyContent:'space-around'
  },
increaseDecreaseContainer:{
  borderWidth:0.5,
  borderRadius:35,
  borderColor:"white",
},
textContainer:{
  padding:3
},
text:{
  fontSize:65,
  color: "white",
  textAlign:"center",
  fontFamily:"PermanentMarker-Regular",
  textShadowColor: 'red',
  textShadowOffset: {width: -1.5, height: 5},
  textShadowRadius: 1
},
textTruco:{
    fontSize:65,
    color:"white",
    textAlign:"center",
    fontFamily:"FrederickatheGreat-Regular",
    // fontFamily:"MaShanZheng-Regular",
    // transform: rotate("45deg")
  },
button:{
    // borderWidth:.5,
    // borderColor:"grey",
    marginHorizontal:20,
    borderRadius:35,
    // backgroundColor:'grey'
}
});

const stylesPosition = StyleSheet.create({
  trucoButton:{
    justifyContent:"flex-end"
  },
  title:{
    justifyContent:"flex-start",
    flex:3.5
  },
  pointPanel:{
    flex:2
  },
  winPanel:{
    flex:2
  },
});

export default App;

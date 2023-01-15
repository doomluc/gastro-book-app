import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import Draggable from 'react-native-draggable';


export default function App() {
  return (
    <View style={styles.container}>
        <Draggable x={75} y={100} renderSize={56} renderColor='blue' renderText='A' isCircle shouldReverse onShortPressRelease={()=>alert('touched!!')}/>
        <Draggable x={200} y={300} renderColor='red' renderText='B'/>
        <Draggable x={50} y={50}>
        </Draggable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

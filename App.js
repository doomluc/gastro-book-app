import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { extend } from '@react-three/fiber'
extend({ DragControls })




function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const { camera, gl } = useThree();


  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={"orange"}
      />
        <dragControls ref={mesh} args={[[mesh.current], camera, gl.domElement]} />

    </mesh>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

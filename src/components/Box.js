import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = ({length}) => {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if(meshRef.current) {
      meshRef.current.rotation.x += delta/2;
      meshRef.current.rotation.y += delta;
    }
  })
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[length, length, length]} />
      <meshNormalMaterial />
    </mesh>
  ) 
}

export default Box;

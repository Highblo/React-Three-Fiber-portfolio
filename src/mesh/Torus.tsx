import { FC, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ThreeType } from "../types/ThreeType";
import { Mesh } from "three";

export const Torus: FC<ThreeType> = (props) => {
  const mesh = useRef<Mesh>(null!);
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  return (
    <group>
      <mesh {...props} ref={mesh}>
        <torusGeometry />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
};

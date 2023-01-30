import { useLoader } from "@react-three/fiber";
import { FC } from "react";
import { TextureLoader } from "three";
import { ThreeType } from "../types/ThreeType";

export const Sphere: FC<ThreeType> = (props) => {
  const texture = useLoader(TextureLoader, "images/たまき２.jpg");
  return (
    <group>
      <mesh {...props}>
        <sphereGeometry />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
};

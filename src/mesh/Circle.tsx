import { useTexture } from "@react-three/drei";
import { FC } from "react";
import { ThreeType } from "../types/ThreeType";

export const Circle: FC<ThreeType> = (props) => {
  const texture = useTexture(
    "images/twice-s-chaeyoung-in-kura-kura-mv-shoot-2021-wallpaper-1920x1200_6.jpg"
  );
  return (
    <group>
      <mesh {...props}>
        <circleGeometry args={[10]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
};

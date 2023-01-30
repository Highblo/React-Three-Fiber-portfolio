import { FC } from "react";

export const TorusKnot: FC = () => {
  return (
    <group>
      <mesh position={[-3, -3, 0]}>
        <torusKnotGeometry args={[0.8, 0.2]} />
        <meshPhysicalMaterial color="#049ef4" metalness={0.6} roughness={0.2} />
      </mesh>
    </group>
  );
};

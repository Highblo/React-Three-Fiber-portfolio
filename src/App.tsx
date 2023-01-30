import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "./mesh/Box";
import { Torus } from "./mesh/Torus";
import { Sphere } from "./mesh/Sphere";
import { Circle } from "./mesh/Circle";
import { TorusKnot } from "./mesh/TorusKnot";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(#05FBFF, #1E00FF)",
      }}
    >
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight />
        <pointLight position={[-6, -6, 10]} />
        <OrbitControls />
        <Box position={[-2, 0, 0]} />
        <Box position={[0, 0, 0]} />
        <Box position={[2, 0, 0]} />
        <Torus position={[0, 3, 0]} />
        <Torus position={[0, -3, 0]} />
        <Sphere position={[4, 0, 0]} />
        <Sphere position={[-4, 0, 0]} />
        <Circle position={[0, 0, -6]} />
        <Circle position={[20, 0, -6]} />
        <Circle position={[-20, 0, -6]} />
        <TorusKnot />
      </Canvas>
    </div>
  );
}

export default App;

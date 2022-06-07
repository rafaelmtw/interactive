import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { BoxBufferGeometry } from "three";

import Point from "../components/Point.js";

import {
  Box,
  softShadows,
  MeshWobbleMaterial,
  OrbitControls,
} from "@react-three/drei";

import { useSpring, a } from "@react-spring/three";

softShadows();

const SpinningBox = ({ position, args, color, speed }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
      position={position}
      ref={mesh}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </a.mesh>
  );
};

export default function Home() {
  return (
    <div className="w-full h-full fixed">
      <Canvas shadows camera={{ position: [-5, 2, 10], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <Suspense fallback={null}>
          <Point />
        </Suspense>

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -2, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
        </group>

        <SpinningBox
          position={[-2, 1, -1]}
          args={[1, 1, 1]}
          color="lightgrey"
          speed={1}
        />
        <SpinningBox position={[0, 1, 0]} color="lightpink" speed={2} />
        <SpinningBox position={[2, 1, 1]} color="lightblue" speed={2} />
        {/* <Box>
          <meshStandardMaterial attach="material" />
        </Box> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

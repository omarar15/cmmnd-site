"use client";

import { Canvas } from "react-three-fiber";
import { useRef, useState } from "react";
import { Box, Button } from "rebass";
import { useRouter } from "next/navigation";
import Scene from "../components/Scene.js";

export default function Home() {
  const inputRef = useRef();
  const [password, setPassword] = useState("");

  const router = useRouter();

  const enterSite = () => [router.push("/music")];

  // set is shop open to open

  // set the query to password field
  // if correct, redirect to shop page & open shop in context

  //zIndex: 0
  return (
    <div>
      <Canvas
        shadowMap
        colorManagement
        gl={{ alpha: false }}
        camera={{ position: [0, 0, 7], fov: 50 }}
        style={{
          position: "fixed",
          overflow: "hidden",
          bottom: 0,
          left: 0,
          height: "100vh",
          width: "100%",
          background: "white",
        }}
      >
        <Scene />
      </Canvas>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          margin: "auto auto",
          left: 0,
          width: "100%",
          justifyContent: "center",
          top: ["40vh", "45vh", "50vh"],
          transition: "all 400ms ease 100ms",
        }}
      >
        <button
          style={{
            marginBottom: 0,
            fontFamily: "Lekton",
            backgroundColor: "transparent",
            border: "none",
            alignSelf: "center",
            cursor: "pointer",
            fontSize: 24,
            textDecoration: "underline",
          }}
          onClick={() => enterSite()}
        >
          <i>ENTER</i>
        </button>
      </Box>
    </div>
  );
}

import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "./components/earth/Earth";
import TopSection from "./components/topSection/TopSection";

function App() {
  return (
    <div className="container-app">
      <TopSection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"
import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

const techStack = [
  { name: "Node.js", color: "#3C873A" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Tailwind", color: "#38BDF8" },
  { name: "Next.js", color: "#000000" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git", color: "#F1502F" },
  { name: "GitHub", color: "#181717" },
  { name: "API", color: "#EAB308" },
  { name: "SQL", color: "#00758F" },
  { name: "Database", color: "#FFC107" },
]

function ReactCenterLogo() {
//   const texture = useLoader(TextureLoader, "")
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={meshRef}>
      <circleGeometry args={[1.5, 64]} />
      {/* <meshBasicMaterial map={texture} transparent /> */}
    </mesh>
  )
}

function OrbitingTechIcons() {
  const groupRef = useRef<THREE.Group>(null!)
  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.005
  })

  return (
    <group ref={groupRef}>
      {techStack.map((tech, i) => {
        const angle = (i / techStack.length) * 2 * Math.PI
        const radius = 4
        const x = radius * Math.cos(angle)
        const z = radius * Math.sin(angle)

        return (
          <mesh key={tech.name} position={[x, 0, z]}>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshStandardMaterial color={tech.color} />
          </mesh>
        )
      })}
    </group>
  )
}

export default function ReactOrbitScene() {
  return (
    <div className="h-[600px] w-full">
      <Canvas camera={{ position: [0, 3, 8], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls enableZoom={false} autoRotate />
        <ReactCenterLogo />
        <OrbitingTechIcons />
      </Canvas>
    </div>
  )
}



// // src/components/ReactOrbitScene.tsx

// import { Canvas, useFrame } from "@react-three/fiber"
// import { OrbitControls, Html } from "@react-three/drei"
// import { useRef } from "react"
// import * as THREE from "three"
// import { techStack } from "../constants/techStack"

// function ReactCenterLogo() {
//   const meshRef = useRef<THREE.Mesh>(null!)
//   useFrame(() => {
//     if (meshRef.current) meshRef.current.rotation.y += 0.01
//   })

//   return (
//     <mesh ref={meshRef}>
//       <torusGeometry args={[1.5, 0.4, 16, 100]} />
//       <meshStandardMaterial color="#61DBFB" metalness={0.8} roughness={0.2} />
//     </mesh>
//   )
// }

// function OrbitingTechIcons() {
//   const groupRef = useRef<THREE.Group>(null!)
//   useFrame(() => {
//     if (groupRef.current) groupRef.current.rotation.y += 0.005
//   })

//   return (
//     <group ref={groupRef}>
//       {techStack.map((tech, i) => {
//         const angle = (i / techStack.length) * 2 * Math.PI
//         const radius = 5
//         const x = radius * Math.cos(angle)
//         const z = radius * Math.sin(angle)

//         return (
//           <group key={tech.name} position={[x, 0, z]}>
//             <Html distanceFactor={8} center>
//               <div className="flex flex-col items-center">
//                 {tech.icon}
//                 <span className="text-xs text-white mt-1">{tech.name}</span>
//               </div>
//             </Html>
//           </group>
//         )
//       })}
//     </group>
//   )
// }

// export default function ReactOrbitScene() {
//   return (
//     <div className="h-[600px] w-full bg-black rounded-xl shadow-xl overflow-hidden">
//       <Canvas camera={{ position: [0, 3, 8], fov: 60 }}>
//         <ambientLight intensity={0.6} />
//         <directionalLight position={[5, 5, 5]} intensity={0.8} />
//         <OrbitControls enableZoom={false} autoRotate />
//         <ReactCenterLogo />
//         <OrbitingTechIcons />
//       </Canvas>
//     </div>
//   )
// }

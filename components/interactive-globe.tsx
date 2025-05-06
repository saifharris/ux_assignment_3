"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { OrbitControls, Sphere, Html } from "@react-three/drei"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import type * as THREE from "three"

// Location data for our pins
const locations = [
  { id: 1, name: "Africa", count: 43, lat: 0, lng: 20, students: 2800 },
  { id: 2, name: "South Asia", count: 28, lat: 20, lng: 80, students: 1900 },
  { id: 3, name: "Latin America", count: 19, lat: -10, lng: -60, students: 1200 },
  { id: 4, name: "Middle East", count: 12, lat: 25, lng: 45, students: 600 },
]

// Convert lat/lng to 3D coordinates on a sphere
function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)

  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)

  return [x, y, z]
}

// The Earth component
function Earth({ setHoveredLocation }: { setHoveredLocation: (location: any | null) => void }) {
  const earthRef = useRef<THREE.Mesh>(null)
  const cloudsRef = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Load textures
  const [earthMap, earthBumpMap, earthSpecMap, cloudsMap] = useLoader(TextureLoader, [
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png",
  ])

  // Animate the earth and clouds
  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.07
    }
  })

  return (
    <>
      {/* Earth sphere */}
      <Sphere ref={earthRef} args={[1, 64, 64]}>
        <meshPhongMaterial
          map={earthMap}
          bumpMap={earthBumpMap}
          bumpScale={0.05}
          specularMap={earthSpecMap}
          specular={0x666666}
          shininess={5}
        />
      </Sphere>

      {/* Clouds layer */}
      <Sphere ref={cloudsRef} args={[1.01, 32, 32]}>
        <meshPhongMaterial map={cloudsMap} transparent={true} opacity={0.4} depthWrite={false} />
      </Sphere>

      {/* Location markers */}
      {locations.map((location) => {
        const [x, y, z] = latLngToVector3(location.lat, location.lng, 1.02)
        return (
          <group key={location.id} position={[x, y, z]}>
            <Html
              position={[0, 0, 0]}
              center
              distanceFactor={10}
              occlude
              onPointerOver={() => setHoveredLocation(location)}
              onPointerOut={() => setHoveredLocation(null)}
            >
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-data-primary text-white transition-all hover:scale-110">
                <span className="text-xs font-bold">{location.count}</span>
                <div className="absolute h-full w-full animate-ping rounded-full bg-data-primary opacity-75"></div>
              </div>
            </Html>
          </group>
        )
      })}
    </>
  )
}

// The main component that will be exported
export default function InteractiveGlobe() {
  const [hoveredLocation, setHoveredLocation] = useState<any | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Prevent hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl bg-white dark:bg-data-muted/30 shadow-sm">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        <ambientLight intensity={isDark ? 0.2 : 0.1} />
        <directionalLight color="white" position={[5, 3, 5]} intensity={isDark ? 2 : 1.5} />

        <Earth setHoveredLocation={setHoveredLocation} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>

      {/* Info panel that appears when hovering over a location */}
      {hoveredLocation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 dark:bg-data-muted/90 p-4 backdrop-blur-sm md:left-auto md:right-4 md:w-72 shadow-sm"
        >
          <h3 className="mb-2 text-lg font-bold text-foreground">{hoveredLocation.name}</h3>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-data-primary">{hoveredLocation.count}</span> learning centers
            </p>
            <p>
              <span className="font-medium text-data-primary">{hoveredLocation.students}+</span> students enrolled
            </p>
          </div>
          <div className="mt-3 text-xs text-muted-foreground">Hover for details, drag to rotate</div>
        </motion.div>
      )}
    </div>
  )
}

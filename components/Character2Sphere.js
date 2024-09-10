import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Character2(props) {
  const { nodes, materials } = useGLTF('/ClearcoatWicker.gltf')
  return (
    <group  dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.ClearcoatWicker}
        position={[0, 0.5, 0]}
        scale={[3, 3, 3]} 
      />
    </group>
  )
}

useGLTF.preload('/ClearcoatWicker.gltf')


export default Character2;
import { useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const StarField = () => {
  const count = 5000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  const particles = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      size: 0.05,
      sizeAttenuation: true,
      color: '#ffffff',
      transparent: true,
      opacity: 0.8,
    });
    return new THREE.Points(geometry, material);
  }, [positions]);

  useFrame((state) => {
    particles.rotation.y += 0.0005;
    particles.rotation.x += 0.0002;
  });

  return <primitive object={particles} />;
};

export default StarField;
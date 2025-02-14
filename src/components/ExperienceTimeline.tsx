import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TimelineSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
    </mesh>
  );
};

interface ExperienceItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  delay: number;
}

const ExperienceItem = ({ date, title, company, description, delay }: ExperienceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="ml-8 relative"
    >
      <div className="absolute -left-[3.5rem] top-2 w-4 h-4 bg-blue-500 rounded-full" />
      <div className="absolute -left-[3.25rem] top-6 h-full w-0.5 bg-blue-500/30" />
      <div className="bg-white/5 backdrop-blur-lg p-6 rounded-lg">
        <span className="text-blue-400 text-sm">{date}</span>
        <h3 className="text-xl font-semibold mt-1">{title}</h3>
        <h4 className="text-gray-400">{company}</h4>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export { TimelineSphere, ExperienceItem };
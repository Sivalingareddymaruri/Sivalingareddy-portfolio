import { motion } from 'framer-motion';

interface SkillIconProps {
  name: string;
  icon: string;
  delay: number;
}

const SkillIcon = ({ name, icon, delay }: SkillIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/10 backdrop-blur-lg p-3 hover:bg-white/20 transition-colors">
        <img src={icon} alt={name} className="w-full h-full object-contain" />
      </div>
      <span className="text-sm text-gray-300">{name}</span>
    </motion.div>
  );
}

export default SkillIcon;
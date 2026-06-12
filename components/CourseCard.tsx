

import { FaReact, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
const iconMap: Record<string, React.ReactNode> = {
  react: <FaReact size={40} />,
  nextjs: <SiNextdotjs size={40} />,
  tailwind: <SiTailwindcss size={40} />,
  javascript: <FaJs size={40} />,
};
type CourseCardProps = {
  title: string;
  progress: number;
iconName:string;};

export default function CourseCard({
  title, 
  progress,
  iconName,
}: CourseCardProps) {
  return (

<div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"> 
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        <span className="text-blue-400 font-bold">
          {progress}%
        </span>
      </div>
        <div className="mb-4">
  {iconMap[iconName]||<span>No Icon</span>}
</div>

      <div className="w-full bg-slate-700 rounded-full h-3">
    <div
  className="bg-blue-500 h-3 rounded-full transition-all duration-500"
  style={{ width: `${progress}%` }}
/>
      </div>
    

      <div className="mt-4 flex justify-between text-sm text-slate-400">
        <span>Progress</span>
        <span>
          {progress >= 80
            ? "Almost Done 🚀"
            : progress >= 50
            ? "In Progress 📚"
            : "Just Started ✨"}
        </span>
      </div>
      </div>
  
  );
}   

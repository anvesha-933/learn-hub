import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import CourseCard from "@/components/CourseCard";
import Sidebar from "@/components/SideBar";
import WelcomeCard from "@/components/WelcomeCard";
import ActivityCard from "@/components/activity";
import AnimatedWelcomeCard from "@/components/AnimatedWelcomeCard";
import AuthGuard from "@/components/AuthGuard";

export default async function Dashboard() { 
const { 
data: courses, error } = await supabase .from("courses") .select("*");
console.log(courses);
const totalCourses = courses?.length || 0;

const completedCourses =
  courses?.filter(course => course.progress === 100).length || 0;

const inProgressCourses =
  courses?.filter(
    course => course.progress > 0 && course.progress < 100
  ).length || 0; 
if (error) { 
  return ( 
  <main className="min-h-screen flex items-center justify-center bg-slate-900 text-red-500"> 
  Error: {error.message} 
  </main> 
  ); 
} 
return ( 
  <>
  <AuthGuard />
<main className="min-h-screen bg-slate-900 text-white p-4 lg:p-8 pt-16 lg:pt-8">
  <div className="grid lg:grid-cols-4 gap-6"> 
  {/* Sidebar */} 
  <div className="lg:col-span-1">
  <Sidebar />
</div>
  {/* Main Content */} 
  <div className="lg:col-span-3 space-y-6"> 
  
<div className="grid lg:grid-cols-3 gap-6">

  <div className="lg:col-span-2">
    <AnimatedWelcomeCard 
    
    totalCourses={totalCourses}
  completedCourses={completedCourses}
  inProgressCourses={inProgressCourses}
/> 
  </div>

  <div>
    <ActivityCard />
  </div>

</div>

<div className="grid md:grid-cols-2 gap-6">


   
  {courses?.map((course) => (
  
    <CourseCard
      key={course.id}
      title={course.title}
      progress={course.progress}
      iconName={course.icon_name}
    />
  
))}
 
</div> 
</div> 
</div> 
<div className="fixed bottom-0 left-0 right-0 bg-slate-800 flex justify-around p-4 lg:hidden border-t border-slate-700">

  <LayoutDashboard size={24} />

  <BookOpen size={24} />

  <BarChart3 size={24} />

  <Settings size={24} />

</div> 
</main>
</>


); 
}
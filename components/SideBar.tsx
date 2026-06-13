"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
LayoutDashboard,
BookOpen,
BarChart3,
Settings,
Menu,
X,
} from "lucide-react";

const menuItems = [
{ name: "Dashboard", icon: LayoutDashboard },
{ name: "Courses", icon: BookOpen },
{ name: "Analytics", icon: BarChart3 },
{ name: "Settings", icon: Settings },
];

export default function Sidebar() {
const [active, setActive] = useState("Dashboard");
const [isOpen, setIsOpen] = useState(false);
const handleLogout = () => {
  localStorage.removeItem("userName");
  window.location.href = "/";
};

return (
<>
{/* Mobile Hamburger */}
<button
onClick={() => setIsOpen(true)}
className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 rounded-lg"
> <Menu size={24} /> </button>


  {/* Desktop Sidebar */}
  <aside className="hidden lg:block bg-slate-800 rounded-2xl p-6 h-full">
    <h1 className="text-2xl font-bold mb-10">LearnHub</h1>

    <nav className="space-y-3">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className="relative w-full flex items-center gap-3 p-3 rounded-xl text-left"
          >
            {active === item.name && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-blue-500/20 border border-blue-500 rounded-xl"
              />
            )}

            <Icon size={20} className="relative z-10" />
            <span className="relative z-10">{item.name}</span>
          </button>
        );
      })}
    </nav>
    <button
  onClick={handleLogout}
  className="mt-8 w-full bg-red-500 text-white p-3 rounded-xl"
>
  Logout
</button>
  </aside>

  {/* Mobile Sidebar */}
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          className="fixed inset-0 bg-black/50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />

        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 h-full w-72 bg-slate-800 z-50 p-6"
        >
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-2xl font-bold">LearnHub</h1>

            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActive(item.name);
                    setIsOpen(false);
                  }}
                  className="relative w-full flex items-center gap-3 p-3 rounded-xl text-left"
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
          <button
  onClick={handleLogout}
  className="mt-8 w-full bg-red-500 text-white p-3 rounded-xl"
>
  Logout
</button>
        </motion.aside>
      </>
    )}
  </AnimatePresence>
</>


);
}



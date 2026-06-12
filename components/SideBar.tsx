"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="bg-slate-800 rounded-2xl p-6 h-full">
      <h1 className="text-2xl font-bold mb-10">
        LearnHub
      </h1>

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
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              )}

              <Icon size={20} className="relative z-10" />
              <span className="relative z-10">
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}


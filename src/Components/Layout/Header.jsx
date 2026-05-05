import {
  Bell,
  ChevronDown,
  Filter,
  Menu,
  Plus,
  Search,
  Settings,
  Sun,
  Moon,
} from "lucide-react";
import { useEffect, useState } from "react";
import userImg from "../../assets/boy-with-blue-hoodie-blue-hoodie_1230457-39799.jpg";

function Header({ sideBarCollapsed, onToggleSideBar }) {

  const [darkMode, setDarkMode] = useState(false);

  // تحميل الثيم عند فتح الصفحة
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // toggle dark mode
  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
<div
  className={`fixed top-0 right-0 h-16 md:h-20 z-40 transition-all duration-300
  bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-4 md:px-6
  left-0 ${sideBarCollapsed ? "md:left-20" : "md:left-72"}`}
>
      <div className="flex items-center justify-between h-full">

        {/* LEFT */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <button
            onClick={onToggleSideBar}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden sm:block">
            <h1 className="text-lg md:text-2xl font-bold text-slate-800 dark:text-white">
              Dashboard
            </h1>
            <p className="hidden md:block text-sm text-slate-500 dark:text-slate-400">
              Welcome back, Ahmed here's what's happening today
            </p>
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-10 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200
              dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2
              focus:ring-blue-500 transition"
            />

            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center space-x-2 md:space-x-3">

          {/* New Button */}
          <button className="hidden lg:flex items-center space-x-2 py-2 px-4
          bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition">
            <Plus className="w-4 h-4" />
            <span className="text-sm">New</span>
          </button>

          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Notifications */}
          <button className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] bg-red-500 text-white rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Settings */}
          <button className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <Settings className="w-5 h-5" />
          </button>

          {/* USER */}
          <div className="flex items-center space-x-2 md:space-x-3 pl-2 md:pl-3 border-l border-slate-200 dark:border-slate-700">

            <img
              src={userImg}
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />

            <div className="hidden lg:block">
              <p className="text-sm font-medium text-slate-700 dark:text-white">
                Ahmed
              </p>
              <p className="text-xs text-slate-500">Admin</p>
            </div>

            <ChevronDown className="hidden md:block w-4 h-4 text-slate-400" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;
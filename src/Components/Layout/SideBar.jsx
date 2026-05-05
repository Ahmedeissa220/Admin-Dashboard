import {
  BarChart3,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  Zap,
} from "lucide-react";

import { useState } from "react";
import userImg from "../../assets/boy-with-blue-hoodie-blue-hoodie_1230457-39799.jpg";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, active: true, badge: "New" },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles 6 permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  { id: "inventory", icon: Package, label: "Inventory", count: "847" },
  { id: "transaction", icon: CreditCard, label: "Transaction" },
  { id: "messages", icon: MessageSquare, label: "Messages", badge: "12" },
  { id: "calendar", icon: Calendar, label: "Calendar" },
  { id: "reports", icon: FileText, label: "Reports" },
  { id: "settings", icon: Settings, label: "Settings" },
];

function SideBar({ collapsed, currentPage, onChange, onToggleSideBar }) {
  const [expandedItems, setExpandedItems] = useState(new Set(["analytics"]));

  const toggleExpanded = (itemid) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemid)) {
      newExpanded.delete(itemid);
    } else {
      newExpanded.add(itemid);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <>
      {/* Overlay (mobile only) - تظهر فقط عندما يكون السايدبار مفتوحاً في الموبايل */}
      {!collapsed && (
        <div 
          onClick={onToggleSideBar} // إغلاق السايدبار عند الضغط على الـ Overlay
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
        ></div>
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen z-50
          ${collapsed ? "w-20" : "w-72"}
          
          transform transition-all duration-300 ease-in-out
          
          /* في الموبايل يختفي تماماً جهة اليسار، وفي الشاشات الكبيرة يتقلص لـ 20 */
          ${collapsed ? "-translate-x-full md:translate-x-0" : "translate-x-0"}
          
          bg-white dark:bg-slate-900 
          border-r border-slate-200 dark:border-slate-800 
          flex flex-col shadow-2xl md:shadow-none
        `}
      >
        {/* logo */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>

            {!collapsed && (
              <div className="transition-opacity duration-300">
                <h1 className="text-xl font-bold text-slate-800 dark:text-white leading-none">
                  Nexus
                </h1>
                <p className="text-xs text-slate-500 mt-1">Admin panel</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <div key={item.id} className="mb-1">
              <button
                className={`w-full flex items-center justify-between p-3 rounded-xl 
                transition-all duration-200 ${
                  currentPage === item.id || item.active
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-none"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
                onClick={() => {
                  if (item.submenu) {
                    toggleExpanded(item.id);
                  } else {
                    onChange(item.id);
                  }
                }}
              >
                <div className="flex items-center">
                  <item.icon className={`w-5 h-5 ${collapsed ? "mx-auto" : "mr-3"}`} />
                  {!collapsed && (
                    <span className="font-medium whitespace-nowrap">{item.label}</span>
                  )}
                </div>

                {!collapsed && (
                  <div className="flex items-center space-x-2">
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] bg-red-500 text-white rounded-md">
                        {item.badge}
                      </span>
                    )}
                    {item.count && (
                      <span className="text-[10px] font-bold opacity-60">
                        {item.count}
                      </span>
                    )}
                    {item.submenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedItems.has(item.id) ? "rotate-180" : ""}`} />
                    )}
                  </div>
                )}
              </button>

              {/* submenus */}
              {!collapsed && item.submenu && expandedItems.has(item.id) && (
                <div className="ml-10 mt-1 space-y-1 border-l-2 border-slate-100 dark:border-slate-800 pl-4 py-1">
                  {item.submenu.map((subitem) => (
                    <button
                      key={subitem.id}
                      className="w-full text-left py-2 text-sm text-slate-500 
                      dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 
                      transition-colors"
                    >
                      {subitem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className={`flex items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 ${collapsed ? "justify-center" : "space-x-3"}`}>
            <img
              src={userImg}
              alt="user"
              className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm"
            />
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-800 dark:text-white truncate">
                  Ahmed Eissa
                </p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  Administrator
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
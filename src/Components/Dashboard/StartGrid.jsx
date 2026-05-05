
import { ArrowDownRight, ArrowUpRight, DollarSign, Eye, ShoppingCart, Users } from "lucide-react";

  const stats = [
    {
      title: "Total Revenue",
      value: "$124,563",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "Active Users",
      value: "8,549",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Total Orders",
      value: "2,847",
      change: "+15.3%",
      trend: "up",
      icon: ShoppingCart,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Page Views",
      value: "45,892",
      change: "+-2.1%",
      trend: "down",
      icon: Eye,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      textColor: "text-orange-600 dark:text-orange-400",
    },
  ];

function StartGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 md:p-6
            border border-slate-200/50 dark:border-slate-700/50 
            hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 
            transition-all duration-300 group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                
                <p className="text-xs md:text-sm font-medium text-slate-600 dark:text-slate-400 mb-1 md:mb-2">
                  {item.title}
                </p>

                <p className="text-xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2 md:mb-4">
                  {item.value}
                </p>

                <div className="flex items-center space-x-2">
                  {item.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500" />
                  )}

                  <span
                    className={`text-xs md:text-sm font-semibold ${
                      item.trend === "up"
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.change}
                  </span>

                  <span className="hidden sm:block text-xs md:text-sm text-slate-500 dark:text-slate-400">
                    Vs Last Month
                  </span>
                </div>
              </div>

              <div
                className={`p-2 md:p-3 rounded-xl ${item.bgColor} group-hover:scale-110 transition-all duration-300`}
              >
                <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.textColor}`} />
              </div>
            </div>

            {/* Progressbar */}
            <div className="mt-3 md:mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-300`}
                style={{ width: item.trend === "up" ? "75%" : "45%" }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StartGrid;

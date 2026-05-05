// import { MoreHorizontal } from 'lucide-react'
import { TrendingUp, TrendingDown } from 'lucide-react';

const recentOrders = [
    {
        id: "#3847",
        customer: "John Smith",
        product: "MacBook Pro 16\"",
        amount: "$2,399",
        status: "completed",
        date: "2024-01-15",
    },
    {
        id: "#3848",
        customer: "Sarah Johnson",
        product: "iPhone 15 Pro",
        amount: "$1,199",
        status: "pending",
        date: "2024-01-15",
    },
    {
        id: "#3849",
        customer: "Mike Wilson",
        product: "AirPods Pro",
        amount: "$249",
        status: "completed", 
        date: "2024-01-14",
    },
    {
        id: "#3850",
        customer: "Emily Davis",
        product: "ipad Air",
        amount: "$599",
        status: "cancelled", 
        date: "2024-01-14",
    },
];

const topProducts = [
    {
        name: "MacBook Pro 16\"",
        sales: 1247,
        revenue: "$2,987,530",
        trend: "up",
        change: "+12%",
    },
    {
        name: "iPhone 15 Pro",
        sales: 2156,
        revenue: "$2,587,044",
        trend: "up",
        change: "+8%",
    },
    {
        name: "AirPods Pro",
        sales: 3421,
        revenue: "$852,229",
        trend: "down",
        change: "-3",
    },
    {
      name: "ipad Air",
      sales: 987,
      revenue: "$591,213",
      trend:"up",
      change: "+15%",
    },
];

function TableSection() {

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  return (
    <div className="space-y-6">

      {/* Recent Orders */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        
        <div className="p-4 md:p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                Latest customer orders
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-xs md:text-sm font-medium">
              View All
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left p-3 md:p-4 text-xs md:text-sm font-semibold text-slate-600">Order ID</th>
                <th className="text-left p-3 md:p-4 text-xs md:text-sm font-semibold text-slate-600">Customer</th>
                <th className="text-left p-3 md:p-4 text-xs md:text-sm font-semibold text-slate-600">Product</th>
                <th className="text-left p-3 md:p-4 text-xs md:text-sm font-semibold text-slate-600">Amount</th>
                <th className="text-left p-3 md:p-4 text-xs md:text-sm font-semibold text-slate-600">Status</th>
                <th className="text-left p-3 md:p-4 text-xs md:text-sm font-semibold text-slate-600">Date</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition"
                  >
                    <td className="p-3 md:p-4 text-sm text-blue-600">{order.id}</td>

                    <td className="p-3 md:p-4 text-sm text-slate-800 dark:text-white">
                      {order.customer}
                    </td>

                    <td className="p-3 md:p-4 text-sm text-slate-800 dark:text-white">
                      {order.product}
                    </td>

                    <td className="p-3 md:p-4 text-sm text-slate-800 dark:text-white">
                      {order.amount}
                    </td>

                    <td className="p-3 md:p-4">
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>

                    <td className="p-3 md:p-4 text-sm text-slate-500">
                      {order.date}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">

        <div className="p-4 md:p-6 border-b border-slate-200/50">
          <div className="flex items-center justify-between">
            <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-white">
              Top Products
            </h3>
            <button className="text-blue-600 hover:text-blue-700 text-xs md:text-sm font-medium">
              View All
            </button>
          </div>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Best performing products
          </p>
        </div>

<div className="p-4 md:p-6 space-y-3 md:space-y-4">
  {topProducts.map((product, index) => {
    return (
      <div
        key={index}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between 
        p-3 md:p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
      >
        
        {/* LEFT */}
        <div className="flex-1 mb-2 sm:mb-0">
          <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
            {product.name}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {product.sales} sales
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-between sm:block text-right">
          
          <p className="text-sm font-semibold text-slate-800 dark:text-white">
            {product.revenue}
          </p>

          <div className="flex items-center space-x-1 justify-end">
            {product.trend === "up" ? (
              <TrendingUp className="w-3 h-3 text-emerald-500" />
            ) : (
              <TrendingDown className="w-3 h-3 text-red-500" />
            )}

            <span
              className={`text-xs font-medium ${
                product.trend === "up"
                  ? "text-emerald-500"
                  : "text-red-500"
              }`}
            >
              {product.change}
            </span>
          </div>

        </div>
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
}

export default TableSection


import ActivityFeed from './ActivityFeed'
import RevnueChart from './RevnueChart'
import SalesChart from './SalesChart'
import TableSection from './TableSection'


function ChartSection() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
            <RevnueChart />
            <div className="mt-10">
                <TableSection />
            </div>
        </div>
        <div className="space-y-6">
            <SalesChart />
        <div className=" mt-12.5">
            <ActivityFeed />
        </div>
        </div>
    </div>
  )
}

export default ChartSection

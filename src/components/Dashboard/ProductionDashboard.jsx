import { StatCard } from "./StatCard";

export default function ProductionDashboard() {
  return (
    <div className='container'>
      <h6 className='text-lg font-semibold'>Production</h6>
      <div className='grid gap-4 py-4 grid-cols-1 md:grid-cols-2'>
        <StatCard title='Production Volume' value='3,200 units/week' />
        <StatCard title='Defect Rate' value='1.8%' />
        <StatCard title='Machine Uptime' value='96.2%' />
        <StatCard title='Machine Downtime' value='12.3 hrs/month' />
        <StatCard title='Cycle Time' value='3.5 min/unit' />
        <StatCard title='WIP Items' value='420' />
      </div>
    </div>
  );
}

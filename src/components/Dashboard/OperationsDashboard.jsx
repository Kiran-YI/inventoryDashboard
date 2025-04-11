import { StatCard } from "./StatCard";

export default function OperationsDashboard() {
  return (
    <div className='container'>
      <h6 className='text-lg font-semibold'>Operations </h6>
      <div className='grid gap-4 py-4 grid-cols-1 md:grid-cols-2'>
        <StatCard title='Production Output' value='12,500 units/month' />
        <StatCard title='Inventory Levels' value='68% (34,000 items)' />
        <StatCard title='Supply Chain Status' value='95% On-Time' />
        <StatCard title='Order Fulfillment Rate' value='92.5%' />
        <StatCard title='Downtime (Monthly)' value='8.5 hrs' />
        <StatCard title='Resource Utilization' value='87%' />
      </div>
    </div>
  );
}

import React from "react";
import OperationsDashboard from "./OperationsDashboard";
import ProductionDashboard from "./ProductionDashboard";

const Dashboard = () => {
  return (
    <div>
      <div className="px-4 bg-amber-100">
        <div className='py-3 bg-amber-100'>Dashboard</div>
      </div>
      <hr className='bg-dark mb-2' />
      <div className='grid gap-4 px-4  grid-cols-1 md:grid-cols-2 overflow-auto'>
        <OperationsDashboard />
        <ProductionDashboard />
      </div>
    </div>
  );
};

export default Dashboard;

import { Outlet } from "react-router";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./../components/ui/resizable";
import Sidebar from "@/constant/Sidebar";
const HomeLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <ResizablePanelGroup direction='horizontal' className='flex-grow'>
        {/* <ResizablePanel
          className='hidden lg:block w-full'
          defaultSize={2}
          maxSize={12}
          minSize={4}
        > */}
        <Sidebar />
        {/* </ResizablePanel> */}
        <ResizableHandle />
        <ResizablePanel>
          <div className='w-full h-[95vh] relative'>
            {/* <div className='px-2 lg:px-10'> */}
            <Outlet />
            {/* </div> */}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default HomeLayout;

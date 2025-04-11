import { Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import HomeLayout from "./layout/HomeLayout";
import { Toaster } from "react-hot-toast";
import { ROUTES as CUSTOM_ROUTES } from "./constant/ROUTES.js";
import Dashboard from "./components/Dashboard";
// import Dashboard from "./components/Dashboard";

function App() {
  axios.defaults.baseURL = ""; //"http://localhost:8080/api/v1";
  axios.defaults.params = {};
  axios.defaults.withCredentials = true;
  axios.defaults.headers.post["Content-Type"] = "application/json";

  // useEffect(() => {
  //   const fetchLoginUser = async () => {
  //     try {
  //       const res = await currentUser();
  //       if (res) {
  //         console.log("cur usr :", res);
  //         dispatch(login(res));
  //       }
  //     } catch (e) {
  //       console.log(e);
  //       nav("/auth");
  //     }
  //   };
  //   fetchLoginUser();
  // }, []);

  return (
    <div className='App  flex justify-center w-full '>
      <Toaster position='top-right' />
      <div className='max-w-screen-2xl shadow-md rounded w-full'>
        <Routes>
          {/* <Route path={CUSTOM_ROUTES.Auth.route} element={<Auth />} /> */}
          <Route path={CUSTOM_ROUTES.Home.route} element={<HomeLayout />}>
            <Route
              path={CUSTOM_ROUTES.Dashboard.route}
              element={<Dashboard />}
            />

            <Route path='/hi' element={<div>hhhiii </div>} />
            <Route path='*' element={<div>404</div>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

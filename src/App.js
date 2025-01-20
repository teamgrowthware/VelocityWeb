import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './css/style.css';
import './css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.css';
import { ToastContainer } from 'react-toastify';
import { setUpAxios } from './servies/services';

import PageNotFound from './container/PageNotFound/PageNotFound';
import Home from './container/Home/Home';
import { ThemeProvider } from './container/Context/Theme/Context';
import CourseDetails from './container/courseDetails/courseDetails';

function App() {
  setUpAxios();

  return (
    <>
      <BrowserRouter basename={'/'} >
        <ThemeProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/courses/:title" element={<CourseDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <ToastContainer></ToastContainer>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './css/bootstrap.css';
import './css/style.css';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.css';
import "./css/remixicon/fonts/remixicon.css"
import { ToastContainer } from 'react-toastify';
import { setUpAxios } from './servies/services';

import PageNotFound from './container/PageNotFound/PageNotFound';
import Home from './container/Home/Home';
import { ThemeProvider } from './container/Context/Theme/Context';
import CourseDetails from './container/courseDetails/CourseDetails';
import Courses from './container/Courses/Courses';
import TestimonialsWrapper from './container/Testimonials/TestimonialsWrapper';
import CMSPages from './container/CMS/CMSPages';
import ScrollToTop from './components/ScrollToTop';
import Contact from './container/Contact/Contact';
import UpcomingBatches from './container/UpcomingBatches/UpcomingBatches';
import AboutUs from './container/AboutUs/AboutUs';
import CampaignShareMarket from './container/Campaign/CampaignShareMarket';
import Blog from './container/Blog/Blog';
import BlogDetails from './container/Blog/BlogDetails';
import ThankYouCampaign from './container/Campaign/ThankYouCampaign';
import Ourgallary from './container/Gallary/OurGallary';

function App() {
  setUpAxios();

  return (
    <>
      <BrowserRouter basename={'/beta'} >
        <ThemeProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testimonials" element={<TestimonialsWrapper />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/courses/:title" element={<CourseDetails />} />
            <Route path="/cms/:slug" element={<CMSPages />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/upcoming-batches" element={<UpcomingBatches />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/campaign/share-market" element={<CampaignShareMarket />} />
            <Route path="/campaign/share-market-thank-you" element={<ThankYouCampaign />} />
            <Route path="/gallary" element={<Ourgallary />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <ToastContainer></ToastContainer>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App
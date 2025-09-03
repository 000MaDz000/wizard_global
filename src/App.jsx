// App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'; // لو عندك ستايل للـ loader
import logo from './assets/xwazir.jpg'

// Loader كبير وثابت
 // Loader كبير وثابت
  const Loader = () => (
    <div className="loader-container">
      <div className="loader_image">
      <img src={logo} alt="" />
      </div>
      
      <br />
      <div className="loader-icon">⏳</div>
     
    </div>
  );

// إعداد React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: Infinity,
    },
  },
});

// Lazy loading لكل الصفحات
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About_Details'));
const CarList = React.lazy(() => import('./pages/cars/CarList'));
const CarDetails = React.lazy(() => import('./pages/cars/CarDetails'));
const ITSolutions = React.lazy(() => import('./pages/IT/ITSolutions'));
const ECommerce = React.lazy(() => import('./pages/e_commerce/ECommerce'));
const ArticleDetail = React.lazy(() => import('./pages/ArticleDetail'));
const ProjectDetails = React.lazy(() => import('./pages/IT/IT_Projects'));
const ProjectDetails_ecommerce = React.lazy(() => import('./pages/e_commerce/ProjectDetails_ecommerce'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Terms = React.lazy(() => import('./pages/Terms'));
const VisionDetails = React.lazy(() => import('./pages/VisionDetails'));
const MessageDetails = React.lazy(() => import('./pages/MessageDetails'));
const WhyDetails = React.lazy(() => import('./pages/WhyDetails'));
const CompanyDetails = React.lazy(() => import('./pages/CompanyDetails'));
const CarServiceDetails = React.lazy(() => import('./pages/cars/car_services_Details'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<CarList />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/it" element={<ITSolutions />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/ecommerc_projects/:id" element={<ProjectDetails_ecommerce />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/company/:id" element={<CompanyDetails />} />
            <Route path="/why" element={<WhyDetails />} />
            <Route path="/about/vision" element={<VisionDetails />} />
            <Route path="/about/message" element={<MessageDetails />} />
            <Route path="/service/:id" element={<CarServiceDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

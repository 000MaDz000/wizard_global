// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About_Details';

import CarList from './pages/cars/CarList';
import CarDetails from './pages/cars/CarDetails';
import ITSolutions from './pages/IT/ITSolutions';
import ECommerce from './pages/e_commerce/ECommerce';
import ArticleDetail from './pages/ArticleDetail';
import ProjectDetails from './pages/IT/IT_Projects';
import Login from './pages/Login';
import Register from './pages/Register';
import ProjectDetails_ecommerce from './pages/e_commerce/ProjectDetails_ecommerce';
import Terms from './pages/Terms';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // لا تجلب البيانات عند التركيز على النافذة
            refetchOnMount: false,       // لا تجلب البيانات عند تركيب المكون
            refetchOnReconnect: false,   // لا تجلب البيانات عند العودة من عدم الاتصال
            retry: false,                // لا تعيد المحاولة تلقائيًا عند الفشل
            staleTime: Infinity,         // اعتبر البيانات حديثة إلى الأبد
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cars" element={< CarList />} />
                    <Route path="/cars/:id" element={<CarDetails />} />
                    <Route path="/it" element={<ITSolutions />} />
                    <Route path="/ecommerce" element={<ECommerce />} />
                    <Route path="/articles/:id" element={<ArticleDetail />} />
                    <Route path="/projects/:id" element={<ProjectDetails />} />
                    <Route path="/ecommerc_projects/:id" element={<ProjectDetails_ecommerce />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;

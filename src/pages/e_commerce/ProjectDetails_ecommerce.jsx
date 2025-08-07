import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetails_ecommerce.css';
import Footer from '../../components/Footer';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';
import { useECommerceFutureProject } from '../../api/hooks';
import Loading from '../../components/Loading';
import ClientImage from '../../components/ClientImage';

const ProjectDetails_ecommerce = () => {
    const { id } = useParams();
    const dataRes = useECommerceFutureProject(id);
    const navigate = useNavigate();

    // بيانات المشاريع (يجب أن تكون متطابقة مع البيانات في ECommerce.js)
    const projects = [
        {
            id: 1,
            project_name: "e-Market for Auto Parts",
            project_description: "سوق إلكتروني متخصص في قطع غيار السيارات",
            details: "منصة متكاملة لبيع قطع غيار السيارات عبر الإنترنت مع نظام توصيل متطور",
            features: [
                "بحث متقدم بمعايير متعددة",
                "نظام توصيل ذكي",
                "تقييمات البائعين والمشترين",
                "دعم فني متخصص"
            ],
            images: [
                "https://via.placeholder.com/800x500?text=Auto+Parts+Market+1",
                "https://via.placeholder.com/800x500?text=Auto+Parts+Market+2",
                "https://via.placeholder.com/800x500?text=Auto+Parts+Market+3"
            ],
            expected_launch: "Q1 2024"
        },
        {
            id: 2,
            project_name: "منصة تجارية بين المصنع والموزّع",
            project_description: "حلول B2B للتجارة الإلكترونية",
            details: "منصة متخصصة في الربط بين المصانع والموزعين لتبسيط عمليات الشراء بالجملة",
            features: [
                "نظام طلبات متكامل",
                "إدارة المخزون الآلي",
                "تقارير مبيعات مفصلة",
                "دعم متعدد اللغات"
            ],
            images: [
                "https://via.placeholder.com/800x500?text=B2B+Platform+1",
                "https://via.placeholder.com/800x500?text=B2B+Platform+2",
                "https://via.placeholder.com/800x500?text=B2B+Platform+3"
            ],
            expected_launch: "Q2 2024"
        }
    ];


    if (dataRes.isLoading) return <Loading />
    const project = dataRes.data.data;

    if (!project) {
        return <div>المشروع غير موجود</div>;
    }

    return (
        <>
            <div className="project-details-page">
                <button onClick={() => navigate(-1)} className="back-button">
                    <FaArrowLeft /> العودة
                </button>

                <div className="project-header">
                    <h1>{project.project_name}</h1>
                    <p className="project-subtitle">{project.project_description}</p>
                </div>

                <div className="project-content">
                    <div className="project-overview">
                        <h2>نظرة عامة</h2>
                        <p>{project.details}</p>

                        <div className="project-launch-date">
                            <FaCalendarAlt className="calendar-icon" />
                            <span>تاريخ الإطلاق المتوقع: {project.expected_launch}</span>
                        </div>
                    </div>

                    <div className="project-features">
                        <h2>المميزات الرئيسية</h2>
                        <ul>
                            {project.features?.map((feature, index) => (
                                <li key={index}>{feature.text}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="project-gallery">
                        <h2>معرض الصور</h2>
                        <div className="gallery-grid">
                            {project.images?.map((image, index) => (
                                <div key={index} className="gallery-item">
                                    <ClientImage src={image} alt={image.alternativeText || project.project_name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectDetails_ecommerce;
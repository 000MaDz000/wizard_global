import React from 'react';
import '../styles/Terms.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// بيانات وهمية - يمكن استبدالها بطلب API من الباكند لاحقًا
const dummyData = {
    termsOfService: {
        title: "شروط الخدمة",
        lastUpdated: "١ يناير ٢٠٢٣",
        sections: [
            {
                title: "١. القبول بالشروط",
                content: "باستخدامك لهذا الموقع أو الخدمة، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام الموقع."
            },
            {
                title: "٢. استخدام الخدمة",
                content: "يجب أن يكون استخدامك للخدمة وفقًا للقوانين واللوائح المحلية والدولية. يُحظر استخدام الخدمة لأي أغراض غير قانونية أو غير مصرح بها."
            },
            {
                title: "٣. الحسابات والمستخدمون",
                content: "قد يتطلب الوصول إلى بعض ميزات الخدمة إنشاء حساب. أنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة المرور."
            },
            {
                title: "٤. الملكية الفكرية",
                content: "جميع المحتويات والعلامات التجارية والبيانات الموجودة على هذا الموقع هي ملك لنا أو للمرخص لهم. لا يُسمح باستخدامها دون إذن كتابي مسبق."
            }
        ]
    },
    privacyPolicy: {
        title: "سياسة الخصوصية",
        lastUpdated: "١ يناير ٢٠٢٣",
        sections: [
            {
                title: "١. المعلومات التي نجمعها",
                content: "قد نجمع معلومات شخصية مثل الاسم، عنوان البريد الإلكتروني، معلومات الدفع، وغيرها عند تسجيلك في خدمتنا أو استخدامك لها."
            },
            {
                title: "٢. كيفية استخدام المعلومات",
                content: "نستخدم المعلومات التي نجمعها لتقديم الخدمات وتحسينها، وللتواصل معك، ولأغراض الأمان والتحليل."
            },
            {
                title: "٣. مشاركة المعلومات",
                content: "لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا كما هو موضح في هذه السياسة أو عندما يقتضي القانون ذلك."
            },
            {
                title: "٤. حماية المعلومات",
                content: "نحن نستخدم إجراءات أمنية معقولة لحماية معلوماتك الشخصية، ولكن لا يمكن ضمان أمان كامل لأي نقل بيانات عبر الإنترنت."
            }
        ]
    }
};

const Terms = () => {
    return (
        <>
            <div className="terms-container">
                <Link to="/" className="back-link">← العودة إلى الصفحة الرئيسية </Link>
                <div className="terms-header">
                    <h1>شروط الخدمة وسياسة الخصوصية</h1>
                </div>

                <div className="terms-content">
                    <section className="terms-section">
                        <h2>{dummyData.termsOfService.title}</h2>
                        <p className="last-updated">آخر تحديث: {dummyData.termsOfService.lastUpdated}</p>

                        {dummyData.termsOfService.sections.map((section, index) => (
                            <div key={`terms-${index}`} className="section-item">
                                <h3>{section.title}</h3>
                                <p>{section.content}</p>
                            </div>
                        ))}
                    </section>

                    <section className="privacy-section">
                        <h2>{dummyData.privacyPolicy.title}</h2>
                        <p className="last-updated">آخر تحديث: {dummyData.privacyPolicy.lastUpdated}</p>

                        {dummyData.privacyPolicy.sections.map((section, index) => (
                            <div key={`privacy-${index}`} className="section-item">
                                <h3>{section.title}</h3>
                                <p>{section.content}</p>
                            </div>
                        ))}
                    </section>
                </div>

                {/* <div className="terms-footer">
                <p>إذا كان لديك أي أسئلة حول شروط الخدمة أو سياسة الخصوصية، يرجى الاتصال بنا.</p>
            </div> */}
            </div>
            <Footer />
        </>

    );
};

export default Terms;
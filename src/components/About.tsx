import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';
import { About } from '../api/types/components';
import ClientImage from './ClientImage';
import { Link } from 'react-router-dom';





const AboutUs = ({ data }: { data?: About }) => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
        });
    }, []);

    if (!data) return;

    return (
        <section className="about-us" data-aos="fade-up">
            <div className="about-container">
                <div className="about-header" data-aos="fade-right" data-aos-delay="200">
                    {/* <h2>ماذا تعرف عنا ؟</h2>
                    <h3> رواد تقديم الحلول المبتكرة عالميًا </h3>
                    <p className="about-p">
                        تأسست الشركة  في دبي، بهدف توفير خدمات احترافية وعالمية في مجالات استيراد وتصدير السيارات، تكنولوجيا المعلومات، والتجارة الإلكترونية. تجمع شركتنا بين الابتكار والثقة لتقديم حلول ذكية تناسب تطلعات عملائنا في السوق المحلي والدولي.
                    </p> */}
                    <h2>{data.title?.title_start}</h2>
                    <h3> {data.title?.title_end}</h3>
                    <p className="about-p">
                        {data.description}
                    </p>
                    <Link className='know' to="/about" data-aos="zoom-in" data-aos-delay="600">اعرف المزيد</Link>
                </div>
                <br />
                <div className="section-with-text-image">
                    {/* <div className="details" data-aos="fade-up" data-aos-delay="800">
                        <h4>
                            رؤيتنا: <span className="highlight">الريادة في تقديم حلول متكاملة</span>
                        </h4>
                        <p>
                            نحن في WAZIR نطمح إلى أن نكون منصة موحدة ومتعددة الأنشطة تدعم عملاءنا من خلال الشراكات الدولية، والموقع الاستراتيجي، والدعم التقني المستمر. نعمل على تقديم قيمة مضافة لكل من نعمل معهم.
                        </p>
                    </div> */}
                    <div className="image-side" data-aos="fade-left" data-aos-delay="1000">
                        <div className="img-container">
                            {/* <AiOutlineGlobal id='sideP' /> */}
                            <ClientImage id="sideP" src={data.image} alt={data.image.alternativeText || ""} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;

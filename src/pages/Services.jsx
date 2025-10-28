import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Services.module.css'; 

// --- DEDICATED REUSABLE CARD COMPONENT ---
// MODIFICATION: Accepts 'index' for staggered delay
const ServiceCard = ({ title, iconChar, description, link, linkText, isFeatured = false, index }) => {
    // Determine the appropriate class names
    const cardClass = `${styles['service-card']} ${isFeatured ? styles['featured-card'] : styles['serviced-card']} ${styles['animate-in']}`;
    const linkClass = isFeatured ? styles['btn-link-featured'] : styles['btn-link-default']; 

    // Calculate staggered delay based on its position in the array
    const delay = `${0.6 + index * 0.1}s`; 

    return (
        <div className={cardClass} style={{ animationDelay: delay }}>
            {/* The Icon Container: Positions the icon outside the card top for the unique lift effect */}
            <div className={styles['card-icon']}>
                <span className={styles['icon-char']}>{iconChar}</span>
            </div> 
            <div className={styles['card-text']}>
                <h4 className={styles['card-title']}>{title}</h4>
                <p className={styles['card-description']}>{description}</p>
                {/* The link style changes based on isFeatured status */}
                <Link to={link} className={`${styles.btn} ${linkClass}`}>{linkText}</Link>
            </div>
        </div>
    );
};


// --- SERVICE DATA (NO CHANGES) ---
const featuredServices = [
    { 
        title: "Barangay Clearance", 
        iconChar: "📄", 
        description: "Secure official documents for fast, compliant permits.", 
        link: "/apply/clearance", 
        linkText: "Apply Now" 
    },
    { 
        title: "Business Permit", 
        iconChar: "🏢", 
        description: "Streamline your enterprise with fast, compliant permits.", 
        link: "/apply/business", 
        linkText: "Learn More" 
    },
    { 
        title: "ID Issuance", 
        iconChar: "💳", 
        description: "Access your IDs, schedules, and medical aid.", 
        link: "/schedule/id", 
        linkText: "View Schedule" 
    },
    { 
        title: "Health Center", 
        iconChar: "⚕️", 
        description: "Access your immunizations, schedules, & medical aid.", 
        link: "/info/health", 
        linkText: "Learn More" 
    },
    { 
        title: "Incident Reporting", 
        iconChar: "📢", 
        description: "Report issues promptly to barangay officials for immediate action.", 
        link: "/report/incident", 
        linkText: "File Report" 
    },
];

const servicedServices = [
    { 
        title: "Barangay Clearance", 
        iconChar: "📝", 
        description: "Secure official documents for various transactions.", 
        link: "/apply/clearance", 
        linkText: "Apply Now" 
    },
    { 
        title: "ID Issuance", 
        iconChar: "👆", 
        description: "Request issuance utilizing biometrics for identification.", 
        link: "/apply/id", 
        linkText: "Apply for ID" 
    },
];


// --- MAIN COMPONENT ---
const ServicesPage = () => {
    return (
        <main className={styles['services-page-main']}>

            {/* 1. Hero Banner Section (Dark Blue Background) */}
            {/* MODIFICATION: Added 'animate-in' class and initial delay */}
            <section className={`${styles['services-hero-section']} ${styles['animate-in']}`} style={{ animationDelay: '0s' }}>
                <div className={`${styles.container} ${styles['hero-container']}`}>
                    
                    {/* Hero Text */}
                    <div className={styles['hero-content']}>
                        <h1 className={styles['hero-title']}>EMPOWERING BARANGAY MATIAO</h1>
                        <h2 className={styles['hero-subtitle']}>YOUR ESSENTIAL ONLINE SERVICES</h2>
                        <p className={styles['hero-description']}>
                            Bridging tradition with innovation for a brighter, more accessible community. 
                            
                        </p>
                 
                    </div>
                </div>
            </section>

            {/* 2. Featured Services Section (Light Background, now separate) */}
            {/* MODIFICATION: Added 'animate-in' class and a slight delay for sequential entry */}
            <section className={`${styles['featured-services-section']}`} style={{ animationDelay: '0.2s' }}>
                <div className={styles.container}>
                    {/* MODIFICATION: Added 'animate-in' class to the title */}
                    <h3 className={`${styles['section-title-gold']} ${styles['animate-in']}`} style={{ animationDelay: '0.3s' }}>Top Priorities</h3>
                    
                    {/* Featured Service Cards (5 cards in a 2-column unique design) */}
                    <div className={styles['featured-services-grid']}>
                        {featuredServices.map((service, index) => (
                            <ServiceCard 
                                key={index} 
                                {...service} 
                                isFeatured={true} 
                                index={index} // Passed for staggered effect
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* 3. Primary Service Catalog Section (Renumbered and remains white) */}
            {/* MODIFICATION: Added 'animate-in' class and a delay for sequential entry */}
            <section className={`${styles['services-list-section']}`} style={{ animationDelay: '1.2s' }}>
                <div className={styles.container}>
                    {/* MODIFICATION: Added 'animate-in' class to the title */}
                    <h3 className={`${styles['section-title-dark']} ${styles['animate-in']}`} style={{ animationDelay: '1.3s' }}>Available Digital Services</h3>
                    <div className={styles['serviced-services-grid']}>
                        {servicedServices.map((service, index) => (
                            <ServiceCard 
                                key={index} 
                                {...service} 
                                isFeatured={false} 
                                index={index + 5} // Index is offset to continue staggering from previous set
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Call to Action / Initiatives Section (Remains Blue) */}
            {/* MODIFICATION: Added 'animate-in' class and final delay */}
            <section className={`${styles['initiatives-cta-section']} ${styles['animate-in']}`} style={{ animationDelay: '1.8s' }}>
                <div className={styles.container}>
                    {/* MODIFICATION: Added 'animate-in' class to the title */}
                    <h3 className={`${styles['section-title-white']} ${styles['animate-in']}`} style={{ animationDelay: '1.9s' }}>Community Initiatives</h3> 
                    <div className={styles['initiatives-grid']}>
                        
                        {/* E-GOVERNANCE INITIATIVE Card */}
                        {/* MODIFICATION: Added 'animate-in' class and delay */}
                        <div className={`${styles['initiative-card']} ${styles['initiative-governance']} ${styles['animate-in']}`} style={{ animationDelay: '2.1s' }}>
                            <div className={styles['initiative-text-content']}>
                                <h4>E-GOVERNANCE & TRANSPARENCY</h4>
                                <p>Committed to a paperless and faster service experience. Discover how we're modernizing local governance for you.</p>
                                <Link to="/initiatives/egov" className={`${styles.btn} ${styles['btn-secondary']}`}>
                                    DISCOVER MORE
                                </Link>
                            </div>
                        </div>

                        {/* YOUR BARANGAY, AT YOUR FINGERTIPS Card (CTA) */}
                        {/* MODIFICATION: Added 'animate-in' class and delay */}
                        <div className={`${styles['initiative-card']} ${styles['initiative-cta']} ${styles['animate-in']}`} style={{ animationDelay: '2.3s' }}>
                            <div className={styles['initiative-text-content']}>
                                <h4>START YOUR APPLICATION NOW</h4>
                                <p>Experience seamless, secure, and reliable services designed to simplify your daily needs. Get started today.</p>
                                <div className={styles['cta-buttons']}>
                                    <Link to="/register" className={`${styles.btn} ${styles['btn-primary']}`}>
                                        CREATE ACCOUNT
                                    </Link>
                                    <Link to="/contactus" className={`${styles.btn} ${styles['btn-outline']}`}>
                                        NEED HELP?
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServicesPage;
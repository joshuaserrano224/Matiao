import React, { useState } from 'react';
// Note: Changed import name from 'Contact.module.css' to 'ContactUs.module.css' for consistency with component name
import styles from '../css/Contact.module.css'; 

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' }); 
    };

    return (
        <div className={styles.contactPage}>
            
            {/* --------------------------------- 
                HERO SECTION (Updated for Image Background and Centered Text)
            --------------------------------- */}
            <header className={styles.heroSection}>
                {/* Use a wrapper class (not a global container) for max-width centering */}
                <div className={styles.heroWrapper}> 
                    <div className={styles.heroContent}>
                        {/* Updated to requested text */}
                        <h1 className={styles.heroTitle}>Contact Us</h1>
                        <p className={styles.heroDescription}>
                            Your inquiries and feedback are invaluable. Connect with us for any questions or support you need.
                        </p>
                    </div>
                </div>
            </header>

            {/* --------------------------------- 
                MAIN CONTENT: Form and Information 
            --------------------------------- */}
            <section className={styles.mainSection}>
                <div className={styles.mainContentWrapper}> {/* New module class for main content max-width */}
                    
                    <div className={styles.contactLayout}>
                        
                        {/* 1. CONTACT FORM CARD */}
                        <div className={styles.contactFormCard}>
                            <h2 className={styles.formSectionTitle}>Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className={styles.contactForm}>
                                
                                <div className={`${styles.formGroup} ${styles.floatingLabel}`}>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder=" " required />
                                    <label htmlFor="name">Full Name *</label>
                                </div>
                                
                                <div className={`${styles.formGroup} ${styles.floatingLabel}`}>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder=" " required />
                                    <label htmlFor="email">Email Address *</label>
                                </div>
                                
                                <div className={`${styles.formGroup} ${styles.floatingLabel}`}>
                                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder=" " required />
                                    <label htmlFor="subject">Subject *</label>
                                </div>
                                
                                <div className={`${styles.formGroup} ${styles.floatingLabel} ${styles.textareaGroup}`}>
                                    <textarea id="message" name="message" rows="7" value={formData.message} onChange={handleChange} placeholder=" " required></textarea>
                                    <label htmlFor="message">Your Detailed Message *</label>
                                </div>
                                
                                <button type="submit" className={styles.submitBtn}>
                                    SEND MESSAGE <i className="fas fa-paper-plane"></i> 
                                </button>
                            </form>
                        </div>
                        
                        {/* 2. CORE CONTACT INFORMATION SIDEBAR */}
                        <aside className={styles.contactInfoSidebar}>
                            
                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoBlockTitle}>Reach Us Directly</h3>
                                
                                <div className={styles.infoItem}>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p className={styles.detailValue}>Barangay Hall, Main St., Matiāo Community, Region IX</p>
                                </div>

                                <div className={styles.infoItem}>
                                    <i className="fas fa-phone-alt"></i>
                                    <p className={styles.detailValue}>+63 912 345 6789</p>
                                </div>

                                <div className={styles.infoItem}>
                                    <i className="fas fa-envelope"></i>
                                    <p className={styles.detailValue}>official@matiao.gov.ph</p>
                                </div>
                            </div>
                            
                            {/* Map Placeholder */}
                            <div className={styles.mapPlaceholder}>
                                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15730.089064716768!2d126.23072223019818!3d6.94829623861217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33008ac63870634f%3A0x6b69d4d7328608e8!2sMatiao%2C%20Mati%2C%20Davao%20Oriental!5e0!3m2!1sen!2sph!4v1678881234567!5m2!1sen!2sph"
                    width="100%" 
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Barangay Matiao Location"
                ></iframe>
                            </div>

                        </aside>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
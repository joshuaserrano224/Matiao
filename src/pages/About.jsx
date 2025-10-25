import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from '../css/About.module.css';

// NOTE: Please ensure these paths and images exist in your project structure
import MatiaoLogo from '../assets/MatiaoLogo.jpg'
import Matiao from '../assets/Matiao.jpg'
import galleryn from '../assets/galleryn.jpg'
import gallery2 from '../assets/gallery2.jpg'
import fisheries from '../assets/fisheries.jpg'


// --- Themed Placeholders (Replace with real Matiao assets) ---
const images = {
    heroBackground: Matiao,
    historyVisual: MatiaoLogo, 
    officialCaptain: galleryn,
    gallery1: galleryn,
    gallery2: gallery2,
    gallery3: Matiao,
    overviewImage: Matiao, 
    fisheriesImage: fisheries,
    farmingImage: fisheries,
    commerceImage: fisheries,
    tourismImage: fisheries,
};

// =========================================================================
// STRUCTURED HISTORY DATA WITH ICONS
// =========================================================================
const historicalMilestones = [
    { 
        year: "1930s", 
        title: "Coastal Settlement Roots", 
        description: "Matiao's foundation lies in the pre-war era, originally a sitio known for its rich agricultural and coastal resources under the old municipality structure.", 
        iconClass: "fas fa-anchor"
    },
    { 
        year: "1950s", 
        title: "Official Barangay Formalization", 
        description: "Officially separated and recognized as an independent Barangay in the mid-20th century, marking the start of its self-governance and formal political identity.", 
        iconClass: "fas fa-gavel"
    },
    { 
        year: "1980s", 
        title: "Infrastructural Boom", 
        description: "Experienced rapid infrastructural growth, including road and public facility construction, solidifying its place as a major residential and commercial hub.", 
        iconClass: "fas fa-building"
    },
    { 
        year: "2000+", 
        title: "Modern Community Development", 
        description: "Focus shifted towards modern community programs, sustainable development, and digital accessibility, adapting to the needs of the 21st century.", 
        iconClass: "fas fa-lightbulb"
    },
];

// =========================================================================
// REUSABLE TIMELINE ITEM COMPONENT
// =========================================================================
const TimelineItem = ({ year, title, description, iconClass }) => (
    <li className={styles['timeline-event']}>
        <div className={styles['timeline-dot']}>
            <i className={`${iconClass} ${styles['timeline-icon']}`}></i>
        </div>
        <div className={styles['timeline-content']}>
            <span className={styles['timeline-year-phase']}>{year}</span> 
            <h4 className={styles['timeline-phase']}>{title}</h4>
            <p className={styles['timeline-description']}>{description}</p>
        </div>
    </li>
);


const AboutUs = () => {
    // 🎯 NEW: State for Page Load Transition
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        // Apply the 'loaded' class after the component mounts
        setIsLoaded(true);
    }, []);

    // --- Barangay Matiao Data (kept for context) ---
    const barangayInfo = {
        name: "Matiao",
        location: "Mati City, Davao Oriental, Philippines",
        description: "Nestled within the vibrant landscape of Mati City, Barangay Matiao stands as a testament to progress and community spirit. It serves as a crucial hub, blending residential tranquility with bustling local activities, embodying the rich culture and promising future of the region.",
        population: "16,234",
        keyIndustries: "Agriculture, Fishing, Small Businesses, Tourism Support",
        motto: "Unified for Progress, Resilient in Service."
    };

    const vision = "A globally competitive, ecologically balanced, and digitally advanced Barangay Matiao, where empowered citizens enjoy a high quality of life, cultural preservation, and inclusive growth, driven by dynamic and accountable leadership.";
    const mission = "To empower and unite our residents, providing equitable access to essential services, fostering sustainable development, and ensuring peace and order through transparent and participatory governance, for a resilient and thriving Barangay Matiao.";

    // Data for the 'Places' Section
    const subVillages = [
        "Purok 1: (Name Placeholder)",
        "Purok 2: (Name Placeholder)",
        "Purok 3: (Name Placeholder)",
        "Purok 4: (Name Placeholder)",
        "Purok 5: (Name Placeholder)",
        "Purok 6: (Name Placeholder)",
        "Sitio (If Applicable)",
    ];


    // Data for Local Industries & Strengths
    const localIndustries = [
        {
            title: "Fisheries & Aquaculture",
            description: "Leveraging our rich coastal areas, Matiao boasts thriving fishing communities and sustainable aquaculture practices, contributing significantly to local food supply and economy.",
            icon: "fas fa-fish",
            image: images.fisheriesImage
        },
        {
            title: "Agriculture & Farming",
            description: "Fertile lands support diverse agricultural activities, from rice and corn cultivation to fruit farming, forming the backbone of many livelihoods.",
            icon: "fas fa-tractor",
            image: images.farmingImage
        },
        {
            title: "Local Commerce & Trade",
            description: "A growing number of small businesses and local markets drive economic activity, providing essential goods and services to residents and visitors.",
            icon: "fas fa-store",
            image: images.commerceImage
        },
        {
            title: "Emerging Tourism Support",
            description: "With Mati City's natural beauty, Matiao plays a supportive role in the tourism sector, offering local hospitality and unique experiences.",
            icon: "fas fa-umbrella-beach",
            image: images.tourismImage
        },
    ];

    const [showFullHistory, setShowFullHistory] = useState(false);
    const toggleHistory = () => { setShowFullHistory(!showFullHistory); };

    return (
        // 🎯 Apply the transition class
        <div className={`${styles['about-us-page-container']} ${isLoaded ? styles.loaded : ''}`}>
            
            {/* 1. HERO SECTION */}
            <header
                className={styles['about-us-hero-header']}
                style={{ backgroundImage: `url(${images.heroBackground})` }}
            >
                <div className={styles['hero-overlay']}>
                    <h1 className={`${styles['hero-title']} ${styles['hero-title-yellow']}`}>About Barangay {barangayInfo.name}</h1>
                    <p className={`${styles['hero-motto']} ${styles['hero-subtitle-white']}`}>"{barangayInfo.motto}"</p>
                    <p className={styles['hero-location']}>{barangayInfo.location}</p>
                </div>
            </header>
            
            <main>
                {/* 2. OVERVIEW & MVG SECTION */}
                <section className={`${styles.section} ${styles['overview-mvg-grid']}`}>
                    <div className={styles['overview-content']}>
                        
                        <h2 className={styles['section-title']}>A Community Driven by Vision</h2>
                        
                        <img 
                            src={images.overviewImage} 
                            alt={`Welcome to Barangay ${barangayInfo.name}`} 
                            className={styles['overview-visual']} 
                        />
                        
                        <p className={`${styles['section-text']} ${styles['lead-paragraph']}`}>
                            {barangayInfo.description}
                        </p>
                        <p className={styles['section-text']}>
                            Strategically located within Mati City, Matiao is a vibrant tapestry of lives, cultures, and aspirations,
                            constantly striving for progress and unity. We are committed to fostering transparency and excellence in service.
                        </p>
                        
                        {/* QUICK FACTS BAR */}
                        <div className={styles['quick-facts-bar']}>
                            
                            {/* POPULATION CARD */}
                            <div className={styles['fact-card-container']}>
                                <div className={styles['fact-icon-wrapper']}>
                                    <i className={`fas fa-users ${styles['fact-icon']}`}></i>
                                </div>
                                <span className={styles['fact-label']}>Population</span>
                                <p className={styles['fact-value']}>{barangayInfo.population}</p>
                                <p className={styles['fact-subtext']}>Based on the 2020 Census</p>
                            </div>

                            {/* KEY INDUSTRIES CARD */}
                            <div className={styles['fact-card-container']}>
                                <div className={styles['fact-icon-wrapper']}>
                                    <i className={`fas fa-cogs ${styles['fact-icon']}`}></i>
                                </div>
                                <span className={styles['fact-label']}>Key Industries</span>
                                <p className={styles['fact-title']}>{barangayInfo.keyIndustries}</p>
                                <p className={styles['fact-subtext']}>Core economic drivers of the barangay</p>
                            </div>

                        </div>
                    </div>
                    
                    {/* Mission/Vision/Goal Card Holder */}
                    <div className={styles['mvg-container-grid']}>
                        {/* VISION CARD */}
                        <div className={styles['mvg-card-item']}>
                            <i className={`fas fa-eye ${styles['mvg-icon']}`}></i>
                            <h3 className={styles['card-title']}>Our Vision</h3>
                            <p className={styles['card-text']}>{vision}</p>
                        </div>
                        
                        {/* MISSION CARD */}
                        <div className={styles['mvg-card-item']}>
                            <i className={`fas fa-bullseye ${styles['mvg-icon']}`}></i>
                            <h3 className={styles['card-title']}>Our Mission</h3>
                            <p className={styles['card-text']}>{mission}</p>
                        </div>
                    </div>
                </section>
                
                {/* 3. HISTORY & LEADERSHIP SHOWCASE */}
                <section className={`${styles.section} ${styles['history-leadership-grid']} ${styles['bg-light']}`}>
                    <div className={styles['history-content-block']}>
                        <h2 className={styles['section-title']}>Our Rich Heritage</h2>
                        <div className={styles['history-details']}>
                            <img src={images.historyVisual} alt="Historical View of Matiao" className={styles['history-image']} />
                            <div className={styles['history-text']}>
                                <p className={styles['section-text']}>
                                    Barangay <span className={styles['history-bold']}>{barangayInfo.name}</span> carries a proud legacy, intrinsically linked to the Mandaya origins of Mati City.
                                    Its roots trace back to the pre-war era, originally a <span className={styles['history-bold']}>sitio</span> known for its rich <span className={styles['history-bold']}>agricultural and coastal resources</span>. The formal recognition of Matiao was a pivotal moment in the local governance of Mati City, marking its development from a simple settlement into a crucial hub.
                                </p>
                                <button className={styles['toggle-history-button']} onClick={toggleHistory}>
                                    {showFullHistory ? "Hide Detailed Timeline" : "View Historical Milestones"}
                                </button>
                                
                                {/* TIMELINE RENDERING */}
                                {showFullHistory && (
                                    <div className={styles['history-timeline-container']}>
                                        <ul className={styles['history-timeline']}>
                                            {historicalMilestones.map((milestone, index) => (
                                                <TimelineItem key={index} {...milestone} />
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={styles['leadership-spotlight']}>
                        <h2 className={styles['section-title']}>Barangay Captain's Corner</h2>
                        <div className={styles['captain-card']}>
                            <img src={images.officialCaptain} alt="Punong Barangay" className={styles['captain-photo']} />
                            <div className={styles['captain-info']}>
                                <h3 className={styles['captain-name']}>Hon. Juan Dela Cruz</h3>
                                <p className={styles['captain-position']}>Punong Barangay (Barangay Captain)</p>
                                <p className={styles['captain-message']}>
                                    "I am dedicated to steering Matiao towards a future defined by <span className={styles['message-bold']}>integrity, community involvement, and prosperity</span>.
                                    Together, we will build a home where every resident feels safe, valued, and empowered."
                                </p>
                                <Link to="/#council" smooth className={styles['leadership-link']}>Meet the Full Council →</Link>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* 4. DEDICATED INDUSTRIES SECTION */}
                <section className={`${styles.section} ${styles['industries-section-full-width']}`}>
                    <h2 className={styles['section-title']}>Our Economic Strengths: Industries of Matiao</h2>
                    <p className={styles['section-subtitle']}>The key sectors that power our local economy and provide sustainable livelihoods for our residents.</p>
                    
                    <div className={styles['industries-grid']}>
                        {localIndustries.map((industry, index) => (
                            <div key={index} className={styles['industry-item-large']}>
                                <img src={industry.image} alt={industry.title} className={styles['industry-image-large']} />
                                <div className={styles['industry-info-large']}>
                                    <h3 className={styles['industry-title-large']}>
                                        <i className={industry.icon}></i> {industry.title}
                                    </h3>
                                    <p className={styles['industry-description']}>{industry.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* 5. UTILITY GRID: 2 COLUMNS (Sub-Villages Card & Gallery) */}
                <section className={`${styles.section} ${styles['utility-grid-two-columns']}`}>
                    
                    {/* A. Sub-Villages Card */}
                    <div className={`${styles['utility-card']} ${styles['sub-villages-card']}`}>
                        
                        <div className={styles['sub-villages-card-header']}>
                            <h3 className={styles['card-title']}><i className="fas fa-map-marked-alt"></i> Community Subdivisions</h3>
                        </div>
                        
                        <div className={styles['sub-villages-card-content']}>
                            <p className={styles['card-text']}>Matiao is composed of several vibrant **Puroks** (sub-villages), each with its own unique identity and spirit.</p>
                            
                            <ul className={styles['sub-village-list-improved']}>
                                {subVillages.map((purok, index) => (
                                    <li key={index}><i className="fas fa-map-pin"></i> {purok}</li>
                                ))}
                            </ul>
                            
                            <Link to="/map" className={styles['view-map-link']}>View Barangay Map →</Link>
                        </div>
                    </div>


                    {/* B. Gallery Snippet (Utility Card 2) */}
                    <div className={styles['utility-card']}>
                        <div className={styles['sub-villages-card-content']}>
                            <h3 className={styles['card-title']}><i className="fas fa-camera-retro"></i> Gallery Snippet</h3>
                            <p className={styles['card-text']}>Explore the beautiful scenery and lively events of Matiao.</p>
                            
                            <div className={styles['gallery-preview']}>
                                <div className={styles['gallery-thumb']}>
                                    <img src={images.gallery1} alt="Gallery Preview 1" />
                                </div>
                                <div className={styles['gallery-thumb']}>
                                    <img src={images.gallery2} alt="Gallery Preview 2" />
                                </div>
                                <div className={styles['gallery-thumb']}>
                                    <img src={images.gallery3} alt="Gallery Preview 3" />
                                </div>
                            </div>
                            
                            <Link to="/#gallery" smooth className={styles['view-gallery-link']}>View Full Gallery →</Link>
                        </div>
                    </div>

                </section>
                
            </main>
        </div>
    );
};

export default AboutUs;
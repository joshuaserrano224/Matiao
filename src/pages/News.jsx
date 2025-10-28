import React from 'react';
import styles from '../css/news.module.css'; // Import the CSS module
import Matiao from '../assets/MatiaoLogo.jpg'; // Assuming this is replaced with a proper image for production

// --- Sample Data Array (More diverse content - no changes) ---
const newsItems = [
    // ... (Your existing newsItems array remains here)
    {
        id: 1,
        isPriority: true, // New flag for the sidebar
        title: "Landmark Environmental Policy Ratified: Implementation Roadmap Released",
        excerpt: "The governing body has unanimously approved the new environmental policy, focusing on sustainable resource management and coastal protection.",
        date: "October 25, 2025",
        category: "Governance",
        image: Matiao,
        link: "#",
        type: 'Press Release'
    },
    {
        id: 2,
        isPriority: false,
        title: "Community Fishing Cleanup Initiative Exceeds Goal",
        excerpt: "Our annual coastal cleanup saw record turnout with over 500 volunteers removing significant debris, a testament to community commitment.",
        date: "October 18, 2025",
        category: "Community",
        image: Matiao,
        link: "#",
        type: 'Success Story'
    },
    {
        id: 3,
        isPriority: true,
        title: "Budget Review Town Hall: Virtual Attendance Details",
        excerpt: "Details on joining the open forum to discuss the proposed municipal budget for the upcoming fiscal year. Pre-registration is encouraged.",
        date: "October 10, 2025",
        category: "Finance",
        image: Matiao,
        link: "#",
        type: 'Announcement'
    },
    {
        id: 4,
        isPriority: false,
        title: "Infrastructure Project Phase II Commences, Traffic Advisories",
        excerpt: "The expansion of the main thoroughfare is set to begin next week. Temporary traffic rerouting maps are available on the project page.",
        date: "September 29, 2025",
        category: "Infrastructure",
        image: Matiao,
        link: "#",
        type: 'Advisory'
    },
    {
        id: 5,
        isPriority: false,
        title: "New Public Parks & Green Spaces Initiative Launched",
        excerpt: "A new initiative to create and maintain accessible green spaces across all districts has officially begun. Public consultation phase starts Nov 1.",
        date: "September 15, 2025",
        category: "Public Works",
        image: Matiao,
        link: "#",
        type: 'New Program'
    }
];

// --- Sub-Component: Card for Main Stream (Refined structure for aesthetics) ---
// MODIFICATION: Accepts 'index' prop for staggered delay
const DynamicNewsCard = ({ item, index }) => (
    // MODIFICATION: Added 'animate-in' class and dynamic style prop
    <article 
        className={`${styles['dynamic-card']} ${styles['animate-in']}`} 
        style={{ animationDelay: `${0.4 + index * 0.15}s` }}
    > {/* Use <article> for semantics */}
        <div className={styles['card-image-wrapper']}>
            <img src={item.image} alt={item.title} className={styles['card-image']} />
            <span className={styles['card-type-tag']}>{item.type}</span>
        </div>
        <div className={styles['card-content']}>
            <div className={styles['card-meta']}>
                <span className={styles['meta-date']}>🗓️ {item.date}</span>
                <span className={styles['meta-separator']}>•</span> {/* Better separator */}
                <span className={styles['meta-category']}>{item.category}</span>
            </div>
            <h4 className={styles['card-title']}>
                <a href={item.link} aria-label={`Read more about ${item.title}`}>{item.title}</a>
            </h4>
            <p className={styles['card-excerpt']}>{item.excerpt}</p>
            <a href={item.link} className={styles['btn-link-read']}>
                Read More <i className="fas fa-arrow-right"></i> {/* Changed to a more modern arrow */}
            </a>
        </div>
    </article>
);

// --- Sub-Component: Priority Sidebar (No change needed) ---
const NewsSidebar = ({ priorityItems }) => (
    <aside className={styles['news-sidebar']}> {/* Use <aside> for semantics */}
        {/* MODIFICATION: Added 'animate-in' class and static delay */}
        <div className={`${styles['sidebar-block']} ${styles['animate-in']}`} style={{ animationDelay: '0.7s' }}>
            <h5 className={styles['sidebar-title']}>🔍 Filter News</h5>
            <input type="text" placeholder="Search by keyword..." className={styles['sidebar-search']} />
            <select className={styles['sidebar-select']}>
                <option value="">All Categories</option>
                <option value="Governance">Governance</option>
                <option value="Community">Community</option>
                <option value="Infrastructure">Infrastructure</option>
            </select>
        </div>

        {/* MODIFICATION: Added 'animate-in' class and static delay */}
        <div className={`${styles['sidebar-block']} ${styles['sidebar-priority']} ${styles['animate-in']}`} style={{ animationDelay: '0.85s' }}>
            <h5 className={styles['sidebar-title']}>🚨 High Priority</h5>
            {priorityItems.map(item => (
                <div key={item.id} className={styles['priority-item']}>
                    <span className={styles['priority-date']}>{item.date}</span>
                    <a href={item.link} className={styles['priority-link']}>{item.title}</a>
                </div>
            ))}
        </div>
    </aside>
);

// --- Main Page Component ---
const NewsPage = () => {
    const mainNews = newsItems.filter(item => item.id !== 1);
    const featuredNews = newsItems.find(item => item.id === 1);
    const priorityItems = newsItems.filter(item => item.isPriority);

   return (
        <>
            {/* 1. Hero Banner */}
            <header className={styles['news-hero-section']}>
                <div className={styles.container}>
                    {/* MODIFICATION: Added 'animate-in' class and static delay */}
                    <div className={`${styles['hero-content']} ${styles['animate-in']}`} style={{ animationDelay: '0s' }}>
                        {/* ACTION: Swap titles. 
                            The desired text is placed in the h2 slot, 
                            which is currently styled as the big, yellow 'Stay Informed'.
                        */}
                        <h1 className={styles['hero-title']}>Stay Informed</h1>
                        <h2 className={styles['hero-subtitle']}>Official News & Public Announcements</h2>
                        <p className={styles['hero-description']}>
                            The latest updates on our initiatives, community events, and government operations.
                        </p>
                    </div>
                </div>
            </header>

            {/* 2. Main Layout (Featured + Grid + Sidebar) */}
            <main className={styles['news-main-section']}> {/* Use <main> for semantics */}
                <div className={styles.container}>
                    
                    {/* Featured Top Story Banner (Full Width) */}
                    {featuredNews && (
                        <a href={featuredNews.link} className={styles['featured-banner-link']}> {/* Wrap in an anchor for premium click area */}
                            {/* MODIFICATION: Added 'animate-in' class and static delay */}
                            <div className={`${styles['featured-banner']} ${styles['animate-in']}`} style={{ animationDelay: '0.2s' }}>
                                <img src={featuredNews.image} alt={featuredNews.title} className={styles['featured-image']} />
                                <div className={styles['featured-overlay']}>
                                    <span className={styles['featured-tag']}>Featured Story</span>
                                    <h3 className={styles['featured-title']}>{featuredNews.title}</h3>
                                    <p className={styles['featured-excerpt']}>{featuredNews.excerpt}</p>
                                    <span className={styles['featured-read-more']}>
                                        Read Full Article <i className="fas fa-chevron-right"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    )}

                    <div className={styles['content-layout']}>
                        {/* Main Stream (Left Column) */}
                        <div className={styles['main-stream']}>
                            <h3 className="section-title-dark">All Recent News</h3>
                            <div className={styles['main-news-grid']}>
                                {/* MODIFICATION: Map now passes the index */}
                                {mainNews.map((item, index) => (
                                    <DynamicNewsCard key={item.id} item={item} index={index} />
                                ))}
                            </div>
                           
                        </div>

                        {/* Sidebar (Right Column) */}
                        <NewsSidebar priorityItems={priorityItems} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default NewsPage;
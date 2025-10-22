export const generateMetadata = () => {
    return {
        title: "Laser Cleaning Services | Wagner Laser Cleaning",
        description:
            "Explore the professional laser cleaning services offered by Wagner Laser Cleaning in Shippenville, PA. Safe, efficient, and environmentally friendly solutions for your equipment and surfaces.",
        alternates: {
            canonical: "https://www.wagnerlasercleaning.com/services",
        },
        openGraph: {
            title: "Laser Cleaning Services | Wagner Laser Cleaning",
            description:
                "Discover Wagner Laser Cleaning's services in Shippenville, PA. Professional, safe, and efficient laser cleaning solutions for equipment, tools, and surfaces.",
            url: "https://www.wagnerlasercleaning.com/services",
            siteName: "Wagner Laser Cleaning",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Laser Cleaning Services | Wagner Laser Cleaning",
            description:
                "Discover Wagner Laser Cleaning's professional services in Shippenville, PA. Safe and efficient laser cleaning for all your equipment and surfaces.",
        },
    };
};

export default function Page() {
    return (
        <section className="services-page">
            <h1>Our Laser Cleaning Services</h1>
            <p className="intro">
                Wagner Laser Cleaning provides professional laser cleaning solutions for a wide range of applications. Our services are safe, precise, and environmentally friendly.
            </p>

            <div className="services-list">
                <div className="service-item">
                    <h2>Industrial Equipment Cleaning</h2>
                    <p>
                        Remove rust, coatings, and residue from industrial machinery without damaging the underlying metal.
                    </p>
                </div>

                <div className="service-item">
                    <h2>Surface Restoration</h2>
                    <p>
                        Restore surfaces of vehicles, tools, and equipment to like-new condition using precise laser cleaning technology.
                    </p>
                </div>

                <div className="service-item">
                    <h2>Tool & Mold Cleaning</h2>
                    <p>
                        Clean molds, dies, and tools efficiently, increasing longevity and reducing maintenance downtime.
                    </p>
                </div>

                <div className="service-item">
                    <h2>Specialty Applications</h2>
                    <p>
                        Custom laser cleaning solutions tailored to your specific industrial or commercial needs.
                    </p>
                </div>
            </div>
        </section>
    );
}

export const generateMetadata = () => {
    return {
        title: "About Wagner Laser Cleaning | Shippenville, PA",
        description:
            "Learn about Wagner Laser Cleaning in Shippenville, PA. Discover our commitment to safe, efficient, and environmentally friendly laser cleaning services.",
        alternates: {
            canonical: "https://www.wagnerlasercleaning.com/about",
        },
        openGraph: {
            title: "About Wagner Laser Cleaning | Shippenville, PA",
            description:
                "Discover Wagner Laser Cleaning's mission, history, and dedication to providing professional laser cleaning services in Shippenville, PA.",
            url: "https://www.wagnerlasercleaning.com/about",
            siteName: "Wagner Laser Cleaning",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "About Wagner Laser Cleaning | Shippenville, PA",
            description:
                "Learn about Wagner Laser Cleaning in Shippenville, PA. Our team delivers safe and efficient laser cleaning services for industrial and commercial clients.",
        },
    };
};

export default function Page() {
    return (
        <section className="about-page">
            <h1>About Wagner Laser Cleaning</h1>

            <p className="intro">
                Wagner Laser Cleaning is a new local business in Shippenville, PA, dedicated to providing safe, precise, and environmentally friendly laser cleaning services.
                While our business is new, our team is eager to learn, grow, and deliver high-quality results for every client.
            </p>

            <div className="about-content">
                <div className="section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to provide reliable, efficient, and eco-friendly laser cleaning solutions that help businesses maintain and restore their equipment, tools, and surfaces.
                        We strive to exceed expectations with every project, building lasting relationships in our community.
                    </p>
                </div>

                <div className="section">
                    <h2>Our Story</h2>
                    <p>
                        Founded in Shippenville, PA, Wagner Laser Cleaning may be new as a business, but our team has quickly earned a reputation for reliability, professionalism, and a commitment to learning.
                        We are proud to be well-known and trusted by local clients and neighbors.
                    </p>
                </div>

                <div className="section">
                    <h2>Why Choose Us</h2>
                    <ul>
                        <li>Safe and non-abrasive cleaning technology</li>
                        <li>Environmentally friendly and chemical-free solutions</li>
                        <li>Eager, reliable, and professional team</li>
                        <li>Fast turnaround and flexible scheduling</li>
                        <li>Growing reputation within the local community</li>
                    </ul>
                </div>
            </div>
        </section>

    );
}

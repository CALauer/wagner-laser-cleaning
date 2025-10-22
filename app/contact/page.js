export const generateMetadata = () => {
    return {
        title: "Contact Wagner Laser Cleaning | Shippenville, PA",
        description:
            "Contact Wagner Laser Cleaning in Shippenville, PA for laser cleaning services, quotes, scheduling, and general inquiries. Call or email us today!",
        alternates: {
            canonical: "https://www.wagnerlasercleaning.com/contact",
        },
        openGraph: {
            title: "Contact Wagner Laser Cleaning | Shippenville, PA",
            description:
                "Reach out to Wagner Laser Cleaning in Shippenville, PA for professional laser cleaning services. Call or email us today!",
            url: "https://www.wagnerlasercleaning.com/contact",
            siteName: "Wagner Laser Cleaning",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Contact Wagner Laser Cleaning | Shippenville, PA",
            description:
                "Reach out to Wagner Laser Cleaning in Shippenville, PA for professional laser cleaning services. Call or email us today!",
        },
    };
};

export default function Page() {
    return (
        <section className="contact-page">
            <h1>Contact Wagner Laser Cleaning</h1>
            <p className="intro">
                We’re here to help with all your laser cleaning needs. Reach out for
                quotes, scheduling, or general inquiries.
            </p>

            <div className="contact-info">
                <div className="contact-item">
                    <h2>Phone</h2>
                    <a href="tel:+8142219485">(814) 221-9485</a>
                </div>

                <div className="contact-item">
                    <h2>Email</h2>
                    <a href="mailto:owner@wagnerlasercleaning.com">owner@wagnerlasercleaning.com</a>
                </div>

                <div className="contact-item">
                    <h2>Address</h2>
                    <p>
                        22266 Route 66<br />
                        Shippenville, PA 16254
                    </p>
                </div>
            </div>
        </section>
    );
}

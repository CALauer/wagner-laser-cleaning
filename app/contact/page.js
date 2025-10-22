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
                    <a href="tel:+1234567890">(123) 456-7890</a>
                </div>

                <div className="contact-item">
                    <h2>Email</h2>
                    <a href="mailto:info@wagnerlaser.com">info@wagnerlaser.com</a>
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

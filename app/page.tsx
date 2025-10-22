export default function Home() {
  return (
    <div className="home-page">
      <main className="home-main">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Precision Laser Cleaning Services in Shippenville, PA</h1>
          <p>
            Experience the future of surface restoration. Our advanced laser cleaning
            technology safely removes rust, paint, oxidation, and contaminants without harsh
            chemicals, damage, or waste — all right here in Northwest Pennsylvania.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="cta-button">Get a Free Quote</a>
          </div>
        </section>

        {/* What is Laser Cleaning */}
        <section className="info-section">
          <h2>What Is Laser Cleaning?</h2>
          <p>
            Laser cleaning is a cutting-edge, eco-friendly surface preparation method that
            uses focused laser light to vaporize rust, paint, oil, carbon, and other
            contaminants from metal, stone, or composite surfaces — without the need for
            chemicals, abrasives, or media blasting.
          </p>
          <p>
            Unlike traditional sandblasting or solvent cleaning, laser cleaning is
            non-contact and precise, leaving the underlying material untouched. It’s ideal
            for industrial maintenance, automotive restoration, mold cleaning, and historic
            preservation.
          </p>
        </section>

        {/* Benefits */}
        <section className="benefits-section">
          <div className="benefits-text">
            <h2>Why Choose Laser Cleaning?</h2>
            <ul>
              <li><strong>Non-abrasive:</strong> No surface damage or material loss.</li>
              <li><strong>Environmentally friendly:</strong> No chemicals, no secondary waste.</li>
              <li><strong>Precision controlled:</strong> Safe for delicate or detailed components.</li>
              <li><strong>Cost-effective:</strong> Less cleanup, less downtime, more efficiency.</li>
              <li><strong>Versatile:</strong> Works on metals, stone, concrete, and more.</li>
            </ul>
          </div>
          <div className="benefits-image">
            <img src="./laser-cleaning-demo.png" alt="Laser cleaning process" />
          </div>
        </section>

        {/* Applications */}
        <section className="applications-section">
          <h2>Applications of Laser Cleaning</h2>
          <p>
            Whether you`re restoring vintage machinery, preparing parts for welding, or
            maintaining industrial equipment, laser cleaning provides a safe and efficient
            solution for:
          </p>
          <ul>
            <li>Rust and oxidation removal</li>
            <li>Paint and coating removal</li>
            <li>Oil, grease, and residue cleaning</li>
            <li>Weld prep and surface treatment</li>
            <li>Restoration of stone, monuments, and brickwork</li>
            <li>Mold and tool cleaning for manufacturing</li>
          </ul>
        </section>

        {/* Local SEO */}
        <section className="local-section">
          <h2>Serving Shippenville and Beyond</h2>
          <p>
            Based in Shippenville, Pennsylvania, we proudly serve clients throughout Clarion
            County and the surrounding areas — including Oil City, Franklin, Brookville, and
            DuBois. Our mobile laser cleaning setup allows us to bring high-powered surface
            restoration directly to your location.
          </p>
          <p>
            Whether you’re an industrial facility manager, a restoration specialist, or a
            homeowner looking to remove rust and corrosion safely, we have the tools and
            experience to help.
          </p>
        </section>

        {/* Contact / CTA */}
<section id="contact" className="contact-section">
  <h2>Ready to See the Difference?</h2>
  <p>
    Call us today for a free consultation and discover how laser cleaning can restore your
    equipment, surfaces, and tools — without damage or mess.
  </p>
  <a href="tel:+18142219485" className="contact-button">
    📞 (814) 221-9485
  </a>
</section>

      </main>
    </div>
  );
}

'use client'
import { useState } from "react";

export default function Page() {
    const sections = [
        { title: "Logo Only", slug: "logo-only", formats: ["SVG", "PNG"] },
        { title: "Logo w/ Text", slug: "logo-text", formats: ["SVG", "PNG"] },
        { title: "Logo w/ Stroked Text", slug: "logo-stroked", formats: ["SVG", "PNG"] },
    ];

    const [previewSrc, setPreviewSrc] = useState(null);

    return (
        <div className="branding-page">
            <h1>Branding Assets</h1>

            {previewSrc && (
                <div className="preview-modal">
                    <div className="overlay" onClick={() => setPreviewSrc(null)}></div>
                    <div className="modal-content">
                        <button className="close-btn" onClick={() => setPreviewSrc(null)}>×</button>
                        <img
                            src={previewSrc}
                            alt="Preview"
                            className={previewSrc.endsWith('.svg') ? 'svg-preview' : ''}
                        />

                        <a
                            href={previewSrc}
                            download
                            className="download-btn"
                        >
                            Download
                        </a>
                    </div>
                </div>
            )}

            {sections.map((section) => (
                <section key={section.slug}>
                    <h2>{section.title}</h2>
                    <div className="formats-container">
                        {section.formats.map((format) => {
                            const fileName = `${section.slug}.${format.toLowerCase()}`;
                            const filePath = `/branding/${fileName}`;
                            return (
                                <a
                                    key={format}
                                    href={filePath}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="format"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPreviewSrc(filePath);
                                    }}
                                >
                                    {format}
                                </a>
                            );
                        })}
                    </div>
                </section>
            ))}
        </div>
    );
}

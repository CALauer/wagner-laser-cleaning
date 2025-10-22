'use client';

import Image from 'next/image';
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { useState } from 'react';
import Link from 'next/link';

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div className="mobile-navigation">
                <Image src="/sm_logo1.png" width={100} height={100} alt="Logo" />
                {isOpen ? (
                    <MdClose onClick={() => setIsOpen(false)} />
                ) : (
                    <MdOutlineMenu onClick={() => setIsOpen(true)} />
                )}
            </div>

            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link href="/" onClick={handleLinkClick}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={handleLinkClick}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" onClick={handleLinkClick}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={handleLinkClick}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

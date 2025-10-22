'use client';

import Image from 'next/image';
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { useState } from 'react';
import Link from 'next/link';

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="mobile-navigation">
                <Image src="/sm_logo.png" width={100} height={100} alt="Logo" />
                {isOpen ? (
                    <MdClose onClick={() => setIsOpen(false)} />
                ) : (
                    <MdOutlineMenu onClick={() => setIsOpen(true)} />
                )}
            </div>

            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

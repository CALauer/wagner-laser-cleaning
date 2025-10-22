import Image from 'next/image'
import Link from 'next/link'

export default function DesktopNavigation() {
    return (
        <div className='desktop-navigation'>
            <div className='desktop-content-wrapper'>
                <div className='desktop-logo-wrapper'>
                    <Image src="/sm_logo1.png" width={100} height={100} alt="Logo" />
                    <div className='logo-text-wrapper'>
                        <span>Wagner</span>
                        <span>Laser Cleaning</span>
                    </div>
                </div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";

export default function Navigation() {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-white">
                <nav className="flex items-center space-x-3 justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex-none m-0">
                        <Link href="/">
                            <Image
                                width={35}
                                height={35}
                                src="/favicon.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="flex-1">
                        <ul className='flex space-x-4'>
                            <li><Link href="/about-us" className="text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">What is OpteOne?</Link></li>
                            <li><Link href="/features" className="text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</Link></li>
                            <li><Link href="/openai" className="text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">OpenAI</Link></li>
                            <li><Link href="/contact-us" className="text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="flex-none lg:visible">
                        <div className="flex w-full space-x-1">
                            <Button variant="contained" size="small" color="primary">Sign-In</Button>
                            <Button variant="outlined" size="small" color="primary">Pricing</Button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
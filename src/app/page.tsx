import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import Navigation from "@/components/Navigation";

export default function Home() {
    return (
        <>
            <div className="bg-white">
                <div className="relative isolate">
                    <div className="mx-auto max-w-2xl py-32">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Empowering businesses with cutting-edge technology
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Your solution in a fast and reliable single WebPage
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Revolutionize your website creation. Fast, reliable, and powered WordPress, Elementor and AI. Elevate your online presence effortlessly.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Button variant="outlined" size="small">Get Started</Button>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span
                                    aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="relative isolate overflow-hidden bg-theme p-8 sm:p-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">OpteOne?</h2>
                        <p className="mt-6 text-lg leading-8 text-white">All your needs in one page, that is the aim in creating this platform, so that you can have a detailed website with all your needs in just one page</p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div
                            className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            <a href="#">We are social <span aria-hidden="true">&rarr;</span></a>
                            <a href="#">Meet our team <span aria-hidden="true">&rarr;</span></a>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-white">Official templates</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">10</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-white">Designers</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">2</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-white">Developers</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">2</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-white">Haappy clients</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">20+</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            
            <div className="relative isolate overflow-hidden bg-tahiti p-8 sm:p-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Features?
                        </h2>
                    </div>
                </div>
            </div>
            
            <div className="relative isolate overflow-hidden bg-white p-8 sm:p-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                            Prices?
                        </h2>
                    </div>
                </div>
            </div>
            
            <div className="relative isolate overflow-hidden bg-silver p-8 sm:p-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-theme sm:text-6xl">
                            Contacts?
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

"use client";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import OpenAIAPIMenu from "@/components/openai/Menu"

type Image = {
    url?: string,
}

export default function OpenAIAPIImageComponent() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Image | null>(null);

    const imageWithOpenAIAPI = async ( prompt: string, size: string ) => {
        try {
            setLoading(true);
            const response = await fetch(`/api/openai/image`, {
                method      : "POST",
                body        : JSON.stringify({
                    prompt  : prompt,
                    size    : size,
                }),
            });
            if (response) {
                const data = await response.json();
                setData(data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="relative isolate overflow-hidden bg-theme p-32 sm:p-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl lg:mx-0">

                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            imageWithOpenAIAPI
                        </h2>
                        <Button
                            variant="contained"
                            size="small"
                            color="secondary"
                            onClick={() => imageWithOpenAIAPI(
                                'A logo design of an animal clinic using a wolfes head.',
                                '512x512',
                            )}>
                                {loading ? 'Loading...' : 'Call OpenAIAPI' }
                        </Button>

                    </div>
                </div>
            </div>

            <OpenAIAPIMenu />

            <div className="relative isolate overflow-hidden bg-primary p-32 sm:py-8 sm:p-24">

                {loading ? <span>Generating image...</span> : data && data.url ? (
                    <>
                        <img
                            alt="SoopP | OpenAIAPI Image"
                            src={data.url.toString()}
                            width={1200}
                            height={420}
                        />
                    </>
                ) : <span>No data found.</span>}

            </div>
        </>
    )
}
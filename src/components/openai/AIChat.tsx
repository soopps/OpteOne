"use client";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import OpenAIAPIMenu from "@/components/openai/Menu"

export default function OpenAIAPIChatComponent() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);

    const chatWithOpenAIAPI = async ( prompt: string ) => {
        try {
            setLoading(true);
            const response = await fetch(`/api/openai/chat`, {
                method      : "POST",
                body        : JSON.stringify([
                    { role : "system", content : "You are a helpfull chatbot." },
                    { role : "user", content : prompt },
                ]),
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
                            ChatWithOpenAIAPI
                        </h2>
                        <Button
                            variant="contained"
                            size="small"
                            color="secondary"
                            onClick={() => chatWithOpenAIAPI(
                                "How can i use openai api in my applications?"
                            )}>
                                {loading ? 'Loading...' : 'Call OpenAIAPI' }
                        </Button>

                    </div>
                </div>
            </div>

            <OpenAIAPIMenu />

            <div className="relative isolate overflow-hidden text-black bg-primary p-32 sm:py-8 sm:p-24">

                {loading ? ( <span>Please wait...</span> ) : (
                    <>
                        {data.content ? (
                            <>
                                <ul className="space-y-3">
                                    <li className="mb-4">
                                        <strong>Chatbot:</strong>
                                        <div>{data.content}</div>
                                    </li>
                                </ul>
                            </>
                        ) : (<span>No data found.</span>)}
                    </>
                )}

            </div>
        </>
    );
}
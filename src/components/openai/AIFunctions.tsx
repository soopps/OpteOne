"use client";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Span } from "next/dist/trace";
import OpenAIAPIMenu from "@/components/openai/Menu"

export default function OpenAIAPIFunctionsComponent() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);

    const functionsWithOpenAIAPI = async ( prompt: any ) => {
        try {
            setLoading(true);
            const response = await fetch(`/api/openai/functions`, {
                method      : "POST",
                body        : JSON.stringify({
                    company_name          : prompt.company_name || null,
                    company_description   : prompt.company_description || null
                }),
            });
            if (response) {
                const data = await response.json();
                setData(JSON.parse(data));
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
                            functionsWithOpenAIAPI
                        </h2>
                        <Button
                            variant="contained"
                            size="small"
                            color="secondary"
                            onClick={() => functionsWithOpenAIAPI({
                                company_name        : 'OpteOne',
                                company_description : 'Company description.',
                            })}>
                                {loading ? 'Loading...' : 'Call OpenAIAPI' }
                        </Button>

                    </div>
                </div>
            </div>

            <OpenAIAPIMenu />

            <div className="relative isolate overflow-hidden bg-primary p-32 sm:py-8 sm:p-24">

                {loading ? <div className="text-black">Generating theme options...</div> : Object.keys(data).length > 0 ? (
                    <>
                        <ul className="text-black space-y-3">
                            { data.theme_description &&
                                <li className="mb-4">
                                    <strong>Description:</strong>
                                    <div>{data.theme_description}</div>
                                </li>
                            }
                            <li className="mb-4">
                                <strong>Sections:</strong>
                                <ul>
                                    { data.theme_sections.hero &&
                                        <li className="mb-4">
                                            Hero:
                                            <div>{data.theme_sections.hero}</div>
                                        </li>
                                    }
                                    { data.theme_sections.aboutus &&
                                        <li className="mb-4">
                                            About us:
                                            <div>{data.theme_sections.aboutus}</div>
                                        </li>
                                    }
                                    { data.theme_sections.calltoaction &&
                                        <li className="mb-4">
                                            Call To Action:
                                            <div>{data.theme_sections.calltoaction}</div>
                                        </li>
                                    }
                                    { data.theme_sections.feature &&
                                        <li className="mb-4">
                                            Feature:
                                            <div>{data.theme_sections.feature}</div>
                                        </li>
                                    }
                                    {/* { data.theme_sections.contact &&
                                        <li className="mb-4">
                                            Contact:
                                            <div>{data.theme_sections.contact}</div>
                                        </li>
                                    } */}
                                </ul>
                            </li>
                            <li className="mb-4">
                                <strong>Colors:</strong>
                                <ul>
                                    <li className="mb-4" style={{
                                        backgroundColor: `${data.theme_colors.primary}`
                                    }}>
                                        Primary:
                                        <div>{data.theme_colors.primary}</div>
                                    </li>
                                    <li className="mb-4" style={{
                                        backgroundColor: `${data.theme_colors.secondary}`
                                    }}>
                                        Secondary:
                                        <div>{data.theme_colors.secondary}</div>
                                    </li>
                                    <li className="mb-4" style={{
                                        backgroundColor: `${data.theme_colors.accent}`
                                    }}>
                                        Accent:
                                        <div>{data.theme_colors.accent}</div>
                                    </li>
                                    <li className="mb-4" style={{
                                        backgroundColor: `${data.theme_colors.text}`
                                    }}>
                                        Text:
                                        <div>{data.theme_colors.text}</div>
                                    </li>
                                    <li className="mb-4" style={{
                                        backgroundColor: `${data.theme_colors.background}`
                                    }}>
                                        Background:
                                        <div>{data.theme_colors.background}</div>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-4">
                                <strong>Alert system Colors:</strong>
                                <ul>
                                    <li className="mb-4" style={{
                                            backgroundColor: `${data.theme_alert_colors.success}`
                                        }}>
                                        Success:
                                        <div>{data.theme_alert_colors.success}</div>
                                    </li>
                                    <li className="mb-4" style={{
                                            backgroundColor: `${data.theme_alert_colors.danger}`
                                        }}>
                                        Danger:
                                        <div>{data.theme_alert_colors.danger}</div>
                                    </li>
                                    <li className="mb-4" style={{
                                            backgroundColor: `${data.theme_alert_colors.info}`
                                        }}>
                                        Info:
                                        <div>{data.theme_alert_colors.info}</div>
                                    </li>
                                    <li className="mb-4" style={{
                                            backgroundColor: `${data.theme_alert_colors.warning}`
                                        }}>
                                        Warning:
                                        <div>{data.theme_alert_colors.warning}</div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </>
                ) : <span>No data found.</span> }

            </div>
        </>
    )
}
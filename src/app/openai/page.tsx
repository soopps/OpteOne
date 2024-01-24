"use client";
import Button from "@mui/material/Button";
import OpenAIAPIMenu from "@/components/openai/Menu"
import PageHeader from "@/components/PageHeader";

export default function OpenAIPage() {
    return (
        <>
            <PageHeader title="OpenAIAPI" />
            <OpenAIAPIMenu />
        </>
    );
}
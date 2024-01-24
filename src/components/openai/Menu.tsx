"use client";
import Button from "@mui/material/Button";

export default function OpenAIPagesMenu() {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-bubble-gum p-32 sm:py-8 sm:p-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <ul className="flex flex-row space-x-4">
                            <li>
                                <Button variant="contained" size="small" color="inherit" href="/openai/assistant">
                                    Assistant
                                </Button>
                            </li>
                            <li>
                                <Button variant="contained" size="small" color="inherit" href="/openai/chat">
                                    Chat
                                </Button>
                            </li>
                            <li>
                                <Button variant="contained" size="small" color="inherit" href="/openai/functions">
                                    Functions
                                </Button>
                            </li>
                            <li>
                                <Button variant="contained" size="small" color="inherit" href="/openai/image">
                                    Image
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
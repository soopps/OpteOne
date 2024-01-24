import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI();
const openaiModelId:any = process.env.OPENAI_MODEL_ID || null;

export async function POST(request: Request, context: any) {
    const body = await request.json();
    const { company_name, company_description } = body;

    const schema:any = {
        type                    : 'object',
        properties              : {
            theme_description   : {
                type            : 'string',
                description     : `Re-write this '${company_description}' make it catchy, longer.`,
            },
            theme_sections      : {
                type            : 'array',
                description     : `Generate frontpage sections, Infer from the theme_description.`,
                items           : {
                    type        : 'object',
                    properties  : {
                        hero: {type: 'string'},
                        aboutus: {type: 'string'},
                        calltoaction: {type: 'string'},
                        feature: {type: 'string'},
                        contact: {
                            type: 'array',
                            description: 'Write a title, tagline and a form submit-button-text for the contact section',
                            items: {
                                type: 'object',
                                properties: {
                                    title: {
                                        type: 'string',
                                        description: 'write a 4-8 words in length the title of the contact section.'
                                    },
                                    tagline: {
                                        type: 'string',
                                        description: 'write a 8-16 words in length the title-tagline of the contact section.',
                                    },
                                    submitButtonText: {
                                        type: 'string',
                                        description: 'write a 3-6 words in length the submit-button-text of the contact section.',
                                    },
                                },
                            },
                        },
                    },
                },
            },
            theme_colors        : {
                type            : 'array',
                description     : `Generate nuetral-complementary [HEX formated] colors for the theme options, Infer from the theme_description, * important to give me [HEX formated] values only.`,
                items           : {
                    type        : 'object',
                    properties  : {
                        primary: {
                            type: 'string',
                            description: 'the primary color of the theme'
                        },
                        secondary: {
                            type: 'string',
                            description: 'the secondary color of the theme'
                        },
                        accent: {
                            type: 'string',
                            description: 'the accent color of the theme'
                        },
                        text: {
                            type: 'string',
                            description: 'the text color of the theme'
                        },
                        background: {
                            type: 'string',
                            description: 'the background color of the theme'
                        },
                    }
                }
            },
            theme_alert_colors  : {
                type            : 'array',
                description     : `Generate nuetral-complementary [HEX formated] alert system colors for the theme options, Infer from the theme_description and theme_colors, * important to give me [HEX formated] values only.`,
                items           : {
                    type        : 'object',
                    properties  : {
                        success: {
                            type: 'string',
                            description: 'the success alert system color of the theme'
                        },
                        danger: {
                            type: 'string',
                            description: 'the danger alert system color of the theme'
                        },
                        info: {
                            type: 'string',
                            description: 'the info alert system color of the theme'
                        },
                        warning: {
                            type: 'string',
                            description: 'the warning alert system color of the theme'
                        },
                    }
                }
            },
        },
        required                : [ 'theme_description', 'theme_sections', 'theme_colors', 'theme_alert_colors' ],
    };
    
    const messages:any = [
        { role : "system", content : "You are a theme options generator." },
        { role : "user", content : 'Give me the theme options for the company website.' },
    ];

    const tools:any = [
        {
            type                : 'function',
            function            : {
                name            : 'get_theme_options_data',
                parameters      : schema,
            },
        },
    ];

    const completion = await openai.chat.completions.create({
        model: openaiModelId,
        messages: messages,
        tools: tools,
    });

    // return NextResponse.json(JSON.parse(bodyUsed));
    return NextResponse.json(completion.choices[0].message.tool_calls[0].function.arguments);
}
import { NextResponse } from "next/server";

export async function GET() {

    const getPostsData = async () => {
        try {
            const response = await fetch(`http://localhost/wp-json/sp/v1/posts`, {
                method  : "GET",
                cache: 'no-cache',
                next:{
                    revalidate: 1
                }
            });
            if (response) {
                const data = await response.json();
                return NextResponse.json(data);
            }
        } catch (error) {
            console.log(error);
        }
    };
}
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import PageHeader from "@/components/PageHeader";

export default function BlogPage({ params }: any) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getPostsData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost/wp-json/sp/v1/posts`, {
                method  : "POST",
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    post_type: 'post',
                    post_status: 'any',
                    ppp: 5
                }),
                next:{
                    revalidate: 1
                }
            });
            if (response) {
                const data = await response.json();
                console.log(data);
                setData(data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPostsData();
    }, []);

    return (
        <>
            <PageHeader title="Blog" />

            <div className="relative isolate overflow-hidden bg-primary p-32 sm:p-24">

                <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    onClick={() => getPostsData()}>
                        {loading ? '...' : 'Retreive' }
                </Button>

                {!loading && Object.keys(data).length > 0 && (
                    <>
                        <ul className="flex flex-col space-y-10 mt-5">
                            {data.map((post: any, index) => (
                                <li key={post.ID ?? index} className="space-y-2">
                                    
                                    {/* <div>
                                        <Link href={post.post_permalink}>
                                            <img
                                                alt={post.post_title}
                                                src={post.thumbnail.toString()}
                                                width={1200}
                                                height={420}
                                            />
                                        </Link>
                                    </div> */}
                                    
                                    {post.post_title && (
                                        <h5>
                                            <Link href={`/blog/${post.ID || null}`}>
                                                <strong>{post.post_title}</strong>
                                            </Link>
                                        </h5>
                                    )}

                                    {post.post_exerpt && (
                                        <p>
                                            {post.post_exerpt}
                                        </p>
                                    )}

                                    {post.ID && (
                                        <p>
                                            <Link  href={`/blog/${post.ID || null}`}>
                                                <i>View post</i>
                                            </Link>
                                        </p>
                                    )}

                                </li>
                            ))}
                        </ul>
                    </>
                )}

            </div>
        </>
    )
}
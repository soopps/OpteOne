"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

type Post = {
    ID?: number,
    post_title?: string,
    post_content?: string,
    post_permalink?: string,
    thumbnail?: string,
}

export default function BlogPost({ params }: any) {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<Post | null>(null);

    const getPostData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost/wp-json/sp/v1/post/${params.id}`, {
                method  : "GET",
                cache: 'force-cache',
                next:{
                    revalidate: 1
                }
            });
            if (response) {
                const data = await response.json();
                setPost(data);
            }
        } catch (error) {
            console.log(error);        
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPostData();
    }, []);

    return (
        <>
            <div className="relative isolate overflow-hidden bg-theme p-32 sm:p-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        {loading ? (
                            <>
                                <span>Loading post title...</span>
                            </>
                        ) : post && (
                            <>
                                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                    <strong>{post.post_title}</strong>
                                </h2>
                                <Button variant="contained" size="small" color="primary" href="/blog/">
                                    Blog
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="relative isolate overflow-hidden bg-primary p-32 sm:p-24">
                {loading ? (
                    <>
                        Loading post content...
                    </>
                ) : post && (
                    <>
                        {post.thumbnail && post.post_title && (
                            <Image
                                alt={post.post_title}
                                src={post.thumbnail}
                                width={1200}
                                height={420}
                            />
                        )}

                        {post.post_content && (
                            <p>
                                {post.post_content}
                            </p>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
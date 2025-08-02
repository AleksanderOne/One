"use client";

import React from "react";
import clsx from "clsx";

// Typy (możesz dać do osobnego pliku types.ts jeśli chcesz)
type SidebarBox =
    | {
    type: "specialist";
    title: string;
    content: {
        avatar: string;
        name: string;
        desc: string;
    };
}
    | {
    type: "packages";
    title: string;
    content: Array<{
        title: string;
        desc: string;
        cta: string;
    }>;
};

type RelatedPost = {
    img: string;
    title: string;
    desc: string;
    tag: string;
    link: string;
};

type BlogPostData = {
    title: string;
    author: string;
    date: string;
    readTime: string;
    toc: Array<{ label: string; anchor: string }>;
    cover: string;
    contentHtml: string;
    sidebar: SidebarBox[];
    relatedPosts: RelatedPost[];
    prevPost?: { slug: string; title: string };
    nextPost?: { slug: string; title: string };
};

type Props = {
    data: BlogPostData;
    onNavigatePost?: (slug: string) => void; // dla routingów client-side
};

export default function BlogPostWithSidebar({ data, onNavigatePost }: Props) {
    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col">
            {/* Top bar placeholder */}
            <div className="h-14" />
            {/* Content */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-4 py-8 flex-1">
                {/* Main content */}
                <div className="flex-1 min-w-0">
                    <div className="mb-6">
                        <div className="text-gray-500 text-sm mb-2">
                            {data.author} · {data.date} · {data.readTime}
                        </div>
                        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                        {/* Table of contents */}
                        <div className="mb-4">
                            <span className="font-semibold">Contents:</span>
                            <ul className="ml-4 list-disc text-blue-700 text-sm space-y-1">
                                {data.toc.map((item) => (
                                    <li key={item.anchor}>
                                        <a href={`#${item.anchor}`}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <img
                            src={data.cover}
                            alt=""
                            className="rounded-2xl w-full object-cover mb-6 max-h-[340px]"
                        />
                        <div
                            className="prose prose-lg max-w-none mb-8"
                            dangerouslySetInnerHTML={{ __html: data.contentHtml }}
                        />
                    </div>
                    {/* --- Przyciski nawigacyjne między postami --- */}
                    <div className="flex justify-between items-center gap-2 border-t pt-8 mt-8">
                        <div>
                            {data.prevPost && (
                                <a
                                    href={data.prevPost.slug}
                                    onClick={e => {
                                        if (onNavigatePost) { e.preventDefault(); onNavigatePost(data.prevPost!.slug); }
                                    }}
                                    className="flex items-center gap-2 text-teal-600 hover:underline font-semibold"
                                >
                                    &larr; {data.prevPost.title}
                                </a>
                            )}
                        </div>
                        <div>
                            {data.nextPost && (
                                <a
                                    href={data.nextPost.slug}
                                    onClick={e => {
                                        if (onNavigatePost) { e.preventDefault(); onNavigatePost(data.nextPost!.slug); }
                                    }}
                                    className="flex items-center gap-2 text-teal-600 hover:underline font-semibold"
                                >
                                    {data.nextPost.title} &rarr;
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                {/* Sidebar */}
                <aside className="w-full md:w-[340px] flex-shrink-0 space-y-8">
                    {data.sidebar.map((box, idx) => {
                        if (box.type === "specialist") {
                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl shadow p-5 flex flex-col items-center mb-4"
                                >
                                    <div className="uppercase text-xs text-gray-400 font-bold mb-2">{box.title}</div>
                                    <img
                                        src={box.content.avatar}
                                        alt={box.content.name}
                                        className="w-20 h-20 rounded-full mb-3 object-cover border"
                                    />
                                    <div className="font-semibold">{box.content.name}</div>
                                    <div className="text-xs text-gray-600 text-center mt-2">{box.content.desc}</div>
                                </div>
                            );
                        }
                        if (box.type === "packages") {
                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl shadow p-5 mb-4"
                                >
                                    <div className="uppercase text-xs text-gray-400 font-bold mb-2">{box.title}</div>
                                    <div className="space-y-4">
                                        {box.content.map((item, i) => (
                                            <div key={i} className="border-b last:border-none pb-4 mb-4 last:pb-0 last:mb-0">
                                                <div className="font-semibold text-sm mb-1">{item.title}</div>
                                                <div className="text-xs text-gray-600 mb-2">{item.desc}</div>
                                                <button className="text-white bg-teal-600 hover:bg-teal-700 px-4 py-1 rounded-full text-xs font-bold">
                                                    {item.cta}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </aside>
            </div>
            {/* --- Dół: Real Stories. Real Care. --- */}
            <div className="w-full bg-white border-t mt-10">
                <div className="max-w-6xl mx-auto px-4 py-10">
                    <div className="font-bold text-2xl mb-6">Real Stories. Real Care.</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {data.relatedPosts.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                onClick={e => {
                                    if (onNavigatePost) { e.preventDefault(); onNavigatePost(item.link); }
                                }}
                                className="group block bg-gray-50 border rounded-2xl shadow hover:shadow-lg transition p-5"
                            >
                                <img src={item.img} alt={item.title} className="rounded-xl w-full object-cover mb-4 h-40" />
                                <div className="text-xs text-teal-700 font-semibold uppercase mb-1">{item.tag}</div>
                                <div className="font-bold text-base mb-1">{item.title}</div>
                                <div className="text-sm text-gray-600 mb-2">{item.desc}</div>
                                <span className="text-sm text-teal-700 font-semibold group-hover:underline">
                  Read More &rarr;
                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

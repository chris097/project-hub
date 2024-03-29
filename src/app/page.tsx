'use client'
import Header from "@/components/Header/page";
import { IProjectTabs } from "@/types";
import Link from "next/link";
import { useState } from "react";

const projectTabs: IProjectTabs[]  = [
  { id: 1, name: "Task Card", link: "/pages/task-card" },
  { id: 1, name: "Video Player", link: "/pages/video-player" },
  { id: 1, name: "Book Date", link: "/pages/book-date" },
  { id: 2, name: "Input Count", link: "/pages/input-count" },
  { id: 3, name: "Custom Calendar", link: "/pages/calendar" },
  { id: 4, name: "React Drag And Drop", link: "/pages/drag-and-drop" },
  { id: 5, name: "React Drag And Drop Multiple files", link: "/pages/drag-and-drop-multiple-files" },
];

export default function Home() {
  return (
    <main className="font-montserrat">
      <Header />
      <div className="px-6 py-6 flex gap-5">
        {/* Project Tabs */}
      {projectTabs.map((tab) => (
        <Link className="border p-3 hover:bg-slate-100 rounded-full text-sm" key={tab.id} href={tab.link}>{tab.name}</Link>
      ))}
      </div>
    </main>
  );
};

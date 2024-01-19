import Header from "@/components/Header/page";
import { IProjectTabs } from "@/types";
import Link from "next/link";

const projectTabs: IProjectTabs[]  = [
  { id: 1, name: "React Drag And Drop", link: "/pages/drag-and-drop" },
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

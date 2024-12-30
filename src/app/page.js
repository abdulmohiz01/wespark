'use client'
import Loader from "@/components/loader";
import gsap from "gsap";
import { useEffect } from "react";
import Navigation from "@/components/navigation";

export default function Home() {
  useEffect(() => {

  })

  return (
    <div className="relative ">
      <Loader />
      <div id="page1" className=" bg-background w-full h-[100vh]">
        <Navigation />
      </div>
    </div>
  );
}

"use client";

import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Public from "./@public/page";
import Private from "./@private/page";
import style from "./_styles/style.module.css";
import Image from "next/image";
import Script from "next/script";

const randomIds = ["randomId-1", "randomId-2", "randomId-3"];

const Dashboard = () => {
  const router = useRouter(); // can only be used inside client component
  useEffect(() => {
    debugger;
    router.prefetch(
      `/dashboard/${randomIds[Math.floor(Math.random() * randomIds.length)]}`
    ); // to prefetch route segment programmatically
  }, [router]);
  const handleRandomDashboard = () => {
    router.push(
      `/dashboard/${randomIds[Math.floor(Math.random() * randomIds.length)]}`
    );
  };
  return (
    <div className={style.dashboard}>
      <h1>Hello, Dashboard Page!</h1>
      {/* priority will load image in advance */}
      {/* good to specify width/height for remote images */}
      {/* fill is useful when we do not know dimension of image */}
      <Image
        priority
        width="96"
        height="96"
        src="https://img.icons8.com/doodle/96/control-panel.png"
        alt="control-panel"
      />
      <a role="button" onClick={handleRandomDashboard}>
        Go to Dashboard Random
      </a>
      <br />
      <section>
        <h2 className="m-4 text-xl">Parallel routes section</h2>
        <br />
        <div className="flex flex-row justify-between">
          <div className="m-10">
            <Suspense fallback={<p>Loading public section....</p>}>
              <Public />
            </Suspense>
          </div>
          <div className="m-10">
            <Suspense fallback={<p>Loading private section....</p>}>
              <Private />
            </Suspense>
          </div>
        </div>
      </section>
      {/* Nextjs supports 3rd party script loading
        Can execute additional code using callbacks
      */}
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossOrigin="anonymous"
        onLoad={() => {
          console.log("Script has loaded");
        }}
      ></Script>
    </div>
  );
};

export default Dashboard;

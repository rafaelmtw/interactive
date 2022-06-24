import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";

import Link from "next/link";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>3D Example</title>
        <meta name="description" content="An example of a 3D website." />
      </Head>
      <div className="w-full h-full">
        <div className="flex flex-col flex-wrap justify-center content-center ">
          <div className="mt-[12%]">
            <Link href="interactive">
              <button className="btn btn-wide">THREE.JS</button>
            </Link>
          </div>
          <div className="my-[2%]">
            <Link href="zustand">
              <button className="btn btn-wide">ZUSTAND</button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;

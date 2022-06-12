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
        <div className="flex flex-wrap justify-center">
          <Link href="interactive">
            <button className="btn btn-wide">START</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;

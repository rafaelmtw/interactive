import Head from "next/head";
import Image from "next/image";

import Link from "next/link";

function HomePage() {
  return (
    <div className="w-full h-full">
      <Link href="interactive">
        <button className="btn btn-block">START</button>
      </Link>
    </div>
  );
}

export default HomePage;

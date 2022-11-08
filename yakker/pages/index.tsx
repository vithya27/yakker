import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { fetchYaks } from "../utilities/fetchYaks";
import { Yak } from "../typings";

interface Props {
  yaks: Yak[];
}

const Home: NextPage<Props> = ({ yaks }: Props) => {
  console.log(yaks);
  return (
    <div className="max-h-screen overflow-hidden">
      <Head>
        <title>Yakker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />

        <Feed yaks={yaks}/>

        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const yaks = await fetchYaks();

  return { props: { yaks } };
};

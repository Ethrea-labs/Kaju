import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import Image from "next/image";

const Home: NextPage = () => {
  const { isConnected } = useAccount();
  const router = useRouter();

  const handleCreateAgent = () => {
    if (isConnected) {
      router.push("/characterPage");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <Head>
        <title>Kaju: AI Streaming Agent</title>
        <meta content="Your personal AI streaming agent" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="text-center">
        <div className="relative w-64 h-64 mb-4">
          <Image
            src="/images/pik.png" // Correct path
            alt="Kaju Agent"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        <h1 className="text-5xl font-bold mb-12">
          KAJU: YOUR PERSONAL AI STREAMING AGENT
        </h1>

        <div className="space-y-4">
          <button
            onClick={handleCreateAgent}
            className={`px-6 py-3 rounded-full text-lg font-semibold ${
              isConnected
                ? "bg-green-400 text-black cursor-pointer"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
            disabled={!isConnected}
          >
            Create Agent
          </button>

          <div className="mt-4">
            <ConnectButton label="Connect Wallet" showBalance={false} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

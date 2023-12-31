import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Next.js with WordPress</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <main>{children}</main>
            </div>
        </>
    );
}
import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>FurDevs</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
            <div className="container">
                <Navbar />
                {children}
            </div>
        </>
    );
}

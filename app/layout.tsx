import type { Metadata } from "next";
import "./styles/global.css";

export const metadata: Metadata = {
    title: "Kai DeVito",
    description: "Hi",
    icons: {
        icon: [
            {
                url: "/public/favicon.png",
                href: "/public/favicon.png",
            }
        ]
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      <html lang="en">
        <body className="homepage">{children}</body>
      </html>
    );
};

/*
<!--import NavBar from "../components/navbar"-->

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/styles/styles.css" />
    <link rel="icon" href="/assets/favicon.png">
    <title>Kai DeVito</title>
</head>

<div id="navbar"></div>
<script type="module" src="scripts/nav.js"></script>


<body class="homepage">

    <!-- I am falling and spinning -->


    <div class="intro">
        <img class="me" src="/assets/profile.jpeg" alt="My face">
        <div id="quote" class="quote">
            <p>Hi, I am Kai DeVito. This is my portfolio. Feel free to explore!</p>
            <button id="ok">OK</button>
        </div>
    </div>

    <script src="scripts/homepage.js" defer></script>

</div>
</body>
</html>
*/
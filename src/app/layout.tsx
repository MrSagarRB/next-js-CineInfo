import "./globals.css";

export const metadata = {
  title: " CineInfo | By Sagar | Next JS 13.2  ",
  description: "CineInfo using Next Js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-black  text-[#fff] lg:mx-32 my-12">{children}</body>
    </html>
  );
}

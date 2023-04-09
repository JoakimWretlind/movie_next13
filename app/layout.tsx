import "./globalStyle.scss";

export const metadata = {
  title: "MovieApp",
  description: "NextJS 13 with imdb-api   ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

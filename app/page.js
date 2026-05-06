import HomePage from "./components/Landing/HomePage";
import "./globals.css";

export default async function Home({ searchParams }) {
  const { query } = await searchParams;
  console.log("Query from Home : ", query);
  return (
    <HomePage query={query} />
  );
}

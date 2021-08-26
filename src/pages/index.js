import Layout from "../components/Layout";
import Header from "../components/Header";
import Home from "../components/Home";

export default function HomePage() {
  return (
    <Layout docTitle="SQL Editor" metaDescription="SQL Editor made for atlan">
      <Header />
      <Home />
    </Layout>
  );
}

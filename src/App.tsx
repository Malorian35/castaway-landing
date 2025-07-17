import AboutPage from "./components/About/About.tsx";
import SubscribeForm from "./components/Subscribe/Subscribe.tsx";
import Hero from "./components/Hero/Hero.tsx";
import LatestEpisodes from "./components/Latestepisodes/Latestepisodes.tsx";
import Navbar from "./components/Head/Head.tsx";
import Reviews from "./components/Reviews/Reviews.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestEpisodes />
      <AboutPage />
      <SubscribeForm />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;

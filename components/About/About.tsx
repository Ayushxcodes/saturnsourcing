import AboutHero from "./AboutHero";
import WhoAreWe from "./WhoAreWe";
import Leadership from "./Leadership";
import AdvisoryBoard from "./AdvisoryBoard";

export default function About() {
  return (
    <div className="w-full">
      <AboutHero />
      <WhoAreWe />
      <Leadership />
      <AdvisoryBoard />
    </div>
  );
}

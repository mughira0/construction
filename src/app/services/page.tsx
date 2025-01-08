import CallToAction from "../components/services/CallToAction";
import DetailedServices from "../components/services/DetailedServices";
import ServiceHighlights from "../components/services/ServiceHighlights";
import ServicesHero from "../components/services/ServicesHero";
import WhyChooseUs from "../components/services/WhyChooseUs";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <DetailedServices />
      <ServiceHighlights />
      <WhyChooseUs />
      <CallToAction />
    </main>
  )
}


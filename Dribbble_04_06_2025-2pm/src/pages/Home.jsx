import CarouselBanner from "../components/HeroBanner";
import DisenoPreviewList from "../components/CardList";
import { diseños } from "../data/items";

export default function Home() {
  return (
    <>
      <CarouselBanner items={diseños} />
      <DisenoPreviewList items={diseños} />
    </>
  );
}

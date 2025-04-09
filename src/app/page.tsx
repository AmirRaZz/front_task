import Carousel from "@/components/Carousel";
const images = [
  {
    id: 1,
    image: "/images/carousel/Untitled.png",
    alt: "Carousel image",
  },
  {
    id: 2,
    image: "/images/carousel/Untitled.png",
    alt: "Carousel image",
  },
  {
    id: 3,
    image: "/images/carousel/Untitled.png",
    alt: "Carousel image",
  },
];
export default function Home() {
  return (
    <div>
      <Carousel slides={images} />
    </div>
  );
}

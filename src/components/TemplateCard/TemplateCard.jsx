"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const templates = [
  { id: 1, name: "Modern Portfolio", image: "src/assets/images/templates1.png" },
  { id: 2, name: "Minimalist Resume", image: "src/assets/images/templates1.png" },
  { id: 3, name: "Professional Profile", image: "src/assets/images/templates1.png" },
  { id: 4, name: "Creative Profile", image: "src/assets/images/templates1.png" },
];

const TemplateCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-center text-3xl font-bold text-white mb-6">
        Choose a Template
      </h2>

      <Carousel
        opts={{
          align: "start",
          dragFree: false,
          duration: 30,
        }}
      >
        <CarouselContent>
          {/* Render Templates */}
          {templates.map((template) => (
            <CarouselItem key={template.id} className="md:basis-1/2 lg:basis-1/3 p-4">
              <div className="relative bg-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
                <div className="absolute bottom-0 bg-black/60 w-full text-white p-3 text-center">
                  {template.name}
                </div>
              </div>
            </CarouselItem>
          ))}

          {/* Browse More Templates Button as a Carousel Item */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-4 flex items-center justify-center">
          <div className="text-center mt-6">
          <button className="text-gray-500 font-semibold hover:underline">
            Browse More Templates →
          </button>   
          </div>       
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TemplateCarousel;

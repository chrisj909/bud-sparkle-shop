interface ProductGalleryProps {
  image: string;
  name: string;
}

export const ProductGallery = ({ image, name }: ProductGalleryProps) => {
  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg md:rounded-xl shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:grid grid-cols-2 gap-4">
        <div className="aspect-square overflow-hidden rounded-md">
          <img
            src={image}
            alt={`${name} thumbnail 1`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-md">
          <img
            src={image}
            alt={`${name} thumbnail 2`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
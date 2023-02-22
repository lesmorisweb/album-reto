import { IPictureContainer } from "./pictureContainer.types";

export function PicturesContainer({ img, artist }: IPictureContainer) {
  return (
    <div className="imageContainer">
      <img src={img} alt={artist} />
    </div>
  );
}

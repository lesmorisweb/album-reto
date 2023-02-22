import { IInfoContainer } from "./infoContainer.types";

export function InfoContainer({
  artist,
  date,
  genero,
  style,
  title,
}: IInfoContainer) {
  return (
    <div className="infoContainer">
      <h1 className="artist">{artist}</h1>
      <h3 className="title">{title}</h3>
      <h4 className="genero">{genero}</h4>
      <h3 className="date">{date}</h3>
      <h2 className="style">{style}</h2>
    </div>
  );
}

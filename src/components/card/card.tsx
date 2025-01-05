// @own
import "@styles/card.scss";

interface Props {
  image: string;
  title: string | JSX.Element;
  description: string | JSX.Element;
}

export const Card = ({ image, title, description }: Props) => {
  return (
    <article className="Card">
      <figure className="Card__QR">
        <img src={image} alt={`${title}`} />
      </figure>
      <section className="Card__details">
        <h1 className="Card__title">{title}</h1>
        <p className="Card__description">{description}</p>
      </section>
    </article>
  )
};

import type { CardData } from "../../model";
import "./Card.css";

interface Props {
  cardData: CardData;
}

export function Card({ cardData }: Props) {
  return <div className="Card">{/* Complete this component */}</div>;
}

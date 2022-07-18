import { useEffect, useState } from "react";
import "./App.css";
import { Api } from "../../api";
import type { CardData } from "../../model";
import { Card } from "../Card";

export function App() {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    // Fetch the cards using the API endpoint
  }, []);

  return (
    <div className="App">
      <div className="App-cardlist">
        {/* Render each card returned from the API */}
      </div>
    </div>
  );
}

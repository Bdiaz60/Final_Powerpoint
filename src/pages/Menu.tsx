import { useEffect, useState } from "react";
import "../styles.css";

type MenuItem = {
  name: string;
  description: string;
  image: string;
  nutrition: string[];
};

export default function Menu() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<MenuItem | null>(null);

  useEffect(() => {
    const drinks: MenuItem[] = [
      {
        name: "Classic Milk Tea",
        description: "A traditional blend of black tea, milk, and tapioca pearls.",
        image: "/classic_boba.jpg",
        nutrition: [
          "Calories: 250",
          "Sugar: 38g",
          "Caffeine: 50mg",
          "Fat: 4g",
        ],
      },
      {
        name: "Taro Milk Tea",
        description: "A creamy, sweet, and nutty drink made from taro root.",
        image: "/taro+milk+tea.jpg",
        nutrition: [
          "Calories: 300",
          "Sugar: 40g",
          "Caffeine: 0mg",
          "Fat: 6g",
        ],
      },
      {
        name: "Matcha Latte",
        description: "Fresh matcha with almond milk.",
        image: "/macha+milk+tea.jpg",
        nutrition: [
          "Calories: 220",
          "Sugar: 25g",
          "Caffeine: 70mg",
          "Fat: 3g",
        ],
      },
      {
        name: "Thai Tea Boba",
        description: "A refreshing Thai tea bursting with flavors.",
        image: "/thai+.jpg",
        nutrition: [
          "Calories: 280",
          "Sugar: 45g",
          "Caffeine: 60mg",
          "Fat: 5g",
        ],
      },
      {
        name: "Brown Sugar Boba",
        description: "Caramelized brown sugar syrup with fresh milk and boba.",
        image: "/brown- sugar+milk+tea.jpg",
        nutrition: [
          "Calories: 350",
          "Sugar: 52g",
          "Caffeine: 30mg",
          "Fat: 8g",
        ],
      },
    ];
    setItems(drinks);
  }, []);

  return (
    <div className="page">
      <h1>Our Menu</h1>
      <p>Check out our delicious boba flavors!</p>
      <div className="menu-grid">
        {items.map((item) => (
          <div key={item.name} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <img
              src={item.image}
              alt={item.name}
              className="menu-img"
              onClick={() => setSelectedDrink(item)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>

      {selectedDrink && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedDrink.name}</h2>
            <ul>
              {selectedDrink.nutrition.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <button onClick={() => setSelectedDrink(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

// File: src/pages/Menu.tsx
import { useEffect, useState } from "react";
import "../styles.css";

type MenuItem = {
  name: string;
  description: string;
  image: string;
};

export default function Menu() {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response: MenuItem[] = [
        {
          name: "Classic Milk Tea",
          description:
            "A traditional blend of black tea, milk, and tapioca pearls.",
          image: "/classic_boba.jpg",
        },
        {
          name: "Taro Milk Tea",
          description: "A creamy, sweet, and nutty drink made from taro root.",
          image: "/taro+milk+tea.jpg",
        },
        {
          name: "Matcha Latte",
          description: "Fresh matcha with almond milk.",
          image: "/macha+milk+tea.jpg",
        },
        {
          name: "Thai Tea Boba",
          description: "A refreshing Thai tea bursting with flavors.",
          image: "/thai+.jpg",
        },
        {
          name: "Brown Sugar Boba",
          description:
            "Caramelized brown sugar syrup with fresh milk and boba.",
          image: "/brown- sugar+milk+tea.jpg",
        },
      ];
      setTimeout(() => setItems(response), 500);
    };

    fetchMenu();
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
            <img src={item.image} alt={item.name} className="menu-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

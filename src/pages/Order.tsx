import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveOrder, getLoggedInUser } from "../utils/auth";
import "../styles.css";

export default function Order() {
  const [drink, setDrink] = useState("Classic Milk Tea");
  const [sweetness, setSweetness] = useState("100% (Regular)");
  const [toppings, setToppings] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleCheckbox = (value: string) => {
    setToppings((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = getLoggedInUser();
    if (!user) {
      alert("Please login first to place an order!");
      navigate("/login");
      return;
    }

    const order = {
      email: user.email,
      drink,
      sweetness,
      toppings,
      notes,
      date: new Date().toISOString(),
    };

    saveOrder(order);
    setShowPopup(true);
  };

  return (
    <div className="page">
      <h1>Order Your Boba</h1>
      <form className="order-form" onSubmit={handleSubmit}>
        <label>Select Your Drink</label>
        <select value={drink} onChange={(e) => setDrink(e.target.value)}>
          <option>Classic Milk Tea</option>
          <option>Taro Milk Tea</option>
          <option>Matcha Latte</option>
          <option>Thai Tea Boba</option>
          <option>Brown Sugar Boba</option>
        </select>

        <label>Sweetness Level</label>
        <select
          value={sweetness}
          onChange={(e) => setSweetness(e.target.value)}
        >
          <option>100% (Regular)</option>
          <option>75%</option>
          <option>50%</option>
          <option>25%</option>
          <option>0% (No Sugar)</option>
        </select>

        <label>Toppings</label>
        <div className="checkbox-group">
          {["Boba Pearls", "Egg Pudding", "Grass Jelly"].map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={toppings.includes(option)}
                onChange={() => handleCheckbox(option)}
              />
              {option}
            </label>
          ))}
        </div>

        <label>Special Instructions</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Extra ice, no toppings, etc."
        />

        <button type="submit">Place Order</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Thanks for your order! 🧋</h2>
            <p>
              Estimated preparation time: <strong>10–15 minutes</strong>
            </p>
            <hr />
            <h4>Order Details:</h4>
            <p>
              <strong>Drink:</strong> {drink}
            </p>
            <p>
              <strong>Sweetness:</strong> {sweetness}
            </p>
            <p>
              <strong>Toppings:</strong> {toppings.join(", ") || "None"}
            </p>
            <p>
              <strong>Notes:</strong> {notes || "N/A"}
            </p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

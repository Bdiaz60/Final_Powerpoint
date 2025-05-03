import { getLoggedInUser, logoutUser, getUserOrders } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const user = getLoggedInUser();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const orders = getUserOrders(user.email);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="page">
      <h1>Welcome, {user.email}!</h1>

      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Password:</strong> {user.password}
      </p>

      <h2>Your Past Orders</h2>
      {orders.length === 0 ? (
        <p>No past orders yet.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <strong>Drink:</strong> {order.drink} |{" "}
              <strong>Sweetness:</strong> {order.sweetness} |{" "}
              <strong>Toppings:</strong> {order.toppings.join(", ") || "None"} |{" "}
              <strong>Notes:</strong> {order.notes || "None"}
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

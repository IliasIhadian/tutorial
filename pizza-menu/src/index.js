import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const pizzalen = pizzaData.length;

  return (
    <>
      <Header />
      {pizzalen > 0 ? (
        <>
          <Menu />
          <Footer />
        </>
      ) : (
        <p>wir bieten momentan noch keine Pizzen an :(</p>
      )}
    </>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Ilias Pizzeria</h1>
    </header>
  );
};

const Menu = () => {
  /* const pizzalen = pizzaData.length; */

  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>

        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </main>
    </>
  );
};

const Pizza = ({ pizzaObj }) => {
  return (
    <>
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          {pizzaObj.soldOut ? (
            <span>SOLD OUT!</span>
          ) : (
            <span>{pizzaObj.price}</span>
          )}
        </div>
      </li>
    </>
  );
};

const Footer = () => {
  const openHour = 12;
  const closeingHour = 24;
  const nowHour = new Date().getHours();
  const isOpen = nowHour >= openHour && nowHour <= closeingHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <Order closeingHour={closeingHour} />
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeingHour}
          :00!
        </p>
      )}
    </footer>
  );
};

const Order = (props) => {
  return (
    <div className="order">
      <p>
        We're currently open until {props.closeingHour}:00! You can also order!!
      </p>
      <btn className="btn">Order</btn>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

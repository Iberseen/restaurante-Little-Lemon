import "../componentes/Cards.css";
import greekSalad from "../images/greek-salad.jpg";
import bruschetta from "../images/bruschetta.jpg";
import lemonDessert from "../images/lemon-dessert.jpg";

function Cards() {
  const reviews = [
    {
      title: "Greek salad",
      price: "$12.99",
      img: greekSalad,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and feta cheese."
    },
    {
      title: "Bruschetta",
      price: "$5.99",
      img: bruschetta,
      description:
        "Grilled bread with garlic, olive oil and fresh toppings."
    },
    {
      title: "Lemon Dessert",
      price: "$4.99",
      img: lemonDessert,
      description:
        "A traditional homemade lemon dessert from grandma's recipe."
    }
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Weeks Specials!</h2>
        <button>Online Menu</button>
      </div>

      <div className="cards">
        {reviews.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.title} />

            <div className="card-body">
              <div className="card-top">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
              </div>

              <p>{item.description}</p>

              <div className="order">
                Order a delivery 🛵
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
import "../componentes/Chicago.css";
import restaurante from "../images/restaurante.png";
import chefs from "../images/chef.jpg";

function Chicago() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>

        <p>
          Little Lemon Chicago is a family owned Mediterranean restaurant located 
          in the heart of the city. The restaurant is run by brothers Mario and 
          Adrian, who have always had a passion for cooking and serving delicious 
          food. Growing up in a Mediterranean household, the brothers were exposed 
          to traditional recipes from an early age, and they decided to bring those 
          recipes to the masses with a modern twist.
        </p>

        <p>
          At Little Lemon, you can expect to find a menu full of classic dishes 
          with a creative twist that makes them stand out from the rest. Whether 
          you're looking for a quick lunch or a leisurely dinner, Little Lemon 
          Chicago is the perfect place to indulge in a delicious meal in a cozy 
          and welcoming atmosphere.
        </p>
      </div>

      <div className="about-images">
        <img 
          src={restaurante} 
          alt="restaurant" 
          className="img-back"
        />
        <img 
          src={chefs} 
          alt="chefs" 
          className="img-front"
        />
      </div>
    </section>
  );
}

export default Chicago;
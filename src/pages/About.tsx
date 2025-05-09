export default function About() {
  return (
    <div className="page about-page">
      <h1 className="section-title">About Holly's Boba St.</h1>

      <p className="intro">
        Founded in 2020 in the heart of Los Angeles, Holly’s Boba St. began as a
        small family dream to bring authentic, handcrafted boba drinks to our
        local community. Our mission has always been to deliver warmth,
        creativity, and refreshment in every cup we serve.
      </p>

      <div className="about-section">
        <h2>Our Journey</h2>
        <p>
          Holly, a long-time tea enthusiast, started experimenting with homemade
          boba in her kitchen with just a handful of ingredients and a lot of
          heart. Word of mouth quickly spread, and soon her passion turned into
          a pop-up stand that captured the neighborhood’s love. In just a few
          years, Holly’s Boba St. has become a beloved staple known for its
          delicious drinks, friendly atmosphere, and dedication to quality.
        </p>
      </div>

      <div className="about-section">
        <h2>How We Make Our Boba</h2>
        <p>
          We prepare our tapioca pearls fresh every morning using traditional
          Taiwanese techniques. Our teas are slow-brewed, and we carefully
          select all ingredients—from organic milk to real fruit—to ensure a
          premium taste. Every drink is customizable to match your preferences
          for sweetness, toppings, and flavor.
        </p>
      </div>

      <div className="about-section">
        <h2>Fun Facts About Us</h2>
        <ul className="fact-list">
          <li>We roll over 10,000 handmade boba pearls daily.</li>
          <li>Every flavor is tested by our in-house Boba Baristas™.</li>
          <li>
            Our seasonal drinks rotate every 3 months with community input.
          </li>
          <li>The Matcha Latte is our #1 bestseller three years in a row.</li>
          <li>We use 100% compostable cups and eco-friendly straws.</li>
        </ul>
      </div>

      <div className="about-section testimonials">
        <h2>Customer Love</h2>
        <blockquote>
          “Every time I visit, I’m greeted with a smile and the best brown sugar
          boba I’ve ever had.”
          <span className="customer">– Andres B.</span>
        </blockquote>
        <blockquote>
          “The matcha latte here is amazing. It’s my weekly treat!”
          <span className="customer">– Liam D.</span>
        </blockquote>
        <blockquote>
          “You can taste the difference. It’s not just tea—it’s happiness in a
          cup.”
          <span className="customer">– Aisha T.</span>
        </blockquote>
      </div>
    </div>
  );
}

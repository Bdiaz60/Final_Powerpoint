export default function Home() {
  return (
    <>
      <div className="jumbotron">
        <img
          src="/bobaone.jpg"
          alt="Featured Boba"
          className="jumbotron-image"
        />
        <div className="jumbotron-content">
          <h1>Holly's Boba St.</h1>
        </div>
      </div>

      <div className="page">
        <section className="promotions">
          <h2>🎉 This Week's Deals</h2>
          <div className="promo-grid">
            <div className="promo-card">
              <h3>Buy 1 Get 1 Free</h3>
              <p>Every Tuesday – on Classic Milk Tea!</p>
              <span className="promo-valid">Valid: April 23 – May 30</span>
            </div>
            <div className="promo-card">
              <h3>Student Discount</h3>
              <p>10% off with student ID every day!</p>
              <span className="promo-valid">Ongoing</span>
            </div>
            <div className="promo-card">
              <h3>Free Topping Friday</h3>
              <p>One free topping with any drink!</p>
              <span className="promo-valid">Fridays only</span>
            </div>
            <div className="promo-card">
              <h3>Rewards Program</h3>
              <p>Earn points with every purchase.</p>
              <span className="promo-valid">Join at checkout</span>
            </div>
            <div className="promo-card">
              <h3>New Flavor Drop</h3>
              <p>Try our new Matcha Latte!</p>
              <span className="promo-valid">Limited Time</span>
            </div>
            <div className="promo-card">
              <h3>Bring a Friend</h3>
              <p>Get 15% off both drinks!</p>
              <span className="promo-valid">Every Saturday</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

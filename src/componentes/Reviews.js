function Reviews() {
  const reviews = [
    {
      name: "Sara Lopez",
      username: "Sara72",
      text: "Seriously cannot stop thinking about the Turkish Mac n' Cheese!!"
    },
    {
      name: "John Doucette",
      username: "Johnny_Utah",
      text: "We had such a great time celebrating my grandmothers birthday!"
    },
    {
      name: "Jimmy Crickets",
      username: "crick_it",
      text: "Such a chilled out atmosphere, love it!"
    },
    {
      name: "Mia Maria",
      username: "flowerTime",
      text: "Best Feta Salad in town. Flawless every time!"
    }
  ];

  return (
    <section style={{ textAlign: "center", padding: "2rem", fontFamily: "Georgia, serif"}}>
      <h2>What do our customers think?</h2>

      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "20px", 
        flexWrap: "wrap",
        marginTop: "2rem"
      }}>
        {reviews.map((review, index) => (
          <div 
            key={index} 
            style={{
              width: "250px",
              padding: "1rem",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              backgroundColor: "#f8f8f8"
            }}
          >
            <h4>{review.name}</h4>
            <p style={{ fontSize: "0.9rem", color: "gray" }}>
              @{review.username}
            </p>

            <div style={{ color: "gold", margin: "0.5rem 0" }}>
              ★★★★★
            </div>

            <p>"{review.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
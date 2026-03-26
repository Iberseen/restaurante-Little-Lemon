function Specials() {
  const specials = ["item1","item2","item3"];
  
  return (
    <section>
      <h2>Especiales</h2>
      {specials.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </section>
  );
}

export default Specials;
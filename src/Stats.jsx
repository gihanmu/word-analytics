function Stats({
  noOfWords,
  noOfCharacters,
  noOfInstagramCharactersLeft,
  noOfFacebookCharactersLeft,
}) {
  return (
    <section className="stats">
      <Stat label="Words" number={noOfWords} />
      <Stat label="Characters" number={noOfCharacters} />
      <Stat label="Instagram" number={noOfInstagramCharactersLeft} />
      <Stat label="Facebook" number={noOfFacebookCharactersLeft} />
    </section>
  );
}

export default Stats;

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 ? 'stat__number--limit' : ''}`}>{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}

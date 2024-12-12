import "./quote.css";

export function Quote({ children }) {
  return (
    <div className="quote-main-container">
      <h1>{children}</h1>
    </div>
  );
}

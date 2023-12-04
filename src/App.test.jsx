import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the text 'Welcome Home Folks'", () => {
  render(<App />);
  const textDisplay = document.getElementById("welcome").innerHTML;
  expect(textDisplay).toMatch(/Welcome Home Folks/i);
  expect(textDisplay.length).toBeGreaterThanOrEqual(10);
});

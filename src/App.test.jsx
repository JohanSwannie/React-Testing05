import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the text 'Welcome Home Folks'", () => {
  render(<App />);
  const textDisplay1 = document.getElementById("welcome").innerHTML;
  const textDisplay2 = document.getElementById("mode").innerHTML;
  const textDisplay3 = document.getElementById("safety").innerHTML;
  expect(textDisplay1).toMatch(/Welcome Home Folks/i);
  expect(textDisplay2).toMatch(/We are in Testing Mode/i);
  expect(textDisplay3).toMatch(/Fasten you Seatbelts!!!/i);
  expect(textDisplay1.length).toBeGreaterThanOrEqual(10);
});

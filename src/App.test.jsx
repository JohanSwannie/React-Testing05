import { render, screen } from "@testing-library/react";
import App from "./App";

describe("All tests in one Baby Bear", () => {
  test("renders the text 'Welcome Home Folks'", () => {
    render(<App />);
    const textDisplay1 = document.getElementById("welcome").innerHTML;
    expect(textDisplay1).toMatch(/Welcome Home Folks/i);
    expect(textDisplay1.length).toBeGreaterThanOrEqual(10);
  });

  test("renders the text 'We are in Testing Mode'", () => {
    render(<App />);
    const textDisplay2 = document.getElementById("mode").innerHTML;
    expect(textDisplay2).toMatch(/We are in Testing Mode/i);
    expect(textDisplay2.length).toBeGreaterThanOrEqual(15);
  });

  test("renders the text 'Fasten you Seatbelts!!!'", () => {
    render(<App />);
    const textDisplay3 = document.getElementById("safety").innerHTML;
    expect(textDisplay3).toMatch(/Fasten you Seatbelts!!!/i);
    expect(textDisplay3.length).toBeGreaterThanOrEqual(20);
  });
});

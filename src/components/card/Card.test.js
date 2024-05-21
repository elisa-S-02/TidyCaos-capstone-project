import React from "react";
import TestRenderer from "react-test-renderer";
import SingleCard from "./Card";

test("renders the correct text", () => {
  const testText = "Hello, World!";

  // Render del componente usando React Test Renderer
  const testRenderer = TestRenderer.create(<SingleCard text={testText} />);
  const testInstance = testRenderer.root;

  // Verifica che l'elemento con il testo specificato sia nel componente reso
  expect(testInstance.findByType("Card").children).toContain(testText);
});

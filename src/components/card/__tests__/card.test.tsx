// @packages
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// @own
import { Card } from "../card";

describe("Card", () => {
  const CARD_PROPS = {
    image: "",
    title: "Card title",
    description: "Card description"
  };

  it("should be render correctly", () => {
    const { getByRole } = render(<Card {...CARD_PROPS} />);
    const card = getByRole("article");

    expect(card).toBeInTheDocument();
  });

  it("should render the title, image and description passed via props", () => {
    const { getByRole, getByText } = render(<Card {...CARD_PROPS} />);
    const title = getByRole("heading", { name: CARD_PROPS.title });
    const description = getByText(CARD_PROPS.description);
    const image = getByRole("img", { name: CARD_PROPS.title });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", CARD_PROPS.image);
    expect(image).toHaveAttribute("alt", CARD_PROPS.title);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(CARD_PROPS.title);

    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(CARD_PROPS.description);
  });
});

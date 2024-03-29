/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Testing for <GifItem />", () => {
  const title = "A title";
  const url = "https://localhost/image.jpg";

  test("should be matched with the snapshot", () => {
    const {container} = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should display the image with the URL and ALT indicate", () => {
    render(<GifItem title={title} url={url} />);

    const{src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should display the title in the component", () => {
    render(<GifItem title={title} url={url} />);
    const h3 = screen.getByText(title);
    expect(h3).toBeTruthy();
  });
});

/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Testing for <GifGrid />", () => {
  const category = "One Punch";

  test("should show Loading initially", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByText("Loading..."));
    expect(screen.getAllByText(category));
  });

  test("should display items when images are loaded with useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Title",
        url: "https://localhost/image.jpg",
      },
      {
        id: "123",
        title: "Superman",
        url: "https://localhost/image123.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(gifs.length);
    expect(screen.getAllByText(category));
  });
});

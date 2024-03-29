/* eslint-disable no-undef */
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Testing for useFetchGifs", () => {
  const category = "One Punch";

  test("should show Loading initially", () => {
    const { result } = renderHook(() => useFetchGifs(category));
    const { images, isLoading } = result.current;

    expect(images).toEqual([]);
    expect(isLoading).toBe(true);
  });

  test("should display items when images are loaded with useFetchGifs", async () => {
    const { result } = renderHook(() => useFetchGifs(category));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});

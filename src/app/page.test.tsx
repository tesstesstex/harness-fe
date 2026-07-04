import { render, screen } from "@testing-library/react";
import type { ImgHTMLAttributes } from "react";
import { describe, expect, it, vi } from "vitest";
import Home from "./page";

vi.mock("next/image", () => ({
  default: ({
    priority: _priority,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => (
    <img {...props} />
  ),
}));

describe("Home", () => {
  it("renders the starter content", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /to get started, edit the page\.tsx file\./i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Next.js logo")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /documentation/i }),
    ).toHaveAttribute("href", expect.stringContaining("nextjs.org/docs"));
  });
});

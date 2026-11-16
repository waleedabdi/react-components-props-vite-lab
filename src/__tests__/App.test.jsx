import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();
});

test("renders and updates content from blog props", () => {
  const firstBlog = {
    name: "First Blog",
    image: "first-logo.png",
    about: "First description",
    posts: [
      {
        id: 1,
        title: "First article",
        date: "January 1, 2025",
        preview: "First preview",
      },
    ],
  };
  const { rerender } = render(<App blog={firstBlog} />);

  expect(screen.getByRole("heading", { name: "First Blog" })).toBeInTheDocument();
  expect(screen.getByText("First description")).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "blog logo" })).toHaveAttribute(
    "src",
    "first-logo.png"
  );
  expect(screen.getByRole("heading", { name: "First article" })).toBeInTheDocument();

  const updatedBlog = {
    ...firstBlog,
    name: "Updated Blog",
    image: "updated-logo.png",
    about: "Updated description",
    posts: [
      {
        id: 2,
        title: "Updated article",
        date: "January 2, 2025",
        preview: "Updated preview",
      },
    ],
  };

  rerender(<App blog={updatedBlog} />);

  expect(screen.getByRole("heading", { name: "Updated Blog" })).toBeInTheDocument();
  expect(screen.getByText("Updated description")).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "blog logo" })).toHaveAttribute(
    "src",
    "updated-logo.png"
  );
  expect(screen.getByRole("heading", { name: "Updated article" })).toBeInTheDocument();
});

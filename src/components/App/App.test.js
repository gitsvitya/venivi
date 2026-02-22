import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal");
  document.body.appendChild(modalRoot);
});

afterEach(() => {
  const modalRoot = document.getElementById("modal");
  if (modalRoot) {
    modalRoot.remove();
  }
});

test("renders default russian content", () => {
  render(<App />);

  expect(screen.getByText(/Что это был за проект\?/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "En" })).toBeInTheDocument();
});

test("switches language", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "En" }));

  expect(screen.getByText(/What it was all about\?/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Ru" })).toBeInTheDocument();
});

test("opens and closes screenshots modal", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: /Главная страница/i }));
  expect(screen.getByRole("dialog")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /Закрыть модальное окно/i }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

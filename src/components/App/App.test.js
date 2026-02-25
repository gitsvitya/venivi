import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import App from "./App";
import { LANGUAGE_SWITCH_FADE_MS, MODAL_TRANSITION_MS } from "../../constants/ui";

beforeEach(() => {
  const modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal");
  document.body.appendChild(modalRoot);
});

afterEach(() => {
  jest.useRealTimers();
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
  jest.useFakeTimers();
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "En" }));

  act(() => {
    jest.advanceTimersByTime(LANGUAGE_SWITCH_FADE_MS + 50);
  });

  expect(screen.getByText(/What was this project\?/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Ru" })).toBeInTheDocument();
});

test("opens and closes screenshots modal", () => {
  jest.useFakeTimers();
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: /Главная страница/i }));
  expect(screen.getByRole("dialog")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /Закрыть модальное окно/i }));
  expect(screen.getByRole("dialog")).toBeInTheDocument();

  act(() => {
    jest.advanceTimersByTime(MODAL_TRANSITION_MS + 50);
  });

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

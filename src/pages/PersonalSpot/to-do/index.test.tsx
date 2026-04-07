// src/pages/PersonalSpot/to-do/index.test.tsx
import React, { useEffect } from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TODO from "./index";

// Mock external components
jest.mock("@/components/common/atom/button-primary", () => ({
  __esModule: true,
  default: ({ label, onClick, style }: any) => (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  ),
}));

jest.mock("@/components/common/elements/pop-over", () => ({
  __esModule: true,
  default: ({ isOpen, children }: any) =>
    isOpen ? <div data-testid="popover">{children}</div> : null,
}));

describe("TODO Component", () => {
  test("renders To Do Manager title", () => {
    render(<TODO />);
    expect(screen.getByText("To Do Manager")).toBeInTheDocument();
  });

  test("renders 12 todo items", () => {
    render(<TODO />);
    const todoItems = screen.getAllByRole("checkbox");
    expect(todoItems).toHaveLength(12);
  });

  test("renders correct labels for days", () => {
    render(<TODO />);
    for (let i = 1; i <= 12; i++) {
      expect(screen.getByLabelText(`Day ${i}`)).toBeInTheDocument();
    }
  });

  // test("renders entries for each day", () => {
  //   render(<TODO />);
  //   const entries = {
  //     1: ["A", "B", "C"],
  //     2: ["B", "C", "D"],
  //     3: ["C", "D", "E"],
  //     4: ["D", "E", "F"],
  //     5: ["E", "F", "G"],
  //     6: ["F", "G", "H"],
  //     7: ["G", "H", "I"],
  //     8: ["H", "I", "J"],
  //     9: ["I", "J", "K"],
  //     10: ["J", "K", "L"],
  //     11: ["K", "L", "M"],
  //     12: ["L", "M", "N"],
  //   };
  //   Object.entries(entries).forEach(([day, dayEntries]) => {
  //     dayEntries.forEach((entry) => {
  //       expect(screen.getByText(entry)).toBeInTheDocument();
  //     });
  //   });
  // });

  // test("entries are draggable", () => {
  //   render(<TODO />);
  //   const draggableElements = screen.getAllByText(/^[A-N]$/); // Match single letters
  //   draggableElements.forEach((element) => {
  //     expect(element).toHaveAttribute("draggable", "true");
  //   });
  // });

  test("opens popover on Add Entry button click", () => {
    render(<TODO />);
    const addButton = screen.getByRole("button", { name: /add entry/i });
    fireEvent.click(addButton);
    expect(screen.getByTestId("popover")).toBeInTheDocument();
  });

  test("closes popover on close button click", () => {
    render(<TODO />);
    const addButton = screen.getByRole("button", { name: /add entry/i });
    fireEvent.click(addButton);
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(screen.queryByTestId("popover")).not.toBeInTheDocument();
  });
});

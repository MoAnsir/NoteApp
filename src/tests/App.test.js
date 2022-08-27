import { render, screen, cleanup } from "@testing-library/react";

import App from "../App";

let testNotes = [
    {
        id: 1,
        desc: "test1 ",
        content: "text content 1",
        tags: "work, p1",
    },
    {
        id: 2,
        desc: "test 2",
        content: "text content 2",
        tags: "work, p1",
    },
];

afterEach(cleanup);

describe("rendering of initial setup", () => {
    it("should render the header", () => {
        render(<App />);
        const linkElement = screen.getByText(/note app/i);
        expect(linkElement).toBeInTheDocument();
    });
    it("should show a message if there is no note data", () => {
        render(<App />);
        const linkElement = screen.getByText(/no notes/i);
        expect(linkElement).toBeInTheDocument();
    });
    it("should show test data", () => {
        render(<App testdata={testNotes} />);
        expect(screen.queryByText(/no notes/i)).not.toBeInTheDocument();
        expect(screen.getByText(/text content 1/i)).toBeInTheDocument();
        expect(screen.getByText(/text content 2/i)).toBeInTheDocument();
    });
});

describe("add a note", () => {
    it("should render the add note component", () => {
        render(<App testdata={testNotes} />);
        expect(screen.getAllByRole("button", { name: /Delete/i })).toBeTruthy();
        expect(screen.getAllByRole("button", { name: /Edit/i })).toBeTruthy();
        expect(screen.getByLabelText("Description")).toBeTruthy();
        expect(screen.getByLabelText("Note")).toBeTruthy();
        expect(screen.getByLabelText("Tags")).toBeTruthy();
        expect(
            screen.getByPlaceholderText("Description of the note")
        ).toBeTruthy();
        expect(screen.getByPlaceholderText("Note content")).toBeTruthy();
        expect(screen.getByPlaceholderText("work, important, p1")).toBeTruthy();
    });
});

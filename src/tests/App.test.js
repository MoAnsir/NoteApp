import {
    render,
    screen,
    cleanup,
    fireEvent,
    shallow,
} from "@testing-library/react";

import App from "../App";

let testNotes = [
    {
        id: 1,
        desc: "test 1 ",
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
        expect(screen.getAllByRole("button", { name: /Delete/i })).toBeTruthy();
        expect(screen.getAllByRole("button", { name: /Edit/i })).toBeTruthy();
    });
});

describe("add a note", () => {
    it("should render the add note component", () => {
        render(<App />);
        expect(screen.getByLabelText("Description")).toBeTruthy();
        expect(screen.getByLabelText("Note")).toBeTruthy();
        expect(screen.getByLabelText("Tags")).toBeTruthy();
        expect(
            screen.getByPlaceholderText("Description of the note")
        ).toBeTruthy();
        expect(screen.getByPlaceholderText("Note content")).toBeTruthy();
        expect(screen.getByPlaceholderText("work, important, p1")).toBeTruthy();
        expect(screen.getAllByRole("button", { name: /Submit/i })).toBeTruthy();
    });

    it("should add a note", () => {
        render(<App testdata={testNotes} />);

        const desc = screen.getByPlaceholderText("Description of the note");
        const note = screen.getByPlaceholderText("Note content");
        const tag = screen.getByPlaceholderText("work, important, p1");
        const but = screen.getByRole("button", { name: /Submit/i });

        fireEvent.change(desc, { target: { value: "test desc 1" } });
        fireEvent.change(note, { target: { value: "test note 1" } });
        fireEvent.change(tag, { target: { value: "test, tag1" } });

        expect(desc.value).toBe("test desc 1");
        expect(note.value).toBe("test note 1");
        expect(tag.value).toBe("test, tag1");

        fireEvent.click(but);

        expect(screen.getByText(/test desc 1/i)).toBeInTheDocument();
        expect(screen.getByText(/test note 1/i)).toBeInTheDocument();
        //expect(screen.getByText(/test desc 1/i)).toBeInTheDocument();
    });
});

describe("delete note", () => {
    it("should render the delete buttons", () => {
        render(<App testdata={testNotes} />);
        expect(screen.getAllByRole("button", { name: /Delete/i })).toHaveLength(
            2
        );
    });
});

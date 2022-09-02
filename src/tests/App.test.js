import { render, screen, cleanup, fireEvent } from "@testing-library/react";

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

describe("Show a note", () => {
  it("should render a note", () => {
    render(<App testdata={testNotes} />);
    expect(screen.queryByText(/no notes/i)).not.toBeInTheDocument();
    expect(screen.getByText(/text content 1/i)).toBeInTheDocument();
    expect(screen.getByText(/text content 2/i)).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /Delete/i })).toBeTruthy();
    expect(screen.getAllByRole("button", { name: /Edit/i })).toBeTruthy();
  });

  it("It should show the note in a modal when clicked", () => {
    render(<App testdata={testNotes} />);
    const noteToShow = screen.getByText(/text content 1/i);
    fireEvent.click(noteToShow);
    expect(screen.getAllByRole("dialog")).toBeTruthy();
  });
});

describe("Add a note", () => {
  it("should render the add note component", () => {
    render(<App />);
    expect(screen.getByLabelText("Description")).toBeTruthy();
    expect(screen.getByLabelText("Note")).toBeTruthy();
    expect(screen.getByLabelText("Tags")).toBeTruthy();
    expect(screen.getByPlaceholderText("Description of the note")).toBeTruthy();
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
    //expect(screen.getByText(/test tag 1/i)).toBeInTheDocument();
  });
});

describe("Delete note", () => {
  it("should render the delete buttons", () => {
    render(<App testdata={testNotes} />);
    expect(screen.getAllByRole("button", { name: /Delete/i })).toHaveLength(2);
  });
  it("should delete a note", () => {
    render(<App testdata={testNotes} />);
    expect(screen.getByText(/text content 1/i)).toBeInTheDocument();
    const but = screen.getAllByRole("button", { name: /Delete/i });

    fireEvent.click(but[0]);

    expect(screen.queryByText(/text content 1/i)).not.toBeInTheDocument();
  });
});

describe("Edit note", () => {
  it("should render the edit buttons", () => {
    render(<App testdata={testNotes} />);
    expect(screen.getAllByRole("button", { name: /Edit/i })).toHaveLength(2);
  });
  it("should edit a note", () => {
    render(<App testdata={testNotes} />);
    expect(screen.getByText(/text content 1/i)).toBeInTheDocument();
    const editBut = screen.getAllByRole("button", { name: /Edit/i });

    fireEvent.click(editBut[0]);

    const desc = screen.getAllByPlaceholderText("Edit note description");
    const note = screen.getAllByPlaceholderText("Edit note content");
    const tag = screen.getAllByPlaceholderText("Edit note tags");
    const saveBut = screen.getAllByRole("button", {
      name: /Save Changes/i,
    });

    fireEvent.change(desc[0], { target: { value: "edit desc 1" } });
    fireEvent.change(note[0], { target: { value: "edit note 1" } });
    fireEvent.change(tag[0], { target: { value: "edit, Etag1" } });

    fireEvent.click(saveBut[0]);

    expect(screen.queryByText(/text content 1/i)).not.toBeInTheDocument();
    expect(screen.getAllByText(/edit desc 1/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/edit note 1/i)[0]).toBeInTheDocument();
  });
});

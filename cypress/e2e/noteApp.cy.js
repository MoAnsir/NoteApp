/// <reference types="cypress" />
import { clear } from "idb-keyval";

beforeEach(() => {
  clear();
  cy.visit("http://localhost:3000/");
});
// Need to clear the indexDB of any previous data.
// need to do clean up after each test. remove all notes
// in the edit window there are 2 modals, need to pick the correct one.

describe("Note App rendering ", () => {
  it("should display all the child components and no data", () => {
    cy.contains("Note App");
    cy.get('[data-testid="AddNote"]').should("exist");
    cy.get('[data-testid="AddNote"]').should("exist");
    cy.contains("No Notes");
  });
});

describe("Note App functionality ", () => {
  beforeEach(() => {
    cy.get("#noteDesc").type("cypress test desc 1");
    cy.get("#noteContent").type("cypress test content 1");
    cy.get("#noteTags").type("tag, 1");
    cy.get("input").contains("Submit").click();
  });

  it("should add a note", () => {
    cy.get('[data-testid="EditNote"]')
      .contains("cypress test desc 1")
      .should("exist");
    cy.get('[data-testid="EditNote"]')
      .contains("cypress test content 1")
      .should("exist");
  });

  it("should show a note", () => {
    cy.get(".postit").click();
    cy.get(".modal-dialog").should("exist");
    cy.get(".modal-dialog .note-content")
      .contains("cypress test content 1")
      .should("exist");
  });

  it("should edit a note", () => {
    cy.get("button").contains("Edit").click();
    cy.get(".modal-dialog").should("exist");
    cy.get("#editNoteDesc").type("EDIT cypress desc 1");
    cy.get("#editNoteContent").type("EDIT cypress content 1");
    cy.get("#editNoteTags").type("EDIT cypress tags 1");
    cy.get("button").contains("Save Changes").click();
    cy.get('[data-testid="EditNote"]')
      .contains("EDIT cypress desc 1")
      .should("exist");
    cy.get('[data-testid="EditNote"]')
      .contains("EDIT cypress content 1")
      .should("exist");
  });

  it("should delete a note", () => {
    cy.get('[data-testid="EditNote"]')
      .contains("cypress test desc 1")
      .should("exist");
    cy.get('[data-testid="EditNote"]')
      .contains("cypress test content 1")
      .should("exist");
    cy.get("button").contains("Delete").click();
    cy.get('[data-testid="EditNote"]')
      .contains("cypress test desc 1")
      .should("not.exist");
    cy.get('[data-testid="EditNote"]')
      .contains("cypress test content 1")
      .should("not.exist");
  });
});

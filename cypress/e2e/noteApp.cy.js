/// <reference types="cypress" />

describe("Note App ", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("should display all the child components and no data", () => {
        cy.contains("Note App");
        cy.get('[data-testid="AddNote"]').should("exist");
        cy.get('[data-testid="AddNote"]').should("exist");
        cy.contains("No Notes");
    });

    it("should add a note", () => {
        cy.get("#noteDesc").type("cypress test desc 1");
        cy.get("#noteContent").type("cypress test content 1");
        cy.get("#noteTags").type("tag, 1");
        cy.get("input").contains("Submit").click();
        cy.get(".task__list").contains("fake@email.com").should("exist");
        cy.get(".task__list li p").last().should("have.text", "fake@email.com");
    });

    it("should edit a note", () => {});

    it("should delete a note", () => {});
});

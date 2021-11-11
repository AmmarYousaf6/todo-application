/** @format */

import React from "react";
import ReactDom from "react-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Todo from "../todo";
import Todos from "../Todos";
import TodoItem from "../TodoItem";
import { isTSAnyKeyword } from "@babel/types";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import TodoInput from "../TodoInput";
const server = setupServer(
  rest.get("/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

//check if the component renders correctly
it("it should render Todo without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Todo></Todo>, div);
});

//check if the button display the correct content
it("it should render button correctly", () => {
  const { getByTestId } = render(<Todo label="click me please"></Todo>);
  expect(getByTestId("button")).toHaveTextContent("click me please");
});

//check if the TodoItem component renders correctly
it("it should render TodoItem without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<TodoItem todo={[{ message: "ABC" }]}></TodoItem>, div);
});

it("it should check if buy some milk exists or not", () => {
  const { getByText } = render(<TodoItem todo={[{ message: "ABC" }]} />);
  expect(getByText("Buy some milk")).toBeInTheDocument();
});

//check if the TodoItem component renders correctly
it("it should render TodoInput without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<TodoInput></TodoInput>, div);
});

//check if the TodoItem component renders correctly
it("it should check if empty data is being posted", () => {
  const doc = render(<TodoInput />);
  const inputElement = doc.getByTestId("input");
  const createButtonElement = doc.getByTestId("createButton");

  fireEvent.change(inputElement, { target: { value: "" } });
  const doc2 = render(<TodoItem todo={[{ message: "ABC" }]} />);
  const todos = doc2.getAllByTestId("todo");
  expect(todos.length).toBe(1);
});

test("it should create a new todo item", () => {
  const doc = render(<TodoInput />);
  const doc2 = render(<TodoItem todo={[{ message: "ABC" }]} />);

  const inputElement = doc.getByTestId("input");
  const createButtonElement = doc.getByTestId("createButton");

  // Create the todo.
  fireEvent.change(inputElement, { target: { value: "Feed my dog." } });
  // fireEvent.click(createButtonElement);

  const todos = doc2.getAllByTestId("todo");
  const todo = doc2.getByTestId("todo");
  const todoNameElement = todo.firstChild;

  // The name should be in the document as "Feed my dog."
  // expect(todoNameElement.h4).toBe('Feed my dog.');

  // The input field should be blank.
  expect(inputElement.value).toBe("Feed my dog.");

  // The todo should be in the document.
  expect(todo).toBeInTheDocument();

  // There should be 1 todo in the document.
  expect(todos.length).toBe(1);
});

test("it should handle server error", async () => {
  server.use(
    rest.get("/greeting", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<TodoItem todo={[{ message: "ABC" }]} />);

  fireEvent.click(screen.getByText("Buys some milk"));
});
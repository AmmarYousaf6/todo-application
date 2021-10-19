import React from "react";
import ReactDom from "react-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { isTSAnyKeyword } from "@babel/types";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoInput from "../TodoInput";

//check if the component renders correctly
it("it should render Todo without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Todo></Todo>, div);
});

it("it should check if buy some milk exists or not", () => {
  const { getByText } = render(<TodoItem todo={[{ message: "ABC" }]} />);
  expect(getByText("Buys some milk")).toBeInTheDocument();
});

//check if the TodoItem component renders correctly
it("it should render TodoInput without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<TodoInput></TodoInput>, div);
});
  

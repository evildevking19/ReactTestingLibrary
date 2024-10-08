import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox")
  const button = screen.getByRole("button")

  // assertion - make sure the component is doing
  // what we expect it to do
  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

test("it calls onUserAdd when the form is submitted", () => {
  // NOTE THE BEST IMPLEMENTATION
  // Try to render my component
  render(<UserForm />)

  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox")

  // Simulate typing in a name
  

  // Simulate typing in an email

  // Find the button

  // Simulate clicking the button

  // Assertion to make sure 'onUserAdd' gets called with email/name
})
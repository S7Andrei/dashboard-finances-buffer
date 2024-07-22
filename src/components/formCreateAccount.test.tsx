import { render, screen } from "@testing-library/react";
import FormCreateAccount from "./FormCreateAccount";

describe("FormCreateAccount", () => {
  it("should render correctly", () => {
    render(<FormCreateAccount />);

    const lastNameLabel = screen.getByLabelText("Last Name");
    const lastNamePlaceholder = screen.getByPlaceholderText("Last name");

    const firstNameLabel = screen.getByLabelText("First Name");
    const firstNamePlaceholder = screen.getByPlaceholderText("First name");

    const emailLabel = screen.getByLabelText("E-mail");
    const emailPlaceholder: HTMLInputElement =
      screen.getByPlaceholderText("E-mail");

    const passwordLabel = screen.getByLabelText("Password");
    const passwordPlaceholder: HTMLInputElement =
      screen.getByPlaceholderText("Password");

    const confirmPasswordLabel = screen.getByLabelText("Confirm password");
    const confirmPasswordPlaceholder: HTMLInputElement =
      screen.getByPlaceholderText("Password");

    const button = screen.getByRole("button", { name: "Create account" });

    expect(lastNameLabel).toBeInTheDocument();
    expect(lastNamePlaceholder).toBeInTheDocument();

    expect(firstNameLabel).toBeInTheDocument();
    expect(firstNamePlaceholder).toBeInTheDocument();

    expect(emailLabel).toBeInTheDocument();
    expect(emailPlaceholder).toBeInTheDocument();
    expect(emailPlaceholder.type).toBe("e-mail");

    expect(passwordLabel).toBeInTheDocument();
    expect(passwordPlaceholder).toBeInTheDocument();
    expect(passwordPlaceholder.type).toBe("password");

    expect(confirmPasswordLabel).toBeInTheDocument();
    expect(confirmPasswordPlaceholder).toBeInTheDocument();
    expect(confirmPasswordPlaceholder.type).toBe("password");

    expect(button).toBeInTheDocument();
  });
});
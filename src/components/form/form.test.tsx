import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";

import Form from "./form";

describe("Formulario", () => {
  test("Campo de nombre", () => {
    render(<Form />);
    const nameField = screen.getByText(/Nombre:/i);
    expect(nameField).toBeDefined();
  });

  test("Campo de apellido", () => {
    render(<Form />);
    const surnameField = screen.getByText(/Apellido:/i);
    expect(surnameField).toBeDefined();
  });

  test("Campo de DNI", () => {
    render(<Form />);
    const dniField = screen.getByText(/DNI:/i);
    expect(dniField).toBeDefined();
  });

  test("Campo de dirección", () => {
    render(<Form />);
    const addressField = screen.getByText(/Dirección:/i);
    expect(addressField).toBeDefined();
  });

  test("Campo de teléfono", () => {
    render(<Form />);
    const phoneField = screen.getByText(/Teléfono:/i);
    expect(phoneField).toBeDefined();
  });

  test("Campo de e-mail", () => {
    render(<Form />);
    const emailField = screen.getByText(/e-mail:/i);
    expect(emailField).toBeDefined();
  });

  test("Campo de vehículo", () => {
    render(<Form />);
    const vehicleField = screen.getByText(/Vehículo:/i);
    expect(vehicleField).toBeDefined();
  });

  test("Campo de patente", () => {
    render(<Form />);
    const plateField = screen.getByText(/Patente:/i);
    expect(plateField).toBeDefined();
  });
});

import { describe, expect, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import Home from "@/app/(home)/page";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

describe("Home Page", () => {
  test("should render patient button", () => {
    render(<Home />);
    const btnPatientLogin = screen.getByText("Patient Login");
    expect(btnPatientLogin).toBeInTheDocument();
  });

  test("should render provider button", () => {
    render(<Home />);
    const btnProviderLogin = screen.getByText("Provider Login");
    expect(btnProviderLogin).toBeInTheDocument();
  });

  test("should route to patient login page when button is clicked", () => {
    mockRouter.push("/");
    render(<Home />, { wrapper: MemoryRouterProvider });
    const btnPatientLogin = screen.getByText("Patient Login");
    expect(btnPatientLogin).toBeInTheDocument();
    fireEvent.click(btnPatientLogin);
    expect(mockRouter.asPath).toEqual("/patient/login");
  });

  test("should route to provider login page when button is clicked", () => {
    mockRouter.push("/");
    render(<Home />, { wrapper: MemoryRouterProvider });
    const btnProviderLogin = screen.getByText("Provider Login");
    expect(btnProviderLogin).toBeInTheDocument();
    fireEvent.click(btnProviderLogin);
    expect(mockRouter.asPath).toEqual("/provider/login");
  });
});

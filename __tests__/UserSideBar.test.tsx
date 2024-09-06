import { describe, expect, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import UserSideBar from "@/components/users/UserSideBar";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"));
global.fetch = jest.fn(() => Promise.resolve(new Response()));
const userUuid: string = "0b17f336-d453-4b61-8224-742dde3b22cb";

describe("UserSideBar Component", () => {
  test("should render view appointment button", () => {
    render(<UserSideBar userUuid={userUuid} />);
    const btnViewApptBtn = screen.getByText("View Appointments");
    expect(btnViewApptBtn).toBeInTheDocument();
  });

  test("should render book appointment button", () => {
    render(<UserSideBar userUuid={userUuid} />);
    const btnBookApptBtn = screen.getByText("Book Appointment");
    expect(btnBookApptBtn).toBeInTheDocument();
  });

  test("should render logout button", () => {
    render(<UserSideBar userUuid={userUuid} />);
    const btnLogOutBtn = screen.getByText("Logout");
    expect(btnLogOutBtn).toBeInTheDocument();
  });

  test("should route to patient's appointment page when button is clicked", () => {
    mockRouter.push("/");
    render(<UserSideBar userUuid={userUuid} />, {
      wrapper: MemoryRouterProvider,
    });
    const btnViewApptBtn = screen.getByText("View Appointments");
    expect(btnViewApptBtn).toBeInTheDocument();
    fireEvent.click(btnViewApptBtn);
    expect(mockRouter.asPath).toEqual(`/patient/${userUuid}/appointments`);
  });

  test("should route to book appointment page when button is clicked", () => {
    mockRouter.push("/");
    render(<UserSideBar userUuid={userUuid} />, {
      wrapper: MemoryRouterProvider,
    });
    const btnBookApptBtn = screen.getByText("Book Appointment");
    expect(btnBookApptBtn).toBeInTheDocument();
    fireEvent.click(btnBookApptBtn);
    expect(mockRouter.asPath).toEqual(`/patient/${userUuid}/new-appointment`);
  });

  // test("should route to logout page when button is clicked", () => {
  //   mockRouter.push("/");
  //   jest.spyOn(document, "cookie", "set");
  //   render(<UserSideBar userUuid={userUuid} />, {
  //     wrapper: MemoryRouterProvider,
  //   });
  //   const btnLogoutBtn = screen.getByText("Logout");
  //   expect(btnLogoutBtn).toBeInTheDocument();
  //   fireEvent.click(btnLogoutBtn);
  //   expect(mockRouter.asPath).toEqual("/");
  // });
});

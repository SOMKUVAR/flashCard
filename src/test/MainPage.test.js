import { cleanup, render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import CreateFlashCard from "../FlashCard/createFlashCard/CreateFlashCard";
import MyFlashCard from "../FlashCard/myFlashCard/MyFlashCard";
import MainPage from "../mainPage/MainPage";

afterEach(cleanup);

const renderWithRouter = component => {
    const history = createMemoryHistory();
    return {
        ...render(<BrowserRouter history={history}>{component}</BrowserRouter>)
    }
};

it("should render the createFlashCard component", () => {
    const { container, getByTestId } = renderWithRouter(<MainPage />);
    const links = getByTestId('links');
    const link = getByTestId('createFlashCard-link');
    expect(links).toContainElement(link);
    expect(container.innerHTML).toMatch(render(<CreateFlashCard />).container.innerHTML);
});

it("should nevigate to myFlashCard component", () => {
    const { container, getByTestId } = renderWithRouter(<MainPage />);
    const link = getByTestId('myFlashCard-link');
    fireEvent.click(link);
    expect(container.innerHTML).toMatch(render(<MyFlashCard />).container.innerHTML);
})

it("should nevigate to createFlashCard component", () => {
    const { container, getByTestId } = renderWithRouter(<MainPage />);
    const link = getByTestId('createFlashCard-link');
    fireEvent.click(link);
    expect(container.innerHTML).toMatch(render(<CreateFlashCard />).container.innerHTML);
})
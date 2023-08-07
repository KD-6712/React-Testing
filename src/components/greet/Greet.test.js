import { render, screen  } from "@testing-library/react";
import Greet from "./Greet";
// Greet should render the text hello and if a name is passed into the component
// it should render hello followed by name.

describe('Greet', () => {
    test("Hello is rendered", () => {
        render(<Greet/>);
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    })
    
    describe('Nested', () => {
        test('renders wid name', () => {
            render(<Greet name="Kartik"/>);
            const textElement = screen.getByText("Hello Kartik");
            expect(textElement).toBeInTheDocument();
        })
    })
    
})

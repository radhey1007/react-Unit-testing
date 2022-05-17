import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe('Greetings Component', () => {
    test('renders Hello world as a text', () => {
        //1 Arrange
        render(<Greeting />);
        //2 Act
        // ..nothing
    
        //3 assert   
        const helloWorldElement = screen.getByText('Hello World', {exact:false});
        expect(helloWorldElement).toBeInTheDocument();
    });
    test('renders good to see you if the button was not cliked', ()=> {
        render(<Greeting />);
        const outputElement = screen.getByText('good to see you', {exact:false});
        expect(outputElement).toBeInTheDocument();
    });
    test('renders Changed you if the button was cliked', ()=> {
        //1 Arrange
        render(<Greeting />);

        //2 Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //3 assert   
        const outputElement = screen.getByText('Changed', {exact:false});
        expect(outputElement).toBeInTheDocument();
    });
})
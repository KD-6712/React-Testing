import { render, screen } from "@testing-library/react";
import { Skills } from "./skills"; 

describe('Skills', () => {
    const skills = ['HTML', 'CSS', 'JS'];

    test('renders correctly', () => {
        render(<Skills skills={skills}/>);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    })

    test('renders a list of items', () => {
        render(<Skills skills={skills} />);
        const listItemElement = screen.getAllByRole('listitem');
        // expect(listItemElement).toBeInTheDocument();
        expect(listItemElement).toHaveLength(3);
    })

    test('render Login button', () => {
        render(<Skills skills={skills}/>);
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        });
        expect(loginButton).toBeInTheDocument();
    })

    test('Start learning button is not render', () => {
        render(<Skills skills={skills}/>);
        const startLearningButton = screen.queryByRole('button', {
            name: 'Start learning'
        });
        expect(startLearningButton).not.toBeInTheDocument();
    })

    test('Start learning button is eventually displayed',async () => {
        render(<Skills skills={skills}/>);
       // screen.debug();
        const startLearningButton = await screen.findByRole('button', {
            name: 'Start learning'
        },
        {
            timeout: 2000
        }); 
       // screen.debug();
        expect(startLearningButton).toBeInTheDocument();
    })
})
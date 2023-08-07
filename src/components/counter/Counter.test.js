import { render, screen } from "@testing-library/react";
import { Counter} from "./Counter";
import user from '@testing-library/user-event'; 

describe('Counters', () => {
    test('Counter is rendered', ()=>{
        render(<Counter/>)
        const CounterButton = screen.getByRole('button', {
            name: 'Increment'
        });
        expect(CounterButton).toBeInTheDocument();
        const Count = screen.getByRole('heading');
        expect(Count).toBeInTheDocument();
    })

    test('Count is 0', () => {
        render(<Counter/>)
        const CountZero = screen.getByRole('heading');
        expect(CountZero).toHaveTextContent("0");
    })

    test('renders a count of 1 after clicking the button',async () => {
        user.setup;
        render(<Counter/>)
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        await user.click(incrementButton);
        const CountElement  =screen.getByRole('heading');
        expect(CountElement).toHaveTextContent("1");
        })
    
    test('renders a count of 2 after clicking the button twice', async () => {
        user.setup;
        render(<Counter/>);
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        await user.click(incrementButton);
        await user.click(incrementButton);
        const CountElement  =screen.getByRole('heading');
        expect(CountElement).toHaveTextContent("2");

    })

    test('renders a count of 10 after clicking the set button', async ()=> {
        user.setup;
        render(<Counter/>);
        const amountInput = screen.getByRole('spinbutton');
        await user.type(amountInput, '10');
        expect(amountInput).toHaveValue(10);
        const setButton = screen.getByRole('button', {
            name: 'Set'
        });
        await user.click(setButton);
        const CountElement = screen.getByRole('heading');
        expect(CountElement).toHaveTextContent('10');

    })

    test('elements are focused in the right order', async () => {
        user.setup
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        const setButton = screen.getByRole('button', { name: 'Set' })
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        await user.tab()
        expect(incrementButton).toHaveFocus()
        await user.tab()
        expect(amountInput).toHaveFocus()
        await user.tab()
        expect(setButton).toHaveFocus()
      })

}  
)
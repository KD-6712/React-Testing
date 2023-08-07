import {render, screen } from '../../text-utils/test-utils';
import { MuiMode } from './MuiMode';


describe("MUI-MODE", () => {
    test('Provider test', () => {
        render(<MuiMode />)
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent("dark mode");
    })
   
})
import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import SwitchTab from '../components/SwitchTab';
import { CustomerType } from '../interfaces/register';

describe('SwitchTab Tests', () => {

    test('should show the correct button style when sme button is clicked', () => {
        const Wrapper = () => {
            const [type, setType] = useState<CustomerType>("partner");
            const handleTypeChange = (val: CustomerType) => setType(val);
            return <SwitchTab active={type} setActive={handleTypeChange} />
        };

        render(<Wrapper />);
        const buttonElement = screen.getByRole('button', { name: /SMEs/i });
        fireEvent.click(buttonElement);
        expect(buttonElement).toHaveClass("text-blue-b1");
    });

    test('should show the correct button style when partner button is clicked', () => {
        const Wrapper = () => {
            const [type, setType] = useState<CustomerType>("sme");
            const handleTypeChange = (val: CustomerType) => setType(val);
            return <SwitchTab active={type} setActive={handleTypeChange} />
        };

        render(<Wrapper />);
        const buttonElement = screen.getByRole('button', { name: /Partner/i });
        fireEvent.click(buttonElement);
        expect(buttonElement).toHaveClass("text-blue-b1");
    });
})
import { render, screen } from '@testing-library/react';
import RegisterStepOne from '../components/RegisterStepOne';

describe('RegisterStepOne Tests', () => {

    test('should show the correct description text for step one', () => {
        render(<RegisterStepOne />);
        const textValue = screen.getByText("Let's get started by verifying your phone number.");
        expect(textValue).toBeInTheDocument();
    });
})
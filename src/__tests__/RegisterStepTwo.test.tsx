import { render, screen } from '@testing-library/react';
import RegisterStepTwo from '../components/RegisterStepTwo';

describe('RegisterStepTwo Tests', () => {

    test('should show the correct description text for step Two', () => {
        render(<RegisterStepTwo />);
        const textValue = screen.getByText("Finish off by adding more details to your account.");
        expect(textValue).toBeInTheDocument();
    });
})
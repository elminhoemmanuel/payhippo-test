import { render, screen, fireEvent } from '@testing-library/react';
import StepOneSme from '../components/StepOneSme';
import { RegisterContextProvider } from '../context/RegisterContext';

describe('StepOneSme Tests', () => {
    test('should show enable the continue button after the Send Otp button has been clicked', () => {
        render(<RegisterContextProvider><StepOneSme /></RegisterContextProvider>);
        const sendBtnElement = screen.getByRole('button', { name: /Send OTP/i });
        const continueBtnElement = screen.getByRole('button', { name: /Continue/i });
        fireEvent.click(sendBtnElement);
        expect(continueBtnElement).toHaveClass("bg-blue-b1");
    });

    test('should show the correct error message when phone number field has invalid value', () => {
        render(<RegisterContextProvider><StepOneSme /></RegisterContextProvider>);
        const sendBtnElement = screen.getByRole('button', { name: /Send OTP/i });
        const continueBtnElement = screen.getByRole('button', { name: /Continue/i });
        const errorElement = screen.getAllByTestId("error");
        const phoneInput = screen.getByPlaceholderText(/8134567890/i);

        fireEvent.change(phoneInput, { target: { value: '8123' } })
        fireEvent.click(sendBtnElement);
        fireEvent.click(continueBtnElement);
        expect(errorElement[0]).toHaveTextContent("Phone number is required and must be up to 10 digits");
    });

    test('should show the correct error message when otp field has invalid value', () => {
        render(<RegisterContextProvider><StepOneSme /></RegisterContextProvider>);
        const sendBtnElement = screen.getByRole('button', { name: /Send OTP/i });
        const continueBtnElement = screen.getByRole('button', { name: /Continue/i });
        const errorElement = screen.getAllByTestId("error");
        const otpInput = screen.getByPlaceholderText(/OTP Code/i);

        fireEvent.change(otpInput, { target: { value: '123' } })
        fireEvent.click(sendBtnElement);
        fireEvent.click(continueBtnElement);
        expect(errorElement[1]).toHaveTextContent("OTP is required and must be up to 6 digits");
    });

})
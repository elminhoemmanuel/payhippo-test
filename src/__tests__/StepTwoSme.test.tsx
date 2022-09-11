import { render, screen, fireEvent } from '@testing-library/react';
import StepTwoSme from '../components/StepTwoSme';
import { RegisterContextProvider } from '../context/RegisterContext';

describe('StepTwoSme Tests', () => {

    test('should show the correct error message when first name field is empty', () => {
        render(<RegisterContextProvider><StepTwoSme /></RegisterContextProvider>);
        const finishElement = screen.getByRole('button', { name: /Finish/i });
        const errorElement = screen.getAllByTestId("error");
        const firstNameInput = screen.getByPlaceholderText(/John/i);

        fireEvent.change(firstNameInput, { target: { value: '' } })
        fireEvent.click(finishElement);
        expect(errorElement[0]).toHaveTextContent("First Name is required");
    });

    test('should show the correct error message when last name field is empty', () => {
        render(<RegisterContextProvider><StepTwoSme /></RegisterContextProvider>);
        const finishElement = screen.getByRole('button', { name: /Finish/i });
        const errorElement = screen.getAllByTestId("error");
        const lastNameInput = screen.getByPlaceholderText(/Wick/i);

        fireEvent.change(lastNameInput, { target: { value: '' } })
        fireEvent.click(finishElement);
        expect(errorElement[1]).toHaveTextContent("Last Name is required");
    });


})
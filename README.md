### Introduction

In this document I will be explaining some of the important decisions I have taken during the execution of this work as well as provide some good documentation about my completed solution.

## Features

I have been able to do a rebuild of the current Payhippo sign up flow bearing in mind the key attributes of the average customer given ;

- Older
- Business-oriented
- Enjoy simple on-boarding flows
- Mix of both savvy and non-tech savvy users
- Most use mobile

Therefore to meet these requirements; 

- I have reduced the number of steps involved in the regisytration process to make it more easier to quickly complete the process.
- I have also ensured it is responsive as a good number of users make use of mobile devices. 
- I have adopted the OTP procedure to be more mobile friendly as large OTP fields most times don't give the reuired outcome on mobile

### Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### Key Decisions taken
- On the partner tab during the registration flow I put a Coming Soon message as I also noticed from the website that this feature was blurred out.
- I decided to make the flow less cumbersome by making it possible to add and verify phone number firstly before adding more details to the account
- I ensured that the registration flow subtext was explanatory enough to give better context as to what each step does.
- I only rendered the referral code input field when the user had toggled that option on to avoid asking for unnecessary details.


### Future Improvements ( if I had more time )

- I intend to add form/input validation to all the input fields using libraries like yup, formik as opposed to the custom validation which I have currently written for the input fields etc.
- I intend to design or utilize a better datepicker component instead of the html native date picker used on this work.
- I intend to migrate all the inline tailwindcss classes written in each component to seperate css modules for each component using the tailwind @apply directive to ensure proper seperation of concerns.
- I intend to use a lightweight css dynamic classes library such as classnames or clsx for dynamic application of classes in the various components as opposed to using string literals as I did on this project currently.
- I intend to write even more unit tests to cover for several other edge cases. I have written unit tests currently mainly to show my abiloity to write unit tests but not as much as i would want to due to time constraint, i would love to add more unit tests as well as e2e and integration tests using cypress.
- I intend to better improve the design and feel of the application overall by adding smooth transitions and animations etc.


## How To Use

```bash

# Install dependencies
$ npm i

# Run the app
$ npm run start

# Run tests
$ npm run test
```
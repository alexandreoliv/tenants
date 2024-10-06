const nameRegex = /^[a-zA-Z\s]{2,100}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\d{7,50}$/;

export const validateName = (value: string) => nameRegex.test(value);
export const validateEmail = (value: string) => emailRegex.test(value);
export const validatePhone = (value: string) => phoneRegex.test(value);
export const validateSalary = (value: string) => !!value; // salary is valid if it's not an empty string

const nameRegex = /^[a-zA-Z\s]{2,100}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\d{7,50}$/;

export const salaryRanges = [
	"0€ - 1.000€",
	"1.000€ - 2.000€",
	"2.000€ - 3.000€",
	"3.000€ - 4.000€",
	"More than 4.000€",
];

export const validateName = (value: string) => nameRegex.test(value);
export const validateEmail = (value: string) => emailRegex.test(value);
export const validatePhone = (value: string) => phoneRegex.test(value);
export const validateSalary = (value: string) => salaryRanges.includes(value);

interface TenantData {
	name: string;
	email: string;
	phone: string;
	salary: string;
}

export const validateTenantData = (body: TenantData) => {
	const { name, email, phone, salary } = body;

	if (!name || !email || !phone || !salary) return false;

	const isNameValid = validateName(name);
	const isEmailValid = validateEmail(email);
	const isPhoneValid = validatePhone(phone);
	const isSalaryValid = validateSalary(salary);

	return isNameValid && isEmailValid && isPhoneValid && isSalaryValid;
};

import {
  validateName,
  validateEmail,
  validatePhone,
  validateSalary,
  validateTenantData,
} from './validation'

describe('Test validation functions', () => {
  it('should return true for valid name', () => {
    expect(validateName('Alex')).toBe(true);
  });

  it('should return false for invalid name', () => {
    expect(validateName('A')).toBe(false);
    expect(validateName('Alex123')).toBe(false);
  });

  it('should return true for valid email', () => {
    expect(validateEmail('alex@buena.com')).toBe(true); // hopefully ❤️
  });

  it('should return false for invalid email', () => {
    expect(validateEmail('alex@buena')).toBe(false);
    expect(validateEmail('alex.buena.com')).toBe(false);
  });

  it('should return true for valid phone number', () => {
    expect(validatePhone('1234567')).toBe(true);
  });

  it('should return false for invalid phone number', () => {
    expect(validatePhone('123456')).toBe(false);
    expect(validatePhone('123456a')).toBe(false);
  });

  it('should return true for valid salary', () => {
    expect(validateSalary('0€ - 1.000€')).toBe(true);
  });

  it('should return false for invalid salary', () => {
    expect(validateSalary('1€ - 1000€')).toBe(false);
  });

  it('should return true for valid tenant data', () => {
    const tenantData = {
      name: 'Alex',
      email: 'alex@buena.com',
      phone: '1234567',
      salary: 'More than 4.000€', // hopefully 😂 
    };
    expect(validateTenantData(tenantData)).toBe(true);
  });

  it('should return false for invalid tenant data', () => {
    const tenantData = {
      name: '',
      email: 'alex@buena.com',
      phone: '1234567',
      salary: 'More than 4.000€',
    };
    expect(validateTenantData(tenantData)).toBe(false);
  });
});

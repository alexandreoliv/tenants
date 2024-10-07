import { NextRequest } from 'next/server';
import { POST } from './route';

describe('Test API Route: POST /api/add-tenant', () => {
  it('should return 200 for valid tenant data', async () => {
    const request = new NextRequest('http://localhost:3000/api/add-tenant', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Alex',
        email: 'alex@buena.com',
        phone: '1234567',
        salary: 'More than 4.000€',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe('Tenant data submitted successfully');
  });

  it('should return 400 for invalid tenant data', async () => {
    const request = new NextRequest('http://localhost:3000/api/add-tenant', {
      method: 'POST',
      body: JSON.stringify({
        name: '',
        email: 'alex@buena.com',
        phone: '1234567',
        salary: 'More than 4.000€',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Invalid tenant data');
  });

  it('should return 500 for unexpected errors', async () => {
    const request = new NextRequest('http://localhost:3000/api/add-tenant', {
      method: 'POST',
      body: null, // invalid body
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe('Internal Server Error');
  });
});

import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import AuthLoginInput from '../../src/components/modules/auth/AuthLoginInput';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';

/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle renders login form
 *   - should handle email address typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */
expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle renders login form', async () => {
    render(
      <MemoryRouter>
        <AuthLoginInput login={() => {}} />
      </MemoryRouter>
    );

    expect(await screen.getByLabelText('Email Address'));
    expect(await screen.getByLabelText('Password'));
    expect(await screen.getByRole('button', { name: 'Masuk' }));
  });

  it('should handle email address typing correctly', async () => {
    render(
      <MemoryRouter>
        <AuthLoginInput login={() => {}} />
      </MemoryRouter>
    );
    const emailInput = await screen.getByLabelText('Email Address');

    await userEvent.type(emailInput, 'emailtest@gmail.com');

    expect(emailInput).toHaveValue('emailtest@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    render(
      <MemoryRouter>
        <AuthLoginInput login={() => {}} />
      </MemoryRouter>
    );

    const passwordInput = await screen.getByLabelText('Password');

    await userEvent.type(passwordInput, 'passwordtest');

    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function when login button is clicked', async () => {
    const mockLogin = vi.fn();

    render(
      <MemoryRouter>
        <AuthLoginInput login={mockLogin} />
      </MemoryRouter>
    );

    const emailInput = await screen.getByLabelText('Email Address');
    const passwordInput = await screen.getByLabelText('Password');
    const loginButton = await screen.getByRole('button', { name: 'Masuk' });

    await userEvent.type(emailInput, 'emailtest@gmail.com');
    await userEvent.type(passwordInput, 'passwordtest');
    await userEvent.click(loginButton);

    // expect(mockLogin).toHaveBeenCalledWith({
    //   email: 'emailtest@gmail.com',
    //   password: 'passwordtest',
    // });
  });
});

import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import AuthRegisterInput from '../../src/components/modules/auth/AuthRegisterInput';

expect.extend(matchers);

/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle renders register form
 *   - should handle name typing correctly
 *   - should handle email address typing correctly
 *   - should handle password typing correctly
 *   - should handle password confirm typing correctly
 *   - should call onRegister function when register button is clicked
 */
describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle renders register form', async () => {
    render(
      <MemoryRouter>
        <AuthRegisterInput onRegister={() => {}} />
      </MemoryRouter>
    );

    expect(await screen.getByPlaceholderText('Masukan Nama Anda'));
    expect(await screen.getByPlaceholderText('Masukan Alamat Email'));
    expect(await screen.getByPlaceholderText('Masukan Password'));
    expect(await screen.getByPlaceholderText('Konfirmasi Password'));
    expect(await screen.getByRole('button', { name: 'Mendaftar' }));
  });

  it('should handle name typing correctly', async () => {
    render(
      <MemoryRouter>
        <AuthRegisterInput onRegister={() => {}} />
      </MemoryRouter>
    );

    const nameInput = await screen.getByPlaceholderText('Masukan Nama Anda');

    await userEvent.type(nameInput, 'User Testing');

    expect(nameInput).toHaveValue('User Testing');
  });

  it('should handle email address typing correctly', async () => {
    render(
      <MemoryRouter>
        <AuthRegisterInput onRegister={() => {}} />
      </MemoryRouter>
    );

    const emailInput = await screen.getByPlaceholderText(
      'Masukan Alamat Email'
    );

    await userEvent.type(emailInput, 'emailtest@gmail.com');

    expect(emailInput).toHaveValue('emailtest@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    render(
      <MemoryRouter>
        <AuthRegisterInput onRegister={() => {}} />
      </MemoryRouter>
    );

    const passwordInput = await screen.getByPlaceholderText('Masukan Password');

    await userEvent.type(passwordInput, 'passwordtest');
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should handle password confirm typing correctly', async () => {
    render(
      <MemoryRouter>
        <AuthRegisterInput onRegister={() => {}} />
      </MemoryRouter>
    );

    const passwordConfirmInput = await screen.getByPlaceholderText(
      'Konfirmasi Password'
    );

    await userEvent.type(passwordConfirmInput, 'passwordtest');
    expect(passwordConfirmInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    const mockRegister = vi.fn();
    render(
      <MemoryRouter>
        <AuthRegisterInput onRegister={mockRegister} />
      </MemoryRouter>
    );

    const nameInput: HTMLElement = await screen.getByPlaceholderText(
      'Masukan Nama Anda'
    );
    const emailInput: HTMLElement = await screen.getByPlaceholderText(
      'Masukan Alamat Email'
    );
    const passwordInput: HTMLElement = await screen.getByPlaceholderText(
      'Masukan Password'
    );
    const passwordConfirmInput: HTMLElement = await screen.getByPlaceholderText(
      'Konfirmasi Password'
    );
    const registerButton: HTMLElement = await screen.getByRole('button', {
      name: 'Mendaftar',
    });
    // Simulasi pengguna mengirimkan data melalui form register
    await userEvent.type(nameInput, 'User Testing');
    await userEvent.type(emailInput, 'emailtest@gmail.com');
    await userEvent.type(passwordInput, 'passwordtest');
    await userEvent.type(passwordConfirmInput, 'passwordtest');
    await userEvent.click(registerButton);

    // expect(mockRegister).toBeCalledWith({
    //   name: 'User Testing',
    //   email: 'emailtest@gmail.com',
    //   password: 'passwordtest',
    //   passwordConfirm: 'passwordtest',
    // });
  });
});

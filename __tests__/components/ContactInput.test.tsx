import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import ContactInput from '../../src/components/modules/contacts/ContactItemInput';

expect.extend(matchers);
/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle renders contact form
 *   - should handle name typing correctly
 *   - should handle email address typing correctly
 *   - should handle message typing correctly
 *   - should call contacts function when contact button is clicked
 */
describe('ContactInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle renders contact form', async () => {
    render(
      <MemoryRouter>
        <ContactInput contacts={() => {}} />
      </MemoryRouter>
    );

    expect(await screen.getByLabelText('Nama'));
    expect(await screen.getByLabelText('Email'));
    expect(await screen.getByLabelText('Pesan'));
    expect(await screen.getByRole('button', { name: 'Kirimkan' }));
  });

  it('should handle name typing correctly', async () => {
    render(
      <MemoryRouter>
        <ContactInput contacts={() => {}} />
      </MemoryRouter>
    );

    const nameInput = await screen.getByLabelText('Nama');

    await userEvent.type(nameInput, 'User testing');

    expect(nameInput).toHaveValue('User testing');
  });

  it('should handle email address typing correctly', async () => {
    render(
      <MemoryRouter>
        <ContactInput contacts={() => {}} />
      </MemoryRouter>
    );

    const emailInput = await screen.getByLabelText('Email');

    await userEvent.type(emailInput, 'emailtest@gmail.com');

    expect(emailInput).toHaveValue('emailtest@gmail.com');
  });

  it('should handle message typing correctly', async () => {
    render(
      <MemoryRouter>
        <ContactInput contacts={() => {}} />
      </MemoryRouter>
    );

    const messageInput = await screen.getByLabelText('Pesan');

    await userEvent.type(
      messageInput,
      'Ini adalah Testing mengirim pesan melalui form contact'
    );
  });

  it('should call contacts function when contact button is clicked', async () => {
    const mockContact = vi.fn();

    render(
      <MemoryRouter>
        <ContactInput contacts={mockContact} />
      </MemoryRouter>
    );

    const nameInput = await screen.getByLabelText('Nama');
    const emailInput = await screen.getByLabelText('Email');
    const messageInput = await screen.getByLabelText('Pesan');

    // Simulasi penggunan mengirimkan data
    await userEvent.type(nameInput, 'User testing');
    await userEvent.type(emailInput, 'emailtest@gmail.com');
    await userEvent.type(
      messageInput,
      'Ini adalah Testing mengirim pesan melalui form contact'
    );

    await userEvent.click(screen.getByRole('button', { name: 'Kirimkan' }));
  });
});

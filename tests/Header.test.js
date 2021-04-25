import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from './App';

describe('Testing Header in route /nomade', () => {
	test('if the smiles-logo redirect to home', () => {
		const { history, getByRole } = renderWithRouter(<App />);

		const nomade = '/nomade';
		history.push(nomade);

		const imgLogo = getByRole('image', { name: 'smiles-logo' });
		expect(imgLogo).toBeInTheDocument();

		userEvent.click(imgLogo);
		const { pathname } = history.location;
		const URLsmilesHome = 'https://www.smiles.com.br/home';
		expect(pathname).toBe(URLsmilesHome);
	});
	
	test('if the link Ajuda redirect to help page', () => {
		const { history, getByText } = renderWithRouter(<App />);
		
		const nomade = '/nomade';
		history.push(nomade);

		const helpText = getByText('Ajuda');
		expect(helpText).toBeInTheDocument();

		userEvent.click(helpText);
		const { pathname } = history.location;
		const URLsmilesHelp = 'https://www.smiles.com.br/fale-com-a-gente';
		expect(pathname).toBe(URLsmilesHelp);
	});

	test('if the link Cadastre-se redirect to sign up page', () => {
		const { history, getByText } = renderWithRouter(<App />);
		
		const nomade = '/nomade';
		history.push(nomade);

		const signUpText = getByText('Cadastre-se');
		expect(signUpText).toBeInTheDocument();

		userEvent.click(signUpText);
		const { pathname } = history.location;
		const URLsmilesSignUp = 'https://www.smiles.com.br/cadastro';
		expect(pathname).toBe(URLsmilesSignUp);
	});

	test('if the button Entrar redirect to sign in page', () => {
		const { history, getByRole } = renderWithRouter(<App />);
		
		const nomade = '/nomade';
		history.push(nomade);

		const signInButton = getByRole('button', { name: 'sign-in' });
		expect(signInButton).toBeInTheDocument();

		userEvent.click(signInButton);
		const { pathname } = history.location;
		const URLsmilesSignIn = 'https://login.smiles.com.br/login';
		expect(pathname).toBe(URLsmilesSignIn);
	});
});

describe('Testing Header in route /nomade/plan', () => {
	test('if the smiles-logo redirect to home', () => {
		const { history, getByRole } = renderWithRouter(<App />);

		const nomade = '/nomade/plan';
		history.push(nomade);

		const imgLogo = getByRole('image', { name: 'smiles-logo' });
		expect(imgLogo).toBeInTheDocument();

		userEvent.click(imgLogo);
		const { pathname } = history.location;
		const URLsmilesHome = 'https://www.smiles.com.br/home';
		expect(pathname).toBe(URLsmilesHome);
	});
	
	test('if the link Ajuda redirect to help page', () => {
		const { history, getByText } = renderWithRouter(<App />);
		
		const nomade = '/nomade/plan';
		history.push(nomade);

		const helpText = getByText('Ajuda');
		expect(helpText).toBeInTheDocument();

		userEvent.click(helpText);
		const { pathname } = history.location;
		const URLsmilesHelp = 'https://www.smiles.com.br/fale-com-a-gente';
		expect(pathname).toBe(URLsmilesHelp);
	});

	test('if the link Cadastre-se redirect to sign up page', () => {
		const { history, getByText } = renderWithRouter(<App />);
		
		const nomade = '/nomade/plan';
		history.push(nomade);

		const signUpText = getByText('Cadastre-se');
		expect(signUpText).toBeInTheDocument();

		userEvent.click(signUpText);
		const { pathname } = history.location;
		const URLsmilesSignUp = 'https://www.smiles.com.br/cadastro';
		expect(pathname).toBe(URLsmilesSignUp);
	});

	test('if the button Entrar redirect to sign in page', () => {
		const { history, getByRole } = renderWithRouter(<App />);
		
		const nomade = '/nomade/plan';
		history.push(nomade);

		const signInButton = getByRole('button', { name: 'sign-in' });
		expect(signInButton).toBeInTheDocument();

		userEvent.click(signInButton);
		const { pathname } = history.location;
		const URLsmilesSignIn = 'https://login.smiles.com.br/login';
		expect(pathname).toBe(URLsmilesSignIn);
	});
});

describe('Testing Header in route /nomade/forms', () => {
	test('if the smiles-logo redirect to home', () => {
		const { history, getByRole } = renderWithRouter(<App />);

		const nomade = '/nomade/forms';
		history.push(nomade);

		const imgLogo = getByRole('image', { name: 'smiles-logo' });
		expect(imgLogo).toBeInTheDocument();

		userEvent.click(imgLogo);
		const { pathname } = history.location;
		const URLsmilesHome = 'https://www.smiles.com.br/home';
		expect(pathname).toBe(URLsmilesHome);
	});
	
	test('if the link Ajuda redirect to help page', () => {
		const { history, getByText } = renderWithRouter(<App />);
		
		const nomade = '/nomade/forms';
		history.push(nomade);

		const helpText = getByText('Ajuda');
		expect(helpText).toBeInTheDocument();

		userEvent.click(helpText);
		const { pathname } = history.location;
		const URLsmilesHelp = 'https://www.smiles.com.br/fale-com-a-gente';
		expect(pathname).toBe(URLsmilesHelp);
	});

	test('if the link Cadastre-se redirect to sign up page', () => {
		const { history, getByText } = renderWithRouter(<App />);
		
		const nomade = '/nomade/forms';
		history.push(nomade);

		const signUpText = getByText('Cadastre-se');
		expect(signUpText).toBeInTheDocument();

		userEvent.click(signUpText);
		const { pathname } = history.location;
		const URLsmilesSignUp = 'https://www.smiles.com.br/cadastro';
		expect(pathname).toBe(URLsmilesSignUp);
	});

	test('if the button Entrar redirect to sign in page', () => {
		const { history, getByRole } = renderWithRouter(<App />);
		
		const nomade = '/nomade/forms';
		history.push(nomade);

		const signInButton = getByRole('button', { name: 'sign-in' });
		expect(signInButton).toBeInTheDocument();

		userEvent.click(signInButton);
		const { pathname } = history.location;
		const URLsmilesSignIn = 'https://login.smiles.com.br/login';
		expect(pathname).toBe(URLsmilesSignIn);
	});
});

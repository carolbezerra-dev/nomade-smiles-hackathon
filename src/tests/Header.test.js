import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testing Header in route /nomade', () => {
	test('if the smiles-logo redirect to home', () => {
		const { history, getByRole } = renderWithRouter(<App />);

		const nomade = '/nomade';
		history.push(nomade);

		const imgLogo = getByRole('img', { name: 'smiles-logo' });
		expect(imgLogo).toBeInTheDocument();

		const linkHome = getByRole('link', { name: 'smiles-logo' });
		const URLsmilesHome = 'https://www.smiles.com.br/home';
		expect(linkHome.href).toBe(URLsmilesHome);
	});
	
	test('if the link Ajuda redirect to help page', () => {
		const { history, getByText } = renderWithRouter(<App />);
		
		const nomade = '/nomade';
		history.push(nomade);

		const helpText = getByText('Ajuda');
		expect(helpText).toBeInTheDocument();

		const URLsmilesHelp = 'https://www.smiles.com.br/fale-com-a-gente';
		expect(helpText).toHaveAttribute('href', URLsmilesHelp);
	});

	test('if the link Cadastre-se redirect to sign up page', () => {
		const { history, getByText } = renderWithRouter(<App />);
		
		const nomade = '/nomade';
		history.push(nomade);

		const signUpText = getByText('Cadastre-se');
		expect(signUpText).toBeInTheDocument();

		const URLsmilesSignUp = 'https://www.smiles.com.br/cadastro';
		expect(signUpText.href).toBe(URLsmilesSignUp);
	});

	test('if the button Entrar redirect to sign in page', async () => {
		const { history, getByRole } = renderWithRouter(<App />);
		
		const nomade = '/nomade';
		history.push(nomade);

		const signInButton = getByRole('link', { name: 'Entrar' });
		expect(signInButton).toBeInTheDocument();

		const URLsmilesSignIn = 'https://smiles.com.br/login';
		expect(signInButton).toHaveAttribute('href', URLsmilesSignIn);
	});
});

describe('Testing Header in route /nomade/plan', () => {
	test('if the smiles-logo redirect to home', () => {
		const { history, getByRole } = renderWithRouter(<App />);

		const nomade = '/nomade/plan';
		history.push(nomade);

		const imgLogo = getByRole('img', { name: 'smiles-logo' });
		expect(imgLogo).toBeInTheDocument();

		const linkHome = getByRole('link', { name: 'smiles-logo' });
		const URLsmilesHome = 'https://www.smiles.com.br/home';
		expect(linkHome.href).toBe(URLsmilesHome);
	});
	
	test('if the link Ajuda redirect to help page', () => {
		const { history, getByText } = renderWithRouter(<App />);
		
		const nomade = '/nomade/plan';
		history.push(nomade);

		const helpText = getByText('Ajuda');
		expect(helpText).toBeInTheDocument();

		const URLsmilesHelp = 'https://www.smiles.com.br/fale-com-a-gente';
		expect(helpText).toHaveAttribute('href', URLsmilesHelp);
	});

	test('if the link Cadastre-se redirect to sign up page', () => {
		const { history, getByText } = renderWithRouter(<App />);
		
		const nomade = '/nomade/plan';
		history.push(nomade);

		const signUpText = getByText('Cadastre-se');
		expect(signUpText).toBeInTheDocument();

		const URLsmilesSignUp = 'https://www.smiles.com.br/cadastro';
		expect(signUpText.href).toBe(URLsmilesSignUp);
	});

	test('if the button Entrar redirect to sign in page', () => {
		const { history, getByRole } = renderWithRouter(<App />);
		
		const nomade = '/nomade/plan';
		history.push(nomade);

		const signInButton = getByRole('link', { name: 'Entrar' });
		expect(signInButton).toBeInTheDocument();

		const URLsmilesSignIn = 'https://smiles.com.br/login';
		expect(signInButton).toHaveAttribute('href', URLsmilesSignIn);
	});
});

describe('Testing Header in route /nomade/forms', () => {
	test('if the smiles-logo redirect to home', () => {
		const { history, getByRole } = renderWithRouter(<App />);

		const nomade = '/nomade/forms';
		history.push(nomade);

		const imgLogo = getByRole('img', { name: 'smiles-logo' });
		expect(imgLogo).toBeInTheDocument();

		const linkHome = getByRole('link', { name: 'smiles-logo' });
		const URLsmilesHome = 'https://www.smiles.com.br/home';
		expect(linkHome.href).toBe(URLsmilesHome);
	});
	
	test('if the link Ajuda redirect to help page', () => {
		const { history, getByText } = renderWithRouter(<App />);
		
		const nomade = '/nomade/forms';
		history.push(nomade);

		const helpText = getByText('Ajuda');
		expect(helpText).toBeInTheDocument();

		const URLsmilesHelp = 'https://www.smiles.com.br/fale-com-a-gente';
		expect(helpText).toHaveAttribute('href', URLsmilesHelp);
	});

	test('if the link Cadastre-se redirect to sign up page', () => {
		const { history, getByText } = renderWithRouter(<App />);
		
		const nomade = '/nomade/forms';
		history.push(nomade);

		const signUpText = getByText('Cadastre-se');
		expect(signUpText).toBeInTheDocument();

		const URLsmilesSignUp = 'https://www.smiles.com.br/cadastro';
		expect(signUpText.href).toBe(URLsmilesSignUp);
	});

	test('if the button Entrar redirect to sign in page', () => {
		const { history, getByRole } = renderWithRouter(<App />);
		
		const nomade = '/nomade/forms';
		history.push(nomade);

		const signInButton = getByRole('link', { name: 'Entrar' });
		expect(signInButton).toBeInTheDocument();

		const URLsmilesSignIn = 'https://smiles.com.br/login';
		expect(signInButton).toHaveAttribute('href', URLsmilesSignIn);
	});
});

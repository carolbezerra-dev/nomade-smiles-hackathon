import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import { fireEvent } from '@testing-library/react';

describe('Testing main content in route /nomade', () => {
	test('if the top part has the right text and image', () => {
		const { history, getAllByRole, getByRole, getByText } = renderWithRouter(<App />);

		const nomade = '/nomade';
		history.push(nomade);

		const nomadeTitle = getAllByRole('heading', { level: 1 });
    expect(nomadeTitle[0]).toBeInTheDocument();
    expect(nomadeTitle[0]).toHaveTextContent('Olá, eu sou a Mile!');
    
    const nomadeText = getByText(
      'Vou te ajudar a alcançar seu sonho de viajar pelo mundo e ser uma pessoa Nomadê Smiles'
    );
    expect(nomadeText).toBeInTheDocument();
    expect(nomadeText.tagName).toBe('P');
    
    const mileHomeImg = '../images/nomade/MileHome.svg';
    expect(getByRole('img').src).toBe(mileHomeImg);
    // OU
    const mileHomeImg2 = getByRole('img', { name: 'Mile-to-the-world' });
    expect(mileHomeImg2).toBeInTheDocument();
  });
  
  test('if the middle paragraph, part 1, is correct in the page', () => {
    const { history, getByText } = renderWithRouter(<App />);

		const nomade = '/nomade';
		history.push(nomade);

    const middleParagraph1 = getByText(
      'Nômade Digital é uma pessoa que aproveita sua liberdade para viajar,'
    );
    const middleParagraph2 = getByText(
      ' conhecendo novos lugares, culturas e pessoas.'
    );
    const middleParagraph3 = getByText(
      'Nomadê é quem usa Smiles como parceira nessa trajetória'
    );
    expect(middleParagraph1.tagName).toBe('P');
    expect(middleParagraph2.tagName).toBe('P');
    expect(middleParagraph1 + middleParagraph2).toBeInTheDocument();
    expect(middleParagraph3.tagName).toBe('P');
    expect(middleParagraph3).toBeInTheDocument();
  });

  test('if the middle content, part 2, is correct in the page', () => {
    const { history, getAllByRole, getByRole, getByText } = renderWithRouter(<App />);

		const nomade = '/nomade';
    history.push(nomade);
    
    const nomadeTitle = getAllByRole('heading', { level: 2 });
    expect(nomadeTitle[1]).toBeInTheDocument();
    expect(nomadeTitle[1]).toHaveTextContent('Tenha seu planejamento');

    const middlelParagraph1 = getByText(
      'Vamos criar um plano com metas.'
    );
    const middlelParagraph2 = getByText(
      'Você visualiza seu avanço enquanto aproveita ao máximo nossos benefícios'
    );
    expect(middlelParagraph1.tagName).toBe('P');
    expect(middlelParagraph1).toBeInTheDocument();
    expect(middlelParagraph2.tagName).toBe('P');
    expect(middlelParagraph2).toBeInTheDocument();

    const imgMiddleContent = getByRole('img', { name: 'Have-your-plan' });
		expect(imgMiddleContent).toBeInTheDocument();
  });

  test('if the middle content, part 3, is correct in the page', () => {
    const { history, getAllByRole, getByRole, getByText } = renderWithRouter(<App />);

		const nomade = '/nomade';
    history.push(nomade);

    const nomadeTitle = getAllByRole('heading', { level: 2 });
    expect(nomadeTitle[2]).toBeInTheDocument();
    expect(nomadeTitle[3]).toHaveTextContent('Convide e compartilhe');

    const middlelParagraph3 = getByText(
      'Você pode convidas pessoas queridas para comemorar os avanços das suas metas.'
    );
    const middlelParagraph4 = getByText(
      'A experiência fica melhor quando é compartilhada'
    );
    expect(middlelParagraph3.tagName).toBe('P');
    expect(middlelParagraph3).toBeInTheDocument();
    expect(middlelParagraph4.tagName).toBe('P');
    expect(middlelParagraph4).toBeInTheDocument();

    const imgMiddleContent = getByRole('img', { name: 'invite-and-share' });
		expect(imgMiddleContent).toBeInTheDocument();
  });

  test('if the final part is correct in the page', () => {
    const { history, getByRole, getByText } = renderWithRouter(<App />);

    const nomade = '/nomade';
    history.push(nomade);

    const imgMiddleContent = getByRole('img', { name: 'lets-start' });
    expect(imgMiddleContent).toBeInTheDocument();
    
    const finalContent = getByText(
      'Vamos iniciar seu planejamento personalizado agora'
    );
    expect(finalContent.tagName).toBe('P');
    expect(finalContent).toBeInTheDocument();

    const linkForms = getByRole('link', { name: 'Quer ser nomadê' });
		expect(linkForms).toBeInTheDocument();
    fireEvent.click(linkForms);
    const { pathname } = history.location;
    expect(pathname).toBe('/forms');
  });
});

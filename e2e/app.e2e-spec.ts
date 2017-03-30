import { SistemaEventosFrontAcPage } from './app.po';

describe('sistema-eventos-front App', () => {
  let page: SistemaEventosFrontPage;

  beforeEach(() => {
    page = new SistemaEventosFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

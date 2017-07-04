import { PowerBiTestPage } from './app.po';

describe('power-bi-test App', () => {
  let page: PowerBiTestPage;

  beforeEach(() => {
    page = new PowerBiTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

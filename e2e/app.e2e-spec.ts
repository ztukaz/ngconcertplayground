import { TestapiPage } from './app.po';

describe('testapi App', () => {
  let page: TestapiPage;

  beforeEach(() => {
    page = new TestapiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

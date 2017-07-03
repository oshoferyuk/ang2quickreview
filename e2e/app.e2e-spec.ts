import { DreamAppPage } from './app.po';

describe('dream-app App', () => {
  let page: DreamAppPage;

  beforeEach(() => {
    page = new DreamAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

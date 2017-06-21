import { ReduxLoadingPage } from './app.po';

describe('redux-loading App', () => {
  let page: ReduxLoadingPage;

  beforeEach(() => {
    page = new ReduxLoadingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

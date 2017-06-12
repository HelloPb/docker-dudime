import { DudimePage } from './app.po';

describe('dudime App', () => {
  let page: DudimePage;

  beforeEach(() => {
    page = new DudimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

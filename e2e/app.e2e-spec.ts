import { NgFourPage } from './app.po';

describe('ng-four App', () => {
  let page: NgFourPage;

  beforeEach(() => {
    page = new NgFourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

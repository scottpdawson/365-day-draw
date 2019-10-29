import { DrawPage } from './app.po';

describe('draw App', function() {
  let page: DrawPage;

  beforeEach(() => {
    page = new DrawPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

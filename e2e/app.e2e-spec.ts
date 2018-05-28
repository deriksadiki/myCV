import { MycvPage } from './app.po';

describe('mycv App', function() {
  let page: MycvPage;

  beforeEach(() => {
    page = new MycvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

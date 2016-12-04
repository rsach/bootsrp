import { BootstrpPage } from './app.po';

describe('bootstrp App', function() {
  let page: BootstrpPage;

  beforeEach(() => {
    page = new BootstrpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

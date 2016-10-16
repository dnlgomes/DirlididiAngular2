import { TabAppPage } from './app.po';

describe('tab-app App', function() {
  let page: TabAppPage;

  beforeEach(() => {
    page = new TabAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

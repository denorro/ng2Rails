import { Ng2RailsPage } from './app.po';

describe('ng2-rails App', function() {
  let page: Ng2RailsPage;

  beforeEach(() => {
    page = new Ng2RailsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

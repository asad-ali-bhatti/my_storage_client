import { MyStorageClientPage } from './app.po';

describe('my-storage-client App', function() {
  let page: MyStorageClientPage;

  beforeEach(() => {
    page = new MyStorageClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

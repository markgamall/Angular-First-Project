import { Userlogin } from './userlogin';

describe('Userlogin', () => {
  it('should create an instance', () => {
    const userlog = new Userlogin("markgamal@gmail.com","mark123");
    expect(userlog).toBeTruthy();
  });
});

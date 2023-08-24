import { Userinfo } from './userinfo';

describe('Userinfo', () => {
  it('should create an instance', () => {
    const user = new Userinfo("John Doe", "john@example.com", "password", "password", "Facebook");
    expect(user).toBeTruthy();
  });
});

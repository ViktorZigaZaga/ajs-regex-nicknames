import Validator from '../validator';

test.each([
  ['1user', false],
  ['-user', false],
  ['_user', false],
  ['user1', false],
  ['user-', false],
  ['user_', false],
  ['us#er', false],
  ['u222se2222_r-222s', false],
  ['u222se222_r-222s', true],
  ['user', true],
])('for nickname %s should return %s', (name, result) => {
  const user = new Validator(name);
  expect(user.validatorUserName()).toBe(result);
});

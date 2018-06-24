

const add = (a, b) => a + b;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

const generatingGreeting = (name) => `Hello ${name}!`;

test('generating greeting', () => {
  const result = generatingGreeting('Mike');
  expect(result).toBe('Hello Mike!');
});
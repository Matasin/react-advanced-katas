
import { Testing } from './Testing';
import { TestingObject } from './TestingObject';

jest.mock('./TestingObject');

beforeEach(() => {
  jest.clearAllMocks();
});

it('We can check if the consumer called the class constructor', () => {
  new Testing({ name: 'Adam' });
  expect(TestingObject).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  expect(TestingObject).not.toHaveBeenCalled();

  const testingObjectConsumer = new Testing({ name: 'Adam' });
  expect(TestingObject).toHaveBeenCalledTimes(1);
});

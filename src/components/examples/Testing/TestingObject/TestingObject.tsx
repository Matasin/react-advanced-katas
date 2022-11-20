export class TestingObject {
  name: string;

  constructor() {
    this.name = 'John';
  }

  greetings(toName: string) {
    alert(`Hello, ${toName}`);
  }
}

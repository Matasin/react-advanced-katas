import { Component } from 'react';
import { TestingObject } from './TestingObject';

type TestingProps = {
  name: string;
};

export class Testing extends Component<TestingProps> {
  testingObject: TestingObject;

  constructor(props: TestingProps) {
    super(props);
    this.testingObject = new TestingObject();
    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    this.testingObject.greetings(this.props.name);
  }

  render() {
    const {
      name
    } = this.props;

    return (
      <>
        <h2>Good morning, I am {name}</h2>
        <button onClick={this.sayHello}>
          (say hello to {name})
        </button>
      </>
    );
  }
}

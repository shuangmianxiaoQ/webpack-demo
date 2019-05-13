import * as _ from 'lodash';

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    // return 'Hello, ' + this.greeting;
    return _.join(['Hello,', this.greeting], ' ');
  }
}

const greeter = new Greeter('TypeScript');

console.log(greeter.greet());

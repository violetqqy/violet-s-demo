interface Action {
  type: string;
}

let a: Action = {
    type: 'literal' 
}

console.log(a);

class NotAnAction {
  type: string;
  constructor() {
    this.type = 'Constructor function (class)';
  }
}

a = new NotAnAction(); // valid TypeScript!

console.log(a);
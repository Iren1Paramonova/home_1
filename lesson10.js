class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.getSalary = function () {
      console.log(`${this.rate * $this.days}`);
    };
    __proto__
  }
}
function NameWorker() {
  this.getFullName = function () {
    console.log(`${this.name} ${this.surname}`);
  };
}

const firstWorker = new Worker("Ira", "Paramonova", 10000, 5);
console.log(firstWorker.getFullName(), "получает", firstWorker.getSalary());

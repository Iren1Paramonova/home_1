class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return `${this.rate * this.days}`;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}
class Boss extends Worker {
  constructor(name, surname, rate, days, workers) {
    super(name, surname, rate, days);
    this.workers = workers;
  }
  getSalary() {
    return `${this.rate * this.days * this.workers}`;
  }
}

let firstWorker = new Worker("Ira", "Paramonova", 5000, 5);
console.log(firstWorker.getFullName(), "получает", firstWorker.getSalary());

let firstBoss = new Boss("Ira", "Paramonova", 5000, 5, 7);
console.log(firstBoss.getFullName(), "получает", firstBoss.getSalary());

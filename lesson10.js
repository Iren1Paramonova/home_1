/* class Worker {
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
  get rate() {
    return this._rate;
  }
  set rate(value) {
    this._rate = value;
  }

  get days() {
    return this._days;
  }
  set days(value) {
    this._days = value;
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
console.log(firstBoss.getFullName(), "получает", firstBoss.getSalary()); */

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();
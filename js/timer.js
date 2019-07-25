"use strict";
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    const targetElement = document.querySelector(this.selector);
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate.getTime() - currentTime;
      const days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((deltaTime % (1000 * 60)) / 1000);
      const dataDaysElement = targetElement.querySelector(
        "[data-value='days']"
      );
      dataDaysElement.textContent = days;
      const dataHoursElement = targetElement.querySelector(
        "[data-value='hours']"
      );
      dataHoursElement.textContent = hours;
      const dataMinsElement = targetElement.querySelector(
        "[data-value='mins']"
      );
      dataMinsElement.textContent = mins;
      const dataSecsElement = targetElement.querySelector(
        "[data-value='secs']"
      );
      dataSecsElement.textContent = secs;
    }, 1000);
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 25, 2019")
});

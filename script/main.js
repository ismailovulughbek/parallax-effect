const typingTitle = new Typing({
  el: ".header__title",
  interval: 400,
  delay: 1000,
});

// Parallax Effect

class Parallax {
  constructor(obj) {
    this.clouds = document.querySelectorAll(obj.clouds);
    this.boat = document.querySelector(obj.boat);
    this.background = document.querySelector(obj.background);

    window.addEventListener("scroll", () => this.moveElements());
  }

  moveElements() {
    this.clouds.forEach((cloud) => {
      let speed = cloud.getAttribute("data-speed");
      cloud.style.transform = `translateX(${window.scrollY * speed}px)`;
    });

    this.boat.style.transform = `translateX(${window.scrollY * 0.9}px)`;
    this.background.style.objectPosition = `0 ${window.scrollY / 10}%`;
  }
}

const parallax = new Parallax({
  clouds: ".cloud",
  boat: ".header__boat",
  background: ".header__fantasy",
});

class Scroll {
  constructor(obj) {
    this.section = document.querySelector(obj.section);
    window.addEventListener("scroll", () => {
      this.fadeRightAnim(this.section, 2);
    });
  }

  fadeRightAnim(section, cordinate) {
    const fadeRights = section.querySelectorAll(".fade-right");
    fadeRights.forEach((fadeRight) => {
      const speed = fadeRight.getAttribute("data-speed");
      fadeRight.style.transition = speed + "ms";
      if (
        window.scrollY >=
        section.offsetTop - section.offsetHeight * cordinate
      ) {
        fadeRight.classList.add("active");
      } else {
        fadeRight.classList.remove("active");
      }
    });
  }
}

const aboutScroll = new Scroll({
  section: ".about",
});

const scroll2 = new Scroll({
  section: ".scroll",
});

class ParallaxMove {
  constructor(obj) {
    this.moveEl = document.querySelectorAll(obj.moveEl);

    window.addEventListener("mousemove", (event) => {
      this.moveItemAnim(event);
    });
  }

  moveItemAnim(event) {
    this.moveEl.forEach((item) => {
      const speed = item.getAttribute("data-speed");
      const x = (window.innerWidth - event.pageX * speed) / 50;
      const y = (window.innerWidth - event.pageY * speed) / 100;

      item.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
}

const parallaxMove = new ParallaxMove({
  moveEl: ".parallax__ball",
});

class Timer {
  constructor(obj) {
    this.timerNums = document.querySelectorAll(obj.timerNums);
    this.timerSection = document.querySelector(obj.timerSection);
    this.state = true;

    window.addEventListener("scroll", () => {
      this.scrollTimer();
    });
  }

  scrollTimer() {
    if (this.state) {
      if (
        window.scrollY >=
        this.timerSection.offsetTop - this.timerSection.offsetHeight * 2
      ) {
        this.timerSet();
        this.state = false;
      }
    }
  }

  timerSet() {
    this.timerNums.forEach((nums) => {
      const count = +nums.getAttribute("data-num");
      nums.innerHTML = 0;

      function timer(i = 0) {
        nums.innerHTML = i;
        i++;

        if (i <= count) {
          setTimeout(() => {
            timer(i);
          }, 5);
        }
      }
      timer();
    });
  }
}

const timerSection = new Timer({
  timerNums: ".timer__num",
  timerSection: ".timer",
});

class Bubble {
  constructor(obj) {
    this.bubble = document.querySelectorAll(obj.bubble);

    this.bubble.forEach((bubbles) => {
      bubbles.addEventListener("mousemove", (event) => {
        this.bubbleShow(event, bubbles);
      });
    });
  }

  bubbleShow(e, item) {
    const x = e.pageX - item.offsetLeft;
    const y = e.pageY - item.offsetTop;

    let span = item.querySelector("span");

    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
  }
}

const bubbleTimerBtn = new Bubble({
  bubble: ".timer__btn",
});

class Rotate3D {
  constructor(obj) {
    this.card = document.querySelectorAll(obj.card);

    this.card.forEach((cards) => {
      cards.addEventListener("mousemove", (event) => {
        this.rotate(event, cards);
      });
      cards.addEventListener("mouseout", () => {
        this.rotateNone(cards);
      });
    });
  }

  rotate(event, cards) {
    const cardItem = cards.querySelector(".card__item");
    const halfHeight = cardItem.offsetHeight / 2;
    cardItem.style.transform = `
    rotateX(${(halfHeight - event.offsetY) / 10}deg)
    rotateY(${-(halfHeight - event.offsetX) / 10}deg)
    `;
  }

  rotateNone(cards) {
    const cardItem = cards.querySelector(".card__item");
    cardItem.style.transform = `rotate(0)`;
  }
}

const cartRotate3D = new Rotate3D({
  card: ".card",
});

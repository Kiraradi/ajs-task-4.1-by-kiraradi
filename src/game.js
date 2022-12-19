import checkHealth from './checkHealth.js';

export default class Game {
  constructor(container) {
    this.container = container;
    this.game = container.querySelector('.game');
    this.gameStart = container.querySelector('.game-start');
    this.rules = container.querySelector('.rules');
    this.gameContainer = container.querySelector('.game-container');
    this.imgRobber = container.querySelector('.img-robber');
  }

  // Запускает игру
  start() {
    const gameStartButton = this.container.querySelector('.game-start-button');
    gameStartButton.addEventListener('click', () => {
      this.game.classList.add('game-active');
      this.gameStart.style.display = 'none';
    });
  }

  // Обрабатывает события клика по header
  clickMenu() {
    const header = this.container.querySelector('header');

    header.addEventListener('click', (event) => {
      if (event.target.dataset.batton === 'game') {
        this.rules.style.display = 'none';
        this.gameContainer.style.display = 'block';
      }

      if (event.target.dataset.batton === 'rules') {
        this.rules.style.display = 'block';
        this.gameContainer.style.display = 'none';
      }
    });
  }

  // Обрабатывает события удара по врагу
  damage() {
    this.health = this.container.querySelector('.health');
    let healthContent = parseInt(this.health.textContent);

    this.imgRobber.addEventListener('click', () => {
      healthContent -= 10;
      this.health.textContent = `${healthContent} Hp`;
      const healthStatus = checkHealth({ name: 'Разбойник', health: healthContent });
      this.SetTheHealthColor(healthStatus);
      if (healthContent <= 0) {
        alert('Победа');
        location.reload();
      }
    });
  }

  // Изменяет цвет уровня здоровья
  SetTheHealthColor(status) {
    if (status === 'wounded') {
      this.health.style.backgroundColor = 'yellow';
    } else if (status === 'critical') {
      this.health.style.backgroundColor = 'red';
    }
  }
}

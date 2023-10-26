import React, { Component } from 'react';
import styles from './style.module.css';

class GuessNumberGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secretNumber: Math.floor(Math.random() * 100) + 1,
      guess: '',
      message: '',
      attempts: 0,
      maxAttempts: 10,
    };
  }

  handleChange = (event) => {
    this.setState({ guess: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { secretNumber, guess, attempts, maxAttempts } = this.state;

    if (attempts >= maxAttempts) {
      this.setState({ message: `Игра окончена. Загаданное число: ${secretNumber}.` });
    } else {
      const userGuess = parseInt(guess, 10);
      if (isNaN(userGuess)) {
        this.setState({ message: 'Пожалуйста введите число.' });
      } else if (userGuess === secretNumber) {
        this.setState({ message: `Плздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток.` });
      } else if (userGuess < secretNumber) {
        this.setState({
          message: `Попробуй число побольше. У тебя осталось ${maxAttempts - attempts - 1} попыток.`,
          attempts: attempts + 1,
        });
      } else {
        this.setState({
          message: `Попробуй число поменьше. У тебя осталось ${maxAttempts - attempts - 1} попыток.`,
          attempts: attempts + 1,
        });
      }
    }
  };

  render() {
    const { guess, message, attempts, maxAttempts } = this.state;

    return (
      <div className={styles.gamediv}>
        <h1>Guess the Number Game</h1>
        <p className={styles.gametext}>Попробуй угадать число от 1 до 100.</p>
        <form onSubmit={this.handleSubmit}>
          <input type="number" value={guess} onChange={this.handleChange} />
          <button type="submit" className={styles.submit}>Принять</button>
        </form>
        <p>{message}</p>
        <p className={styles.gametext}>Попытки: {attempts} / {maxAttempts}</p>
      </div>
    );
  }
}

export default GuessNumberGame;

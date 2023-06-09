import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirm = true;
    if (confirm) {
      //проверка логина и пароль на существование, удали после проверки!!! При нажатии на кнопку, логин и пароль будет выведен в консоль
      console.log(login, password);
      fetch("Я ссылка на сервер", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: login,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    setLogin("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="formGroup">
        <label className="label">Логин:</label>
        <input
          type="text"
          value={login}
          onChange={handleLoginChange}
          className="input"
        />
      </div>
      <div className="formGroup">
        <label className="label">Пароль:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="input"
        />
      </div>
      <button type="submit" className="button">
        <Link to="/home">Войти</Link>
      </button>
    </form>
  );
};

export { LoginForm };

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
    // место для логики, например, отправить данные на сервер
    if (confirm) {
    }
    // Сбросить значения полей после отправки формы
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

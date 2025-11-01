"use client";

import { useState } from "react";
import Input from "./Input";
import Button from "@/components/ui/Button";
import Checkbox from "./Checkbox";

interface LoginFormProps {
  onSubmit?: (data: { email: string; password: string; remember: boolean }) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, password, remember });
    } else {
      alert(`Вход:\nEmail: ${email}\nЗапомнить: ${remember ? "Да" : "Нет"}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <Input
        type="email"
        label="Email"
        placeholder="example@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        type="password"
        label="Пароль"
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Checkbox
        label="Запомнить меня"
        checked={remember}
        onChange={setRemember}
      />

      <Button variant="primary" size="md" fullWidth>
        Войти
      </Button>

      <p className="text-center text-sm text-gray-600">
        <a href="#" className="text-blue-500 hover:underline">
          Забыли пароль?
        </a>
      </p>
    </form>
  );
}
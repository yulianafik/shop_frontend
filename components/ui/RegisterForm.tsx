"use client";

import { useState } from "react";
import Input from "./Input";
import Button from "@/components/ui/Button";
import Checkbox from "./Checkbox";

interface RegisterFormProps {
  onSubmit?: (data: {
    name: string;
    email: string;
    password: string;
    agree: boolean;
  }) => void;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ name, email, password, agree });
    } else {
      alert(`Регистрация:\nИмя: ${name}\nEmail: ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <Input
        label="Имя"
        placeholder="Иван Петров"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

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
        placeholder="Минимум 8 символов"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Checkbox
        label="Я согласен с условиями использования"
        checked={agree}
        onChange={setAgree}
      />

      <Button variant="primary" size="md" fullWidth disabled={!agree}>
        Зарегистрироваться
      </Button>
    </form>
  );
}
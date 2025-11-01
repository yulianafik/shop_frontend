"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Header from "@/components/Header";
import Card from "@/components/ui/Card";
import Hero from "@/components/ui/Hero";
import LoginForm from "@/components/ui/LoginForm";
import RegisterForm from "@/components/ui/RegisterForm";
import Modal from "@/components/ui/Modal";
import Footer from "@/components/ui/Footer";

const navigation = [
  { label: "О нас", href: "/about" },
  { label: "Каталог", href: "/services" },
  { label: "🛒", href: "/contact" },
];

export default function HomePage() {
  // Состояния для модальных окон
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <div>
      <Header
        navigation={navigation}
        actions={
          <>
            {/* Кнопка Войти открывает модалку входа */}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsLoginModalOpen(true)}
            >
              Войти
            </Button>

            {/* Кнопка Регистрация открывает модалку регистрации */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsRegisterModalOpen(true)}
            >
              Регистрация
            </Button>
          </>
        }
      />

      {/* Модальное окно для входа */}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title="Вход в аккаунт"
        description="Введите свои данные для входа в систему"
      >
        <LoginForm
          onSubmit={(data) => {
            console.log("Данные входа:", data);
            setIsLoginModalOpen(false); // Закрываем модалку после отправки
          }}
        />

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            Ещё нет аккаунта?{" "}
            <button
              type="button"
              onClick={() => {
                setIsLoginModalOpen(false);
                setIsRegisterModalOpen(true);
              }}
              className="text-blue-500 hover:underline font-medium"
            >
              Зарегистрироваться
            </button>
          </p>
        </div>
      </Modal>

      {/* Модальное окно для регистрации */}
      <Modal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        title="Создать аккаунт"
        description="Заполните форму для регистрации"
      >
        <RegisterForm
          onSubmit={(data) => {
            console.log("Данные регистрации:", data);
            setIsRegisterModalOpen(false); // Закрываем модалку после отправки
          }}
        />

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            Уже есть аккаунт?{" "}
            <button
              type="button"
              onClick={() => {
                setIsRegisterModalOpen(false);
                setIsLoginModalOpen(true);
              }}
              className="text-blue-500 hover:underline font-medium"
            >
              Войти
            </button>
          </p>
        </div>
      </Modal>

      <section
        className="min-h-[60] flex items-center justify-center px-4 relative"
        style={{
          backgroundImage: "url(/images/Frame8.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "80vh",
        }}
      >
        <div className="w-full mt-auto mb-8 px-4">
          <Button variant="primary" size="lg" fullWidth>
            Перейти в каталог
          </Button>
        </div>
      </section>

      <section
        className="min-h-screen flex items-center justify-center px-4 relative"
        style={{
          backgroundImage: "url(/images/Frame5.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#2D2C2C",
          width: "100vw",
          height: "71vh",
        }}
      ></section>

      <div className="mx-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <Card
          title="DIESEL ботиночки"
          description="Удобно ракать, пацаны поймут"
          image="/images/Men's D-Hammer-Denim Chelsea boots with Oval D toe caps _ Black 1.png"
          imageMode="contain"
          buttonText="В корзину"
          square={true}
        />

        <Card
          title="Карточка 2"
          description="Вторая карточка"
          image="/images/oreo.jpg"
          buttonText="В корзину"
        />

        <Card
          title="Карточка 3"
          description="Третья карточка"
          image="/images/oreo.jpg"
          buttonText="В корзину"
        />
        <Card
          title="Карточка 4"
          description="Первая карточка"
          image="/images/oreo.jpg"
          buttonText="В корзину"
        />

        <Card
          title="Карточка 5"
          description="Вторая карточка"
          image="/images/oreo.jpg"
          buttonText="В корзину"
        />

        <Card
          title="Карточка 6"
          description="Шестая карточка"
          image="/images/oreo.jpg"
          buttonText="В корзину"
        />
      </div>

      <Footer
        socialLinks={
          <>
            {/* ВКонтакте */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="ВКонтакте"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.785 16.241s.288-.032.436-.194c.136-.149.132-.427.132-.427s-.02-1.304.574-1.496c.586-.19 1.336 1.26 2.131 1.817.605.423 1.064.33 1.064.33l2.137-.03s1.117-.071.588-.966c-.043-.073-.308-.662-1.587-1.87-1.34-1.264-1.16-1.059.453-3.246.983-1.332 1.376-2.145 1.253-2.493-.117-.332-.841-.244-.841-.244l-2.406.015s-.178-.025-.31.056c-.13.079-.214.263-.214.263s-.383 1.040-.894 1.924c-1.078 1.863-1.509 1.962-1.685 1.846-.409-.271-.307-1.087-.307-1.667 0-1.81.27-2.565-.525-2.761-.264-.065-.458-.108-1.133-.115-.866-.009-1.599.003-2.011.21-.275.138-.487.445-.358.463.16.022.522.1.714.365.248.342.239 1.11.239 1.11s.143 2.133-.333 2.396c-.327.181-.776-.188-1.74-1.870-.493-.865-.866-1.822-.866-1.822s-.072-.18-.2-.277c-.155-.117-.371-.154-.371-.154l-2.286.015s-.343.01-.469.162c-.112.135-.009.413-.009.413s1.797 4.289 3.831 6.453c1.867 1.986 3.986 1.854 3.986 1.854h.961z" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </>
        }
      />
    </div>
  );
}

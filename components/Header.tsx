"use client";

import Link from "next/link";

interface HeaderProps {
  logo?: React.ReactNode;
  navigation?: { label: string; href: string }[];
  actions?: React.ReactNode;
}

export default function Header({ logo, navigation, actions }: HeaderProps) {
  return (
    <header className="bg-gray-500/30 border-b border-gray-200 shadow-sm">
      <div className=" mx-auto px-4 py-4">
        <div className="flex items-center gap-8">
          {/* Логотип - теперь всегда прижат к левому краю */}
          <div className="flex items-center gap-2">
            {logo || (
              <div className="text-2xl font-bold text-gray-800">archive</div>
            )}
          </div>

          {/* Навигация - занимает оставшееся пространство по центру */}
          {navigation && (
            <nav className="flex items-center gap-6">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Действия - прижаты к правому краю */}
          {actions && (
            <div className="flex items-center gap-3 ml-auto">{actions}</div>
          )}
        </div>
      </div>
    </header>
  );
}

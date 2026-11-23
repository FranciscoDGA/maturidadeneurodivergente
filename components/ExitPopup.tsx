"use client";

import { useState, useEffect, useCallback } from "react";

export default function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (hasShown) return;
      if (e.clientY <= 5) {
        setIsOpen(true);
        setHasShown(true);
      }
    },
    [hasShown]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleEnableNotifications = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        new Notification("Maturidade Neurodivergente", {
          body: "Notificações ativadas! Você receberá nossos melhores conteúdos.",
          icon: "/images/logo.png",
        });
      }
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-dark-card border border-neutral-200 dark:border-dark-border rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-3xl mb-5 shadow-lg">
            🧠
          </div>

          <h2 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-3">
            Antes de ir...
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
            Que tal receber conteúdo exclusivo sobre neurodiversidade direto
            no seu celular? <strong>Sem spam, prometemos.</strong>
          </p>

          {/* Benefits */}
          <div className="space-y-3 mb-6 text-left">
            <div className="flex items-start gap-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-3">
              <span className="text-xl mt-0.5">🔔</span>
              <div>
                <p className="font-bold text-sm text-neutral-900 dark:text-white">
                  Notificações
                </p>
                <p className="text-xs text-neutral-500">
                  Receba alertas de novos artigos e dicas práticas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-3">
              <span className="text-xl mt-0.5">💬</span>
              <div>
                <p className="font-bold text-sm text-neutral-900 dark:text-white">
                  Grupo WhatsApp
                </p>
                <p className="text-xs text-neutral-500">
                  Comunidade ativa com +200 neurodivergentes trocando ideia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-3">
              <span className="text-xl mt-0.5">📚</span>
              <div>
                <p className="font-bold text-sm text-neutral-900 dark:text-white">
                  E-book Grátis
                </p>
                <p className="text-xs text-neutral-500">
                  Guia &ldquo;10 Ferramentas para Neurodivergentes&rdquo; ao se inscrever
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <button
              onClick={handleEnableNotifications}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              🔔 Ativar Notificações de Novos Artigos
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 text-sm font-medium py-2 transition-colors"
            >
              Continuar lendo o artigo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

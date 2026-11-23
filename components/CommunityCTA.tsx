"use client";

export default function CommunityCTA() {
  return (
    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden my-12">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-10 translate-x-10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-y-10 -translate-x-10" />

      <div className="relative z-10 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl mb-5 shadow-lg">
          💬
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
          Junte-se à Comunidade
        </h3>
        <p className="text-white/85 mb-8 max-w-lg mx-auto leading-relaxed">
          Entre no nosso grupo exclusivo no WhatsApp e conecte-se com mais de{" "}
          <strong>200 neurodivergentes</strong>. Tire dúvidas, compartilhe
          experiências e receba conteúdos exclusivos.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            "✅ Conteúdo exclusivo",
            "✅ Comunidade acolhedora",
            "✅ Dicas práticas diárias",
            "✅ Sem spam",
          ].map((benefit) => (
            <span
              key={benefit}
              className="bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full"
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://instagram.com/maturidadend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-4 px-8 rounded-2xl hover:bg-neutral-100 transition-colors shadow-lg text-lg"
          >
            Acompanhar no Instagram
          </a>

          <a
            href="/blog"
            className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/25 transition-colors border border-white/20"
          >
            Explorar Todos os Artigos
          </a>
        </div>
      </div>
    </div>
  );
}

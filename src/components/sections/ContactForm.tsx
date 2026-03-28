"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Form submitted:", data);
    toast.success("Demande envoyée avec succès ! Nous vous recontactons sous 24h.");
    reset();
  };

  return (
    <section className="py-14 lg:py-28 bg-pool-mid/40" id="contact">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Demander un Devis Gratuit
          </h2>
          <p className="mt-3 text-center text-sm text-crystal/60 sm:mt-4 sm:text-base">
            Remplissez le formulaire et nous vous recontactons sous 24h.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5 rounded-2xl glass-card p-5 shadow-pool-glow sm:mt-10 sm:space-y-6 sm:p-8"
            noValidate
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-crystal/80 sm:text-sm sm:font-medium">
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className={`mt-2 block w-full rounded-xl border bg-pool-floor/50 px-4 py-4 text-base text-white placeholder-crystal/30 transition-colors focus:border-aqua focus:ring-0 sm:rounded-lg sm:py-3 sm:text-sm ${
                  errors.name ? "border-red-500" : "border-aqua/15"
                }`}
                placeholder="Votre nom"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-crystal/80 sm:text-sm sm:font-medium">
                Téléphone (WhatsApp)
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className={`mt-2 block w-full rounded-xl border bg-pool-floor/50 px-4 py-4 text-base text-white placeholder-crystal/30 transition-colors focus:border-aqua focus:ring-0 sm:rounded-lg sm:py-3 sm:text-sm ${
                  errors.phone ? "border-red-500" : "border-aqua/15"
                }`}
                placeholder="+212 6XX XXX XXX"
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-red-400">{errors.phone.message}</p>
              )}
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-crystal/80 sm:text-sm sm:font-medium">
                Service souhaité
              </label>
              <select
                id="service"
                {...register("service")}
                className={`mt-2 block w-full rounded-xl border bg-pool-floor/50 px-4 py-4 text-base text-white transition-colors focus:border-aqua focus:ring-0 sm:rounded-lg sm:py-3 sm:text-sm ${
                  errors.service ? "border-red-500" : "border-aqua/15"
                }`}
                defaultValue=""
              >
                <option value="" disabled>
                  Choisir un service
                </option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1.5 text-xs text-red-400">{errors.service.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-crystal/80 sm:text-sm sm:font-medium">
                Message (optionnel)
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                className="mt-2 block w-full rounded-xl border border-aqua/15 bg-pool-floor/50 px-4 py-4 text-base text-white placeholder-crystal/30 transition-colors focus:border-aqua focus:ring-0 sm:rounded-lg sm:py-3 sm:text-sm"
                placeholder="Décrivez votre besoin..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-aqua px-8 py-4 text-base font-bold text-deep transition-colors hover:bg-aqua/90 disabled:opacity-50 min-h-14 sm:rounded-sm sm:py-3.5 sm:text-sm sm:font-semibold sm:min-h-12"
            >
              <Send className="h-5 w-5 sm:h-4 sm:w-4" />
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

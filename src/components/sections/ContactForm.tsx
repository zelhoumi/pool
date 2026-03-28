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

  const inputClass = (hasError: boolean) =>
    `mt-1.5 block w-full rounded-xl border bg-pool-floor/50 px-4 py-3.5 text-[15px] text-white placeholder-crystal/30 transition-colors focus:border-aqua focus:ring-0 sm:mt-1 sm:rounded-lg sm:py-3 sm:text-sm ${
      hasError ? "border-red-500" : "border-aqua/15"
    }`;

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-pool-mid/40" id="contact">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center font-display text-[22px] font-bold text-white sm:text-3xl lg:text-4xl">
            Demander un Devis Gratuit
          </h2>
          <p className="mt-2 text-center text-[13px] text-crystal/60 sm:mt-4 sm:text-base">
            Remplissez le formulaire et nous vous recontactons sous 24h.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 space-y-4 rounded-2xl glass-card p-4 shadow-pool-glow sm:mt-10 sm:space-y-6 sm:p-8"
            noValidate
          >
            <div>
              <label htmlFor="name" className="block text-[13px] font-semibold text-crystal/80 sm:text-sm">
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className={inputClass(!!errors.name)}
                placeholder="Votre nom"
              />
              {errors.name && (
                <p className="mt-1 text-[12px] text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-[13px] font-semibold text-crystal/80 sm:text-sm">
                Téléphone (WhatsApp)
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className={inputClass(!!errors.phone)}
                placeholder="+212 6XX XXX XXX"
              />
              {errors.phone && (
                <p className="mt-1 text-[12px] text-red-400">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="service" className="block text-[13px] font-semibold text-crystal/80 sm:text-sm">
                Service souhaité
              </label>
              <select
                id="service"
                {...register("service")}
                className={inputClass(!!errors.service)}
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
                <p className="mt-1 text-[12px] text-red-400">{errors.service.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-[13px] font-semibold text-crystal/80 sm:text-sm">
                Message (optionnel)
              </label>
              <textarea
                id="message"
                rows={3}
                {...register("message")}
                className="mt-1.5 block w-full rounded-xl border border-aqua/15 bg-pool-floor/50 px-4 py-3.5 text-[15px] text-white placeholder-crystal/30 transition-colors focus:border-aqua focus:ring-0 sm:mt-1 sm:rounded-lg sm:py-3 sm:text-sm"
                placeholder="Décrivez votre besoin..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-aqua px-6 py-4 text-[15px] font-bold text-deep active:scale-[0.98] disabled:opacity-50 sm:rounded-lg sm:py-3.5 sm:text-sm sm:font-semibold"
            >
              <Send className="h-4.5 w-4.5 sm:h-4 sm:w-4" />
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

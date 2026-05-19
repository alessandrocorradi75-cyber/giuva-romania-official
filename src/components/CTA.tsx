import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-cta px-5 py-20 text-center text-slate-950">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-black leading-tight tracking-normal md:text-6xl">Construim GIUVA.RO.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
          Participă, susține, propune un protocol, trimite o poveste sau devino parte din comunitate.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-slate-500">
          Join, support, propose a protocol, share a story or become part of the community.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/contact" className="btn blue">
            Contact GIUVA
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

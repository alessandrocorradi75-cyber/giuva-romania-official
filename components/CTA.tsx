import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="navy-band px-5 py-20 text-center text-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-black leading-tight tracking-normal md:text-6xl">GIUVA.RO este în construcție.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50/80">
          Platformă civică în dezvoltare pentru voluntariat, pregătire comunitară și cultură a prevenției.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/contact" className="btn btn-primary">
            Contactează GIUVA
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

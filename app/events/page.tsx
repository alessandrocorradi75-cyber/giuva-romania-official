import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/portal/Breadcrumbs";
import { EventCard } from "@/components/portal/Cards";
import { EmptyState } from "@/components/portal/EmptyState";
import { PageHero } from "@/components/PageHero";
import { eventGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Structură evenimente GIUVA Romania: upcoming events, past events și evenimente în dezvoltare."
};

export default function EventsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Events" }]} />
      <PageHero
        eyebrow="Events"
        title="Calendar civic pregătit pentru comunități și academy."
        text="Structură Release 1.0 pentru evenimente viitoare și trecute. Evenimentele reale vor fi publicate doar după validare, organizator și detalii confirmate."
        actions={[{ href: "/contact", label: "Propune un eveniment" }, { href: "/news", label: "Noutăți", tone: "ghost" }]}
      />
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black text-[#081f3a]">Upcoming Events</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {eventGroups.upcoming.map((event) => <EventCard key={event.title} event={event} />)}
          </div>
          <h2 className="mt-14 text-3xl font-black text-[#081f3a]">Past Events</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {eventGroups.past.map((event) => <EventCard key={event.title} event={event} />)}
            <EmptyState title="Arhivă evenimente" text="Arhiva va fi completată gradual cu evenimente reale, rapoarte, galerii și rezultate documentate." href="/journey" action="Vezi Journey" />
          </div>
        </div>
      </section>
    </>
  );
}

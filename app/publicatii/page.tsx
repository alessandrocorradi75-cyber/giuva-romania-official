import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/portal/Breadcrumbs";
import { DocumentCard } from "@/components/portal/Cards";
import { PageHero } from "@/components/PageHero";
import { publications } from "@/data/site";

export const metadata: Metadata = {
  title: "Publicații",
  description: "Annual Report, Impact Report, Guidelines, Policies, Manuals și documente instituționale GIUVA Romania."
};

export default function PublicationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Publicații" }]} />
      <PageHero
        eyebrow="Publications"
        title="Publicații instituționale și rapoarte de impact."
        text="Secțiune pregătită pentru rapoarte anuale, impact, guidelines, policies, manuals și documente instituționale. Nu sunt publicate documente nereale sau nevalidate."
        actions={[{ href: "/transparenta", label: "Transparență" }, { href: "/download-center", label: "Download Center", tone: "ghost" }]}
      />
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {publications.map((item) => <DocumentCard key={item.title} item={item} />)}
        </div>
      </section>
    </>
  );
}

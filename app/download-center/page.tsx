import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/portal/Breadcrumbs";
import { DocumentCard } from "@/components/portal/Cards";
import { EmptyState } from "@/components/portal/EmptyState";
import { PageHero } from "@/components/PageHero";
import { downloadItems } from "@/data/site";

export const metadata: Metadata = {
  title: "Download Center",
  description: "Documentație, manuale, media kit, brand assets, template și download GIUVA Romania."
};

export default function DownloadCenterPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Download Center" }]} />
      <PageHero
        eyebrow="Download Center"
        title="Documente publice și materiale pregătite pentru Release 1.0."
        text="Download Center separă documentația publică, manualele, media kit-ul, brand assets, template-urile și materialele viitoare. Nu publicăm documente nereale sau proceduri sensibile."
        actions={[{ href: "/contact", label: "Solicită informații" }, { href: "/transparenta", label: "Documente publice", tone: "ghost" }]}
      />
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {downloadItems.map((item) => <DocumentCard key={item.title} item={item} />)}
          <EmptyState title="Manuale operaționale complete" text="Manualele, procedurile sensibile și documentele interne nu sunt publice în Release 1.0." />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/portal/Breadcrumbs";
import { NewsCard } from "@/components/portal/Cards";
import { SearchBox } from "@/components/portal/SearchBox";
import { PageHero } from "@/components/PageHero";
import { newsCenter, portalSearchItems } from "@/data/site";

export const metadata: Metadata = {
  title: "News Center",
  description: "Noutăți și actualizări GIUVA Romania cu categorie, disciplină, țară, autor, taguri și imagine."
};

export default function NewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "News Center" }]} />
      <PageHero
        eyebrow="News Center"
        title="Actualizări publice, documentate și ușor de urmărit."
        text="News Center este pregătit pentru comunicare publică instituțională, proiecte pilot, community, voluntariat, academy și dezvoltare europeană."
        actions={[{ href: "/events", label: "Events" }, { href: "/publicatii", label: "Publicații", tone: "ghost" }]}
      />
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <SearchBox items={portalSearchItems} label="Caută în News Center" />
          <div className="grid gap-5 md:grid-cols-2">
            {newsCenter.map((article) => <NewsCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   Blog — Articoli su consigli per imparare l'italiano
   Multilingue (IT, EN, FR, AR)
   ============================================================ */
import { useTranslation } from "@/hooks/useTranslation";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  titleKey: string;
  descriptionKey: string;
  contentKey: string;
  authorKey: string;
  dateKey: string;
  categoryKey: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    titleKey: "blog.post1Title",
    descriptionKey: "blog.post1Desc",
    contentKey: "blog.post1Content",
    authorKey: "blog.post1Author",
    dateKey: "blog.post1Date",
    categoryKey: "blog.post1Category",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663775518602/JeB9mAageaHKV6ReJxfunQ/online-lesson-FED86btkq4PSsA62EqFs7V.webp",
  },
  {
    id: "2",
    titleKey: "blog.post2Title",
    descriptionKey: "blog.post2Desc",
    contentKey: "blog.post2Content",
    authorKey: "blog.post2Author",
    dateKey: "blog.post2Date",
    categoryKey: "blog.post2Category",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663775518602/JeB9mAageaHKV6ReJxfunQ/culture-italian.jpg",
  },
  {
    id: "3",
    titleKey: "blog.post3Title",
    descriptionKey: "blog.post3Desc",
    contentKey: "blog.post3Content",
    authorKey: "blog.post3Author",
    dateKey: "blog.post3Date",
    categoryKey: "blog.post3Category",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663775518602/JeB9mAageaHKV6ReJxfunQ/italy-landscape.jpg",
  },
];

export default function Blog() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#C4622D] to-[#D97B4A]">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              {t("blog.title")}
            </h1>
            <p className="font-body text-lg text-white/90">
              {t("blog.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-muted">
                  <img
                    src={post.image}
                    alt={t(post.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[#C4622D] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {t(post.categoryKey)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{t(post.dateKey)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{t(post.authorKey)}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-[#C4622D] transition-colors">
                    {t(post.titleKey)}
                  </h3>

                  <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-3">
                    {t(post.descriptionKey)}
                  </p>

                  <Button
                    variant="outline"
                    className="w-full group/btn"
                  >
                    {t("blog.readMore")}
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#F5EDD6]">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#3D4A2E] mb-4">
            {t("blog.ctaTitle")}
          </h2>
          <p className="font-body text-lg text-[#3D4A2E]/75 mb-8 max-w-2xl mx-auto">
            {t("blog.ctaDescription")}
          </p>
          <Button
            className="bg-[#C4622D] hover:bg-[#B85424] text-white"
            size="lg"
          >
            {t("blog.ctaButton")}
          </Button>
        </div>
      </section>
    </div>
  );
}

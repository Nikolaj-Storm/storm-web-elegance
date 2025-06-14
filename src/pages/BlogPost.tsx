
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";

const BlogPost = () => {
  const { slug } = useParams();

  // This would typically come from a data source
  const post = {
    title: "Kunstig intelligens og etiske overvejelser",
    date: "15. november 2024",
    content: `
      <p>Kunstig intelligens er ikke længere science fiction - det er en realitet, der former vores hverdag på måder, vi måske ikke engang er bevidste om. Fra de anbefalinger, vi modtager på sociale medier, til de diagnostiske værktøjer, der bruges i sundhedsvæsenet, spiller AI en stadig større rolle i samfundet.</p>
      
      <h2>De etiske udfordringer</h2>
      <p>Men med stor magt følger stort ansvar. Når algoritmer træffer beslutninger, der påvirker menneskers liv, bliver etiske overvejelser afgørende. Hvordan sikrer vi, at AI-systemer er retfærdige? Hvordan håndterer vi bias i data? Og hvem er ansvarlig, når noget går galt?</p>
      
      <h2>Vejen frem</h2>
      <p>Svaret ligger ikke i at stoppe udviklingen, men i at guide den. Vi har brug for robuste etiske rammer, tværfagligt samarbejde og en kontinuerlig dialog mellem teknologer, politikere, filosoffer og samfundet som helhed.</p>
      
      <p>Kun ved at tage disse udfordringer alvorligt kan vi sikre, at kunstig intelligens bliver en kraft for det gode i verden.</p>
    `
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <article className="bg-card p-8 md:p-12 rounded-lg shadow-sm border border-border">
              <header className="mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 leading-tight">
                  {post.title}
                </h1>
                <time className="text-muted-foreground text-lg">
                  {post.date}
                </time>
              </header>
              
              <div 
                className="prose prose-lg max-w-none text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;

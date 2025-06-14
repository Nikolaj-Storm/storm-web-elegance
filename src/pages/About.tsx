
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
                Om Nikolaj Storm Petersen
              </h1>
              <div className="w-32 h-32 bg-accent rounded-full mx-auto mb-8 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card p-8 rounded-lg shadow-sm border border-border mb-8">
                <h2 className="text-2xl font-display font-semibold text-primary mb-4">Baggrund</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Jeg er forsker og teknolog med en passion for at udforske, hvordan avancerede teknologier kan løse komplekse samfundsproblemer. Mit arbejde spænder over områder som kunstig intelligens, bæredygtig udvikling og etiske teknologiske rammer.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Med en tværfaglig tilgang kombinerer jeg teknisk ekspertise med samfundsvidenskabelige perspektiver for at skabe innovative løsninger, der gavner både mennesker og miljø.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-sm border border-border mb-8">
                <h2 className="text-2xl font-display font-semibold text-primary mb-4">Forskningsområder</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Kunstig Intelligens</h3>
                    <p className="text-muted-foreground text-sm">
                      Machine learning, etisk AI, og menneske-maskine interaktion
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Bæredygtig Teknologi</h3>
                    <p className="text-muted-foreground text-sm">
                      Grønne teknologier, Smart Cities, og miljøoptimering
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Data Science</h3>
                    <p className="text-muted-foreground text-sm">
                      Big data analyse, blockchain, og sikker datadeling
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Teknologietik</h3>
                    <p className="text-muted-foreground text-sm">
                      Etiske rammer, privacy, og sociale konsekvenser af teknologi
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
                <h2 className="text-2xl font-display font-semibold text-primary mb-4">Kontakt</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Jeg er altid interesseret i at diskutere nye ideer og potentielle samarbejder. 
                  Kontakt mig gerne, hvis du vil vide mere om mit arbejde eller har forslag til spændende projekter.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:nikolaj@example.com"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                  >
                    📧 Send Email
                  </a>
                  <a 
                    href="https://linkedin.com/in/nikolajstorm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-medium"
                  >
                    💼 LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

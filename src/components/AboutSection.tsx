import { Heart, Shield, TrendingUp, Users } from 'lucide-react';
import aboutImage from '@/assets/about-image.jpg';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Built on Promise",
      description: "Every piece of land represents dreams, growth, and security for families"
    },
    {
      icon: Shield,
      title: "Rooted in Trust",
      description: "Transparency and ethics guide every decision we make"
    },
    {
      icon: TrendingUp,
      title: "Future-Ready",
      description: "Innovation meets sustainability in all our developments"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Building relationships and legacies that last generations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-landora-blue mb-6">
            About Landora Projects & Developers Pvt Ltd
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-landora-orange to-landora-red mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage}
                alt="Landora Development Process"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-landora-blue/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-landora-green mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                At Landora, we see land not just as a piece of property — but as a{' '}
                <span className="text-gradient-secondary bg-gradient-to-r from-landora-green to-landora-teal bg-clip-text text-transparent">
                  promise
                </span>
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A promise of growth, security, dreams, and a better tomorrow.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rooted in trust, driven by innovation, and inspired by the dreams of every Indian family, 
                we transform land into future-ready communities where life thrives and legacies are built.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                "50,000+ satisfied customers across AP & Telangana",
                "100% clear title guarantee on all projects", 
                "Vastu-compliant layouts for prosperity",
                "Transparent pricing with no hidden costs"
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-landora-green rounded-full"></div>
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="landora-card text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-landora-green to-landora-teal rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
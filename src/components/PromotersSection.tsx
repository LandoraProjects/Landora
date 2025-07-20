import { Users, Award, TrendingUp, Heart } from 'lucide-react';
import promotersImage from '@/assets/promoters-image.jpg';

const PromotersSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "50,000+",
      label: "Customer Base",
      description: "Trusted by families across AP & Telangana"
    },
    {
      icon: Award,
      number: "25+",
      label: "Years Experience",
      description: "Quarter-century of ethical real estate"
    },
    {
      icon: TrendingUp,
      number: "100%",
      label: "Success Rate",
      description: "Every promise delivered with integrity"
    },
    {
      icon: Heart,
      number: "∞",
      label: "Trust Built",
      description: "Relationships that last generations"
    }
  ];

  return (
    <section id="promoters" className="py-20 bg-gradient-to-r from-landora-green/10 to-landora-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-landora-blue mb-6">
            Meet Our Promoters
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-landora-orange to-landora-red mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visionary leaders who don't just develop projects — they develop futures
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image & Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={promotersImage}
                alt="Landora Promoters"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-landora-blue/40 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-landora-green mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Families</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-landora-orange mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Years Legacy</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="space-y-8">
              {/* Promoter 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold text-landora-blue mb-2">
                  Mr. Ramisetti Koteswara Rao
                </h3>
                <p className="text-landora-green font-semibold mb-4">
                  Director – Corporate Strategy & Customer Relations
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Over 25 years' experience as a mentor to thousands, building a customer base of 50,000+. 
                  Known for secure, ethical, and meaningful land investments that transform lives.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="bg-landora-green/10 text-landora-green px-3 py-1 rounded-full">Customer Relations Expert</span>
                  <span className="bg-landora-orange/10 text-landora-orange px-3 py-1 rounded-full">Strategic Visionary</span>
                </div>
              </div>

              {/* Promoter 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold text-landora-blue mb-2">
                  Mr. Suroju Siva Kumar
                </h3>
                <p className="text-landora-green font-semibold mb-4">
                  Director – Technical Operations & Network Leadership
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Helped over 50,000 people grow through network-based training and mentorship. 
                  Expert in people-first, system-driven leadership and operational excellence.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="bg-landora-teal/10 text-landora-teal px-3 py-1 rounded-full">Technical Excellence</span>
                  <span className="bg-landora-red/10 text-landora-red px-3 py-1 rounded-full">Network Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="bg-gradient-to-r from-landora-blue to-landora-teal rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Leadership Philosophy</h3>
          <blockquote className="text-2xl font-semibold text-white/95 mb-6 max-w-4xl mx-auto">
            "Buying land is not just about money — it's about legacy. Every plot we sell should be 
            clear, clean, and worthy of your dreams."
          </blockquote>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Our promoters believe in building not just properties, but promises. Every project is a 
            testament to their commitment to ethical business practices and customer success.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-landora-green to-landora-teal rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-landora-blue mb-2">{achievement.number}</div>
              <div className="text-xl font-semibold text-foreground mb-2">{achievement.label}</div>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotersSection;
import { Shield, FileCheck, Eye, Users, Award, Handshake, Zap, Leaf, Lightbulb } from 'lucide-react';

const WhyLandoraSection = () => {
  const reasons = [
    {
      icon: FileCheck,
      title: "100% Clear Title Plots",
      description: "Every plot comes with verified, legally clear documentation"
    },
    {
      icon: Shield,
      title: "Vastu-Compliant Projects",
      description: "Layouts designed according to ancient principles for prosperity"
    },
    {
      icon: Eye,
      title: "Transparent Pricing",
      description: "No hidden costs, no surprises - complete clarity in every transaction"
    },
    {
      icon: Users,
      title: "First-Time Buyer Support",
      description: "Dedicated guidance for new investors and experienced buyers alike"
    },
    {
      icon: Award,
      title: "Long-Term Vision",
      description: "Building relationships and value that lasts for generations"
    }
  ];

  const coreValues = [
    {
      icon: Eye,
      title: "Transparency",
      subtitle: "Open, honest, clear",
      color: "from-landora-orange to-landora-red"
    },
    {
      icon: Shield,
      title: "Integrity & Ethics",
      subtitle: "Every sale is fair, every word backed by action",
      color: "from-landora-green to-landora-teal"
    },
    {
      icon: FileCheck,
      title: "Clear Title Promise",
      subtitle: "Legally clear, verified lands only",
      color: "from-landora-teal to-landora-blue"
    },
    {
      icon: Users,
      title: "Customer-First",
      subtitle: "We listen, we care, we customize",
      color: "from-landora-red to-landora-orange"
    },
    {
      icon: Award,
      title: "Accountability",
      subtitle: "Full ownership of every promise, every outcome",
      color: "from-landora-green-light to-landora-green"
    },
    {
      icon: Handshake,
      title: "Respect & Relationships",
      subtitle: "Respect is earned, every step of the way",
      color: "from-landora-blue to-landora-teal"
    },
    {
      icon: Zap,
      title: "Innovation",
      subtitle: "Smarter layouts, digital-first, future-ready",
      color: "from-landora-orange to-landora-green"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      subtitle: "Green spaces, smart planning, tomorrow matters",
      color: "from-landora-teal to-landora-green"
    },
    {
      icon: Lightbulb,
      title: "Empowerment",
      subtitle: "Land ownership should be within reach for every dreamer",
      color: "from-landora-red to-landora-blue"
    }
  ];

  return (
    <section id="why-landora" className="py-20 bg-gradient-to-b from-muted/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-landora-blue mb-6">
            Why Choose Landora?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-landora-orange to-landora-red mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Because we understand that buying land is a dream, not just a transaction
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className="landora-card group text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-landora-green to-landora-teal rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="bg-gradient-to-r from-landora-blue/5 to-landora-teal/5 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-landora-blue mb-6">
              Our Core Values – "Land into Landmarks"
            </h3>
            <p className="text-lg text-muted-foreground">
              Nine principles that guide every decision, every project, every relationship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className={`w-14 h-14 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border-l-4 border-landora-green">
            <blockquote className="text-2xl font-semibold text-landora-blue mb-4">
              "We don't just sell land — we turn land into Landmarks of Trust."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              Every plot we deliver should be clear, clean, and worthy of your dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLandoraSection;
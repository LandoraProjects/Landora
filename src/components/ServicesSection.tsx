import { MapPin, FileCheck, Users, TrendingUp, Building, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "Open Plot Ventures",
      description: "Premium residential and commercial plots in prime locations across AP & Telangana",
      features: ["Strategic locations", "Future growth potential", "Clear road connectivity"]
    },
    {
      icon: Compass,
      title: "Vastu-Compliant Layouts",
      description: "Scientifically designed layouts following ancient Vastu principles for prosperity",
      features: ["North-East facing plots", "Proper directional planning", "Positive energy flow"]
    },
    {
      icon: FileCheck,
      title: "Clear Title Documentation",
      description: "100% legally verified documents with complete transparency and authenticity",
      features: ["Legal verification", "Title insurance", "Government approvals"]
    },
    {
      icon: Users,
      title: "Customer & Investor Support",
      description: "Dedicated support from selection to registration and beyond",
      features: ["Free site visits", "Investment guidance", "Post-purchase support"]
    }
  ];

  const marketOpportunity = [
    {
      icon: TrendingUp,
      stat: "70%",
      label: "Urban Growth by 2030",
      description: "India's urban/semi-urban population will reach 70% making land increasingly precious"
    },
    {
      icon: Building,
      stat: "Limited",
      label: "Habitable Land",
      description: "Only a tiny fraction of land is habitable - value is rising exponentially"
    },
    {
      icon: Users,
      stat: "Legacy",
      label: "Family Security",
      description: "For most Indians, land represents financial independence and family heritage"
    }
  ];

  const projects = [
    {
      name: "Landora Heights",
      location: "Hyderabad Outskirts",
      size: "200 plots",
      price: "₹12 Lakhs onwards",
      status: "Ready to Move",
      image: "bg-gradient-to-r from-landora-green to-landora-teal"
    },
    {
      name: "Green Valley Estates",
      location: "Visakhapatnam",
      size: "150 plots", 
      price: "₹8 Lakhs onwards",
      status: "Booking Open",
      image: "bg-gradient-to-r from-landora-orange to-landora-red"
    },
    {
      name: "Landmark Residency",
      location: "Amaravati Corridor",
      size: "300 plots",
      price: "₹15 Lakhs onwards", 
      status: "Pre-Launch",
      image: "bg-gradient-to-r from-landora-teal to-landora-blue"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-landora-blue mb-6">
            Our Services & Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-landora-orange to-landora-red mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive real estate solutions designed to turn your land investment dreams into reality
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="landora-card group">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-landora-green to-landora-teal rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-landora-green rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Opportunity */}
        <div className="bg-gradient-to-r from-landora-blue/5 to-landora-teal/5 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-landora-blue mb-6">
              Market Opportunity & Growth
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Land is emotion and legacy in India. The opportunity has never been greater.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {marketOpportunity.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-landora-orange to-landora-red rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-landora-blue mb-2">{item.stat}</div>
                <div className="text-xl font-semibold text-foreground mb-3">{item.label}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <blockquote className="text-2xl font-semibold text-landora-blue mb-4">
              "Earlier, a man with a kingdom was a king. In the future, the one who owns land will be the king."
            </blockquote>
            <p className="text-muted-foreground">Ancient wisdom for modern investment</p>
          </div>
        </div>

        {/* Project Highlights */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-landora-blue mb-6">
              Featured Projects
            </h3>
            <p className="text-lg text-muted-foreground">
              Discover our premium developments across Andhra Pradesh & Telangana
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className={`h-48 ${project.image} flex items-center justify-center relative`}>
                  <div className="text-center text-white">
                    <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                    <p className="text-white/90">{project.location}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Size</div>
                      <div className="font-semibold">{project.size}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Starting Price</div>
                      <div className="font-semibold text-landora-green">{project.price}</div>
                    </div>
                  </div>
                  <Button 
                    onClick={scrollToContact}
                    variant="outline" 
                    className="w-full border-landora-green text-landora-green hover:bg-landora-green hover:text-white"
                  >
                    Get Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-landora-orange to-landora-red rounded-3xl p-8 lg:p-12 text-white">
          <h3 className="text-3xl font-bold mb-6">Ready to Start Your Investment Journey?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Make land ownership accessible, secure, and impactful for your family's future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="bg-white text-landora-orange hover:bg-white/90 px-8 py-4 text-lg font-semibold"
            >
              Talk to Our Advisor
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-landora-orange hover:border-white px-8 py-4 text-lg font-semibold bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
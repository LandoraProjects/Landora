import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({ name: '', phone: '', email: '', interest: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 97037 55456", "+91 99128 26716"],
      action: "Call Now",
      gradient: "from-landora-green to-landora-teal"
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: ["landora.enquire@gmail.com"],
      action: "Send Email",
      gradient: "from-landora-orange to-landora-red"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Corporate Office", "Hyderabad, Telangana"],
      action: "Get Directions",
      gradient: "from-landora-teal to-landora-blue"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sat: 9 AM - 7 PM", "Sunday: 10 AM - 5 PM"],
      action: "Schedule Visit",
      gradient: "from-landora-red to-landora-orange"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-landora-blue mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-landora-orange to-landora-red mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your land investment journey? Let's discuss your dreams and make them reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-border">
            <h3 className="text-2xl font-bold text-landora-blue mb-6">Start Your Investment Journey</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="border-landora-green/20 focus:border-landora-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 99999 99999"
                    required
                    className="border-landora-green/20 focus:border-landora-green"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="border-landora-green/20 focus:border-landora-green"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">I'm Interested In *</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-landora-green/20 rounded-lg focus:border-landora-green focus:outline-none focus:ring-2 focus:ring-landora-green/20"
                >
                  <option value="">Select your interest</option>
                  <option value="residential-plots">Residential Plots</option>
                  <option value="commercial-plots">Commercial Plots</option>
                  <option value="investment-guidance">Investment Guidance</option>
                  <option value="site-visit">Free Site Visit</option>
                  <option value="documentation-help">Documentation Help</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements, budget, preferred location..."
                  rows={4}
                  className="border-landora-green/20 focus:border-landora-green"
                />
              </div>

              <Button type="submit" className="btn-primary w-full text-lg py-4 group">
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Quick Actions */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Need immediate assistance?</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-green-600 hover:bg-green-700 text-white flex-1">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="border-landora-blue text-landora-blue hover:bg-landora-blue hover:text-white flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{info.title}</h4>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    {info.action}
                  </Button>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-r from-landora-blue to-landora-teal flex items-center justify-center relative">
                <div className="text-center text-white">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Find Us</h4>
                  <p>Interactive map coming soon</p>
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-foreground mb-2">Corporate Office</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Plot No. 12, Rd Number 8, Gayatri Nagar, Vivekananda Nagar, Kukatpally<br />
                  Hyderabad, Telangana - 500072<br />
                  India
                </p>
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-landora-green to-landora-teal rounded-3xl p-8 lg:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't wait for the perfect moment. The best time to invest in land was yesterday. The second best time is now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-landora-green hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              Schedule Site Visit
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-landora-green hover:border-white px-8 py-4 text-lg font-semibold bg-transparent">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
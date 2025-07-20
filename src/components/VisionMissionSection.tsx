import { Target, Eye, CheckCircle, Leaf, Users, TrendingUp } from 'lucide-react';

const VisionMissionSection = () => {
  const missionPoints = [
    {
      icon: CheckCircle,
      text: "Deliver vastu-compliant, value-rich real estate that works for both families and investors"
    },
    {
      icon: Users,
      text: "Build every project with transparency, ethics, and respect for our customers"
    },
    {
      icon: TrendingUp,
      text: "Create long-term success stories for customers, investors, and associates alike"
    },
    {
      icon: Leaf,
      text: "Blend modern design with nature — using green infrastructure and smart solutions"
    },
    {
      icon: Target,
      text: "Focus not just on selling plots, but on building lifelong relationships"
    }
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-r from-landora-blue to-landora-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-landora-orange to-landora-red mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Guided by purpose, driven by excellence, committed to your dreams
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Vision */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-landora-orange to-landora-red rounded-2xl flex items-center justify-center mr-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">🌟 Vision</h3>
                <div className="w-12 h-1 bg-white/30 rounded"></div>
              </div>
            </div>
            
            <p className="text-lg text-white/90 leading-relaxed">
              To be India's most trusted and forward-thinking real estate brand — shaping land into 
              sustainable landmarks that uplift communities and secure futures.
            </p>
            
            {/* Vision Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-white">India's</div>
                <div className="text-sm text-white/80">Most Trusted</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-white">Future</div>
                <div className="text-sm text-white/80">Forward Thinking</div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-landora-green to-landora-teal rounded-2xl flex items-center justify-center mr-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">🎯 Mission</h3>
                <div className="w-12 h-1 bg-white/30 rounded"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-200">
                    <point.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-white/90 leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">
              Building Tomorrow's Landmarks Today
            </h4>
            <p className="text-white/90 text-lg">
              Join thousands of families who have trusted us with their dreams and investments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
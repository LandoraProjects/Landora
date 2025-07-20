// import { Star, Quote } from 'lucide-react';

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: "mmmm",
//       location: "Hyderabad",
//       rating: 5,
//       text: "Landora made my dream of owning land a reality. Their transparent process and clear documentation gave me complete confidence. The Vastu-compliant layout is perfect for my family's future home.",
//       investment: "Purchased 2 plots in 2022"
//     },
//     {
//       name: "mmmmmm", 
//       location: "Visakhapatnam",
//       rating: 5,
//       text: "As a first-time buyer, I was nervous about land investment. The Landora team guided me through every step with patience and expertise. Today, my investment has already appreciated by 40%!",
//       investment: "First-time investor, 2023"
//     },
//     {
//       name: "mmmmm",
//       location: "Kurnool",
//       rating: 5,
//       text: "I've bought multiple plots through Landora over the years. Their commitment to quality, legal clarity, and customer service is unmatched. They truly care about building long-term relationships.",
//       investment: "5+ plots since 2019"
//     },
//     {
//       name: "mmmmmm",
//       location: "Amaravati",
//       rating: 5,
//       text: "The team at Landora helped me secure my children's future with a smart land investment. The location they recommended is now seeing tremendous growth. Very grateful for their guidance.",
//       investment: "Family investment, 2021"
//     },
//     {
//       name: "mmmmmmmm",
//       location: "Tirupati",
//       rating: 5,
//       text: "Professional, ethical, and transparent - that's Landora for you. They delivered exactly what they promised, on time and within budget. The best real estate experience I've ever had.",
//       investment: "Commercial plot, 2023"
//     },
//     {
//       name: "mmmmm",
//       location: "Warangal", 
//       rating: 5,
//       text: "Landora's post-purchase support is exceptional. Even after buying my plot, they continue to provide updates about the area development and help with any queries. True customer-first approach.",
//       investment: "Residential plot, 2022"
//     }
//   ];

//   const stats = [
//     {
//       number: "4.9/5",
//       label: "Customer Rating",
//       description: "Based on 5,000+ reviews"
//     },
//     {
//       number: "98%",
//       label: "Satisfaction Rate", 
//       description: "Happy customers who recommend us"
//     },
//     {
//       number: "100%",
//       label: "Promise Delivery",
//       description: "Every commitment fulfilled"
//     }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-landora-blue mb-6">
//             What Our Customers Say
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-landora-orange to-landora-red mx-auto mb-8"></div>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Real stories from real people who trusted us with their dreams
//           </p>
//         </div>

//         {/* Stats Bar */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
//               <div className="text-4xl font-bold text-landora-green mb-2">{stat.number}</div>
//               <div className="text-xl font-semibold text-foreground mb-2">{stat.label}</div>
//               <p className="text-sm text-muted-foreground">{stat.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
//               {/* Quote Icon */}
//               <div className="absolute -top-4 left-8">
//                 <div className="w-8 h-8 bg-gradient-to-r from-landora-green to-landora-teal rounded-full flex items-center justify-center">
//                   <Quote className="h-4 w-4 text-white" />
//                 </div>
//               </div>

//               {/* Rating */}
//               <div className="flex items-center space-x-1 mb-4 pt-2">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//                 ))}
//               </div>

//               {/* Testimonial Text */}
//               <p className="text-muted-foreground leading-relaxed mb-6 italic">
//                 "{testimonial.text}"
//               </p>

//               {/* Customer Info */}
//               <div className="border-t border-border pt-4">
//                 <div className="font-semibold text-foreground">{testimonial.name}</div>
//                 <div className="text-sm text-landora-green mb-2">{testimonial.location}</div>
//                 <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full inline-block">
//                   {testimonial.investment}
//                 </div>
//               </div>

//               {/* Hover Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-landora-green/5 to-landora-teal/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <div className="bg-gradient-to-r from-landora-blue to-landora-teal rounded-3xl p-8 lg:p-12 text-white">
//             <h3 className="text-3xl font-bold mb-4">Join Our Family of Happy Customers</h3>
//             <p className="text-xl mb-8 max-w-3xl mx-auto">
//               Be the next success story. Start your land investment journey with confidence.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-landora-blue hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
//                 Share Your Story
//               </button>
//               <button className="border border-white text-white hover:bg-white hover:text-landora-blue px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
//                 Read More Reviews
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Award, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1684167/pexels-photo-1684167.jpeg"
            alt="Pilot in cockpit"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Journey to Becoming a Professional Pilot Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert guidance, transparent fees, and a proven path to success in US aviation
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold"
              >
                Start Your Journey <ArrowRight className="ml-2" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-900 hover:bg-gray-100 rounded-lg text-lg font-semibold"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PILOTING?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support and guidance throughout your aviation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: "Expert Guidance",
                description: "Learn from experienced aviation professionals with proven track records"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Personalized Support",
                description: "Get one-on-one mentoring and tailored training programs"
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "Efficient Timeline",
                description: "Complete your training faster with our streamlined programs"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Aviation Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of successful pilots who started their journey with us
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-900 hover:bg-gray-100 rounded-lg text-lg font-semibold"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
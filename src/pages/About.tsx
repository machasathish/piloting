import { motion } from 'framer-motion';
import { Award, Star, Users, Briefcase } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Chief Flight Instructor",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "20+ years of flight instruction experience with over 10,000 flight hours"
    },
    {
      name: "Sarah Johnson",
      role: "Director of Training",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
      bio: "Former airline captain with extensive experience in pilot training and development"
    },
    {
      name: "Michael Chen",
      role: "Student Success Coordinator",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      bio: "Dedicated to helping students navigate their aviation journey successfully"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About PILOTING</h1>
            <p className="text-xl max-w-3xl">
              Since 2015, we've been helping aspiring pilots achieve their dreams through
              expert guidance and comprehensive training programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                To provide aspiring pilots with the highest quality training and support,
                ensuring their success in the aviation industry through comprehensive
                guidance and personalized attention.
              </p>
              <h3 className="text-2xl font-bold mb-4">Core Values</h3>
              <ul className="space-y-4">
                {[
                  "Excellence in aviation education",
                  "Student success and safety first",
                  "Integrity and transparency",
                  "Continuous improvement"
                ].map((value, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-3"
                  >
                    <Star className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{value}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2614854/pexels-photo-2614854.jpeg"
                alt="Pilot training"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of aviation professionals is dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Users />, stat: "500+", label: "Graduates" },
              { icon: <Award />, stat: "15+", label: "Industry Awards" },
              { icon: <Briefcase />, stat: "50+", label: "Airline Partners" },
              { icon: <Star />, stat: "98%", label: "Success Rate" }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <div className="text-blue-600">{achievement.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.stat}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
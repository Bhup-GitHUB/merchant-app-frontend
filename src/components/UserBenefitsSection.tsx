
import { motion } from "framer-motion";
import { Smartphone, Users, Banknote, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const benefits = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Scan & Pay",
    description: "Pay at any store instantly with QR codes",
    highlight: "Up to 5% Cashback",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Send to Friends",
    description: "Transfer money to anyone instantly",
    highlight: "Zero Fees",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: <Banknote className="w-8 h-8" />,
    title: "Bank Transfer",
    description: "Direct bank transfers with instant settlement",
    highlight: "Secure & Fast",
    color: "from-purple-500 to-pink-600"
  }
];

export const UserBenefitsSection = () => {
  return (
    <section className="container px-4 py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-normal mb-6"
        >
          For <span className="text-gradient font-medium">Everyone</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400"
        >
          Pay, earn cashback, and send money - all in one app
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.color} mb-6`}>
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 mb-4">{benefit.description}</p>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${benefit.color} text-white`}>
                {benefit.highlight}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button size="lg" className="button-gradient">
          Download App Now
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </section>
  );
};

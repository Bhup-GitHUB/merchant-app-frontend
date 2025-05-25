
import { motion } from "framer-motion";
import { ArrowRight, Command, Smartphone, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
          >
            <span className="text-sm font-medium">
              <Command className="w-4 h-4 inline-block mr-2" />
              Complete digital payment ecosystem
            </span>
          </motion.div>
          
          <div className="max-w-4xl relative z-10">
            <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight">
              <span className="text-gray-200">
                <TextGenerateEffect words="Pay, Earn & Accept" />
              </span>
              <br />
              <span className="text-white font-medium">
                <TextGenerateEffect words="Payments Anywhere" />
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            >
              Your all-in-one payment solution. Scan & pay with cashback, send money to friends, and accept payments as a merchant.{" "}
              <span className="text-white">Join millions of users today.</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <Button size="lg" className="button-gradient">
                <Smartphone className="mr-2 w-4 h-4" />
                Download App
              </Button>
              <Button size="lg" className="button-gradient bg-gradient-to-r from-blue-600 to-blue-500">
                <Store className="mr-2 w-4 h-4" />
                Become a Merchant
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative mx-auto max-w-5xl mt-20"
          >
            <div className="glass rounded-xl overflow-hidden">
              <img
                src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
                alt="PayApp Digital Payment Dashboard"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Features Section */}
      <div id="features" className="bg-black">
        <FeaturesSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-black">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your payments?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of users and thousands of merchants who trust our platform for their digital payment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button size="lg" className="button-gradient">
              <Smartphone className="mr-2 w-4 h-4" />
              Download Now
            </Button>
            <Button size="lg" className="button-gradient bg-gradient-to-r from-blue-600 to-blue-500">
              <Store className="mr-2 w-4 h-4" />
              Start Accepting Payments
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;

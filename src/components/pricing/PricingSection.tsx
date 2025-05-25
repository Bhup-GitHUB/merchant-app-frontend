
import { motion } from "framer-motion";
import { Check, Smartphone, Store, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
  icon,
  buttonText,
  buttonColor = "button-gradient"
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  icon: React.ReactNode;
  buttonText: string;
  buttonColor?: string;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-6 flex flex-col">
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Most Popular
        </span>
      )}
      <div className="flex items-center gap-3 mb-4">
        <div className="text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-medium">{name}</h3>
      </div>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price.includes("₹") && <span className="text-gray-400"> transaction fee</span>}
        {price === "Free" && <span className="text-gray-400"> + cashback</span>}
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={buttonColor + " w-full"}>
        {buttonText}
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Simple{" "}
          <span className="text-gradient font-medium">Transparent Pricing</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Whether you're a user or merchant, we have the perfect plan for you
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="For Users"
          price="Free"
          description="Pay anywhere, send money, and earn cashback"
          icon={<Smartphone className="w-6 h-6" />}
          features={[
            "Scan & Pay with up to 5% cashback",
            "Send money to friends - Zero fees",
            "Bank transfers - Instant settlement",
            "Bill payments & recharges",
            "24/7 customer support",
            "Secure wallet with PIN protection"
          ]}
          buttonText="Download App"
          buttonColor="bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-90 transition-opacity rounded-full"
        />
        <PricingTier
          name="For Merchants"
          price="0.05%"
          description="Accept payments up to ₹10 lakhs with lowest fees in India"
          icon={<Store className="w-6 h-6" />}
          features={[
            "Accept all payment methods",
            "Process up to ₹10 lakhs/month",
            "Only 0.05% transaction fee",
            "Instant settlement to bank",
            "QR code & payment gateway",
            "Business dashboard & analytics",
            "Inventory management tools",
            "Priority customer support"
          ]}
          isPopular
          buttonText="Start Accepting Payments"
        />
        <PricingTier
          name="Enterprise"
          price="Custom"
          description="Tailored solutions for large businesses and chains"
          icon={<Building className="w-6 h-6" />}
          features={[
            "Custom transaction limits",
            "Negotiated pricing structure",
            "Multi-location management",
            "Advanced API integration",
            "Dedicated account manager",
            "White-label solutions",
            "Custom reporting & analytics",
            "24/7 priority support"
          ]}
          buttonText="Contact Sales"
          buttonColor="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity rounded-full"
        />
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mt-16"
      >
        <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Our Payment Platform?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
            <div>
              <h4 className="font-medium text-white mb-2">Lowest Fees</h4>
              <p>At just 0.05%, we offer the most competitive rates in the market</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Instant Settlement</h4>
              <p>Get your money in your bank account immediately after transactions</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">100% Secure</h4>
              <p>Bank-grade security with PCI DSS compliance and fraud protection</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

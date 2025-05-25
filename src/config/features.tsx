
import { CreditCard, Store, TrendingUp, Shield } from "lucide-react";

export const features = [
  {
    title: "Accept All Payments",
    description: "Accept UPI, cards, wallets, and bank transfers. Process up to ₹10 lakhs with ultra-low fees of just 0.05%.",
    icon: <CreditCard className="w-6 h-6" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
  },
  {
    title: "Merchant Dashboard",
    description: "Complete business management with inventory tracking, customer data, and real-time sales monitoring.",
    icon: <Store className="w-6 h-6" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png"
  },
  {
    title: "Bank-Grade Security",
    description: "Your payments are protected with end-to-end encryption, fraud detection, and PCI DSS compliance.",
    icon: <Shield className="w-6 h-6" />,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png"
  },
  {
    title: "Business Analytics",
    description: "Deep insights into sales patterns, customer behavior, peak hours, and revenue optimization strategies.",
    icon: <TrendingUp className="w-6 h-6" />,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png"
  }
];

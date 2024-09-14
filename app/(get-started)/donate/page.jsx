"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/toast";
import { CreditCard } from 'lucide-react';

export default function DonateForm() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit_card');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Thank you for your donation!",
      description: `You have donated $${amount} via ${paymentMethod}.`,
    });
  };

  const PaymentMethodButton = ({ value, icon, label }) => (
    <button
      type="button"
      onClick={() => setPaymentMethod(value)}
      className={`flex flex-col items-center justify-center p-4 border rounded-lg transition-colors ${
        paymentMethod === value
          ? 'border-primary bg-primary/10'
          : 'border-input hover:bg-accent hover:text-accent-foreground'
      }`}
    >
      {icon}
      <span className="mt-2 text-sm font-medium">{label}</span>
    </button>
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-card rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-card-foreground">Support Our Education Program</h2>
      <p className="mb-6 text-muted-foreground">Your donation helps us provide quality education to students in need.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="amount">Donation Amount ($)</Label>
          <Input 
            id="amount" 
            type="number" 
            placeholder="Enter amount" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label className="mb-2 block">Payment Method</Label>
          <div className="grid grid-cols-3 gap-4">
            <PaymentMethodButton
              value="credit_card"
              icon={<CreditCard className="h-8 w-8" />}
              label="Credit Card"
            />
            <PaymentMethodButton
              value="paypal"
              icon={
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788l.038-.227.732-4.634.047-.256a.933.933 0 0 1 .921-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.444z"/>
                </svg>
              }
              label="PayPal"
            />
            <PaymentMethodButton
              value="google_pay"
              icon={
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#4285F4"/>
                  <path d="M23.6105 12.2196C23.6105 11.4627 23.5456 10.7308 23.4241 10.0239H12V14.7436H18.5391C18.2851 16.2631 17.4286 17.5414 16.1262 18.3816V21.4357H20.0446C22.3444 19.3182 23.6105 16.0486 23.6105 12.2196Z" fill="#34A853"/>
                  <path d="M12 24C15.2447 24 17.9967 22.9253 20.0447 21.4357L16.1263 18.3816C15.0537 19.1117 13.6599 19.5528 12 19.5528C8.87391 19.5528 6.21731 17.4353 5.28705 14.5981H1.23047V17.7478C3.26297 21.5465 7.30585 24 12 24Z" fill="#FBBC05"/>
                  <path d="M5.28709 14.5981C5.05709 13.8681 4.92709 13.0949 4.92709 12.3C4.92709 11.5051 5.05709 10.7319 5.28709 10.0019V6.85223H1.23051C0.447506 8.53197 0 10.3747 0 12.3C0 14.2253 0.447506 16.068 1.23051 17.7478L5.28709 14.5981Z" fill="#EA4335"/>
                  <path d="M12 4.77273C13.7673 4.77273 15.3418 5.37818 16.5873 6.56364L20.0291 3.12182C17.9903 1.19455 15.2382 0 12 0C7.30585 0 3.26297 2.45345 1.23047 6.25227L5.28705 9.40193C6.21731 6.56477 8.87391 4.77273 12 4.77273Z" fill="#EA4335"/>
                </svg>
              }
              label="Google Pay"
            />
          </div>
        </div>
        
        <Button type="submit" className="w-full">
          Donate Now
        </Button>
      </form>
    </div>
  );
}

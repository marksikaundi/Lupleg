"use client";
import React, { useState } from "react";
import { CreditCard, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PayCard() {
  const [cardNumber, setCardNumber] = useState("");

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length ? parts.join(" ") : value;
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 max-w-4xl mx-auto">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Purchase by Credit Card</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name on card
              </label>
              <Input id="name" placeholder="Your name" className="mt-1" />
            </div>
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card number
              </label>
              <div className="mt-1 relative">
                <Input
                  id="cardNumber"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="0000 0000 0000 0000"
                  className="pr-10"
                />
                <CreditCard
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="expiry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiry date
                </label>
                <Input id="expiry" placeholder="MM / YY" className="mt-1" />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="cvc"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVC code
                </label>
                <Input id="cvc" placeholder="CVC" className="mt-1" />
              </div>
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600">
              PAY NOW
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-sm text-gray-500">Receipt ID: hb_18260666</div>
            <div className="flex justify-between">
              <span>Business Starter (billed every year)</span>
              <span>$57.24</span>
            </div>
            <div className="flex justify-between">
              <span>VAT 0%</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Credits</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-purple-600">$ 57.24</span>
            </div>
            <div className="flex gap-2 justify-center">
              <VisaIcon cardNumber="h-8" />
              <MasterCardIcon cardNumber="h-8" />
              <DiscoverIcon cardNumber="h-8" />
              <AmericaExpressIcon cardNumber="h-8" />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 p-3 rounded-md">
              <Lock size={20} className="text-green-500" />
              <div>
                <div className="font-semibold">SSL Secure payment</div>
                <div>
                  Your encryption is protected by 256-bit SSL encryption
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function VisaIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="50"
      height="30"
    >
      <rect width="24" height="24" fill="#142787" />
      <path
        d="M10.5 16.5h-2l1.5-9h2l-1.5 9zm4.5-9h-1.5l-1.5 9h1.5l1.5-9zm-7.5 0h-1.5l-1.5 9h1.5l1.5-9zm10.5 0h-1.5l-1.5 9h1.5l1.5-9z"
        fill="#fff"
      />
    </svg>
  );
}

function MasterCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="50"
      height="30"
    >
      <rect width="24" height="24" fill="#EB001B" />
      <circle cx="9" cy="12" r="6" fill="#F79E1B" />
      <circle cx="15" cy="12" r="6" fill="#FF5F00" />
      <circle cx="12" cy="12" r="6" fill="#FF5F00" />
    </svg>
  );
}

function DiscoverIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="50"
      height="30"
    >
      <rect width="24" height="24" fill="#FF6000" />
      <path d="M12 6l-6 6 6 6 6-6-6-6z" fill="#fff" />
      <path d="M12 8l-4 4 4 4 4-4-4-4z" fill="#000" />
    </svg>
  );
}

function AmericaExpressIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="50"
      height="30"
    >
      <rect width="24" height="24" fill="#2E77BB" />
      <path d="M6 8h12v8H6z" fill="#fff" />
      <path d="M8 10h8v4H8z" fill="#2E77BB" />
      <path d="M9 11h6v2H9z" fill="#fff" />
    </svg>
  );
}

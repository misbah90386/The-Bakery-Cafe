import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, MessageSquare, Truck, CreditCard, Sparkles, CheckCircle } from 'lucide-react';
import { CartItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

const TAX_RATE = 0.05; // 5% standard GST
const DELIVERY_FEE = 150; // Rs. 150 Mardan delivery fee

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartProps) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  
  // Checkout states
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [custName, setCustName] = useState('');
  const [custAddress, setCustAddress] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Subtotal calculations
  const subtotal = cartItems.reduce((acc, curr) => acc + curr.menuItem.price * curr.quantity, 0);
  const tax = Math.round(subtotal * TAX_RATE);
  const finalDiscount = appliedCoupon ? discountAmount : 0;
  const total = subtotal > 0 ? Math.max(0, subtotal + tax + DELIVERY_FEE - finalDiscount) : 0;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;

    const code = couponCode.trim().toUpperCase();
    if (['FAMILYMEAL', 'PIZZADOUBLE', 'CAKEFREE', 'WEEKENDSWEETS', 'COFFEEPASTRY'].includes(code)) {
      setAppliedCoupon(code);
      // Give a dynamic 15% discount for verified codes
      const discount = Math.round(subtotal * 0.15);
      setDiscountAmount(discount);
      setCouponCode('');
    } else {
      alert('Invalid Promo Code. Please try codes like FAMILYMEAL, PIZZADOUBLE, or COFFEEPASTRY.');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setDiscountAmount(0);
  };

  // Compile pre-filled WhatsApp message
  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;

    let text = `*New Order - The Bakery Cafe, Mardan*%0A%0A`;
    text += `*Customer details:*%0A`;
    if (custName.trim()) text += `Name: ${encodeURIComponent(custName.trim())}%0A`;
    if (custPhone.trim()) text += `Phone: ${encodeURIComponent(custPhone.trim())}%0A`;
    if (custAddress.trim()) text += `Address: ${encodeURIComponent(custAddress.trim())}%0A`;
    text += `%0A*Items Ordered:*%0A`;

    cartItems.forEach((item, index) => {
      text += `${index + 1}. ${encodeURIComponent(item.menuItem.name)} x ${item.quantity} (Rs. ${(item.menuItem.price * item.quantity).toLocaleString()})`;
      if (item.notes) {
        text += ` %5B_Note: ${encodeURIComponent(item.notes)}_%5D`;
      }
      text += `%0A`;
    });

    text += `%0A*Subtotal:* Rs. ${subtotal.toLocaleString()}%0A`;
    if (appliedCoupon) {
      text += `*Promo Discount:* -Rs. ${finalDiscount.toLocaleString()} (${appliedCoupon})%0A`;
    }
    text += `*GST (5%):* Rs. ${tax.toLocaleString()}%0A`;
    text += `*Delivery Fee:* Rs. ${DELIVERY_FEE.toLocaleString()}%0A`;
    text += `*Total Amount:* *Rs. ${total.toLocaleString()}*%0A%0A`;
    text += `_Please confirm my order and share the delivery time!_`;

    const url = `https://wa.me/923339071074?text=${text}`;
    window.open(url, '_blank');

    // record success locally
    setCheckoutSuccess(true);
    setTimeout(() => {
      onClearCart();
      setShowCheckoutForm(false);
      setCheckoutSuccess(false);
      onClose();
    }, 4000);
  };

  const handleLocalSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!custName.trim() || !custAddress.trim() || !custPhone.trim()) return;

    // Simulate order submission
    setCheckoutSuccess(true);
    setTimeout(() => {
      onClearCart();
      setShowCheckoutForm(false);
      setCheckoutSuccess(false);
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-brown/60 backdrop-blur-sm z-50"
          />

          {/* Cart Side panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col border-l border-gold/15"
          >
            {/* Cart Header */}
            <div className="p-5 border-b border-gold/15 flex items-center justify-between bg-dark-brown text-cream-light">
              <div className="flex items-center space-x-2.5">
                <ShoppingBag size={20} className="text-gold" />
                <h2 className="font-serif text-lg font-bold">Your Feast Basket</h2>
                <span className="text-xs bg-burgundy px-2 py-0.5 rounded-full text-gold font-bold">
                  {cartItems.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-cream/10 text-cream-light hover:text-gold transition-colors cursor-pointer"
                aria-label="Close Cart"
              >
                <X size={22} />
              </button>
            </div>

            {/* Cart Body */}
            <div className="flex-grow overflow-y-auto p-5 space-y-4">
              {checkoutSuccess ? (
                <div className="py-16 text-center flex flex-col items-center justify-center h-full">
                  <CheckCircle size={64} className="text-green-600 animate-bounce mb-4" />
                  <h3 className="font-serif text-xl font-bold text-dark-brown">Order Processed!</h3>
                  <p className="text-xs sm:text-sm text-dark-brown/70 mt-2 max-w-xs mx-auto leading-relaxed">
                    Your order is being prepared in our kitchen adjacent to Mardan Mega Mart! If you chose WhatsApp, your message was generated.
                  </p>
                  <p className="text-[11px] font-bold text-burgundy mt-4">Thank you for dining with us!</p>
                </div>
              ) : cartItems.length === 0 ? (
                <div className="py-20 text-center flex flex-col items-center justify-center h-full">
                  <ShoppingBag size={48} className="text-gold/40 mb-4 animate-pulse" />
                  <h3 className="font-serif text-base font-bold text-dark-brown">Your basket is empty</h3>
                  <p className="text-xs text-dark-brown/60 mt-2 max-w-xs mx-auto">
                    Browse our premium menu cards and add pizzas, freshly baked desserts, steaks, and beverages to start feasting!
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 text-xs font-bold bg-burgundy hover:bg-burgundy-dark text-gold px-5 py-2.5 rounded-xl uppercase tracking-wider shadow"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : showCheckoutForm ? (
                /* Checkout Form Screen inside Cart */
                <div className="space-y-4">
                  <h3 className="font-serif text-base font-bold text-dark-brown border-b border-gold/10 pb-2">
                    Delivery / Contact Details
                  </h3>
                  
                  <form onSubmit={handleLocalSubmitOrder} className="space-y-4 text-left">
                    <div>
                      <label htmlFor="cust-name" className="text-[10px] font-bold text-dark-brown/60 uppercase block mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="cust-name"
                        required
                        value={custName}
                        onChange={(e) => setCustName(e.target.value)}
                        placeholder="E.g. Sardar Yusuf"
                        className="w-full bg-cream-light rounded-xl px-4 py-2.5 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy"
                      />
                    </div>

                    <div>
                      <label htmlFor="cust-phone" className="text-[10px] font-bold text-dark-brown/60 uppercase block mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="cust-phone"
                        required
                        value={custPhone}
                        onChange={(e) => setCustPhone(e.target.value)}
                        placeholder="E.g. +92 333 1234567"
                        className="w-full bg-cream-light rounded-xl px-4 py-2.5 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy"
                      />
                    </div>

                    <div>
                      <label htmlFor="cust-addr" className="text-[10px] font-bold text-dark-brown/60 uppercase block mb-1">
                        Delivery Address in Mardan
                      </label>
                      <textarea
                        id="cust-addr"
                        required
                        value={custAddress}
                        onChange={(e) => setCustAddress(e.target.value)}
                        placeholder="E.g. House 42, Sector C, Sheikh Maltoon Town, Mardan"
                        rows={3}
                        className="w-full bg-cream-light rounded-xl px-4 py-2.5 text-xs text-dark-brown border border-gold/15 focus:outline-none focus:ring-1 focus:ring-burgundy"
                      />
                    </div>

                    <div className="flex flex-col gap-2 pt-4">
                      {/* WhatsApp Checkout */}
                      <button
                        type="button"
                        onClick={handleCheckoutWhatsApp}
                        className="bg-green-600 hover:bg-green-700 text-cream-light py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                      >
                        <MessageSquare size={14} className="fill-cream-light" />
                        <span>Send Order via WhatsApp</span>
                      </button>

                      {/* Cash on Delivery Local submit */}
                      <button
                        type="submit"
                        className="bg-burgundy hover:bg-burgundy-dark text-gold py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                      >
                        <Truck size={14} />
                        <span>Cash on Delivery checkout</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowCheckoutForm(false)}
                        className="text-[10px] text-dark-brown/50 hover:text-burgundy text-center font-bold uppercase tracking-wider pt-2"
                      >
                        Back to Cart items
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Item list */
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.menuItem.id}
                      className="bg-cream-light rounded-xl p-3 border border-gold/10 flex gap-3 shadow-sm relative group"
                    >
                      {/* Image */}
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-gold/10">
                        <img
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-dark-brown leading-tight pr-5">
                            {item.menuItem.name}
                          </h4>
                          {item.notes && (
                            <p className="text-[10px] text-burgundy italic mt-0.5 line-clamp-1">
                              Note: "{item.notes}"
                            </p>
                          )}
                        </div>

                        {/* Quantity and Price */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-2 bg-cream rounded-lg border border-gold/15 p-1">
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity - 1)}
                              className="p-1 hover:text-burgundy text-dark-brown/60 transition cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={11} className="stroke-3" />
                            </button>
                            <span className="text-xs font-bold text-dark-brown w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                              className="p-1 hover:text-burgundy text-dark-brown/60 transition cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus size={11} className="stroke-3" />
                            </button>
                          </div>

                          <span className="font-mono text-xs font-bold text-dark-brown">
                            Rs. {(item.menuItem.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Remove item absolute top right */}
                      <button
                        onClick={() => onRemoveItem(item.menuItem.id)}
                        className="absolute top-2.5 right-2.5 text-dark-brown/30 hover:text-red-600 transition cursor-pointer p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer - Totals (Only visible if items present and not in complete success state) */}
            {cartItems.length > 0 && !checkoutSuccess && (
              <div className="p-5 border-t border-gold/15 bg-cream shadow-2xl shrink-0 space-y-4">
                
                {/* Promo Code input form */}
                {!showCheckoutForm && !appliedCoupon && (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter Promo Code (e.g. FAMILYMEAL)"
                      className="flex-grow bg-cream-light border border-gold/20 rounded-xl px-3 py-2 text-xs uppercase text-dark-brown placeholder:text-dark-brown/40 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-burgundy text-gold font-bold text-xs px-4 rounded-xl hover:bg-burgundy-dark transition"
                    >
                      Apply
                    </button>
                  </form>
                )}

                {/* Applied code feedback */}
                {appliedCoupon && (
                  <div className="bg-green-600/5 border border-dashed border-green-600/30 p-2.5 rounded-xl flex items-center justify-between text-xs text-green-700">
                    <span className="flex items-center gap-1 font-semibold">
                      <Sparkles size={13} /> Coupon {appliedCoupon} Applied (15% OFF)
                    </span>
                    <button
                      onClick={handleRemoveCoupon}
                      className="text-red-600 hover:text-red-700 font-bold"
                    >
                      Remove
                    </button>
                  </div>
                )}

                {/* Calculation Rows */}
                <div className="space-y-1.5 text-xs text-dark-brown/80">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono">Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-700 font-semibold">
                      <span>Promo Discount</span>
                      <span className="font-mono">-Rs. {finalDiscount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>GST Tax (5%)</span>
                    <span className="font-mono">Rs. {tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee (Mardan)</span>
                    <span className="font-mono">Rs. {DELIVERY_FEE.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-base text-dark-brown font-bold pt-2.5 border-t border-gold/10">
                    <span className="font-serif">Grand Total</span>
                    <span className="font-mono text-burgundy">Rs. {total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Checkout Trigger */}
                {!showCheckoutForm ? (
                  <div className="flex flex-col gap-2 pt-2">
                    <button
                      onClick={() => setShowCheckoutForm(true)}
                      className="bg-burgundy hover:bg-burgundy-dark text-gold py-4 w-full rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow"
                    >
                      <CreditCard size={14} />
                      <span>Proceed to Checkout</span>
                    </button>
                    <button
                      onClick={onClearCart}
                      className="text-[10px] text-dark-brown/40 hover:text-red-600 text-center font-bold uppercase tracking-widest pt-1"
                    >
                      Empty Basket
                    </button>
                  </div>
                ) : null}

              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export interface AboutSection {
  id: string;
  title: string;
  icon?: string;
  paragraphs?: string[];
  listItems?: string[];
}

export const aboutContent = {
  hero: {
    title: "Hungry Hetauda",
    tagline: "Your Favorite Meals, Delivered Fresh in Hetauda.",
    description:
      "Welcome to the official Hungry Hetauda app — your convenient way to explore menus, order delicious meals, and enjoy fresh food delivered straight to your doorstep across Hetauda.",
    companyNotice:
      "Hungry Hetauda Private Limited brings together great local flavors, fresh ingredients, and convenient digital ordering to make your food experience simple and delightful.",
  },
  menuHighlights: [
    "Chicken Biryani",
    "Mutton Biryani",
    "Steamed & Fried Momos",
    "Chowmein & Noodles",
    "Crispy Chicken Burgers",
    "Wood-Fired Style Pizza",
    "Sekuwa & Grills",
    "Curries & Rice Bowls",
    "Naan and Roti",
    "Fresh Salads & Appetizers",
    "Desserts & Sweets",
    "Chilled Beverages & Shakes",
  ],
  sections: [
    {
      id: "explore-menu",
      title: "Explore Our Diverse Menu",
      icon: "UtensilsCrossed",
      paragraphs: [
        "Discover a rich variety of local and multi-cuisine favorites through the Hungry Hetauda app.",
        "Browse available dishes, view real-time prices and descriptions, customize options, and add items to your cart seamlessly.",
      ],
    },
    {
      id: "easy-ordering",
      title: "Easy Online Food Ordering",
      icon: "Smartphone",
      paragraphs: ["Order your favorite meals directly through the Hungry Hetauda app."],
      listItems: [
        "Browse the comprehensive digital menu",
        "View detailed food descriptions and clear prices",
        "Add and customize items in your cart",
        "Select portion sizes and flavor preferences",
        "Add special cooking or delivery instructions",
        "Review your order before secure checkout",
        "Place food orders effortlessly",
        "Track live order updates from preparation to delivery",
        "Check order history and reorder anytime",
      ],
    },
    {
      id: "food-delivery",
      title: "Fast Food Delivery Across Hetauda",
      icon: "Bike",
      paragraphs: [
        "Enjoy your favorite meals delivered hot and fresh anywhere within our Hetauda delivery radius.",
        "Pin your exact delivery location, check delivery availability, place your order, and receive real-time rider status updates.",
        "Delivery availability, estimated times, and charges may vary based on exact address, weather, traffic, and restaurant operating hours.",
      ],
    },
    {
      id: "takeaway",
      title: "Self Takeaway & Pickup",
      icon: "ShoppingBag",
      paragraphs: [
        "Prefer to collect your meal yourself on your commute or during a break?",
        "Select Takeaway at checkout, place your order through the app, and pick it up hot and ready from the designated partner kitchen.",
        "Save time with zero wait times during rush hours.",
      ],
    },
    {
      id: "dine-in",
      title: "Dining Experience & Partner Kitchens",
      icon: "Users",
      paragraphs: [
        "Hungry Hetauda collaborates with top kitchens and eateries across Makwanpur to bring hygienic, delicious, and consistent culinary options.",
        "Whether you are ordering for your family, celebrating with friends, or having a work lunch, we ensure exceptional quality every time.",
      ],
    },
    {
      id: "customization",
      title: "Food Preferences & Customization",
      icon: "Sliders",
      paragraphs: [
        "Customize dishes according to your personal taste and dietary preferences whenever options are available.",
        "Customization options depend on the dish and kitchen preparation style.",
      ],
      listItems: [
        "Portion selection (Regular / Large / Family)",
        "Spice levels (Mild / Medium / Spicy / Extra Spicy)",
        "Special dietary notes and allergy alerts",
        "Extra sauces, raita, dips, or condiments",
        "Cutlery and packaging requests",
      ],
    },
    {
      id: "account",
      title: "User Account & Profile Management",
      icon: "UserCheck",
      paragraphs: ["Create an account to unlock rapid ordering, saved locations, and exclusive local deals."],
      listItems: [
        "Manage your personal profile and contact details",
        "Save multiple delivery addresses (Home, Office, Other)",
        "View past orders and itemized receipts",
        "Track live active orders",
        "Receive timely SMS and push notifications",
        "Access special discounts and promo codes",
      ],
    },
    {
      id: "locations",
      title: "Service Coverage in Hetauda",
      icon: "MapPin",
      paragraphs: [
        "Hungry Hetauda proudly serves neighborhoods and business centers across Hetauda and surrounding Makwanpur areas.",
        "Use the app's location finder to see available menus and operating hours in your specific ward.",
      ],
    },
    {
      id: "offers",
      title: "Local Deals & Promotions",
      icon: "Gift",
      paragraphs: [
        "Take advantage of special seasonal discounts, lunch combos, and weekend loyalty rewards directly in the app.",
        "All promotions are transparent with clear validity terms and minimum spend details.",
      ],
    },
    {
      id: "checkout",
      title: "Secure & Flexible Checkout",
      icon: "CreditCard",
      paragraphs: [
        "Review your food items, delivery address, estimated ETA, and bill breakdown before finalizing.",
        "Enjoy multiple payment options including digital wallets (eSewa, Khalti), mobile banking, and Cash on Delivery (COD).",
      ],
    },
    {
      id: "notifications",
      title: "Real-Time Order Notifications",
      icon: "Bell",
      paragraphs: [
        "Stay informed at every step of your culinary journey:",
      ],
      listItems: [
        "Instant order confirmation",
        "Kitchen preparation status",
        "Rider dispatch and delivery progress",
        "Order cancellation or refund notices",
        "Important account security alerts",
      ],
    },
    {
      id: "philosophy",
      title: "Rooted in Quality & Customer Delight",
      icon: "Heart",
      paragraphs: [
        "At Hungry Hetauda, we believe great food brings communities together. We are dedicated to supporting local culinary talent and delivering satisfying, hygienic meals to food lovers throughout Hetauda.",
      ],
    },
  ],
  footerNote: {
    company: "Hungry Hetauda Private Limited",
    closing: "Fresh Food, Fast Delivery, Happy Moments.",
    tagline: "Your Favorite Meals, Delivered Fresh in Hetauda.",
  },
};

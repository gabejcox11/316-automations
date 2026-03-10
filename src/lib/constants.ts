export const CALENDLY_URL = "https://calendly.com/gabe-316automations/30min";
export const WEBHOOK_URL =
  "https://automations-316.app.n8n.cloud/webhook/form-submit";

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Your Trade", href: "#for-your-trade" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const HERO = {
  badge: "Done For You. No Tech Skills Required.",
  headline: {
    line1: "You Will Never Lose a Job",
    line2: "to a",
    highlight: "Missed Call",
    line3: "Again.",
  },
  subheadline:
    "316 Automations builds the system that texts your missed calls back in 60 seconds, qualifies the lead, and books the job. Completely done for you.",
  primaryCta: "Book a Free Call →",
  secondaryCta: "See How It Works ↓",
  chips: [
    { label: "60s response", emoji: "⚡", variant: "amber" as const },
    { label: "5-day setup", emoji: "✓", variant: "green" as const },
    { label: "Done for you", emoji: "🔧", variant: "navy" as const },
    { label: "Cancel anytime", emoji: "↩", variant: "gray" as const },
  ],
};

export const TRUST_BAR = {
  label: "Built for service businesses",
  industries: [
    { emoji: "🔥", name: "HVAC" },
    { emoji: "🚿", name: "Plumbing" },
    { emoji: "⚡", name: "Electrical" },
    { emoji: "🏠", name: "Roofing" },
    { emoji: "🐛", name: "Pest Control" },
    { emoji: "🧹", name: "Cleaning" },
    { emoji: "🌿", name: "Landscaping" },
    { emoji: "🚗", name: "Garage Doors" },
  ],
};

export const BEFORE_AFTER = {
  title: "The old way vs. the 316 way.",
  oldWay: {
    heading: "The Old Way",
    items: [
      "Phone rings while you're on a job",
      "Goes to voicemail",
      "62% of callers don't leave a message",
      "4+ hours pass before you call back",
      "They've already hired someone else",
    ],
  },
  newWay: {
    heading: "The 316 Way",
    items: [
      "Phone rings while you're on a job",
      "Missed call triggers instantly",
      "Customer gets a text in 60 seconds",
      "Lead is qualified automatically",
      "Booking link sent. Job is yours.",
    ],
  },
};

export const TIMELINE = {
  label: "The sequence",
  title: "What happens in the next 60 seconds.",
  subtitle:
    "From the moment your phone rings unanswered to the moment the job is booked. Completely automatic.",
  steps: [
    {
      time: ":00",
      emoji: "📵",
      color: "red" as const,
      title: "Missed call",
      description: "You're on a job. The call goes unanswered.",
    },
    {
      time: ":05",
      emoji: "⚡",
      color: "amber" as const,
      title: "Trigger fires",
      description: "System detects the missed call immediately.",
    },
    {
      time: ":30",
      emoji: "💬",
      color: "blue" as const,
      title: "SMS sent",
      description: "Personalized text message sent to the caller.",
    },
    {
      time: "2:00",
      emoji: "✓",
      color: "green" as const,
      title: "Lead qualified",
      description: "Automated conversation captures all lead info.",
    },
    {
      time: "3:00",
      emoji: "📅",
      color: "green" as const,
      title: "Job yours",
      description: "Booking link sent. Lead captured. Done.",
    },
  ],
};

export const INDUSTRIES = {
  label: "Tailored for your trade",
  title: "Built for your trade.",
  subtitle: "See how it works for your specific business.",
  tabs: [
    {
      id: "hvac",
      label: "HVAC",
      quote:
        "When a homeowner's AC goes out in July, they're not leaving voicemails. They're calling 3 businesses and going with the first one who responds. 316 makes sure that's always you.",
      stat: "Average HVAC job value: $400–$2,000",
    },
    {
      id: "plumbing",
      label: "Plumbing",
      quote:
        "Burst pipes, clogged drains. Plumbing emergencies don't wait. Your system responds in 60 seconds so you're always the first callback they get.",
      stat: "Average plumbing call value: $200–$800",
    },
    {
      id: "electrical",
      label: "Electrical",
      quote:
        "Electrical issues feel urgent. When a homeowner calls and hears silence, they move on fast. Be the first to respond. Automatically.",
      stat: "Average electrical job value: $300–$1,500",
    },
    {
      id: "roofing",
      label: "Roofing",
      quote:
        "Roofing leads often come in waves after storms. While you're measuring one job, the next caller is getting texted back automatically.",
      stat: "Average roofing job value: $5,000–$15,000",
    },
    {
      id: "cleaning",
      label: "Cleaning",
      quote:
        "Recurring cleaning clients are worth thousands per year. Never miss an inquiry. Every form fill and call gets an instant follow-up.",
      stat: "Average cleaning client LTV: $1,200–$3,600/yr",
    },
  ],
};

export const HOW_IT_WORKS = {
  label: "What's included",
  title: "Six things the system handles for you.",
  subtitle:
    "Everything is done for you. You run the jobs. We run the follow-up.",
  steps: [
    {
      num: "01",
      emoji: "⚡",
      title: "Instant Reply",
      description:
        "Every missed call, text, or form fill gets a response within 60 seconds. Before they call the next business.",
    },
    {
      num: "02",
      emoji: "✓",
      title: "Lead Qualification",
      description:
        "Automated conversation captures name, service needed, location, and urgency. So you show up to every call prepared.",
    },
    {
      num: "03",
      emoji: "📅",
      title: "Booking Link",
      description:
        "Schedule link and confirmation sent automatically once the lead is qualified. No back-and-forth needed.",
    },
    {
      num: "04",
      emoji: "🔄",
      title: "Follow-Up Sequence",
      description:
        "Day 1, Day 3, Day 7 touchpoints if no booking. Zero effort from you. The system handles all of it.",
    },
    {
      num: "05",
      emoji: "📊",
      title: "Lead Log",
      description:
        "Every lead tracked in Google Sheets: source, status, outcome, and job value. You always know what's in the pipeline.",
    },
    {
      num: "06",
      emoji: "⭐",
      title: "Review Request",
      description:
        "When a job closes, a review request fires automatically. Build your reputation without lifting a finger.",
    },
  ],
};

export const ROI_CALCULATOR = {
  title: "How much are missed calls costing you?",
  subtitle:
    "Move the slider to see your real numbers. Most contractors are shocked.",
  sliderLabel: "I miss about __ calls per week",
  avgJobValue: 600,
  recoveryRate: 0.4,
  assumedTotalCalls: 50,
  sliderMin: 1,
  sliderMax: 20,
  sliderDefault: 5,
  resultLabel: "316 Automations could recover for you:",
  resultSub: "Based on 40% lead recovery rate, industry average",
  note: "Based on industry-average recovery rates and call-back conversion data. Actual results vary by trade, market, and responsiveness.",
  cta: "Book a Free Call →",
};

export const PERFORMANCE_STATS = {
  label: "By the numbers",
  title: "The system performs while you work.",
  subtitle:
    "These aren't projections. They're what the automation delivers every single day.",
  stats: [
    {
      emoji: "⚡",
      value: 60,
      unit: "s",
      label: "Response time",
      description:
        "Every missed call gets a text back within 60 seconds. Before they can dial a competitor.",
      variant: "green" as const,
    },
    {
      emoji: "📊",
      value: 40,
      unit: "%",
      label: "Lead recovery rate",
      description:
        "Industry-average conversion rate from missed call to booked appointment via automated follow-up.",
      variant: "amber" as const,
    },
    {
      emoji: "📅",
      value: 5,
      unit: " days",
      label: "Time to go live",
      description:
        "From the time you sign, we have your system built, tested, and running in 5 business days or less.",
      variant: "navy" as const,
    },
    {
      emoji: "🔄",
      value: 3,
      unit: "×",
      label: "Follow-up touchpoints",
      description:
        "Day 1, Day 3, Day 7 automatic follow-up for every lead that doesn't book on first contact.",
      variant: "green" as const,
    },
    {
      emoji: "🕐",
      value: 24,
      unit: "/7",
      label: "Always on",
      description:
        "Nights, weekends, holidays. The system never clocks out. Your business responds even when you're off the clock.",
      variant: "amber" as const,
    },
    {
      emoji: "⭐",
      value: 100,
      unit: "%",
      label: "Done for you",
      description:
        "You don't build it. You don't maintain it. You don't touch it. We handle everything. Permanently.",
      variant: "navy" as const,
    },
  ],
};

export const FAQ = {
  label: "Common questions",
  title: "Got questions?",
  items: [
    {
      question: "Do I need to be tech-savvy?",
      answer:
        "Not at all. We handle everything: setup, configuration, and ongoing maintenance. You just keep doing what you do best. Running jobs.",
    },
    {
      question: "What if I already have voicemail?",
      answer:
        "62% of callers won't leave a voicemail. They just call the next business on the list. This system reaches them via text before they do, so voicemail becomes irrelevant.",
    },
    {
      question: "How fast is setup?",
      answer:
        "5 business days or less. We've streamlined the entire onboarding process. Most clients are live within 3 to 4 days.",
    },
    {
      question: "Does it work for my trade?",
      answer:
        "If your business relies on inbound calls, yes. HVAC, plumbing, electrical, roofing, cleaning, landscaping, pest control, garage doors, and more. If people call you to book a service, this system works for you.",
    },
    {
      question: "What happens if something breaks?",
      answer:
        "We monitor everything and fix issues as part of your monthly retainer. You don't need to manage anything or open a single support ticket. We're on it before you even notice.",
    },
    {
      question: "What does it cost?",
      answer:
        "Book a call and we'll walk you through pricing based on your business size and call volume. It's designed to pay for itself in the first recovered job.",
    },
  ],
};

export const ABOUT = {
  label: "Who we are",
  title: "Built by someone who gets it.",
  imageAlt: "Gabe Cox, founder of 316 Automations",
  name: "Gabe Cox",
  role: "Founder, 316 Automations",
  bio: [
    "I've been building with AI for over two years. I started 316 Automations to help local businesses tap into that same power without having to figure it all out themselves.",
    "Every system I build runs on the same automation I'd want for my own business. No fluff, no upsells you don't need. Just a reliable system that makes sure your phone never costs you a job again.",
  ],
};

export const CONTACT_FORM = {
  label: "Get in touch",
  title: "Send us a message.",
  subtitle:
    "Not ready for a call? Drop your info and we'll text you back within the hour.",
  cta: "Send Message",
  fine: "We'll never spam you or share your info. Ever.",
  successTitle: "Message sent.",
  successMessage:
    "We got it. Expect a text back within the hour.",
};

export const FINAL_CTA = {
  headline: "Ready to stop losing jobs\nto missed calls?",
  subtitle:
    "Book a quick call or send us a message. We'll show you exactly how the system works for your business.",
  cta: "Book a Free Call →",
  ctaForm: "Send a Message Instead →",
  fine: "No commitment. No pressure. Cancel anytime.",
};

export const FOOTER = {
  tagline:
    "The done-for-you lead automation system that ensures local service businesses never lose a job to a missed call.",
  navigate: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Book a Call", href: "#book-call" },
    { label: "For Your Trade", href: "#for-your-trade" },
    { label: "FAQ", href: "#faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  contact: {
    availability: "Available by appointment",
    availabilityDesc: "Book a free 20-minute call to get started.",
    responseTime: "Response time",
    responseTimeDesc: "Within 1 business day",
  },
  copyright: "© 2026 316 Automations. All rights reserved.",
  bottomTagline: "Built for businesses that can't afford to miss a call.",
};

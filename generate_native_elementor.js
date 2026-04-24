import fs from 'fs';

const genId = () => Math.random().toString(36).substr(2, 7);

const widget = (type, settings) => ({
  id: genId(),
  elType: 'widget',
  isInner: false,
  widgetType: type,
  settings: settings,
  elements: []
});

const column = (size, elements) => ({
  id: genId(),
  elType: 'column',
  isInner: false,
  settings: { _column_size: size },
  elements: elements
});

const section = (elements, settings = {}) => ({
  id: genId(),
  elType: 'section',
  isInner: false,
  settings: settings,
  elements: elements
});

// Construct the native elementor DOM tree
const content = [
  // 1. HERO SECTION
  section([
    column(100, [
      widget("heading", { title: "Luxury Kitchen & Bathroom Design in Connecticut", header_size: "h1", align: "center" }),
      widget("text-editor", { editor: "<p style=\"text-align: center;\">Experience the pinnacle of custom cabinetry and spatial planning. From master bathrooms to culinary-grade kitchens, we bring your ultimate vision to life with complete end-to-end service.</p>" }),
      widget("button", { text: "Book a Consultation", align: "center", link: { url: "/contact" } })
    ])
  ], { background_background: "classic", background_color: "#1a1a1a" }),

  // 2. TRUST BAR
  section([
    column(25, [ widget("heading", { title: "Custom Design Experts", align: "center", header_size: "h4" }) ]),
    column(25, [ widget("heading", { title: "Premium Materials", align: "center", header_size: "h4" }) ]),
    column(25, [ widget("heading", { title: "Connecticut-Based", align: "center", header_size: "h4" }) ]),
    column(25, [ widget("heading", { title: "End-to-End Service", align: "center", header_size: "h4" }) ])
  ], { background_background: "classic", background_color: "#141162" }),

  // 3. ABOUT PREVIEW
  section([
    column(50, [
      widget("heading", { title: "Who We Are", header_size: "h6" }),
      widget("heading", { title: "Uncompromising Craftsmanship & Personalized Design", header_size: "h2" }),
      widget("text-editor", { editor: "<p>At QuinnHaven Kitchen Cabinets & Bathroom Design, we believe your environment dictates your peace of mind. We don't just supply cabinets; we listen to how you actually live, executing expertly tailored spatial planning alongside a curated selection of premium materials.</p>" }),
      widget("button", { text: "Learn More About Us", link: { url: "/about" } })
    ]),
    column(50, [
      widget("image", { image: { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" } })
    ])
  ]),

  // 4. SERVICES SECTION
  section([
    column(100, [
      widget("heading", { title: "Our Expertise", align: "center", header_size: "h6" }),
      widget("heading", { title: "Comprehensive Design Services", align: "center", header_size: "h2" }),
      widget("text-editor", { editor: "<p style=\"text-align: center;\">We specialize in transforming every corner of your home with precision logistics and a refined aesthetic.</p>" })
    ])
  ]),
  section([
    column(25, [ widget("image-box", { title_text: "Kitchen Design", description_text: "Bespoke culinary spaces where form meets function." }) ]),
    column(25, [ widget("image-box", { title_text: "Custom Kitchen Cabinets", description_text: "Precision-milled storage crafted to your exact specifications." }) ]),
    column(25, [ widget("image-box", { title_text: "Bathroom Design", description_text: "Spa-like sanctuaries designed for optimal relaxation." }) ]),
    column(25, [ widget("image-box", { title_text: "Closet Design", description_text: "Boutique-style wardrobes organized exactly for your lifestyle." }) ]),
  ]),
  section([
    column(33, [ widget("image-box", { title_text: "Basement Bar", description_text: "Entertain in sophistication with a custom wet bar." }) ]),
    column(33, [ widget("image-box", { title_text: "Home Office", description_text: "Inspiring executive workspaces built for peak productivity." }) ]),
    column(33, [ widget("image-box", { title_text: "Entryway Storage", description_text: "Custom mudroom built-ins and elegant entryway logic." }) ])
  ]),

  // 5. PRODUCTS / MATERIALS
  section([
    column(100, [
      widget("heading", { title: "Premium Components", align: "center", header_size: "h6" }),
      widget("heading", { title: "A Curated Material Selection", align: "center", header_size: "h2" })
    ])
  ]),
  section([
    column(33, [ widget("image-box", { title_text: "Cabinetry", image: { url: "https://images.unsplash.com/photo-1595514690025-a13a44d038fa?q=80&w=2070" } }) ]),
    column(33, [ widget("image-box", { title_text: "Countertops", image: { url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069" } }) ]),
    column(33, [ widget("image-box", { title_text: "Premium Tile", image: { url: "https://images.unsplash.com/photo-1574635606612-581d4516be1a?q=80&w=2070" } }) ])
  ]),

  // 6. PORTFOLIO
  section([
    column(100, [
      widget("heading", { title: "Signature Work", align: "center", header_size: "h6" }),
      widget("heading", { title: "Recent Transformations", align: "center", header_size: "h2" })
    ])
  ]),
  section([
    column(50, [ widget("image-box", { title_text: "The Avon Culinary Estate", description_text: "Kitchen Remodel", image: { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070" } }) ]),
    column(50, [ widget("image-box", { title_text: "Wallingford Master Bath", description_text: "Bathroom Retreat", image: { url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069" } }) ])
  ]),

  // 7. PROCESS
  section([
    column(100, [
      widget("heading", { title: "Our Methodology", align: "center", header_size: "h6" }),
      widget("heading", { title: "A Seamless 5-Step Process", align: "center", header_size: "h2" })
    ])
  ]),
  section([
    column(20, [ widget("icon-box", { title_text: "1. Consultation", description_text: "We discuss your vision, layout needs, and initial budget." }) ]),
    column(20, [ widget("icon-box", { title_text: "2. Design Planning", description_text: "Expert 3D modeling to perfect your highly functional layout." }) ]),
    column(20, [ widget("icon-box", { title_text: "3. Material Selection", description_text: "Curating premium stone, custom cabinetry, and hardware." }) ]),
    column(20, [ widget("icon-box", { title_text: "4. Build & Install", description_text: "Professional project management and flawless installation." }) ]),
    column(20, [ widget("icon-box", { title_text: "5. Final Reveal", description_text: "A comprehensive walkthrough ensuring total perfection." }) ])
  ]),

  // 8. LOCATION
  section([
    column(50, [
      widget("heading", { title: "Local Expertise", header_size: "h6" }),
      widget("heading", { title: "Serving Connecticut's Premier Neighborhoods", header_size: "h2" }),
      widget("text-editor", { editor: "<p>QuinnHaven proudly delivers exceptional kitchen remodeling and custom bath design across Connecticut.</p>" }),
      widget("text-editor", { editor: "<ul><li>Wallingford</li><li>New Haven</li><li>Hartford</li><li>Avon</li><li>Norwalk</li></ul>" })
    ]),
    column(50, [
      widget("image", { image: { url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2070" } })
    ])
  ]),

  // 9. SHOWROOM
  section([
    column(50, [
      widget("heading", { title: "Experience the Quality", header_size: "h6" }),
      widget("heading", { title: "Visit Our Design Studio", header_size: "h2" }),
      widget("text-editor", { editor: "<p>Step off the screen and into reality. Run your hands over our solid birch cabinetry, examine thick-cut marble, and sit down with our designers to map out your dream space over a cup of coffee.</p>" }),
      widget("text-editor", { editor: "<p><strong>121 N Plains Industrial Road, Unit C, Wallingford, CT</strong></p>" }),
      widget("button", { text: "Schedule a Visit", link: { url: "/showroom" } })
    ]),
    column(50, [
      widget("image", { image: { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070" } })
    ])
  ]),

  // 10. FINAL CTA
  section([
    column(100, [
      widget("heading", { title: "Ready to Transform Your Space?", align: "center", header_size: "h2" }),
      widget("text-editor", { editor: "<p style=\"text-align: center;\">Whether you're planning a complete kitchen overhaul or a bespoke closet addition, our team is ready to bring your vision to reality.</p>" }),
      widget("button", { text: "Book Consultation", align: "center", link: { url: "/contact" } })
    ])
  ])
];

const elementorTemplate = {
  version: "0.4",
  title: "QuinnHaven - Fully Dynamic Homepage",
  type: "page",
  content: content,
  page_settings: {}
};

fs.writeFileSync('dynamic-elementor-homepage.json', JSON.stringify(elementorTemplate, null, 2));

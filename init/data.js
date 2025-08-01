const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 1500,
    location: "Malibu",
    country: "United States",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Historic",
    geometry: {
      type: "Point",
      coordinates: [-118.788193, 34.031246], //longitude first, then latitude
    },
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 1200,
    location: "New York City",
    country: "United States",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [74.006, 40.7128], //longitude first, then latitude
    },
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 1000,
    location: "Aspen",
    country: "United States",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Trending",
    geometry: {
      type: "Point",
      coordinates: [106.8175, 39.1911], //longitude first, then latitude
    },
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 2500,
    location: "Florence",
    country: "Italy",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Historic",
    geometry: {
      type: "Point",
      coordinates: [11.25, 43.77], //longitude first, then latitude
    },
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 800,
    location: "Portland",
    country: "United States",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Adventure",
    geometry: {
      type: "Point",
      coordinates: [122.6765, 45.5231], //longitude first, then latitude
    },
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Beach",
    geometry: {
      type: "Point",
      coordinates: [86.8515, 21.1619], //longitude first, then latitude
    },
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Lake",
    geometry: {
      type: "Point",
      coordinates: [-120.032349, 39.096848], //longitude first, then latitude
    },
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Luxury",
    geometry: {
      type: "Point",
      coordinates: [118.2426, 34.0549], //longitude first, then latitude
    },
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Ski",
    geometry: {
      type: "Point",
      coordinates: [7.2286, 46.0961], //longitude first, then latitude
    },
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Farms",
    geometry: {
      type: "Point",
      coordinates: [34.8333, 2.3333], //longitude first, then latitude
    },
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Cabin",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676], //longitude first, then latitude
    },
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Amazing pools",
    geometry: {
      type: "Point",
      coordinates: [178.065, 17.7134], //longitude first, then latitude
    },
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Camping",
    geometry: {
      type: "Point",
      coordinates: [1.8839, 51.795], //longitude first, then latitude
    },
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 2200,
    location: "Boston",
    country: "United States",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Trending",
    geometry: {
      type: "Point",
      coordinates: [71.0565, 42.3555], //longitude first, then latitude
    },
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Beach",
    geometry: {
      type: "Point",
      coordinates: [115.1889, 8.4095], //longitude first, then latitude
    },
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 1500,
    location: "Banff",
    country: "Canada",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Cabin",
    geometry: {
      type: "Point",
      coordinates: [115.5708, 51.1784], //longitude first, then latitude
    },
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    images: [
      {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 1600,
    location: "Miami",
    country: "United States",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Rooms",
    geometry: {
      type: "Point",
      coordinates: [80.1918, 25.7617], //longitude first, then latitude
    },
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Iconic cities",
    geometry: {
      type: "Point",
      coordinates: [98.3307, 7.9843], //longitude first, then latitude
    },
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Castles",
    geometry: {
      type: "Point",
      coordinates: [-5.0, 57.6667], //longitude first, then latitude
    },
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Adventure",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048], //longitude first, then latitude
    },
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 1100,
    location: "Montana",
    country: "United States",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Countryside",
    geometry: {
      type: "Point",
      coordinates: [110.3626, 46.8797], //longitude first, then latitude
    },
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Beach",
    geometry: {
      type: "Point",
      coordinates: [25.3667, 37.4415], //longitude first, then latitude
    },
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Countryside",
    geometry: {
      type: "Point",
      coordinates: [83.7534, 9.7489], //longitude first, then latitude
    },
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 1600,
    location: "Charleston",
    country: "United States",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [79.932, 32.7833], //longitude first, then latitude
    },
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Rooms",
    geometry: {
      type: "Point",
      coordinates: [139.65, 35.6764], //longitude first, then latitude
    },
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Lake",
    geometry: {
      type: "Point",
      coordinates: [71.5724, 43.1939], //longitude first, then latitude
    },
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Luxury",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028], //longitude first, then latitude
    },
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 4000,
    location: "Aspen",
    country: "United States",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Ski",
    geometry: {
      type: "Point",
      coordinates: [106.8175, 39.1911], //longitude first, then latitude
    },
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
    ],
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    cancellationPolicy:
      "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
    category: "Beach",
    geometry: {
      type: "Point",
      coordinates: [83.7534, 9.7489], //longitude first, then latitude
    },
  },
];

module.exports = { data: sampleListings };

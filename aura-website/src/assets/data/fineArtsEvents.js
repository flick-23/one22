const fineArtsEvents = [
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1533208087231-c3618eab623c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBhaW50aW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Paint without brush",
    name: "crimson circle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non bibendum velit. Aenean leo dolor, auctor iaculis varius non, cursus ac turpis. Sed id ex porttitor, fringilla purus id, tincidunt nisi. Sed dui purus, commodo sed risus a, convallis cursus risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis metus vel sem aliquet tempus consectetur sed massa. Ut consectetur ante nec pulvinar auctor. Etiam bibendum ligula vel accumsan volutpat. In eleifend ac elit quis condimentum. Integer nec mauris ac ex cursus lacinia. Mauris molestie ligula metus, lobortis posuere nulla venenatis et. Donec scelerisque.",
    coordNames: ["A", "B", "C", "D"],
    coordNumbers: ["123456789", "123456789", "123456789", "123456789"],
    coordImgs: [
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    minTeamSize: 3,
    maxTeamSize: 5,
    eventDate: "02/06/2022",
    maxVolunterLimit: 5,
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1644423532905-b160a29025f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHN0aWNrc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Stick Art",
    name: "I am Groot",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non bibendum velit. Aenean leo dolor, auctor iaculis varius non, cursus ac turpis. Sed id ex porttitor, fringilla purus id, tincidunt nisi. Sed dui purus, commodo sed risus a, convallis cursus risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis metus vel sem aliquet tempus consectetur sed massa. Ut consectetur ante nec pulvinar auctor. Etiam bibendum ligula vel accumsan volutpat. In eleifend ac elit quis condimentum. Integer nec mauris ac ex cursus lacinia. Mauris molestie ligula metus, lobortis posuere nulla venenatis et. Donec scelerisque.",
    coordNames: ["A", "B", "C", "D"],
    coordNumbers: ["123456789", "123456789", "123456789", "123456789"],
    coordImgs: [
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    minTeamSize: 3,
    maxTeamSize: 5,
    eventDate: "02/06/2022",
    maxVolunterLimit: 5,
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1543198926-22fea2a870dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2UlMjBwYWludGluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Face Painting",
    name: "Why so serious?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non bibendum velit. Aenean leo dolor, auctor iaculis varius non, cursus ac turpis. Sed id ex porttitor, fringilla purus id, tincidunt nisi. Sed dui purus, commodo sed risus a, convallis cursus risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis metus vel sem aliquet tempus consectetur sed massa. Ut consectetur ante nec pulvinar auctor. Etiam bibendum ligula vel accumsan volutpat. In eleifend ac elit quis condimentum. Integer nec mauris ac ex cursus lacinia. Mauris molestie ligula metus, lobortis posuere nulla venenatis et. Donec scelerisque.",
    coordNames: ["A", "B", "C", "D"],
    coordNumbers: ["123456789", "123456789", "123456789", "123456789"],
    coordImgs: [
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    minTeamSize: 3,
    maxTeamSize: 5,
    eventDate: "02/06/2022",
    maxVolunterLimit: 5,
  },
];

export default fineArtsEvents;

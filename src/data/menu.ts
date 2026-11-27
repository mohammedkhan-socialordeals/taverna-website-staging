// ─────────────────────────────────────────────────────────────
//  TAVERNA — the menu. Transcribed from the current printed menu.
//  To change a dish or a price, edit it here. Nothing else to touch.
//  Each item:  { name, desc?, price }
// ─────────────────────────────────────────────────────────────

export type Item = { name: string; desc?: string; price: string };
export type Section = { id: string; title: string; note?: string; items: Item[] };
export type Group = { id: string; title: string; kicker: string; sections: Section[] };

export const menu: Group[] = [
  {
    id: 'dinner',
    title: 'Dinner',
    kicker: 'La Cena',
    sections: [
      {
        id: 'antipasti',
        title: 'Antipasti',
        items: [
          { name: 'Whipped Ricotta', desc: 'wild honey', price: '10' },
          { name: 'Warm Marinated Olives', desc: 'rosemary, thyme, lemon, garlic', price: '16' },
          { name: 'Bruschetta', desc: 'tomato, basil pesto', price: '15' },
          { name: 'Burrata Bruschetta', desc: 'tomato, burrata, basil pesto', price: '22' },
          { name: 'Meatballs in Sugo', desc: 'spicy San Marzano tomato, basil, parmigiano', price: '20' },
          { name: 'Arancini Siciliani', desc: 'carnaroli rice croquettes, arrabbiata', price: '20' },
          { name: 'Calamari Fritti', desc: 'lemon, garlic yoghurt', price: '24' },
          { name: 'Baked Clams Oreganata', desc: 'garlic, oregano, breadcrumbs', price: '18' },
          { name: 'Jumbo Shrimp Scampi', desc: 'garlic, white wine, lemon butter', price: '22' },
          { name: 'Mussels Gorgonzola', desc: 'San Marzano tomato, white wine, garlic butter, gorgonzola cream', price: '28' },
          { name: 'Carpaccio Piemontese', desc: 'beef tenderloin, cremini mushrooms, arugula, toasted walnuts, shallots, truffle emulsion', price: '24' },
          { name: 'Prosciutto & Mozzarella', desc: 'prosciutto di Parma, fresh mozzarella, basil, extra virgin olive oil', price: '32' },
          { name: 'Grilled Octopus', desc: 'lemon, oregano, chili', price: '27' },
        ],
      },
      {
        id: 'insalate',
        title: 'Insalate',
        note: 'Portioned for sharing',
        items: [
          { name: 'Caesar', desc: 'romaine, pancetta, focaccia croutons, grana padano', price: '25' },
          { name: 'Insalata della Casa', desc: 'mixed greens, tomato, prosciutto di Parma, mozzarella, house vinaigrette', price: '25' },
          { name: 'Burrata Caprese', desc: 'seasonal tomatoes, basil, olive oil, salsa verde', price: '28' },
        ],
      },
      {
        id: 'pasta',
        title: 'Pasta',
        items: [
          { name: 'Spicy Rigatoni Vodka', desc: 'chili, vodka, tomato cream, basil', price: '33' },
          { name: 'Spaghetti Carbonara', desc: 'pancetta, egg, pecorino Romano, black pepper', price: '36' },
          { name: 'Rigatoni Bolognese', desc: 'slow-braised beef ragù, pancetta, grana padano', price: '37' },
          { name: 'Orecchiette Sausage & Rabe', desc: 'fennel sausage, broccoli rabe, pecorino', price: '34' },
          { name: 'Tagliatelle Alfredo', desc: 'grana padano cream, black pepper', price: '32' },
          { name: 'Tagliatelle con Funghi', desc: 'wild mushrooms, parmigiano cream', price: '36' },
          { name: 'Tortellini al Ragù', desc: 'ricotta tortellini, slow-cooked meat ragù', price: '36' },
          { name: 'Lasagna al Forno', desc: 'bolognese, besciamella, mozzarella', price: '37' },
          { name: 'Cannelloni', desc: 'braised beef, veal, ricotta, bolognese, besciamella', price: '36' },
          { name: 'Lobster Ravioli', desc: 'lobster-filled ravioli, brown butter, sage', price: '45' },
          { name: 'Butternut Squash Ravioli', desc: 'brown butter, sage cream, pine nuts', price: '36' },
          { name: 'Ricotta & Spinach Ravioli', desc: 'San Marzano tomato, basil pesto rosé', price: '35' },
          { name: 'Gnocchi al Pesto Genovese', desc: 'potato gnocchi, basil pesto, grana padano', price: '35' },
          { name: 'Shrimp Capellini', desc: 'jumbo shrimp, garlic, white wine cream', price: '40' },
          { name: 'Seafood Tagliatelle', desc: 'jumbo shrimp, bay scallops, calamari, garlic butter, white wine, chili cream', price: '43' },
          { name: 'Spaghetti Aglio, Olio e Peperoncino', desc: 'garlic, olive oil, chili', price: '25' },
          { name: 'Spaghetti Pomodoro', desc: 'San Marzano tomato, basil', price: '29' },
          { name: 'Risotto ai Frutti di Mare', desc: 'saffron, mussels, bay scallops, jumbo shrimp', price: '44' },
        ],
      },
      {
        id: 'carni',
        title: 'Carni',
        note: 'Steaks, chops & veal',
        items: [
          { name: 'Fiorentina', desc: '32 oz prime porterhouse steak, rosemary, olive oil — for two', price: '129' },
          { name: 'Filet Mignon', desc: '8 oz centre-cut filet, rosemary, roasted potatoes, Brussels sprouts, red wine jus', price: '65' },
          { name: 'Lamb Chops Scottadito', desc: 'garlic, lemon, oregano, olive oil', price: '60' },
          { name: 'Veal Milanese', desc: 'breaded veal, arugula, lemon', price: '49' },
          { name: 'Veal Marsala', desc: 'starter house salad, veal scaloppine, marsala, cremini mushrooms, risotto alla parmigiana', price: '48' },
          { name: 'Veal Saltimbocca', desc: 'starter house salad, veal scaloppine, prosciutto di Parma, sage, fontina, white wine, spaghetti aglio e olio', price: '54' },
          { name: 'Chicken al Limone', desc: 'starter house salad, chicken scaloppine, lemon butter, white wine, spaghetti aglio e olio', price: '39' },
        ],
      },
      {
        id: 'pesci',
        title: 'Pesci',
        note: 'From the sea',
        items: [
          { name: 'Dover Sole Piccata', desc: 'brown butter, lemon, capers', price: '74' },
          { name: 'Whole Branzino', desc: 'lemon, olive oil, oregano, capers, risotto al limone', price: '52' },
          { name: 'Seared Scallops Veneziana', desc: 'lemon butter, garlic breadcrumbs, risotto al limone', price: '49' },
          { name: 'Shrimp Fra Diavolo', desc: 'jumbo shrimp, spicy San Marzano tomato, spaghetti aglio e olio', price: '45' },
        ],
      },
      {
        id: 'parmigiana',
        title: 'Parmigiana',
        note: 'Red sauce, mozzarella, basil',
        items: [
          { name: 'Veal Parmesan', price: '50' },
          { name: 'Chicken Parmesan', price: '42' },
          { name: 'Eggplant Parmesan', price: '36' },
        ],
      },
      {
        id: 'pizza',
        title: 'Pizza',
        items: [
          { name: 'Margherita', desc: 'San Marzano tomato, fior di latte, basil', price: '29' },
          { name: 'Pepperoni', desc: 'San Marzano tomato, mozzarella, pepperoni', price: '34' },
          { name: 'Prosciutto', desc: 'San Marzano tomato, fior di latte, prosciutto di Parma, arugula, grana padano', price: '36' },
          { name: 'Brooklyn Hot Honey Pie', desc: 'San Marzano tomato, mozzarella, soppressata, fennel sausage, chili oil, hot honey', price: '38' },
        ],
      },
      {
        id: 'contorni',
        title: 'Contorni',
        note: 'On the side',
        items: [
          { name: 'Roasted Rosemary Potatoes', desc: 'Yukon gold potatoes, garlic, olive oil', price: '14' },
          { name: 'Spicy Broccoli Rabe', desc: 'garlic, Calabrian chili, olive oil', price: '15' },
          { name: 'Funghi Trifolati', desc: 'wild mushrooms, garlic, thyme, lemon', price: '16' },
          { name: 'Crispy Brussels Sprouts', desc: 'capers, lemon, chilies, grana padano', price: '15' },
        ],
      },
    ],
  },
  {
    id: 'cocktails',
    title: 'Cocktails',
    kicker: 'Al Bar',
    sections: [
      {
        id: 'martini-negroni',
        title: 'Martini & Negroni',
        items: [
          { name: 'Martini', desc: 'Tanqueray No. Ten gin, dry vermouth, Manzanilla olive', price: '19' },
          { name: 'Dirty Martini', desc: 'Grey Goose vodka, dry vermouth, olive brine, Manzanilla olive', price: '20' },
          { name: 'Negroni', desc: 'Tanqueray No. Ten gin, Campari, Punt e Mes, orange', price: '16' },
          { name: 'Boulevardier', desc: 'Bulleit Bourbon, Campari, Carpano Antica, orange', price: '17' },
        ],
      },
      {
        id: 'house',
        title: 'House Cocktails',
        items: [
          { name: 'Taverna Old Fashioned', desc: 'Bulleit Bourbon, Averna, demerara, bitters, orange, amarena cherry', price: '18' },
          { name: '21st Street Manhattan', desc: 'Woodford Reserve bourbon, Carpano Antica, Amaro Montenegro, amarena cherry, orange', price: '17' },
          { name: 'Espresso Martini', desc: 'Ketel One vodka, Kahlúa, espresso', price: '16' },
          { name: 'Amaretto Sour', desc: "Amaretto, Maker's Mark bourbon, lemon, egg white, amarena cherry", price: '17' },
          { name: 'Sicilian Margarita', desc: 'Don Julio Reposado tequila, Cointreau, lime, agave, Calabrian chili salt', price: '22' },
          { name: 'Caesar della Casa', desc: 'Lucky Bastard vodka, Clamato, Worcestershire, Tabasco, celery salt, lime, olive, bocconcini, tomato', price: '15' },
          { name: 'A Perfect Pear', desc: 'Grey Goose La Poire, St-Germain Elderflower, lemon', price: '15' },
        ],
      },
      {
        id: 'spritz',
        title: 'Spritz & Sparkling',
        items: [
          { name: 'Aperol Spritz', desc: 'Aperol, La Marca prosecco, soda, orange', price: '16' },
          { name: 'Hugo Spritz', desc: 'St-Germain Elderflower, La Marca prosecco, soda, mint, lemon', price: '17' },
          { name: 'Limoncello Spritz', desc: 'Limoncello, La Marca prosecco, soda, mint, lemon', price: '17' },
          { name: 'Bellini', desc: 'fresh peach purée, La Marca prosecco, mint', price: '14' },
          { name: 'Bella Sangria', desc: 'Trebbiano, St-Germain Elderflower, white peach, citrus, mint', price: '16' },
        ],
      },
      {
        id: 'zero-proof',
        title: 'Zero Proof',
        items: [
          { name: 'Phony Negroni', desc: 'St. Agrestis Phony Negroni, orange', price: '13' },
          { name: 'Lucano Spritz', desc: 'Lucano Amaro Zero, grapefruit, soda, rosemary', price: '12' },
          { name: 'Shakerato Espresso', desc: "Lyre's coffee, espresso, date", price: '12' },
          { name: 'Cucumber Lemonade', desc: 'fresh cucumber, black tea, lemon', price: '10' },
          { name: 'Amalfi Lemon Soda', desc: 'lemon, sparkling citrus, mint, sea salt', price: '9' },
        ],
      },
    ],
  },
];

// Shown on the home page. Names must match dishes above.
export const signatures: Item[] = [
  { name: 'Fiorentina', desc: '32 oz prime porterhouse, rosemary, olive oil — carved for two', price: '129' },
  { name: 'Dover Sole Piccata', desc: 'brown butter, lemon, capers', price: '74' },
  { name: 'Spicy Rigatoni Vodka', desc: 'chili, vodka, tomato cream, basil', price: '33' },
  { name: 'Veal Parmesan', desc: 'red sauce, mozzarella, basil', price: '50' },
  { name: 'Lasagna al Forno', desc: 'bolognese, besciamella, mozzarella', price: '37' },
  { name: 'Brooklyn Hot Honey Pie', desc: 'soppressata, fennel sausage, chili oil, hot honey', price: '38' },
];

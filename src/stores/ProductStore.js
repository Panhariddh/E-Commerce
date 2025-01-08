// ProductStore.js

// Products by brand
export const productsByBrand = {
  APPLE: [
    { id: 5, image: 'https://i.pinimg.com/736x/32/f6/2b/32f62bcdbd573761c93bfc881225e00f.jpg', name: "MacBook Air M1", price: "$999" },
    { id: 6, image: 'https://i.pinimg.com/736x/b7/61/6c/b7616cfc0a3cce9d6e38bbe490dcae8b.jpg', name: "Apple MacBook Pro14” M4", price: "$1499" },
    { id: 7,image: 'https://i.pinimg.com/736x/dd/92/6b/dd926ba6d1669a474969522278ff0ea3.jpg', name: "Apple MacBook Pro14” M4 Pro", price: "$999" },
    { id: 8, image: 'https://i.pinimg.com/736x/c4/05/1a/c4051a153384d172cf9fbe4e38b826a9.jpg', name: "Apple MacBook Pro14” M4 Max", price: "$999" },
    { id: 9,image: 'https://i.pinimg.com/736x/6a/7a/9f/6a7a9fa50d65dc4677133dd87220718e.jpg', name: "Apple MacBook Pro 14-inch M1 Pro,", price: "$999" },
    { id: 10, image: 'https://i.pinimg.com/736x/32/3c/89/323c89f120ac034a9eeddfb94e97d0b7.jpg', name: "Apple MacBook Pro 16", price: "$999" },
    { id: 11, image: 'https://i.pinimg.com/736x/82/e2/bd/82e2bd6dca1e2dcc65fecaa3dbebed22.jpg', name: "MacBook Air 2022 Mockups", price: "$999" },
    { id: 12, image: 'https://i.pinimg.com/736x/b6/ec/c6/b6ecc61af23c38c7c906b1efe808e993.jpg', name: "Apple MacBook Pro 13", price: "$999" }
  ],
  MSI: [
    { id: 13,image: 'https://i.pinimg.com/736x/81/42/7b/81427b0bb46cc0c8e6893730e9bd80b4.jpg', name: "MSI Katana 17", price: "$999" },
    { id: 14,image: 'https://i.pinimg.com/736x/59/50/62/59506260421ab009c55db6680570b5c9.jpg', name: "MSI Cyborg 15", price: "$999" },
    { id: 15,image: 'https://i.pinimg.com/736x/ab/21/6a/ab216acc7a5bc4e00e905d85091b2dbb.jpg', name: "MSI Creator Z16 HX Studio", price: "$999" },
    { id: 16,image: 'https://i.pinimg.com/736x/ac/55/36/ac5536c9ab87b69480410618cf2a0c7b.jpg', name: "MSI Raider GE78 Gaming", price: "$999" },
    { id: 17,image: 'https://i.pinimg.com/736x/72/83/6f/72836f00913e1c4ac5e1b9ef3a426f3f.jpg', name: "MSI Cyborg 15 AI at CES 2024", price: "$999" },
    { id: 18,image: 'https://i.pinimg.com/736x/c3/aa/83/c3aa8387f25c04e1b9d6729a3a60ad6a.jpg', name: "MSI Raider GE78", price: "$999" },
    { id: 19,image: 'https://i.pinimg.com/736x/28/28/2b/28282b7ac01c6529021aa7c52f59a892.jpg', name: "MSI GE66 Raider", price: "$999" },
    { id: 20,image: 'https://i.pinimg.com/736x/81/42/7b/81427b0bb46cc0c8e6893730e9bd80b4.jpg', name: "MSI Raider GE78", price: "$999" }
  ],
  
  ASUS: [
      {id: 21,image:'https://i.pinimg.com/736x/4d/c8/94/4dc894a0ca5115219eaf83c9628c18b0.jpg',name:"Asus TUF A15 2024", price: "$999"},
      {id: 22,image:'https://i.pinimg.com/736x/79/03/24/7903246a0017d4"$999"6ed9bda83167252.jpg',name:"Asus Zephyrus G16", price: "$999"},
      {id: 23,image:'https://i.pinimg.com/736x/0d/91/57/0d91573ac42b4ffee05d5fc0a7e232e4.jpg',name:"Asus ROG Zephyrus Duo 16", price: "$999"},
      {id: 24,image:'https://i.pinimg.com/736x/64/2e/66/642e66e256804b59d28a90819e4a41d4.jpg',name:"Asus ROG Strix G17", price: "$999"},
      {id: 25,image:'https://i.pinimg.com/736x/4d/c8/94/4dc894a0ca5115219eaf83c9628c18b0.jpg',name:"ASUS TUF A15 2024 Gaming Laptop 15.6", price: "$999"},
      {id: 26,image:'https://i.pinimg.com/736x/fc/31/3a/fc313a629763fdd3c4fd0162a69d1f1b.jpg',name:"ASUS ZenBook 14", price: "$999"},
      {id: 27,image:'https://i.pinimg.com/736x/d9/06/bf/d906bfe56b526573376a4c9fa7193e52.jpg',name:"ASUS ZenBook 13", price: "$999"},
      {id: 28,image:'https://i.pinimg.com/736x/ef/fd/89/effd897be"$999"66850cfb1b09f9681a8a.jpg',name:"ASUS Zenbook S 13", price: "$999"},
],
ACER: [
      {id: 29,image:'https://i.pinimg.com/736x/1c/53/db/1c53db184f77e5263bf58fa9c3551de1.jpg',name:"Acer Nitro 5 2021", price: "$999"},
      {id: 30,image:'https://i.pinimg.com/736x/e7/4c/b9/e74cb918f58322b7908ffda30fca5028.jpg',name:"Acer Nitro 5 17.3 inch 2022", price: "$999"},
      {id: 31,image:'https://i.pinimg.com/736x/fe/fe/da/fefeda96f85d80fc377d61689dacb8be.jpg',name:"Acer Predator Helios Neo 18 2024", price: "$999"},
      {id: 32,image:'https://i.pinimg.com/736x/40/54/24/4054242537b4f5fa2d2c581b41675be3.jpg',name:"Acer Predator Helios Neo 16 2023", price: "$999"},
      {id: 33,image:'https://i.pinimg.com/736x/77/50/9d/77509d2252578ead5b0e59485da4195d.jpg',name:"Acer Aspire 3", price: "$999"},
      {id: 34,image:'https://i.pinimg.com/736x/a7/fd/88/a7fd884dfb55156231e94e4eeecf32ac.jpg',name:"Acer Nitro 5 17.3 inch 2022", price: "$999"},
      {id: 35,image:'https://i.pinimg.com/736x/67/fa/d5/67fad5374e00f7134adb2c1737e6a0d9.jpg',name:"Acer Nitro 5 17.3 inch 2022", price: "$999"},
      {id: 36,image:'https://i.pinimg.com/736x/40/54/24/4054242537b4f5fa2d2c581b41675be3.jpg',name:"Acer Nitro 5 17.3 inch 2022", price: "$999"},
],
DELL: [
      {id: 37,image:'https://i.pinimg.com/736x/0b/0e/a8/0b0ea8eeddef43e8dcdd38f4664f5fd5.jpg',name:"Dell Inspiron 3511 i5-11th", price: "$999"},
      {id: 38,image:'https://i.pinimg.com/736x/14/65/8c/14658c595f67c97d4bc0048bcba0e8c4.jpg',name:"Dell Inspiron 3501 Ci5-11th", price: "$999"},
      {id: 39,image:'https://i.pinimg.com/736x/04/6e/63/046e635288c4a736f40676c887266ef9.jpg',name:"Dell Latitude 3510 Ci7-10th", price: "$999"},
      {id: 40,image:'https://i.pinimg.com/736x/5b/3a/19/5b3a19118a41dee4b4a21872f71d463e.jpg',name:"Dell Latitude 5430 (2023) Ci5-12th", price: "$999"},
      {id: 41,image:'https://i.pinimg.com/736x/d0/4d/27/d04d274556850489e06769402cbd3809.jpg',name:"Dell XPS 13 Plus", price: "$999"},
      {id: 42,image:'https://i.pinimg.com/736x/dd/3a/d7/dd3ad788712314cfc31525ab46f4aa15.jpg',name:"Dell XPS 17 9710", price: "$999"},
      {id: 43,image:'https://i.pinimg.com/736x/b7/99/e5/b799e57859ca518b7810455b32783b2d.jpg',name:"Dell refreshes XPS 13", price: "$999"},
      {id: 44,image:'https://i.pinimg.com/736x/76/1e/d3/761ed3f968fc5f90fb56215266de2e6e.jpg',name:"DELL XPS 13 PLUS 9320", price: "$999"},
],
ALIENWARE: [
      {id: 45,image:'https://i.pinimg.com/736x/06/94/86/069486e17c63b2d4e15a632b767c2387.jpg',name:"Alienware M18 R2", price: "$999"},
      {id: 46,image:'https://i.pinimg.com/736x/3f/01/00/3f010036105ea4812cb52dc14c8de2c1.jpg',name:"Alienware 15 R4", price: "$999"},
      {id: 47,image:'https://i.pinimg.com/736x/cd/34/39/cd343"$999"31d3ee1350a255e83782a153.jpg',name:"Alienware M15 R7", price: "$999"},
      {id: 48,image:'https://i.pinimg.com/736x/a7/1b/2e/a71b2ed40166d2ab1ba6453229cfbd0d.jpg',name:"Alienware X16 2023", price: "$999"},
      {id: 49,image:'https://i.pinimg.com/736x/40/4c/44/404c447109e90508f934d08892cf0cba.jpg',name:"Alienware M18 R1", price: "$999"},
      {id: 50,image:'https://i.pinimg.com/736x/28/85/83/28858390ff52c76d85da99341981758e.jpg',name:"Alienware's X14", price: "$999"},
      {id: 51,image:'https://i.pinimg.com/736x/06/94/86/069486e17c63b2d4e15a632b767c2387.jpg',name:"Alienware M18 R2", price: "$999"},
      {id: 52,image:'https://i.pinimg.com/736x/cd/34/39/cd343"$999"31d3ee1350a255e83782a153.jpg',name:"Alienware M15 R7", price: "$999"},
],
LENOVO: [
      {id: 53,image:'https://i.pinimg.com/736x/0a/39/af/0a39af1a2ceed291d7d165a1bedee92e.jpg',name:"Lenovo ideapad 3s i5", price: "$999"},
      {id: 54,image:'https://i.pinimg.com/736x/2b/4b/15/2b4b15025f3f96540dc2280eddf53458.jpg',name:"Lenovo ideapad 3 15.6", price: "$999"},
      {id: 55,image:'https://i.pinimg.com/736x/71/40/a3/7140a393fbcc83fe42c96668a4566b87.jpg',name:"Lenovo Legion 5 17.3inch", price: "$999"},
      {id: 56,image:'https://i.pinimg.com/736x/12/41/e8/1241e86f4b277781621a61a1e8b204b2.jpg',name:"Lenovo Legion Pro 7i", price: "$999"},
      {id: 57,image:'https://i.pinimg.com/736x/86/7a/aa/867aaa93c3a882de042750d0c0bfed00.jpg',name:"Lenovo LOQ 15AHP9 ", price: "$999"},
      {id: 58,image:'https://i.pinimg.com/736x/3b/81/02/3b8102d216f167657b0101dc9e5dd5df.jpg',name:"Lenovo ThinkBook 16p G5 IRX", price: "$999"},
      {id: 59,image:'https://i.pinimg.com/736x/f4/c2/de/f4c2de66d9281419db182d60ab3c7c10.jpg',name:"Lenovo Legion 5 16IRX9 ", price: "$999"},
      {id: 60,image:'https://i.pinimg.com/736x/ce/ce/30/cece30da08c8a9b160d14bd6ba681f56.jpg',name:"Lenovo Legion Slim 7i", price: "$999"},
]
  };
  
  // Individual products (e.g., for details)
  export const products = [
    {
      id: 1,
      name: 'Asus ROG G531',
      image: '/src/assets/images/asus.png',
      price: '$999',
    },
    {
      id: 2,
      name: 'Lenovo V14',
      image: '/src/assets/images/Lenovo.png',
      price: '$849',
    },
    {
      id: 3,
      name: 'Apple MacBook Pro',
      image: '/src/assets/images/Apple.png',
      price: '$1,199',
    },
    {
      id: 4,
      name: 'Windows Laptop',
      image: '/src/assets/images/alien.png',
      price: '$1,099',
    }
  ];
  
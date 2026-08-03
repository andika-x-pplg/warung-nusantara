// Menu data for Warung Nusantara
export const foods = [
  {
    id: 1,
    name: "Nasi Goreng",
    description: "Nasi yang digoreng dengan telur, sayuran, dan bumbu spesial",
    price: 25000,
    rating: 4.8,
    category: "makanan",
    stock: 15,
    maxStock: 15,
    sold: 0,
    isPopular: true,
    image: "https://cdn1-production-images-kly.akamaized.net/285eQpDwdxx1xhh5RFb38KtfhBY=/0x148:1920x1230/1280x720/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg"
  },
  {
    id: 2,
    name: "Mie Ayam",
    description: "Mie kuning dengan kuah ayam yang gurih dan nikmat",
    price: 18000,
    rating: 4.7,
    category: "makanan",
    stock: 10,
    maxStock: 10,
    sold: 0,
    isPopular: true,
    image: "https://www.goldendragonhouseware.com/timthumb.php?src=files/recipe/mMwpz-resep-mie-ayam-sehat-khas-nusantara-dan-bisa-buat-di-rumah.png&w=870&h=470&zc=1https://lh7-us.googleusercontent.com/Laz8T99SVPujmtdMB4mD94730k6Jr2FFsDOWQwIHFuiJau-tEnzeul30zYH3mAvhP_d_4ENe3-X7k0S2vpOYnsaPx99Nz0KNnAIlbNH1kiOJApe4pWz9n0amFjJXgsZqmjD4Svig6-N1IGY3-xKi1g"
  },
  {
    id: 3,
    name: "Bakso",
    description: "Bakso daging dengan kuah kaldu yang lezat",
    price: 20000,
    rating: 4.6,
    category: "makanan",
    stock: 55,
    maxStock: 55,
    sold: 0,
    isPopular: false,
    image: "https://akcdn.detik.net.id/community/media/visual/2019/03/06/9d8d836e-1630-41d1-926a-0cd35c143cc5.jpeg?w=700&q=90"
  },
  {
    id: 4,
    name: "Ayam Geprek",
    description: "Ayam goreng yang diplekes dengan sambal pedas nikmat",
    price: 23000,
    rating: 4.9,
    category: "makanan",
    stock: 10,
    maxStock: 10,
    sold: 0,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1569058242252-623df46b5025?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Sate Ayam",
    description: "Daging ayam tusuk dengan bumbu kacang yang gurih",
    price: 30000,
    rating: 4.8,
    category: "makanan",
    stock: 200,
    maxStock: 200,
    sold: 0,
    isPopular: true,
    image: "https://foodspot.co.id/blog/wp-content/uploads/2019/07/Sate-Ayam-1160x653.jpg"
  },
  {
    id: 6,
    name: "Es Teh",
    description: "Teh dingin segar yang menyegarkan",
    price: 8000,
    rating: 4.5,
    category: "minuman",
    stock: 50,
    maxStock: 50,
    sold: 0,
    isPopular: false,
    image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/1a3c0d31-bf6c-4b8c-9986-8d565d3f91ed_Go-Biz_20231102_194114.jpeg"
  },
  {
    id: 7,
    name: "Jus Alpukat",
    description: "Jus alpukat yang lembut dan bergizi",
    price: 15000,
    rating: 4.7,
    category: "minuman",
    stock: 90,
    maxStock: 90,
    sold: 0,
    isPopular: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyquhaDvUAVb8H8addikEJg06BHwA80EpLERf8Ln2ddMg8Sbb7bUSLGmcI&s=10"
  },
  {
    id: 8,
    name: "Gado-Gado",
    description: "Sayuran dengan bumbu kacang dan telur goreng",
    price: 22000,
    rating: 4.6,
    stock: 15,
    maxStock: 15,
    sold: 0,
    category: "makanan",
    isPopular: false,
    image: "https://i0.wp.com/www.rukita.co/stories/wp-content/uploads/2022/04/gado-gado-MAHI.jpg?resize=720%2C480&ssl=1"
  },
  {
    id: 9,
    name: "Lumpia",
    description: "Lumpia goreng dengan isian daging dan sayuran",
    price: 12000,
    rating: 4.5,
    stock: 25,
    maxStock: 25,
    sold: 0,
    category: "makanan",
    isPopular: false,
    image: "https://wiratech.co.id/wp-content/uploads/2023/12/Lumpia.webp"
  },
  {
    id: 10,
    name: "Jus Jeruk",
    description: "Jus jeruk segar yang asam manis",
    price: 12000,
    rating: 4.6,
    stock: 15,
    maxStock: 15,
    sold: 0,
    category: "minuman",
    isPopular: false,
    image: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/1a3791fe-53ff-4a30-95a4-cefbcd9f9299_Go-Biz_20231201_020307.jpeg"
  },
];

// Helper function to format currency
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
};

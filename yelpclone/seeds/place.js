const mongoose = require('mongoose');
const Place = require('../models/place');

mongoose.connect('mongodb://127.0.0.1/bestpoints')
    .then((result) => {
        console.log('connected to mongodb')
    }).catch((err) => {
        console.log(err)
    });

async function seedPlaces() {
    const places = [
        {
            title: 'Taman Mini Indonesia Indah',
            price: 20000,
            description: 'Taman hiburan keluarga dengan berbagai replika bangunan dari seluruh Indonesia',
            location: 'Taman Mini Indonesia Indah, Jakarta',
            image: 'https://turisian.com/wp-content/uploads/2023/01/TMII.jpeg'
        },
        {
            title: 'Pantai Kuta',
            price: 0,
            description: 'Pantai yang terkenal di Bali dengan pemandangan sunset yang indah',
            location: 'Pantai Kuta, Kuta, Badung Regency, Bali',
            image: 'https://a.cdn-hotels.com/gdcs/production79/d897/2c740d3c-d511-44aa-9ac9-c27500a0cc1b.jpg'
        },
        {
            title: 'Borobudur',
            price: 0,
            description: 'Candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah',
            location: 'Borobudur, Magelang, Central Java',
            image: 'https://www.thoughtco.com/thmb/9kj87LcraQgblLPbr8piFmZSqAc=/2104x1425/filters:fill(auto,1)/GettyImages-599927824-589770da3df78caebcf39797.jpg'
        },
        {
            title: 'Kawah Putih',
            price: 0,
            description: 'Kawah vulkanik dengan danau berwarna putih di Bandung, Jawa Barat',
            location: 'Kawah Putih, Ciwidey, West Java',
            image: 'https://theworldtravelguy.com/wp-content/uploads/2021/07/DJI_0126_1200.jpg'
        },
        {
            title: 'Malioboro',
            price: 0,
            description: 'Jalan utama di Yogyakarta dengan berbagai toko dan kuliner khas',
            location: 'Jl. Malioboro, Yogyakarta City, Special Region of Yogyakarta',
            image: 'https://getlost.id/wp-content/uploads/2020/06/Malioboro_1032556891.jpg'
        },
        {
            title: 'Pantai Tanjung Aan',
            price: 10000,
            description: 'Pantai dengan pasir berwarna putih dan air laut yang jernih di Lombok, Nusa Tenggara Barat',
            location: 'Pantai Tanjung Aan, Lombok, West Nusa Tenggara',
            image: 'https://www.sunshineseeker.com/wp-content/uploads/2016/02/Tanjung-Aan-Best-Dream-Beach-South-Lombok.jpg'
        },
        {
            title: 'Bukit Bintang',
            price: 0,
            description: 'Kawasan perbelanjaan dan hiburan di Kuala Lumpur, Malaysia',
            location: 'Bukit Bintang, Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia',
            image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2c/f3/8b.jpg'
        },
        {
            title: 'Candi Prambanan',
            price: 25000,
            description: 'Candi Hindu terbesar di Indonesia yang terletak di Yogyakarta',
            location: 'Candi Prambanan, Sleman, Special Region of Yogyakarta',
            image: 'https://2.bp.blogspot.com/-2ZJ804oV1zQ/WBaBv23XX9I/AAAAAAAAAjU/XsJTeCQGaEID3N9yOr7AGL0m4v5nnKq1wCLcB/s1600/candi-prambanan-adalah-peninggalan-sejarah-kerajaan.jpg'
        },
        {
            title: 'Danau Toba',
            price: 0,
            description: 'Danau vulkanik terbesar di Indonesia yang terletak di Sumatera Utara',
            location: 'Danau Toba, North Sumatra',
            image: 'https://anekatempatwisata.com/wp-content/uploads/2016/08/Danau-Toba-Sumatera-Utara.jpg'
        },
        {
            title: 'Kawah Ijen',
            price: 100000,
            description: 'Kawah vulkanik dengan fenomena blue fire di Banyuwangi, Jawa Timur',
            location: 'Kawah Ijen, Banyuwangi, East Java',
            image: 'https://theworldtravelguy.com/wp-content/uploads/2021/07/DJI_0126_1200.jpg'
        },
        {
            title: 'Pantai Sanur',
            price: 0,
            description: 'Pantai di Bali yang cocok untuk berenang dan melihat matahari terbit',
            location: 'Pantai Sanur, Denpasar, Bali',
            image: 'https://www.anywhere.com/img-a/indonesia/destinations/sanur/sanur.bali.jpg'
        },

        {
            title: 'Candi Borobudur',
            price: 25000,
            description: 'Candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah',
            location: 'Candi Borobudur, Borobudur, Magelang, Central Java',
            image: 'https://www.thoughtco.com/thmb/9kj87LcraQgblLPbr8piFmZSqAc=/2104x1425/filters:fill(auto,1)/GettyImages-599927824-589770da3df78caebcf39797.jpg'
        },
        {
            title: 'Pulau Komodo',
            price: 5000000,
            description: 'Pulau di Indonesia yang terkenal dengan komodo, hewan terbesar di dunia',
            location: 'Pulau Komodo, East Nusa Tenggara',
            image: 'https://centreholidays.com/img/highlights/h159-h01-komodo-island-indonesia.jpg'
        },
        {
            title: 'Taman Nasional Gunung Rinjani',
            price: 150000,
            description: 'Taman nasional yang terletak di Lombok dan memiliki gunung tertinggi kedua di Indonesia',
            location: 'Taman Nasional Gunung Rinjani, Lombok, West Nusa Tenggara',
            image: 'https://rimbakita.com/wp-content/uploads/2019/07/kawah-gunung-rinjani.jpg'
        },
        {
            title: 'Bukit Tinggi',
            price: 0,
            description: 'Kota kecil yang terletak di Sumatera Barat dengan arsitektur khas Eropa',
            location: 'Bukit Tinggi, West Sumatra',
            image: 'https://coklatvanilla.com/wp-content/uploads/2021/11/tempat-menarik-di-bukit-tinggi-3.jpg'
        },
        {
            title: 'Pulau Weh',
            price: 0,
            description: 'Pulau yang terletak di ujung barat Indonesia dengan keindahan bawah laut yang luar biasa',
            location: 'Pulau Weh, Sabang, Aceh',
            image: 'https://www.pesonaindo.com/wp-content/uploads/2016/04/Paket-Wisata-Pulau-Weh-Sabang-Aceh-Dermaga-Weh.jpg'
        },
        {
            title: 'Taman Safari Indonesia',
            price: 0,
            description: 'Taman hiburan keluarga dengan berbagai satwa liar di Cisarua, Bogor',
            location: 'Taman Safari Indonesia, Cisarua, West Java',
            image: 'https://www.agoda.com/wp-content/uploads/2024/01/Bogor-Taman-Safari-Indonesia.jpg'
        },
        {
            title: 'Gunung Merbabu',
            price: 50000,
            description: 'Gunung yang terletak di Jawa Tengah dengan pemandangan matahari terbit yang indah',
            location: 'Gunung Merbabu, Central Java',
            image: 'https://mounture.com/wp-content/uploads/2022/12/Merbabu-JPG.jpg'
        },
        {
            title: 'Pulau Lombok',
            price: 0,
            description: 'Pulau di Indonesia yang terkenal dengan keindahan pantainya',
            location: 'Pulau Lombok, West Nusa Tenggara',
            image: 'https://www.travelmarbles.com/wp-content/uploads/2016/07/shutterstock_431660431.jpg'
        },
        {
            title: 'Tanjung Lesung',
            price: 100000,
            description: 'Kawasan wisata pantai di Banten yang cocok untuk bersantai dan berenang',
            location: 'Tanjung Lesung, Pandeglang, Banten',
            image: 'https://anekatempatwisata.com/wp-content/uploads/2015/06/wisata-Pantai-Tanjung-Lesung.jpg'
        }
    ]

    // const newPlace = await Promise.all(places.map(async (place) => {
    //     let geoData = await hereMaps.geometry(place.location);
    //     if (!geoData) {
    //         geoData = { type: 'Point', coordinates: [116.32883, -8.90952] }
    //     }
    //     return {
    //         ...place,
    //         author: '643d36579773b789e91ef660',
    //         // images: {
    //         //     url: 'public\\images\\image-1681876521153-260851838.jpg',
    //         //     filename: 'image-1681876521153-260851838.jpg'
    //         // },
    //         geometry: { ...geoData }
    //     }
    // }))

    try {
        await Place.deleteMany({});
        await Place.insertMany(places);
        console.log('Data berhasil disimpan');
    } catch (err) {
        console.log('Terjadi kesalahan saat menyimpan data:', err);
    } finally {
        mongoose.disconnect();
    }
}

seedPlaces();
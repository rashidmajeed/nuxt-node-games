const moment = require("moment");
const mongoose = require("mongoose");
const User = require("../models/user");
const Product = require("../models/product");
const Category = require("../models/category");

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();

const product1Id = mongoose.Types.ObjectId();

const category1Id = mongoose.Types.ObjectId();
const category2Id = mongoose.Types.ObjectId();

module.exports = {
  users: {
    model: User,
    items: [
      {
        _id: user1Id,
        avatar:
          "https://b.kisscc0.com/20180718/urw/kisscc0-ninja-computer-icons-samurai-youtube-avatar-ninja-5b4ed903c2dd20.4931332915318940197982.jpg",
        email: "james@gmail.com",
        name: "James Anderson",
        info: "Bla bla bla bla",
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        username: "James99",
        password: "testtest",
        role: "admin",
        products: [product1Id]
      },
      {
        _id: user2Id,
        avatar:
          "https://www.clipartmax.com/png/middle/195-1956720_%5B-img%5D-avatar.png",
        email: "john@gmail.com",
        name: "John Hansen",
        info: "Bla bla bla bla",
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        username: "johnhansen",
        password: "testtest1"
      },
      {
        _id: user3Id,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyc3j2s3bL4DIkC8uC9h0rcAdsDXcwJPNh8XHWbLQfHbOpVU",
        email: "kevin@gmail.com",
        name: "Kevin Peterson",
        info: "I have a famous name",
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        username: "Kevin21",
        password: "testtest2"
      }
    ]
  },
  categories: {
    model: Category,
    items: [
      {
        _id: category1Id,
        name: "Fighter Games"
      },
      {
        _id: category2Id,
        name: "Survival Games"
      }
    ]
  },
  products: {
    model: Product,
    items: [
      {
        _id: product1Id,
        slug: " Soul Calibur 6",
        title: " Soul Calibur 6",
        subtitle: " Soul Calibur 6, stands the best game in generation's ",
        image:
          "https://cdn.mos.cms.futurecdn.net/mm7CgtVmjgg4uQZb6GJyZg-650-80.jpg",
        description:
          "Soul Calibur 6 may have only just arrived on the scene, but it's already setting longtime fans alight with excitement. The definitive weapons-based fighter, the Soul Calibur series struggled to find its footing for awhile, but seems to have come home with SC6, which echoes the beloved Soul Calibur 2. The new Reversal Edge mechanic gives combatants more options, while returning features like Critical Edge provide flashy, powerful moves that let you unleash devastation on your foes.",
        audexp: [
          {
            value: "This game is target for the all age group"
          },
          {
            value:
              "Age group between 15-20 are 95 perent of the purchasing group"
          }
        ],
        requirements: [
          {
            value: "2-5 months of Gaming experience is required"
          },
          {
            value: "avaiable on PC, PS4, Xbox One"
          }
        ],
        productLink:
          "https://cdn.mos.cms.futurecdn.net/mm7CgtVmjgg4uQZb6GJyZg-650-80.jpg",
        price: 179.99,
        discountedPrice: 9.99,
        status: "published",
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        category: category2Id,
        author: user1Id
      }
    ]
  }
};

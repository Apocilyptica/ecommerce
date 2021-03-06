import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  SET_CART_PRODUCT,
  AUTHENTICATE_USER,
} from "./types";

export function signIn({ email, password }) {
  return {
    type: AUTHENTICATE_USER,
    payload: {
      user: {
        _id: 0,
        name: "Max Nelson",
        address: "1234 I live here",
        cartProducts: [],
      },
    },
  };
}

export function setPuchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}

export function addCartProduct(product) {
  return {
    type: SET_CART_PRODUCT,
    payload: product,
  };
}
export function fetchCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        _id: 0,
        product: {
          _id: 0,
          title: "JavaScript in the Browser",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          price: "1.99",
          belongsTo: [0, 1],
          imageUrl: "http://via.placeholder.com/80x80",
        },
        quantity: 2,
      },
      {
        _id: 1,
        product: {
          _id: 1,
          title: "Graph Database",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          price: "1.99",
          belongsTo: [0, 6],
          imageUrl: "http://via.placeholder.com/80x80",
        },
        quantity: 1,
      },
    ],
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 8.02,
        orderNumber: "A0048248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 1,
        total: 17.02,
        orderNumber: "546469RTEHY654H",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Maxwell Nelson",
          shippingAddress: "5678 West State Street",
        },
      },
      {
        _id: 2,
        total: 21.89,
        orderNumber: "DFG65464654DFG",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "James Jager",
          shippingAddress: "1234 East State Street",
        },
      },
      {
        _id: 3,
        total: 30.14,
        orderNumber: "JHYTJTY6546324F",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Shelly Hirdes",
          shippingAddress: "45678 East State Street",
        },
      },
      {
        _id: 4,
        total: 14.45,
        orderNumber: "JTYI6584641",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Michelle Steffes",
          shippingAddress: "1234 North State Street",
        },
      },
      {
        _id: 5,
        total: 25.84,
        orderNumber: "PF45GF6H54FDG6",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Howard Jager",
          shippingAddress: "5678 North State Street",
        },
      },
      {
        _id: 6,
        total: 5.45,
        orderNumber: "VBN1YTJHG6547J654",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Carolyn Steffes",
          shippingAddress: "1234 South State Street",
        },
      },
      {
        _id: 7,
        total: 10.98,
        orderNumber: "RETOJKIYHDFGDF5654",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Kipper Aster",
          shippingAddress: "5678 South State Street",
        },
      },
    ],
  };
}

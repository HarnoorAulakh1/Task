import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/Scale");

const Schema = new mongoose.Schema({
  chainId: {
    type: String,
    required: true,
  },
  dexId: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  pairAddress: {
    type: String,
    required: true,
  },
  baseToken: {
    address: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
  },
  quoteToken: {
    address: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
  },
  priceNative: {
    type: String,
    required: true,
  },
  priceUsd: {
    type: String,
    required: true,
  },
  txns: {
    m5: {
      buys: {
        type: Number,
        required: true,
      },
      sells: {
        type: Number,
        required: true,
      },
    },
    h1: {
      buys: {
        type: Number,
        required: true,
      },
      sells: {
        type: Number,
        required: true,
      },
    },
    h6: {
      buys: {
        type: Number,
        required: true,
      },
      sells: {
        type: Number,
        required: true,
      },
    },
    h24: {
      buys: {
        type: Number,
        required: true,
      },
      sells: {
        type: Number,
        required: true,
      },
    },
  },
  volume: {
    h24: {
      type: Number,
      required: true,
    },
    h6: {
      type: Number,
      required: true,
    },
    h1: {
      type: Number,
      required: true,
    },
    m5: {
      type: Number,
      required: true,
    },
  },
  priceChange: {
    m5: {
      type: Number,
      required: true,
    },
    h1: {
      type: Number,
      required: true,
    },
    h6: {
      type: Number,
      required: true,
    },
    h24: {
      type: Number,
      required: true,
    },
  },
  liquidity: {
    usd: {
      type: Number,
      required: true,
    },
    base: {
      type: Number,
      required: true,
    },
    quote: {
      type: Number,
      required: true,
    },
  },
  pairCreatedAt: {
    type: Date,
    required: true,
  },
  info: {
    imageUrl: {
      type: String,
      required: true,
    },
    websites: [
        {
            label: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
          },
    ],
    socials: [
      {
        type: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
      },
    ],
  },
});

const pairs = mongoose.model("Pairs", Schema);

export default pairs;

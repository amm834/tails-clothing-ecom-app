# tails-clothing-ecom-app

I am trying to migrate firebase to avoid writing backend. Using firebase really expensive to me.

# Features

- Add To Cart
- Authentication (Email and Password, Google)

# Project Setup

## Installation

``` 
pnpm install
```

## Configuration

Attach API key and project id of your firebase bucket.

**This one is just a dummy one, there is no write access for you.**

```js 
const firebaseConfig = {
    apiKey: "AIzaSyCTn4wOTc1EnK4xNtZ173i-c2hAvAFJKlc",
    authDomain: "nero-2f8a2.firebaseapp.com",
    projectId: "nero-2f8a2",
    storageBucket: "nero-2f8a2.appspot.com",
    messagingSenderId: "959203950777",
    appId: "1:959203950777:web:73f14fd768918aae225b68"
};
```

## Database Seeding

```
pnpm db:seed
```

## Serving in Development

``` 
pnpm dev
```

### Production

``` 
pnpm build
```


# Web Games (Client)

This is the client side of the website built with:

- React
- React Query
- Zustand
- Chakra UI

### Prerequisites

- Node.js
- npm

## Getting Started

To get started with WebGames, follow these steps:

1. Clone this repository to your local machine. ⬇️
2. Go to client side: `cd ./web-games.client` 👣
3. Run `npm install` to install the required dependencies. 🤖
4. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first. ✅
5. Add the API key to **src/services/api-client.ts**. 🆗
    ```typescript
    const axiosInstance = axios.create({
      baseURL: 'https://api.rawg.io/api',
      params: {
        key: // Pass here your API Key as a string.
      }
    });
    ```
6. Run `npm run dev` to start the web server. 💫

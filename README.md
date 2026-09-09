# 🏏 BPL Dream Eleven

A React-based player selection application where users can browse available cricket players, select players using their available coins, search for players, and manage their selected team.

## 🔗 Live Project

**Live Demo:** https://bpl-dream-eleven-asgwot12s-reza-babd.vercel.app

---

## 📌 Project Overview

**BPL Dream Eleven** is a player selection application built with React and TypeScript.

The application provides a collection of cricket players with information such as player name, image, origin, player type, batting style, bowling style, and price.

Users start with **10,000 coins** and can use those coins to select players. Selected players are displayed separately, and users can remove a selected player to receive the player's price back to their coin balance.

---

## ✨ Features

* 🏏 Display available cricket players in card format
* 💰 Start with 10,000 coins
* 👤 View player information including:

  * Player Name
  * Player Image
  * Origin
  * Player Type
  * Batting Style
  * Bowling Style
  * Price
* ✅ Select players using available coins
* 🚫 Disable the selection button after a player is selected
* 💵 Deduct the player's price from the available coin balance
* 📋 View selected players separately
* 🗑️ Remove players from the selected player list
* 💰 Return the player's price to the coin balance when removed
* 🔎 Search players by player name
* 🔔 Display success and error toast notifications
* ⏳ Load player data asynchronously from `data.json`
* 🔄 Switch between Available Players and Selected Players views

---

## 🛠️ Technologies Used

* **React**
* **TypeScript**
* **JSX**
* **Tailwind CSS**
* **DaisyUI**
* **React Icons**
* **React Toastify**

---

## ⚛️ React Concepts Used

* Components
* Props
* State Management
* `useState`
* `use`
* `Suspense`
* Event Handling
* Conditional Rendering
* TypeScript Props Typing
* `React.Dispatch`
* `React.SetStateAction`

---

## 📂 Project Structure

```text
BPL-Dream-Eleven/
├── public/
│   └── data.json
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── assets/
│   ├── components/
│   │   ├── Banner.tsx
│   │   ├── Nav.tsx
│   │   └── players/
│   │       ├── Players.tsx
│   │       ├── availablePlayers/
│   │       │   ├── AvailablePlayers.tsx
│   │       │   └── availablePlayersCard/
│   │       │       └── AvailablePlayerCard.tsx
│   │       └── selectedPlayers/
│   │           ├── SelectedPlayers.tsx
│   │           └── selectedPlayerCard/
│   │               └── selectedPlayerCard.tsx
│   └── types/
│       └── playerType.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🎮 How It Works

### 1. Available Players

The application loads player information from `public/data.json` and displays the players as cards.

Each player card contains the player's basic information, playing styles, price, and a **Choose Player** button.

### 2. Player Selection

When a user chooses a player:

* The player's price is deducted from the available coins.
* The player is added to the selected player list.
* The selection button becomes disabled.
* A success toast notification is displayed.

If the user does not have enough coins, the player cannot be purchased and an error toast notification is displayed.

### 3. Selected Players

The **Selected Players** section displays the players that have been selected.

The selected player count is also displayed.

### 4. Remove Player

A selected player can be removed from the selected player list.

When a player is removed:

* The player is removed from the selected list.
* The player's price is added back to the available coin balance.

### 5. Search Players

Users can search for players by entering a player name in the search field.

The application filters the available player list based on the entered search text.

---

## 📊 Player Data Structure

Each player follows the `Iplayer` TypeScript interface:

```ts
interface Iplayer {
  playerName: string;
  playerImage: string;
  origin: string;
  playerType: string;
  bowlingStyle: string;
  battingStyle: string;
  price: number;
}
```

---

## 💰 Coin System

The application starts with:

```text
10,000 Coins
```

When a player is selected:

```text
Available Coins - Player Price
```

When a selected player is removed:

```text
Available Coins + Player Price
```

---

## 🔔 Notifications

The application uses **React Toastify** to provide feedback when a player is selected or when the user does not have enough coins.

* Success notification → Player selected successfully
* Error notification → Insufficient coins

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone <your-repository-url>
```

### Navigate to the Project

```bash
cd BPL-Dream-Eleven
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The application will then be available through the local development URL provided by Vite.

---

## 📁 Data Source

Player data is stored in:

```text
public/data.json
```

The application fetches this data asynchronously and uses it to display the available players.

---

## 🎯 Project Purpose

This project demonstrates practical use of **React, TypeScript, component-based architecture, props, state management, event handling, conditional rendering, asynchronous data fetching, and user interaction** through a player selection application.

# TimeTunes 🎵

> Relive the soundtrack of any era with TimeTunes. Just pick a date, and we'll generate a Spotify playlist using the Billboard hits from that time, instantly transporting you to the music that defined that moment in history.

## 📖 About

TimeTunes is a web application that allows you to rediscover music from specific moments in time. By selecting any date from the past, the app scrapes the Billboard Hot 100 chart for that date and compiles the songs into a playlist that you can view or save to your Spotify account.

## ✨ Features

- **Date Selection**: User-friendly calendar interface to choose any historical date
- **Billboard Chart Scraping**: Automatic retrieval of the top 100 songs from the selected date
- **Playlist Viewing**: Browse through the historical hits that were popular at that time
- **Spotify Integration**: Connect your Spotify account to save playlists for later enjoyment
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## 🚀 Demo

[Live Demo](https://time-tunes.vercel.app)

## 🛠️ Tech Stack

- **Frontend**: Next.js with TypeScript
- **Web Scraping**: Cheerio
- **Music Integration**: Spotify API
- **Deployment**: Vercel

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ORomero227/TimeTunes.git
   cd TimeTunes
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   SPOTIFY_REDIRECT_URI=http:your_random_secret
   NEXT_PUBLIC_BASE_URL=your_random_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🔍 How to Use

1. **Select a Date**: Use the calendar to choose any date in music history
2. **Explore the Charts**: View the Billboard Hot 100 songs from that date
3. **Connect to Spotify**: Log in with your Spotify account (optional)
4. **Save the Playlist**: Add the generated playlist to your Spotify library with one click

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ by Oscar Romero

--- 
#### Screenshots

![time-tunes-01](https://github.com/user-attachments/assets/3e387295-21c9-40c4-9294-029e67a137e9)
![time-tunes-02](https://github.com/user-attachments/assets/6b4df9f6-f80d-47a9-a475-fe499fe7ccd6)
![time-tunes-03](https://github.com/user-attachments/assets/ea11c3bd-d5aa-4b5c-9441-514d93ed6f5d)
![time-tunes-04](https://github.com/user-attachments/assets/c9765727-cf81-4cab-b65d-8cd64fb175ac)

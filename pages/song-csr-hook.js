import { useState, useEffect, useContext } from "react";
import Layout from "@components/Layout/Layout";
import Button from "@components/Button";
import { BASE_API_URL } from "@constants/constants";
import { CartContext } from "@context/CartContext";
import toast from "@lib/toast";
import { getAbsoluteUrl } from "./song-ssr";
import styles from "@styles/Song.module.css";

export default function SongCSRHook() {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Ko liên quan đến cart nhưng vì lười nên dùng chung context với cart :v
  const { setLoadingSleep } = useContext(CartContext);

  useEffect(() => {
    setLoadingSleep(true);
    fetch(BASE_API_URL + "/api/song/all?sortBy=listens&sortOrder=DESC")
      .then((res) => res.json())
      .then((data) => {
        setSongs(data);
        setLoadingSleep(false);
      })
      .catch((error) => {
        toast.error("Error fetching songs: " + error.message);
        setLoadingSleep(false);
      });
  }, []);

  // Ask Gemini but it copies from this repo: https://github.com/albertndreu/Teaapl-strapi/blob/master/src/pages/HomePage.js
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollButton && window.pageYOffset > 400) {
        setShowScrollButton(true);
      } else if (showScrollButton && window.pageYOffset <= 400) {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollButton]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSongClick = async (song) => {
    // Can use setSelectedSong(song) directly, but we want to song details from the API to demonstrate CSR
    await setLoadingSleep(true);
    fetch(BASE_API_URL + "/api/song/id/" + song.id)
      .then((res) => res.json())
      .then((json) => {
        setSelectedSong(json.data);
        setLoadingSleep(false);
      })
      .catch((error) => {
        toast.error("Error fetching song details: " + error.message);
        setLoadingSleep(false);
      });
  };

  return (
    <Layout pageTitle="My favorite songs">
      <h2>Client-side Rendering (CSR) example</h2>
      <h3>My favorite songs</h3>
      {songs.map((song, index) => {
        const image_url = song.image_url ? getAbsoluteUrl(song.image_url) : "";
        return (
          <div key={song.id} className={styles.songRow}>
            <img className={styles.songPicture} src={image_url} alt={song.artist + " - " + song.title} />
            <div className={styles.songDetails}>
              <div className={styles.songItem} onClick={() => handleSongClick(song)}>
                <div className={styles.songTitle}>
                  {index + 1}. {song.title}
                </div>
                <div className={styles.songArtist}>{song.artist}</div>
              </div>
            </div>
          </div>
        );
      })}
      {selectedSong && (
        <div className={styles.selectedSong}>
          <div className={styles.selectedSongDetails}>
            <h4>Song Details</h4>
            <div>
              <strong>Title:</strong> {selectedSong.title}
            </div>
            <div>
              <strong>Artist:</strong> {selectedSong.artist}
            </div>
            <div>
              <strong>Album:</strong> {selectedSong.album || "[Unknown]"}
            </div>
            <div>
              <strong>Listens:</strong> {selectedSong.listens}
            </div>
            <div>
              <strong>Song of the year:</strong> {selectedSong.song_of_the_year || "No"}
            </div>
            <div>
              <strong>Category:</strong> {selectedSong.type || "[Unknown]"}
            </div>
          </div>
          <div className={styles.closeButtonWrapper}>
            <Button text="Close" onClick={() => setSelectedSong(null)} />
          </div>
        </div>
      )}
      {showScrollButton && (
        <Button text="↑ Top" className={styles.scrollToTopButton} onClick={scrollTop} title="Go to top" />
      )}
    </Layout>
  );
}

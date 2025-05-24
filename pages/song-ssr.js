import Layout from "../components/Layout/Layout";
import styles from "../styles/Song.module.css";
import { BASE_API_URL } from "../constants/constants";

export default function Song({ songs }) {
  return (
    <Layout pageTitle="My favorite songs">
      <h2>Server-side Rendering (SSR) example</h2>
      <h3>My favorite songs</h3>
      {songs.map((song, index) => {
        const image_url = song.image_url ? getAbsoluteUrl(song.image_url) : "";
        return (
          <div key={song.id} className={styles.songRow}>
            <img className={styles.songPicture} src={image_url} alt={song.artist + " - " + song.title} />
            <div className={styles.songDetails}>
              <a
                className={styles.songItem}
                href={`https://anhtuta.github.io/lili-player/#/bai-hat/${song.path}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.songTitle}>
                  {index + 1}. {song.title}
                </div>
                <div className={styles.songArtist}>{song.artist}</div>
              </a>
              <div className={styles.songMeta}>
                <div>Listens: {song.listens}</div>
                {song.song_of_the_year && (
                  <div title="Song of the year">
                    <span className={styles.soy} style={{ background: `var(--soy-${song.song_of_the_year}, #aeaeae)` }}>
                      {song.song_of_the_year}
                    </span>
                  </div>
                )}
                <div>{song.formatCreatedDate}</div>
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${BASE_API_URL}/api/song/all?sortBy=listens&sortOrder=DESC`);
  const songs = (await res.json()) || [];
  console.log("Total songs:", songs.length); // cannot see this in the browser console, only in the terminal

  // Pass data to the page via props
  return { props: { songs } };
}

export const getAbsoluteUrl = (uri) => {
  if (uri.startsWith("http")) return uri;
  return BASE_API_URL + uri;
};

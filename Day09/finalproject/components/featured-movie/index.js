import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";

function FeaturedMovie({ movie = {}, isShortDescription = true }) {
    const { poster_path, title, overview } = movie;

    return (
        <div className={styles.movieWrapper}>
            {/* Film başlığı */}
            <h1 className={styles.movieTitle}>{title}</h1>

            {/* Film özeti */}
            <p className={`${styles.overview} ${isShortDescription ? styles.shortOverview : ""}`}>
                {overview}
            </p>

            {/* Eylem düğmeleri */}
            <div className={styles.actionButtons}>
                {/* Film oynatma düğmesi */}
                <Link className={styles.playButton} href={`/movie/${movie.id}`}>
                    Play
                </Link>

                {/* Film ekleme düğmesi */}
                <button className={styles.addButton}>
                    <FaPlus />
                </button>
            </div>

            {/* Film afişi */}
            <div className={styles.moviePoster}>
                {/* Film afişi üzerine uygulanan overlay */}
                <div className={styles.moviePosterOverlay}></div>

                {/* Film afişi görüntüsü */}
                <Image
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    fill
                />
            </div>
        </div>
    );
}

export { FeatureMovieLoading } from "./loading";
export { FeaturedMovie };
// İki ayrı export ifadesi kullanılmasının sebebi,
//  FeaturedMovie bileşenini ve onun bağımlı olduğu FeatureMovieLoading bileşenini ayrı ayrı dışa aktarmaktır.
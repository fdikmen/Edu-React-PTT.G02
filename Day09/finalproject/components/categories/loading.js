import React from "react";
import { Skeleton } from "@/components/skeleton";
import styles from "./styles.module.css";

// Kategorilerin yüklenmesi sırasında gösterilecek yükleme bileşeni
function CategoriesLoading() {
  return (
    <div className={styles.categories}>
      {/* Kategori yüklemelerini oluşturmak için bir dizi kullanıyoruz */}
      {Array(5)
        .fill(null)
        .map((_, index) => (
          // Her kategori yüklemesi için bir Skeleton bileşeni oluşturuyoruz
          <Skeleton key={index} height={72} />
        ))}
    </div>
  );
}

export { CategoriesLoading };


// Array(5).fill(null) ifadesi, 5 elemanlı bir dizi oluşturur ve elemanları null olarak doldurur.
//  Bu dizi, kategori yüklemelerini temsil etmek için kullanılır. .map() fonksiyonu, bu dizinin her bir elemanı için 
//  bir <Skeleton> bileşeni oluşturur. Skeleton bileşeni, bir yükleme göstergesi olarak kullanılan ve belirli bir yükseklik
//   değerine sahip olan bir bileşendir. Her bir <Skeleton> bileşeni için benzersiz bir key değeri sağlanır.
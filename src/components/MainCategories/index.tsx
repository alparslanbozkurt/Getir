import React, { useState } from "react"; // React kütüphanesini ve useState hook'unu içe aktarıyoruz.
import { View, StyleSheet } from "react-native"; // View bileşenini ve StyleSheet'i React Native'den içe aktarıyoruz.
import CategoryItem from "../CategoryItem"; // Kendi oluşturduğumuz CategoryItem bileşenini içe aktarıyoruz.
import categoriesGetir from "../../../assets/categories"; // Kategori verilerini içeren dosyayı içe aktarıyoruz.

function Index() {
  // useState hook'unu kullanarak categories ve setCategories adında bir state ve bu state'i güncelleyen bir fonksiyon oluşturuyoruz.
  const [categories, setCategories] = useState(categoriesGetir); 

  return (
    // Ana kapsayıcı View bileşeni. Arka plan rengi "#F5F5F5" olarak ayarlanmış.
    <View style={{ backgroundColor: "#F5F5F5" }}> 
      {/* Liste konteyneri View bileşeni. Stil bilgileri styles.listContainer'dan alınıyor. */}
      <View style={styles.listContainer}> 
        {/* categories array'ini map'leyerek her bir item için CategoryItem bileşenini oluşturuyoruz. */}
        {categories.map((item) => (
          // Her bir CategoryItem bileşenine benzersiz bir key ve item prop'u geçiyoruz.
          <CategoryItem key={item.id} item={item} /> 
        ))}
      </View>
    </View>
  );
}

// Stylesheet oluşturuyoruz. listContainer stilini tanımlıyoruz.
const styles = StyleSheet.create({
  listContainer: {
    flex: 1, // Konteynerin tüm alanı kaplaması için flex 1 kullanılıyor.
    flexDirection: "row", // İçeriklerin yatay olarak dizilmesi için flexDirection "row" olarak ayarlanmış.
    alignItems: "flex-start", // İçerikler üstten hizalanmış.
    flexWrap: "wrap", // İçeriklerin sarılması için flexWrap "wrap" olarak ayarlanmış.
    //backgroundColor: "white", // Arka plan rengi beyaz olarak ayarlanmış ancak yorum satırına alınmış.
    width: "100%", // Konteynerin genişliği %100 olarak ayarlanmış.
  },
});

export default Index; // Index bileşenini dışa aktarıyoruz.

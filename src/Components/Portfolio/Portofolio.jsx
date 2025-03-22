import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer.jsx";
import Styles from "./Portfolio.module.css";
import dressing1 from "../../img/dressing.jpg";
import kit1 from "../../img/img1.jpg";
import kit2 from "../../img/img2.jpg";
import kit3 from "../../img/kit.jpg";
import kit4 from "../../img/img4.jpg";
import kit5 from "../../img/img5.jpg";
import kit6 from '../../img/mtbakhhelw.jpg';
import kit7 from '../../img/mtbakh.jpg';
import bath1 from '../../img/bath.jpg';
import dress from '../../img/dres.jpg';
import dress1 from '../../img/dres4.jpg';
import dress2 from '../../img/dres3.jpg';
import bath2 from '../../img/bath2.jpg';
import bath3 from '../../img/bath3.jpg';
import bath4 from '../../img/bath4.jpg';
import bath5 from '../../img/bath5.jpg';
import dress5 from '../../img/dress5.jpg';
import bed1 from '../../img/bed1.jpg';
import bed2 from '../../img/bed2.jpg';
import bed3 from '../../img/bed3.jpg';
import bed4 from '../../img/bed4.jpg';
import bath6 from '../../img/bath6.jpg';
import bath7 from '../../img/bath7.jpg';
import bath8 from '../../img/bath8.jpg';
import dress6 from '../../img/dres6.jpg';
import dress7 from '../../img/dres5.jpg';
const categories = ["All", "Dressings", "Bedrooms", "Bathrooms", "Kitchen"];

const images = [
  { src: dressing1, category: "Dressings" },
  { src: dress2, category: "Dressings" },
  { src: kit7, category: "Kitchen" },
  { src: bath1, category: "Bathrooms" },
  { src: kit1, category: "Kitchen" },
  { src: kit2, category: "Kitchen" },
  { src: kit3, category: "Kitchen" },
  { src: kit4, category: "Kitchen" },
  { src: kit5, category: "Kitchen" },
  { src: kit6, category: "Kitchen" },
  { src: bed1, category: "Bedrooms" },
  { src: bed2, category: "Bedrooms" },
  { src: bed3, category: "Bedrooms" },
  { src: bed4, category: "Bedrooms" },
  { src: dress, category: "Dressings" },
  { src: dress1, category: "Dressings" },
  { src: dress5, category: "Dressings" },
  { src: bath2, category: "Bathrooms" },
  { src: bath3, category: "Bathrooms" },
  { src: bath4, category: "Bathrooms" },
  { src: bath5, category: "Bathrooms" },
  { src: bath8, category: "Bathrooms" },
  { src: bath7, category: "Bathrooms" },
  { src: bath6, category: "Bathrooms" },
  { src: dress6, category: "Dressings" },

  { src: dress7, category: "Dressings" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Open modal
  const openModal = (imgSrc, index) => {
    setModalImage(imgSrc);
    setCurrentIndex(index);
    document.body.classList.add("modal-open"); // Prevent scrolling
  };

  // Close modal
  const closeModal = () => {
    setModalImage(null);
    document.body.classList.remove("modal-open"); // Enable scrolling
  };

  // Go to next image
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setModalImage(filteredImages[newIndex].src);
    setCurrentIndex(newIndex);
  };

  // Go to previous image
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setModalImage(filteredImages[newIndex].src);
    setCurrentIndex(newIndex);
  };

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    
    <div className={Styles.portfolio}>
      <h2 data-aos="fade-up" data-aos-once="false" data-aos-duration='1000' >MARRÓN's Gallery</h2>
      <div data-aos="fade-up" data-aos-once="false" data-aos-duration='1000' className={`${Styles.Line} mb-5`}></div>

      {/* Category Buttons */}
      <div className={Styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? Styles.active : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className={Styles.imageGrid}>
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.category}
            onClick={() => openModal(img.src, index)}
          />
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className={Styles.modal}>
          <button className={Styles.close} onClick={closeModal}>×</button>
          <img src={modalImage} alt="Large preview" className={Styles.modalImage} />
          <button className={`${Styles.navButtons} ${Styles.prev}`} onClick={prevImage}>‹</button>
          <button className={`${Styles.navButtons} ${Styles.next}`} onClick={nextImage}>›</button>
        </div>
      )}
    </div>
  );
}

import styles from "./SearchResult.module.scss";

export function SearchResult({
  index = 1,
  image = "/producer-icon.svg",
  propertyName = "Nome da propriedade",
  producerName = "Nome do produtor",
  contactNumber = "9 9999-9999",
  email = "contact@email.com",
  productList = ["Alface", "Tomate", "Laranja"],
  slug = "#",
  selected = false,
}) {

  return (
    <div className={styles.resultContainer}>
      <div className={`${styles.indicator} ${selected ? styles.selected : ''}`}>
        <span>{index}</span>
      </div>
      <img src={image} alt="" />
      <div className={styles.contactInfoContainer}>
        <p className={styles.title}>{propertyName}</p>
        <p className={styles.subTitle}>{producerName}</p>
        <p className={styles.contactInfo}>
          <label htmlFor="contact-number">Telefone: </label>
          <span id="contact-number">{contactNumber}</span>
        </p>
        <p className={styles.contactInfo}>
          <label htmlFor="contact-email">Email: </label>
          <span id="contact-email">{email}</span>
        </p>
      </div>
      <div className={styles.contactInfoContainer}>
        <p className={styles.title}>Principais produtos</p>
        <ul className={styles.productList}>
          {productList.map((productName, index) => {
            return (
              <li key={index}>
                {productName}
              </li>
            )
          })}
        </ul>
        <a href={slug} className={styles.moreInfoButton}>
          Mais informações
        </a>
      </div>
    </div>
  );
}

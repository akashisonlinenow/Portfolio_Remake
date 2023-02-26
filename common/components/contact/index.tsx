import styles from "@styles/Contact.module.scss";
import IconButton from "@mui/material/IconButton";
import ContactData from "@data/contactData";
import { useDataContext } from "@context/dataLayer";

const Contact = () => {
  const width = useDataContext();
  return (
    <div className={styles.container}>
      {ContactData.map((e) => (
        <IconButton
          className={styles.Icon}
          sx={{
            fontSize: width > 1024 ? "2.5rem" : "2rem",
            ":hover": {
              color: e["color"],
            },
          }}
          key={e.id}
          target="_blank"
          href={e.link}
        >
          {e.component}
        </IconButton>
      ))}
    </div>
  );
};

export default Contact;

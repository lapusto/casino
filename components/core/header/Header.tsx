import React from "react";
import { Container } from "react-bootstrap";
import Typography from "../../shared/typography/Typography";

import styles from "./Header.module.scss"


const Header = () => (
    <Container className={styles["header-wrapper"]}>
        <h2>
            Best Bonuses Lorem Ipsum
        </h2>
        <Typography size="s">
            Welcome, all you passionate Australian online casino players out there! If you a rookie looking for some quick
            guidelines on how to get started or a seasoned player searching for some fresh real money casino recommendations,
            you've reached the right spot at True Blue!
        </Typography>
    </Container>

)

export default Header
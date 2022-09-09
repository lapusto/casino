
import { Container } from "react-bootstrap"
import { FilterProps } from "../../../types/filterTypes"
import Button from "../../shared/button/Button"
import Typography from "../../shared/typography/Typography"
import styles from "./Filter.module.scss"


const Filter = ({ categories, toFilter, active }: FilterProps): JSX.Element => {
    return (
        <Container className={styles["filter-wrapper"]}>
            {
                categories.map((с, i) => (
                    <Button size="m" key={`bonus-${i}`} onClick={() => toFilter(categories[i])} isActive={active === categories[i]}>
                        <Typography>{с.toString()}</Typography>
                    </Button>)
                )}
        </Container>
    )
}

export default Filter
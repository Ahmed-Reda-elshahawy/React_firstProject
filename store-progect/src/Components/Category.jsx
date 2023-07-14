import { useState } from "react";
import { Container } from "react-bootstrap";
import DATA from "../DATA";
import CARD from "./Card";

export default function Category() {
    const [data, setData] = useState(DATA);
    const handelclick = (category_name) => {
        const result = DATA.filter((card) => {
            return card.category === category_name;
        });
        setData(result);
    };

    const cards = data.map((ele, ind) => {
        return (
            <CARD
                key={ind}
                {...ele}
                className="card"
            />
        );
    });

    return (
        <Container>
            <div className="filter_title">Buy your devices now</div>
            <div className="filter_bar">
                <h3 onClick={() => setData(DATA)}>Show All</h3>
                <h3 onClick={() => handelclick("phone")}>Phones</h3>
                <h3 onClick={() => handelclick("tablet")}>Tablets</h3>
                <h3 onClick={() => handelclick("laptop")}>Laptobs</h3>
            </div>
            <section className="CARDS">{cards}</section>
        </Container>
    );
}

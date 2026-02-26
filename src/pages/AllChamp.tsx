import { useEffect, useState } from "react";
import type { Champ } from "../types/Champ";
import apiClient, { baseURL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";

const AllChamp = () => {
    const [champs, setChamps] = useState<Array<Champ>>([]);

    useEffect(() =>{
        apiClient
        .get("/champions")
        .then((res) => setChamps(res.data))
        .catch(() => toast.error("Sikertelen betöltés"))
    }, [])

    const generateCard = (c: Champ) => {
        return(
            <Col>
                <Card style={{width: "18rem"}}>
                    <Carousel>
                        {c.images.map((l) => (
                            <Carousel.Item>
                                <img src={`${baseURL}/images/${l}`} width={265} height={160}/>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Card.Body>
                        <Card.Title>
                            {c.name}
                        </Card.Title>
                        <Card.Text>
                            {c.lane}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
    return(
        <Container>
            <Row xs={"auto"} md={"auto"} className="g-4">
                {champs.map((c) => generateCard(c))}
            </Row>

        </Container>
    )
}
export default AllChamp;
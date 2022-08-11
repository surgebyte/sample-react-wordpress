import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import Hero from "../../components/Hero";

import { Container } from "./styles";

import api from '../../services/api';

function Home() {
    const [page, setPage] = useState();
    const [loading, setLoading] = useState(true);

    async function loadPosts() {
        try {
            setLoading(true);
            const response = await api.get('/wp-json/wp/v2/pages/6');
            const page = response.data;
            console.log(page);
            setPage(page);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        loadPosts();
      }, []);

    return (
        <Container>
            <Header />
            {!loading && <Hero page={page} />}
        </Container>
    )
}

export default Home;

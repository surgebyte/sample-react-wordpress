import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";

import { Container, ArticlesContainer } from "./styles";

import api from '../../services/api'

function BlogList() {
    let navigate = useNavigate();
    const [articles, setArticles] = useState([]);

    async function loadPosts() {
        try {
            const response = await api.get('/wp-json/wp/v2/posts');
            const posts = response.data;
            setArticles(posts);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadPosts();
      }, []);

    return (
        <Container>
            <Header />
            <ArticlesContainer>
                {
                    articles.map((article) => (
                        <div key={article.id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={article.jetpack_featured_media_url} alt={article.title.rendered}  /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{article.title.rendered} </h2>
                                <p>{article.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                                <div className="card-actions justify-end">
                                <button onClick={() => navigate(`/blogs/${article.id}`)} className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </ArticlesContainer>
        </Container>
    )
}

export default BlogList;

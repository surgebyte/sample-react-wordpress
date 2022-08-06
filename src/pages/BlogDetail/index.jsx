/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import { Container, BlogContainer, Image, Title } from "./styles";

import api from '../../services/api'
import Header from "../../components/Header";

function BlogDetail() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [postContent, setPostContent] = useState();
    let params = useParams();

    async function loadPost() {
        try {
            setLoading(true);
            const response = await api.get(`/wp-json/wp/v2/posts/${params.blogID}`);
            const post = response.data;
            const cleanHTML = DOMPurify.sanitize(post.content.rendered, {
                USE_PROFILES: { html: true },
              });
            setPostContent(cleanHTML);
            setPost(post);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        loadPost();
      }, []);

    return (
        <Container>
            <Header />
            {!loading && <BlogContainer>
                <Image src={post.jetpack_featured_media_url} />
                <Title>{post.title.rendered}</Title>
                <div dangerouslySetInnerHTML={{ __html: postContent }} />
            </BlogContainer>}
        </Container>
    )
}

export default BlogDetail;

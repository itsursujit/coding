<template>
    <div>
        <ArticleItem
                v-if="article.urlToImage"
                v-for="article in articles"
                :key="article.url"
                :article="article"
        />
    </div>
</template>

<script>
    import ArticleItem from "./ArticleItem";
    import axios from 'axios';

    export default {
        name: "ArticlesList",
        data() {
            return {
                articles: [],
            };
        },
        components: {
            ArticleItem,
        },
        async mounted() {
            try {
                const { data } = await axios.get('',
                    {
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest'
                        },
                        responseType: 'json',
                        withCredentials: true,
                    });
                this.articles = data.articles;
            } catch (error) {
                console.log(error);
            }
        },
    };
</script>

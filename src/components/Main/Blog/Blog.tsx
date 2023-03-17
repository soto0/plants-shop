import { FC } from 'react';
import s from './Blog.module.css';
import Post from './Post/Post';

interface BlogProps {
    Posts: []
};

const Blog: FC<BlogProps> = (props: BlogProps) => {
    return (
        <div className={s.blog}>
            <h2 className={s.title}>Our Blog Posts</h2>
            <p className={s.subtitle}>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            <div className={s.posts}>
                {
                    props.Posts.map((post: any) => {
                        return (
                            <Post
                                Date={post.date}
                                Title={post.title}
                                Text={post.text}
                                Id={post.id}
                                key={post.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Blog;
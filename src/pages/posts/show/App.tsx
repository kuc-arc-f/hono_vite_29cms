import { marked } from 'marked';
import React from 'react';
import Layout from '../../layout';

//export const PostShow: FC<{ item: any, id: number }> = (props: { item: any, id: number }) => {
export function PostShow(props: any) {
    console.log("#taskShow");
console.log(props);
    const content = marked.parse(props.item.content);
    //
    return (
    <Layout title="Show">
        <div>
            <link href="/static/postshow.css" rel="stylesheet" />
            <a href="/" className="btn-outline-purple ms-2 my-2">back</a>
            <hr className="my-4" />
            <div id="root"></div>
            <h1 className="text-4xl font-bold">{props.item.title}</h1>
            <p>id: {props.item.id}, {props.item.createdAt}</p>
            <hr />
            <div id="post_item"></div>
            <pre className="d-none">{props.item.content}</pre>
            <input className="d-none" type="text" value={props.item.id} id="item_id" />
            <input className="d-none" type="text" value={content} id="item_content" />
            {/* JS */}
            {import.meta.env.PROD ? (
                <script type="module" src="/static/PostShow.js"></script>
            ) : (
                <script type="module" src="/src/client/PostShow.ts"></script>
            )}       
        </div>
    </Layout>
    )
}

/*
<p>Content:</p>
{html`<script type="text/babel" src="/js/posts/show.js?${timeStamp}"></script>`}  
*/
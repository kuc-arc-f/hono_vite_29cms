import { marked } from 'marked';
import React from 'react';
import {AdminLayout} from '../../../layout/AdminLayout';

//export const AdminPostShow: FC<{ item: any, id: number }> = (props: { item: any, id: number }) => {
export function AdminPostShow(props: any) {
    console.log("#taskShow");
    console.log(props);
    const content = marked.parse(props.item.content);
console.log(content);
    //
    return (
    <AdminLayout>
        <div>
            <link href="/static/postshow.css" rel="stylesheet" />
            <a href="/admin/posts" className="btn-outline-purple ms-2 my-2">back</a>
            <hr className="my-4" />
            <div id="root"></div>
            <h1 className="text-4xl font-bold">{props.item.title}</h1>
            <p>id: {props.item.id}, {props.item.createdAt}</p>
            <hr className="my-2" />
            <p>Content:</p>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <hr className="my-2" />
            
            <input className="d-none" type="text" value={props.item.id} id="item_id" />
            <input className="d-none" type="text" value={content} id="item_content" />
            <button id="btn_delete" className="btn-red ms-2 my-2">Delete</button>
            <hr className="my-8" />
            {/* JS */}
            {import.meta.env.PROD ? (
                <script type="module" src="/static/AdminPostShow.js"></script>
            ) : (
                <script type="module" src="/src/client/AdminPostShow.ts"></script>
            )}
     
        </div>
    </AdminLayout>
    )
}
    
/*
<div id="post_item"></div>
*/
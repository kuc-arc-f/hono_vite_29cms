import {AdminLayout} from '../../layout/AdminLayout';
import React from 'react';
//
let nextPage = 1;
let beforePage = 1;
//export const AdminPostIndex: FC<{ items: any[], page: string }> 
export  function AdminPostIndex(props: any) {
  console.log("#AdminPostIndex");
console.log(props.items);
  if(props.page){
    nextPage = Number(props.page) + 1;
    beforePage = Number(props.page) - 1;
    if(beforePage <= 1) { beforePage = 1;}
  }
  //
  return (
  <AdminLayout>
    <div>
        <h1 className="text-4xl font-bold">PostsIndex</h1>
        <hr className="my-2" />
        <div className="py-1">
            <a href="/admin/posts/create" className="btn-purple ms-2">Create</a>
        </div>
        <hr className="my-2" />
        <ul>
          {props.items.map((item: any) => {
            return (
            <li key={item.id}>
              <a href={`/admin/posts/${item.id}`}><h3 className="text-3xl font-bold"
              >{item.title}</h3></a>
              <p>id={item.id}, {item.createdAt}</p>
              <a href={`/admin/posts/${item.id}`}>
                <button className="btn-outline-purple">Show</button>
              </a>
              <a href={`/admin/posts/edit/${item.id}`}>
                <button className="btn-outline-purple ms-2">Edit</button>
              </a>
              <hr />
            </li>
            );
          })}
        </ul>
        {/* paginate */}
        <div className="paginate_wrap py-2">
          <a href={`/admin/posts?page=${beforePage}`}>
            <button className="btn-outline-purple"> ＜ </button>
          </a>
          <a href={`/admin/posts?page=${nextPage}`}>
            <button className="btn-outline-purple"> ＞ </button>
          </a>
        </div>
        <hr className="my-8" />
        {/* JS */}
        {import.meta.env.PROD ? (
            <script type="module" src="/static/Page2.js"></script>
        ) : (
            <script type="module" src="/src/client/Page2.ts"></script>
        )}        
    </div>
  </AdminLayout>
  )
}

/*
        {html`<script type="text/babel" src="/js/posts/index.js?${timeStamp}"></script>`}       
*/
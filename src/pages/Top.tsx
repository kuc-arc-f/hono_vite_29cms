import React from 'react';
import Layout from './layout';

let nextPage = 1;
let beforePage = 1;
//const Top: FC<{ items: any[], page: string }> = (props: { items: any[], page: string
export default function Page(props: any) {
console.log(props.items);
    if(props.page){
        nextPage = Number(props.page) + 1;
        beforePage = Number(props.page) - 1;
        if(beforePage <= 1) { beforePage = 1;}
    }
    //
    return (
    <Layout>
        <div>
            <h1 className="text-4xl font-bold">Top111</h1>
            <hr className="my-2" />
            <h1 className="text-4xl font-bold">Blogs</h1>
            <hr className="my-4" />
            <ul>
            {props.items.map((item: any) => {
                return (
                <li key={item.id}>
                <a href={`/posts/${item.id}`}><h3 className="text-3xl font-bold"
                >{item.title}</h3></a>
                <p>id={item.id}, {item.createdAt}</p>
                <hr />
                </li>
                );
            })}
            </ul>
        </div>

    </Layout>
    )
}

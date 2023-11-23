import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import React from 'react';
let title = "Welcome";
//export const AdminLayout: FC = (props) => {
export function  AdminLayout(props: any) {
    return (
    <html>
      <head>
        <title>{title}</title>
        <link href="/static/globals.css" rel="stylesheet" />
        <link href="/static/main.css" rel="stylesheet" />
        <link href="/static/micromodal.css" rel="stylesheet" />
      </head>
      <body>
        <div className="text-center py-2">
          <a href="/">[ Top ]</a>
          <a href="/admin">[ home ]</a>
          <a href="/admin/posts"><span className="ps-2">[ Posts ]</span></a>
          <a href="/admin/pages"><span className="ps-2">[ Pages ]</span></a>
        </div>
        <hr />
        <div className ="container mx-auto my-2 px-8 bg-white">{props.children}</div>
      </body>
    </html>
    )
}

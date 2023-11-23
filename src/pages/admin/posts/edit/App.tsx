import {AdminLayout} from '../../../layout/AdminLayout';
import ShowModal from './ShowModal';

//export const AdminPostEdit: FC<{ item: any, id: number }> = (props: { item: any, id: number }) => {
export function AdminPostEdit(props: any) {
console.log("#taskShow");
console.log(props.item);
    //
    return (
    <AdminLayout title="PostsEdit">
    <div>
        <link href="/static/postshow.css" rel="stylesheet" />
        <a href="/admin/posts" className="btn-outline-purple ms-2 my-2">back</a>
        <hr className="my-2" />
        <div className="flex flex-row">
            <div className="flex-1 text-start p-0 m-1">
                <h1 className="text-4xl font-bold">Edit</h1>
            </div>
            <div className="flex-1 text-center p-0 m-1">
                <button className="btn-outline-purple" id="show_modal_btn" >Preview</button>
            </div>
        </div>            
        <hr className="my-2" />
        <p>ID: {props.item.id}
        , {props.item.createdAt}
        </p>
        <hr className="my-2" />
        <label>Title:</label>
        <input type="text" id="title" 
        className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        defaultValue={props.item.title}
        />
        <hr className="my-2" />
        <label  className="text-2xl block text-gray-700 font-bold mb-2">Content</label>
        <textarea id="content" name="content"
        className="input_textarea"
        placeholder="markdown input, please" required
        rows={15}
        >{props.item.content}</textarea>            
        <hr className="my-2" />
        <button id="btn_save" className="btn-purple ms-2 my-2">Save</button>
        <hr className="my-2" />
        <input className="d-none" type="text" defaultValue={props.item.id} id="item_id" />
        <div id="root"></div>
        <ShowModal />
        <button id="btn_delete" className="btn-red ms-2 my-2">Delete</button> 
        {/* JS */}
        {import.meta.env.PROD ? (
                <script  type="module" src="/static/AdminPostEdit.js"></script>
        ) : (
            <script type="module" src="/src/client/AdminPostEdit.ts"></script>
        )}
    </div>
    </AdminLayout>
    )
}

/*
*/

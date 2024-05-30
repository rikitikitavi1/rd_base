'use client'

import {BaseItem} from "@/app/ui/BaseItem/BaseItem";
import {useSession} from "next-auth/react";


export default function ListPage() {
    // const {data: session} = useSession()
    // console.log({session})
    const data = [
        {name: 'RD1', author: 'testUser1', id: '1', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD2', author: 'testUser2', id: '2', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD3', author: 'testUser3', id: '3', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '4', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '5', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '6', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '7', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '8', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '9', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '10', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '11', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '12', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '13', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '14', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '15', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '16', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '17', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
        {name: 'RD4', author: 'testUser4', id: '18', created_at: '10.10.2000 10:10', updated_at: '10.10.2000 10:10'},
    ]

    return (
        <div className='grid grid-cols-3'>
            {/*<FileForm onFileChange={handleFileChange}/>*/}
            {data.map((item) =>
                <BaseItem
                    key={item.id}
                    id={item.id}
                    updated_at={item.updated_at}
                    author={item.author}
                    created_at={item.created_at}
                    name={item.name}/>
            )}
        </div>

    );
}
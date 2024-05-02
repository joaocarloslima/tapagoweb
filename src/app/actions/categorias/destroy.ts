"use server"

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"


export async function destroy(id: number){

    await new Promise(r => setTimeout(r, 3000))

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(`${process.env.API_BASE_URL}/categoria/${id}`, options)
    revalidateTag("categorias")

    //redirect("/categorias")
   
}
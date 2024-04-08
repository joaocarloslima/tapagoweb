"use server"

import { redirect } from "next/navigation"

export async function create(formData: FormData){
    await new Promise(r => setTimeout(r, 3000))
    
    const data = {
      nome: formData.get("nome"),
      icone: "cigarette"
    }

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }

    const resp = await fetch(`${process.env.API_BASE_URL}/categoria`, options)

    if (resp.status == 201) redirect("/categorias")
  }

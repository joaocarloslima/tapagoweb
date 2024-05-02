"use server"

import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 1000))
    
    const data = {
      nome: formData.get("nome"),
      icone: formData.get("icone")
    }

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }

    const resp = await fetch(`${process.env.API_BASE_URL}/categoria`, options)
    
    if (resp.ok){
      revalidateTag("categorias")
      redirect("/categorias")
    }

    if (resp.status == 400){
      return {
        messageNome: "Validação falhou"
      }
    }
    
  }

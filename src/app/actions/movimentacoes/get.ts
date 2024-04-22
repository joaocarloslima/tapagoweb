'use server'

export async function get(categoria?: any, mes?: number) {
    const queryParam = new URLSearchParams()
    if (categoria) queryParam.append('categoria', categoria)
    if (mes) queryParam.append('mes', mes.toString())
    
    const url = `${process.env.API_BASE_URL}/movimentacao?${queryParam.toString()}`
    const resp = await fetch(`${process.env.API_BASE_URL}/movimentacao?${queryParam.toString()}`, { next: { revalidate: 0 } })
    const json = await resp.json()
    return json.content
}
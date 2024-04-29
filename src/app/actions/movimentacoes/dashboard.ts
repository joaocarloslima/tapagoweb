"use server"

export async function getUltimas(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao?size=5")
    const json = await resp.json()
    return json.content
}

export async function getMaiorValor(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao/maior")
    const json = await resp.json()
    return json.valor
}

export async function getUltimoValor(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao/ultima")
    const json = await resp.json()
    return json.valor
}

export async function getMenorValor(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao/menor")
    const json = await resp.json()
    return json.valor
}

export async function getTotaisPorCategoria(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao/totais-por-categoria")
    const json = await resp.json()
    return json
}

export async function getTotaisPorMes(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao/totais-por-mes")
    const json = await resp.json()
    return json
}
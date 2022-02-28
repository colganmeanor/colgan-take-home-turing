const key = '0JUSpi2WsHgz1Ni61wAut6y1KVMhXLRA'

export const apiCalls = {
    homePageLoad: () => {
        return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`)
            .then(res => {
                if(res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => err)
    },

    sectionLoad: (section) => {
        return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`)
            .then(res => {
                if(res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => err)
    }

}
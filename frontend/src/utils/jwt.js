import jwt from 'jsonwebtoken'

export function Decode(token) {
    return new Promise((res, rej) => {
        jwt.verify(token, process.env.VUE_APP_TOKEN_SECRET_KEY, (err, authData) => {
            if (err) {
                rej(err)
            } else {
                res(authData)
            }
        });
    })
}

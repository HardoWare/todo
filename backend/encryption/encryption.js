
const { publicKey, privateKey } = await window.crypto.subtle.generateKey(
    {
        name: "RSA-OAEP",
        modulusLength: 1024, // 1024, 2048, or 4096
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: { name: "SHA-256" },
    },
    true,
    ["encrypt", "decrypt"]
)

async function encrypt(data) {
    return window.crypto.subtle.encrypt(
        {
            name: "RSA-OAEP",
        },
        publicKey, // from generateKey or importKey above
        data // ArrayBuffer of data you want to encrypt
    )
}

async function decrypt(encryptedData) {
    return window.crypto.subtle.decrypt(
        {
            name: "RSA-OAEP",
        },
        privateKey, // from generateKey or importKey above
        encryptedData // ArrayBuffer of the data
    )
}

// const encryptedData = await window.crypto.subtle.encrypt(
//     {
//         name: "RSA-OAEP",
//     },
//     publicKey, // from generateKey or importKey above
//     data // ArrayBuffer of data you want to encrypt
// )
//
// const decryptedData = await window.crypto.subtle.decrypt(
//     {
//         name: "RSA-OAEP",
//     },
//     privateKey, // from generateKey or importKey above
//     encryptedData // ArrayBuffer of the data
// )


export { publicKey, privateKey, encrypt, decrypt };
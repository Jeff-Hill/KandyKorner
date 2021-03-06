const remoteURL = "http://localhost:5002"

export default {
    get (resource, id) {

            return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())

    },
    all (resource) {
            return fetch(`${remoteURL}/${resource}`).then(e => e.json())
        },

    post (resource) {
            return fetch(`${remoteURL}/${resource}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(resource)
              }).then(data => data.json())

        },

    delete(resource, id) {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "DELETE"
                })
        }
}


// if you want to use Object.create
// export default Object.create(null, {
//     get: {
//         value: function (resource, id) {
//             /*
//                 Since the purpose of this module is to be used by
//                 all of the more specialized one, then the string
//                 of `animals` should not be hard coded here.
//             */
//             return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())
//         }
//     },
//     all: {
//         value: function (resource) {
//             return fetch(`${remoteURL}/${resource}`).then(e => e.json())
//         }
//     },

//     post: {
//         value: function (resource) {
//             return fetch(`${remoteURL}/${resource}`, {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(resource)
//               }).then(data => data.json())

//         }

//     },

//     delete: {
//         value: function (resource, id) {
//             return fetch(`${remoteURL}/${resource}/${id}`, {
//                 method: "DELETE"
//                 })
//         }
//     }


// })
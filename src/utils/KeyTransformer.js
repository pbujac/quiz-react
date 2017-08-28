export class KeyTransformer {

    /**
     * @param {Object} body
     *
     * @returns {Object}
     */
    static transformToSnakeCase(body) {

        Object.keys(body).forEach(key => {

            let newKey = key.replace(/([A-Z])/g, function ($1) {

                return "_" + $1.toLowerCase();
            });

            if (newKey !== key) {
                body[newKey] = body[key];
                delete (body[key]);
            }
        });

        return body;
    }

}

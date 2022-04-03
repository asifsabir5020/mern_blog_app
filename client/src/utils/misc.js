export const setRequiredValidation = (requiredFields) => {
    const out = {};
    for (const field in requiredFields) {
        if (!requiredFields[field].value) {
            out[field] = {
                message: `${field} is required`
            }
        }
    }
    return out;
}
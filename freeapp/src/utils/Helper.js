import { toast } from "react-toastify";

export const dataFromRef = (form, data = {}) => {
    let required_field = false;
    Object.entries(form).map(el => {
        const name = el[0];
        const item = el[1];
        let { value } = item;

        if (item.required && !item.value) {
            return required_field = true;
        }
        if (item.type === 'checkbox') {
            value = item.checked ? 1 : 0;
        }

        return data[name] = value || '';
    });

    if (required_field) {
        toast.info('Zəhmət olmasa vacib (*) xanaları doldurun!');
        return false;
    }

    return data;
}

export const slug = (str, delimiter = '-') => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "ƏəŞşÇçİĞğÖöÜüı";
    var to = "EeSsCcIGgOoUui";

    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, delimiter) // collapse whitespace and replace by -
        .replace(/-+/g, delimiter); // collapse dashes

    return str;
}
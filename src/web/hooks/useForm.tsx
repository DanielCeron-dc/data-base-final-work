import { FormEvent } from "react";

export type IRef = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;

interface Iresponse {
    [key: string]: {
        value: string;
        valid: boolean;
        ref: IRef;
    }
}

interface IuseFormProps {
    register: (ref: IRef) => void,
    getResponse: () => Iresponse,
    onSubmit: (callback: (data: Iresponse) => void) => (event?: FormEvent) => void
    cleanForm: () => void
}

const useForm = (): IuseFormProps => {
    const inpustrefs: IRef[] = [];
    const register = (ref: IRef) => {
        inpustrefs.push(ref);
    }

    const getResponse = (): Iresponse => {
        return inpustrefs.reduce((acc, ref) => {
            if (ref) {
                return {
                    ...acc,
                    [ref.name]: {
                        value: ref.value,
                        valid: ref.validity.valid,
                        ref:ref
                    }
                }
            }
            return acc;
        }, {});
    }

    const onSubmit = (callback: (data: Iresponse) => void) => {
        return (event?: FormEvent) => {
            event && event.preventDefault();
            callback(getResponse());
        }
    }

    const cleanForm = () => {
        inpustrefs.forEach(ref => {
            if (ref) {
                ref.value = '';
            }
        });
    }

    return { register, getResponse, onSubmit, cleanForm };

}

export default useForm;
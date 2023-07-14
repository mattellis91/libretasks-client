export const actions = {
    login: async(data:any) => {
        const formData = await data.request.formData();
        const email = formData.get('email');
        const pw = formData.get('pw');
    }
}
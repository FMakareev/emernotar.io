import {SubmissionError} from 'redux-form'





export default () => {
    return (target) => {
        target.prototype.submit = (variables, mutate) => {
            console.log(variables);
            return mutate({variables}).catch((err) => {
                console.log(err);
            })
                // .then(response => {
                //     console.log('response ----: ',response);
                //     if(response.errors) {
                //         throw new SubmissionError({
                //             _error: response.errors[0].message
                //         })
                //     } else {
                //         // onSubmitFile(FilterFiles(variables))
                //     }
                // })
        }
    }
}
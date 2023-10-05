// 101358231, Ritchel Rey Etchorre, LabTest1 Q2

// resolvedPromise method
const resolvedPromise = () => {
    setTimeout(() => {
       let success = {'message': 'delayed success!'}
       console.log(success) 
    }, 500);
}

// rejectedPromise method
const rejectedPromise = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch(e) {
            console.error(e);
        }
    }, 500)
}


// call resolvedPromise method
resolvedPromise()

// call rejectPromise method
rejectedPromise()



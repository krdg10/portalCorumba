import axios from 'axios'





export const sendImage = (event) => {
        const URL = "http://localhost:3003/file"
        var bodyFormData = new FormData();
        bodyFormData.set('image', event.target.files[0]);
        console.log('chegou')
        console.log(event.target.files[0])
        console.log(bodyFormData)
        axios({
            method: 'post',
            url: URL,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        }, console.log('chegou2'))
        .then(function (resp) {
            //handle success
            console.log(resp);
          
        })
        .catch(function (err) {
            //handle error
            console.log(err);
        });
    
}

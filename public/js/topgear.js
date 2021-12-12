window.onload = () => {
    getdata()

    async function getdata(){
        const url = "/reviews/topgear"
        var request = new Request(url)
      
        await fetch(request).then( async function (response) {
            let dataHtml = ""
      
            var reviews = await response.json()
            console.log(reviews)
            reviews.forEach(reviews => {
                dataHtml += `<tr>
                <td>${reviews.title}</td>
                <td><a href=${reviews.url}> Link </a></td>
                <td>${reviews.source}</td>
                </tr>`;
            })
    
            document.getElementById("tableData").innerHTML = dataHtml
        })
    }
}
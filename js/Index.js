
 

async function fetchData(ulr){
    try{
      const response = await fetch(ulr);
      const data = await response.json();
      return data;
    }
    catch(error){
      console.error('Error fetching data:', error);
    }
  }
  
   function displayDetail(data){
      const details = data.map(coffee => ({
        name: coffee.title,
        description: coffee.description
      })); 
      const container= document.querySelector("#menu-display");
      container.innerHTML = ''; // Clear existing content
      details.forEach(element => {
        const childLi= document.createElement("li");
        const HTML=` <span>${element.name}</span> : ${element.description}`;
        console.log(HTML);
        childLi.innerHTML=HTML;
        container.appendChild(childLi);
      });
   }
  
     async function showdetail(url){
           var data= await fetchData(url);
  
           if (data) {
            displayDetail(data);
        } 
    }
  
    showdetail('https://api.sampleapis.com/coffee/hot');
  
  
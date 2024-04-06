
async function connectToMetaMask() {
     
     if (window.ethereum) {
       try {             
         await window.ethereum.request({ method: 'eth_requestAccounts' });
         console.log("Connected to MetaMask!");
         
       } catch (error) {
         console.error(error);
         alert("You need to allow access to MetaMask in order to connect.");
       }
     } else {
       alert("MetaMask extension not detected. Please install MetaMask to use this feature.");
     }
   }
   document.getElementById('active').addEventListener('click', connectToMetaMask);

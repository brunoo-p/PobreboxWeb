const base64ToArrayBuffer = (base64 ) => { 
    const binaryString = atob (base64);
    const bytes = new Uint8Array (binaryString.length); 
    
    return bytes.map ((_, i) => binaryString.charCodeAt (i)); 
}

export { base64ToArrayBuffer };


const createAndDownloadBlobFile = (body, filename) => { 
    const blob = new Blob ([body]); 
    const fileName = filename; 

    if (navigator.msSaveBlob) { 
      
      navigator.msSaveBlob (blob, fileName);
      
    } else { 
      const link = document.createElement ('a'); 

        
        const url = URL.createObjectURL (blob); 
        link.setAttribute ('href', url); 
        link.setAttribute ('download', fileName);
        link.style.visibility = 'oculto'; 
        document.body.appendChild (link); 
        link.click (); 
        document.body.removeChild (link); 

    } 
}

export { createAndDownloadBlobFile };
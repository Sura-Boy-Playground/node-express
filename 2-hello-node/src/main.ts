import fs = require('fs');
import fs2 = require('fs/promises');

/* Read a file */

// fs.readFile('/home/ranjith-suranga/Desktop/abc.txt', 'utf8', (err, data) => {
//     if (err){
//         console.error("Failed to read the file");
//     }else{
//         console.log(data);
//     }
// });

/* Delete a file */

// fs.rm('/home/ranjith-suranga/Desktop/abc.txt', (err)=>{
//     if (err) throw err;
//     console.log("Deleted")
// });

/* Create a new directory */

async function createDirectory(){
    try {
        await fs2.mkdir('/home/ranjith-suranga/Desktop/new-dir');
    }catch (e){
        console.error("Failed to create a directory", e);
    }
}

createDirectory();

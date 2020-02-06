let fs = require('fs');



// // let readme = fs.readFileSync('readme.txt', 'utf8');

// fs.readFile('readme.txt', 'utf8', (err, data) => {

//     if (err) throw err;
//     console.log("Read data successfully");
//     console.log(data);
//     fs.writeFile('another.txt', data, (err)=>{
//         if(err) throw err;
//         console.log("File saved successfully");
        
//     });

// })
// // console.log(readme);

// // fs.writeFileSync('writeme.txt', readme);

// // Delete files
// fs.unlink('another.txt',err => {
//     if(err) throw err;
//     console.log(`Successfully deleted file`);
    
// });


// Create Directories

fs.mkdir('stuff',(err) => {
    console.log("Directory created well well");
    
});

fs.readdir('./stuff','utf-8',(err,files) => {
    if(err) throw err;
    files.forEach(file => {
        console.log(file);
        
    })
});


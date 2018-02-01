console.log('Starting nodes.js');

module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note'   
}

module.exports.sum = (a,b) => {
    console.log("Adding");
    return ` ${a + b }`;
    
}
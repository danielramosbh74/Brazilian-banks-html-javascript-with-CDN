// Load the data from the Drive Spreadsheet
(async () => {
  const db = await drive("1X__ohDkOorMS0NHCjyEILo7PoBedMAKxSg3vOiubl8w");
  // console.log(db);
  
  // response => db.json;
  
  // let element = document.getElementbyId('response');
  // function response () {}

      document.open();
      document.write(JSON.stringify(db));
      document.close();

  // document.open();
  // document.write(JSON.stringify(db));
  // document.close();

})();


// let btn = document.getElementById('btn');
//  btn.addEventListener('click', function() {
//    alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
//  });
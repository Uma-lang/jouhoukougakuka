function DumpArray(data){
  for(var i=0;i<data.length;i++){
    if((data[i]%3)==0){
      document.write(data[i]);
      document.write("<br>");
    }
  }
}

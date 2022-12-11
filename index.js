setInterval(()=>
    {
      let date= new Date();
      let htime= date.getHours();
      let mtime= date.getMinutes();
      let stime= date.getSeconds();
      let dhour=30*htime+mtime/2;
      let dminutes=mtime*6;
      let dseconds=stime*6;
hour.style.transform=`rotate(${dhour}deg)`
minute.style.transform=`rotate(${dminutes}deg)`
second.style.transform=`rotate(${dseconds}deg)`
    },1000
);
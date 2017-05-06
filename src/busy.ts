
export class busy {
  active:boolean = false;
  
  on() 
  {
     this.active = true; 
  }
  
  off() 
  { 
    this.active = false; 
    console.log("deixando false:" + this.active);
  }

  delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
}
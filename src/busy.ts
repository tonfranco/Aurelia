
export class busy {
  active:boolean = false;
  
  on() 
  {
     this.active = true; 
  }
  
  off() 
  { 
    this.active = false; 
  }

  delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
}
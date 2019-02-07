export class Article{
    votes:number;
    link:string;
    title:string;
    
      constructor(title:string, link:string, votes?:number) {  //? represents the parameter is optional.
    this.title=title;
    this.link=link;
    this.votes=votes||0;
    
      }
    
    voteUp(){
      this.votes=this.votes+1;
      return false;
    }
    
    voteDown(){
      this.votes= this.votes -1;
      return false;
    }
   
   
  // domain() is a utility function that extracts
  // the domain from a URL, which we'll explain shortly
  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }

}
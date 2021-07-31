import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/core/services/article.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  p:number = 1;
  collection : any[] = [];
  loggedIn: boolean = false;
  
  constructor(private articleService: ArticleService, private authService: AuthService) {
    this.loggedIn = this.authService.isAuthenticated;
  }

  ngOnInit(): void {
    // this.articleService.globalArticles().subscribe(data=> {
    //   console.log(data);
    //   this.collection = data.articles;
    // });

    this.collection = [
      {
        "title": "My Life",
        "body": "something something something something something something something something something"
      },
      {
        "title": "My Life",
        "body": "something something something something something something something something something"
      },
      {
        "title": "My Life",
        "body": "something something something something something something something something something"
      },
      {
        "title": "My Life",
        "body": "something something something something something something something something something"
      },
      {
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },{
        "title": "My Life",
        "body": "something something something something something something something something something"
      },
    ]
  }

}
